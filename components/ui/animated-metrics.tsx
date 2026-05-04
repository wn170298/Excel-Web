import React from 'react';

const topMetrics = [
  { label: 'CTR', value: '4.2%', change: '+12%' },
  { label: 'ROAS', value: '3.8x', change: '+0.5x' },
  { label: 'Conv. Rate', value: '2.9%', change: '+0.4%' },
];

const bottomMetrics = [
  { label: 'Cost Per Lead', value: '€198', change: '↓ -42% vs Q1' },
  { label: 'MQL→SQL Rate', value: '21%', change: '↑ was 8%' },
];

function card(delay: string) {
  return { opacity: 0, animation: `fadeInUp 0.5s ease forwards ${delay}` } as React.CSSProperties;
}

export function AnimatedMetrics() {
  return (
    <div className="w-full h-full flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-[420px] relative">

        {/* Ambient glow halo behind the window */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: '-48px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at 55% 50%, rgba(52,211,153,0.14) 0%, rgba(37,99,235,0.08) 45%, transparent 70%)',
            filter: 'blur(28px)',
            pointerEvents: 'none',
          }}
        />

        {/* Dashboard window chrome */}
        <div
          className="rounded-[14px] overflow-hidden relative"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.13)',
            opacity: 0,
            animation: 'fadeIn 0.4s ease forwards 0s',
            boxShadow: '0 40px 100px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.06) inset',
          }}
        >
          {/* Title bar */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}
          >
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>Live Dashboard</span>
            </div>
            <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.22)' }}>Q2 2025</span>
          </div>

          {/* Body */}
          <div className="p-4">

            {/* Top 3 KPIs */}
            <div className="grid grid-cols-3 gap-2 mb-2">
              {topMetrics.map((m, i) => (
                <div
                  key={m.label}
                  className="rounded-[8px] p-3"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    ...card(`${0.2 + i * 0.08}s`),
                  }}
                >
                  <div className="text-[10px] mb-1.5 font-medium" style={{ color: 'rgba(255,255,255,0.38)' }}>{m.label}</div>
                  <div className="text-[20px] font-semibold tracking-tight mb-0.5" style={{ color: 'rgba(255,255,255,0.92)' }}>{m.value}</div>
                  <div className="text-[10px] text-emerald-400 font-medium">↑ {m.change}</div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div
              className="rounded-[8px] p-4 mb-2"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 0 0 1px rgba(52,211,153,0.06) inset',
                ...card('0.45s'),
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-[11px] font-medium" style={{ color: 'rgba(255,255,255,0.38)' }}>Organic Traffic, 30 days</div>
                <div className="text-[11px] font-semibold text-emerald-400 px-2 py-0.5 rounded-full" style={{ background: 'rgba(16,185,129,0.12)' }}>+67% MoM</div>
              </div>
              <svg viewBox="0 0 340 64" className="w-full" style={{ overflow: 'visible' }}>
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(52,211,153,0.25)" />
                    <stop offset="100%" stopColor="rgba(52,211,153,0.95)" />
                  </linearGradient>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(52,211,153,0.14)" />
                    <stop offset="100%" stopColor="rgba(52,211,153,0)" />
                  </linearGradient>
                </defs>
                {[0, 21, 42, 63].map((y) => (
                  <line key={y} x1="0" y1={y} x2="340" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                ))}
                <path
                  d="M0,60 C40,57 80,52 120,44 C160,36 200,26 240,18 C280,10 310,6 340,2 L340,64 L0,64 Z"
                  fill="url(#areaGrad)"
                  style={{ opacity: 0, animation: 'fadeIn 0.8s ease forwards 1.4s' }}
                />
                <path
                  d="M0,60 C40,57 80,52 120,44 C160,36 200,26 240,18 C280,10 310,6 340,2"
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  style={{ strokeDasharray: 600, strokeDashoffset: 600, animation: 'drawLine 1.6s ease forwards 0.6s' } as React.CSSProperties}
                />
                <circle cx="340" cy="2" r="3.5" fill="rgba(52,211,153,0.9)" style={{ opacity: 0, animation: 'fadeIn 0.3s ease forwards 2.1s' }} />
              </svg>
            </div>

            {/* Bottom 2 KPIs */}
            <div className="grid grid-cols-2 gap-2">
              {bottomMetrics.map((m, i) => (
                <div
                  key={m.label}
                  className="rounded-[8px] p-3"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    ...card(`${0.55 + i * 0.08}s`),
                  }}
                >
                  <div className="text-[10px] mb-1.5 font-medium" style={{ color: 'rgba(255,255,255,0.38)' }}>{m.label}</div>
                  <div className="text-[20px] font-semibold tracking-tight mb-0.5" style={{ color: 'rgba(255,255,255,0.92)' }}>{m.value}</div>
                  <div className="text-[10px] text-emerald-400 font-medium">{m.change}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Attribution */}
        <p className="text-center mt-3 text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.18)', opacity: 0, animation: 'fadeIn 0.4s ease forwards 2.4s' }}>
          Live client performance data
        </p>
      </div>
    </div>
  );
}
