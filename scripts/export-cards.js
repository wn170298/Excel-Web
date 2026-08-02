/**
 * Exports each business card face as a 300 DPI PNG.
 * Usage: node scripts/export-cards.js
 * Output: exports/card-*.png
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// 300 DPI from 96 CSS-dpi base → scale factor 3.125
const SCALE = 3.125;

const CARDS = [
  { id: 'c1-front', label: 'card-c1-front' },
  { id: 'c1-back',  label: 'card-c1-back'  },
  { id: 'c2-front', label: 'card-c2-front' },
  { id: 'c2-back',  label: 'card-c2-back'  },
  { id: 'c3-front', label: 'card-c3-front' },
  { id: 'c3-back',  label: 'card-c3-back'  },
];

const HTML_PATH = path.resolve(__dirname, '../business-cards.html');
const OUT_DIR   = path.resolve(__dirname, '../exports');

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // High-DPI viewport — wide enough so cards never wrap
  await page.setViewport({ width: 1800, height: 1200, deviceScaleFactor: SCALE });

  // Disable CSS animations so cards are fully visible at capture time
  await page.addStyleTag({
    content: '*, *::before, *::after { animation: none !important; transition: none !important; opacity: 1 !important; transform: none !important; }',
  });

  await page.goto(`file://${HTML_PATH}`, { waitUntil: 'networkidle0' });

  // Wait for Google Fonts — give them up to 4 s
  await page.waitForFunction(
    () => document.fonts.ready,
    { timeout: 6000 }
  ).catch(() => {});
  await new Promise(r => setTimeout(r, 800));

  for (const { id, label } of CARDS) {
    const el = await page.$(`#${id}`);
    if (!el) { console.warn(`[skip] #${id} not found`); continue; }

    const box = await el.boundingBox();
    if (!box) { console.warn(`[skip] #${id} has no bounding box`); continue; }

    const outPath = path.join(OUT_DIR, `${label}.png`);

    await page.screenshot({
      path: outPath,
      clip: {
        x:      Math.floor(box.x),
        y:      Math.floor(box.y),
        width:  Math.ceil(box.width),
        height: Math.ceil(box.height),
      },
      // Puppeteer applies deviceScaleFactor automatically — result is
      // box.width * SCALE physical pixels wide (≈300 DPI at 85 mm card)
    });

    const { width, height } = await page.evaluate(id => {
      const el = document.getElementById(id);
      const r  = el.getBoundingClientRect();
      return { width: Math.round(r.width), height: Math.round(r.height) };
    }, id);

    console.log(`✓ ${label}.png  (${Math.round(width * SCALE)} × ${Math.round(height * SCALE)} px @ 300 DPI)`);
  }

  await browser.close();
  console.log(`\nAll cards exported to: ${OUT_DIR}`);
})().catch(err => { console.error(err); process.exit(1); });
