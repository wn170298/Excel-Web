import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy & GDPR Compliance | Excel Consultancy',
  description: 'How Excel collects, processes, and protects your data. Compliant with GDPR (EU) and the Australian Privacy Act.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-[800px] mx-auto px-6 py-20">
      <div className="mb-12">
        <div className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full text-[12px] font-medium text-[#171717] border border-[#ebebeb]">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
          GDPR & Australian Privacy Act Compliant
        </div>
        <h1 className="text-[44px] font-semibold tracking-[-0.12rem] text-[#171717] mb-4">
          Privacy & Compliance
        </h1>
        <p className="text-[16px] text-[#666666] leading-[1.65]">
          How we collect, process, and protect your data, in full compliance with GDPR (EU Regulation 2016/679) and the Australian Privacy Act 1988.
        </p>
        <p className="text-[13px] text-[#808080] mt-4">Last updated: April 2026</p>
      </div>

      <div className="prose">
        <h2>1. Who We Are</h2>
        <p>
          Excel Consultancy is operated by Wali Nori, trading as Excel, based in Perth, Western Australia. We provide digital marketing consultancy services to businesses in Australia and internationally, including the European Union.
        </p>
        <p>
          <strong>Data Controller:</strong> Wali Nori, trading as Excel<br />
          <strong>Contact:</strong> excel@theexcelagency.com<br />
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/wali-nori/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/wali-nori
          </a>
        </p>

        <h2>2. What Data We Collect</h2>
        <h3>2.1 Information You Provide Directly</h3>
        <p>When you use our contact forms, booking forms, or registration forms, we collect:</p>
        <ul>
          <li>Your name and email address</li>
          <li>Company name and website URL</li>
          <li>Phone number (where provided voluntarily)</li>
          <li>Messages and enquiry content you submit</li>
          <li>Service preferences and budget information</li>
        </ul>

        <h3>2.2 Information Collected Automatically</h3>
        <p>When you visit our website, we may collect technical information including:</p>
        <ul>
          <li>IP address (anonymised before storage where required by law)</li>
          <li>Browser type and version</li>
          <li>Pages visited and time spent on each page</li>
          <li>Referring URL (how you found us)</li>
          <li>Device type and operating system</li>
        </ul>
        <p>
          This data is collected via Google Analytics 4 with IP anonymisation enabled. We implement Google Consent Mode v2, analytics only run with your explicit consent where required by law.
        </p>

        <h2>3. Legal Basis for Processing (GDPR)</h2>
        <p>For users in the European Union and European Economic Area, we process your personal data under the following legal bases:</p>
        <ul>
          <li><strong>Consent (Art. 6(1)(a) GDPR):</strong> For analytics cookies and marketing communications</li>
          <li><strong>Contract performance (Art. 6(1)(b) GDPR):</strong> For processing enquiries and delivering services</li>
          <li><strong>Legitimate interests (Art. 6(1)(f) GDPR):</strong> For security, fraud prevention, and service improvement, where not overridden by your rights</li>
          <li><strong>Legal obligation (Art. 6(1)(c) GDPR):</strong> Where processing is required by applicable law</li>
        </ul>

        <h2>4. How We Use Your Data</h2>
        <ul>
          <li>To respond to your enquiries and provide the services you've requested</li>
          <li>To send you information about our services that you've requested</li>
          <li>To improve our website and service delivery</li>
          <li>To comply with legal obligations</li>
          <li>To prevent fraud and ensure website security</li>
        </ul>
        <p>We will never sell your data. We do not share your personal data with third parties for their own marketing purposes.</p>

        <h2>5. Cookies and Tracking</h2>
        <h3>5.1 Essential Cookies</h3>
        <p>These cookies are necessary for the website to function and cannot be turned off. They include session management and security cookies.</p>

        <h3>5.2 Analytics Cookies (Consent Required)</h3>
        <p>We use Google Analytics 4 to understand how visitors interact with our website. These cookies are only set after you have given explicit consent via our cookie banner. You may withdraw consent at any time.</p>

        <h3>5.3 Marketing Cookies (Consent Required)</h3>
        <p>Where applicable, advertising pixels (Google Ads, Meta) may be loaded after consent. These are subject to Google Consent Mode v2, no data is sent to advertising platforms without valid consent.</p>

        <h3>5.4 Managing Cookies</h3>
        <p>You can manage your cookie preferences at any time by clicking the "Cookie Settings" link in the footer, or by adjusting your browser settings. Please note that disabling analytics cookies will not affect your ability to use the website.</p>

        <h2>6. Data Retention</h2>
        <p>We retain personal data for the following periods:</p>
        <ul>
          <li>Enquiry and contact form submissions: 2 years from last contact</li>
          <li>Client project data: 7 years (legal/accounting obligation)</li>
          <li>Analytics data: 14 months (Google Analytics default)</li>
          <li>Website server logs: 30 days</li>
        </ul>
        <p>After retention periods expire, data is securely deleted or anonymised.</p>

        <h2>7. International Data Transfers</h2>
        <p>
          Excel is based in Australia and works with clients in the EU. When we transfer personal data from the EU to Australia, this is governed by standard contractual clauses (SCCs) as approved by the European Commission, given that Australia does not have an EU adequacy decision.
        </p>
        <p>
          Where we use third-party services (Google Analytics, etc.) that transfer data to the United States, these transfers are governed by Google's Data Processing Terms and applicable SCCs. We configure all tools to minimise data transfer scope and enable EU-based processing where available.
        </p>

        <h2>8. Your Rights (GDPR)</h2>
        <p>If you are in the EU/EEA, you have the following rights under GDPR:</p>
        <ul>
          <li><strong>Right of access:</strong> Request a copy of the personal data we hold about you</li>
          <li><strong>Right to rectification:</strong> Request correction of inaccurate data</li>
          <li><strong>Right to erasure ("right to be forgotten"):</strong> Request deletion of your data in certain circumstances</li>
          <li><strong>Right to restrict processing:</strong> Request that we limit how we use your data</li>
          <li><strong>Right to data portability:</strong> Receive your data in a structured, machine-readable format</li>
          <li><strong>Right to object:</strong> Object to processing based on legitimate interests</li>
          <li><strong>Right to withdraw consent:</strong> Withdraw any previously given consent at any time</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{' '}
          <a href="mailto:excel@theexcelagency.com">excel@theexcelagency.com</a>. We will respond within 30 days.
        </p>
        <p>
          If you believe we have not handled your data correctly, you have the right to lodge a complaint with your national data protection authority. In Germany, this is the Bundesdatenschutzbeauftragter (BfDI); in Italy, the Garante per la protezione dei dati personali.
        </p>

        <h2>9. Your Rights (Australian Privacy Act)</h2>
        <p>
          If you are in Australia, you have rights under the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs), including the right to access and correct your personal information. To make a request, contact{' '}
          <a href="mailto:excel@theexcelagency.com">excel@theexcelagency.com</a>.
        </p>

        <h2>10. Security</h2>
        <p>
          We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. This includes encrypted data transmission (HTTPS), access controls, and regular security reviews of our systems and processes.
        </p>

        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this policy to reflect changes in our practices or applicable law. We will notify you of material changes via email (if we have your contact details) and by updating the "Last updated" date above.
        </p>

        <h2>12. Contact</h2>
        <p>
          For any privacy-related questions, requests, or complaints:
        </p>
        <ul>
          <li>Email: <a href="mailto:excel@theexcelagency.com">excel@theexcelagency.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/wali-nori/" target="_blank" rel="noopener noreferrer">linkedin.com/in/wali-nori</a></li>
        </ul>
      </div>

      <div
        className="mt-12 p-6 rounded-[8px] bg-[#fafafa]"
        style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08)' }}
      >
        <p className="text-[14px] text-[#4d4d4d] leading-[1.6]">
          <strong>GDPR and compliance questions?</strong> If you're a client needing guidance on GDPR-compliant tracking implementation, see our{' '}
          <Link href="/blog?category=privacy" className="text-[#0072f5] underline">Privacy & Compliance resources</Link>{' '}
          or{' '}
          <Link href="/book" className="text-[#0072f5] underline">book a consultation</Link>.
        </p>
      </div>
    </div>
  );
}
