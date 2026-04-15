import RevealOnScroll from './RevealOnScroll'

const cases = [
  { t: 'Customer Support Agents',   d: 'Deflect 60%+ of tickets across WhatsApp, web, and voice. Multilingual — English, Yoruba, Swahili, Pidgin, French.' },
  { t: 'Workflow Automation',       d: 'RPA bots for document processing, approvals, data entry, and system integrations. No code required.' },
  { t: 'Sales & Onboarding Agents', d: 'Qualify leads, guide onboarding, answer product questions. Trained on your knowledge base.' },
  { t: 'Internal Operations',       d: 'HR bots, IT helpdesk, policy lookup, training assistants. Deploy to Slack or internal portals.' },
  { t: 'Collections & Payments',    d: 'Automate payment reminders, debt collection, and reconciliation across mobile money and bank channels.' },
  { t: 'Regulatory & Compliance',   d: 'Auto-respond to compliance queries, monitor policy adherence, and generate audit-ready logs.' },
]

export default function UseCases() {
  return (
    <section style={{ padding: '88px 0' }}>
      <div className="wrap">
        <RevealOnScroll>
          <p className="mono section-tag">Use Cases</p>
          <h2 className="section-title">Built for enterprise</h2>
        </RevealOnScroll>

        <div style={{ marginTop: '36px', borderTop: '1px solid var(--border)' }}>
          {cases.map((c, i) => (
            <RevealOnScroll key={i} delay={i * 40}>
              <div className="case-row">
                {/* Title column */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div className="case-dot" />
                  <h3 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--white)', lineHeight: 1.4 }}>
                    {c.t}
                  </h3>
                </div>
                {/* Description column */}
                <p style={{ fontSize: '13px', color: 'var(--tx2)', lineHeight: 1.65 }}>{c.d}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <style>{`
        .case-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--ac); flex-shrink: 0;
          margin-top: 5px;
        }
        @media (max-width: 768px) {
          .case-dot { margin-top: 4px; }
        }
      `}</style>
    </section>
  )
}
