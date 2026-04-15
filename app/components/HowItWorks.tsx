import RevealOnScroll from './RevealOnScroll'

const steps = [
  {
    num: '1',
    title: 'Connect your data',
    desc: 'Upload docs, connect APIs, or point to your knowledge base. We ingest everything.',
    time: '~5 minutes',
  },
  {
    num: '2',
    title: 'Configure & test',
    desc: 'Pick a model, set tone and guardrails, define escalation rules. Test in sandbox.',
    time: '~30 minutes',
  },
  {
    num: '3',
    title: 'Deploy everywhere',
    desc: 'Go live on WhatsApp, web, Slack, voice, or SMS. Monitor in real-time.',
    time: 'Instant',
  },
]

export default function HowItWorks() {
  return (
    <section style={{ padding: '88px 0' }}>
      <div className="wrap">
        <RevealOnScroll>
          <p className="mono section-tag">How it works</p>
          <h2 className="section-title">Live in three steps</h2>
        </RevealOnScroll>

        <div className="hiw-grid">
          {/* Horizontal connector line — desktop only */}
          <div className="hiw-connector-h" />

          {steps.map((s, i) => (
            <RevealOnScroll key={i} delay={i * 110}>
              <div className="hiw-step">
                {/* Number circle */}
                <div className="hiw-num">
                  <span className="hiw-circle">{s.num}</span>
                  {/* Vertical connector segment — mobile only */}
                  {i < steps.length - 1 && <span className="hiw-connector-v" />}
                </div>

                <div className="hiw-content">
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--white)', marginBottom: '8px' }}>
                    {s.title}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--tx2)', lineHeight: 1.6, marginBottom: '12px' }}>
                    {s.desc}
                  </div>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '10px', fontWeight: 600, color: 'var(--green)',
                    background: 'rgba(52,211,153,0.1)',
                    padding: '3px 10px', borderRadius: '100px',
                  }}>
                    {s.time}
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <style>{`
        /* ── Desktop ── */
        .hiw-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          margin-top: 48px;
          position: relative;
        }

        .hiw-connector-h {
          position: absolute;
          top: 26px;
          left: calc(33.33% - 12px);
          right: calc(33.33% - 12px);
          height: 1px;
          background: repeating-linear-gradient(
            90deg,
            var(--border-lt), var(--border-lt) 6px,
            transparent 6px, transparent 14px
          );
        }

        .hiw-step {
          text-align: center;
          padding: 0 24px;
          position: relative;
        }

        .hiw-num {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        }

        .hiw-circle {
          width: 52px; height: 52px; border-radius: 50%;
          border: 1.5px solid var(--border-lt);
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 15px; font-weight: 700; color: var(--ac);
          background: var(--card);
          position: relative; z-index: 1;
          box-shadow: 0 0 20px rgba(118,185,0,0.08);
          flex-shrink: 0;
        }

        .hiw-connector-v { display: none; }

        .hiw-content { }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .hiw-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .hiw-connector-h { display: none; }

          .hiw-step {
            text-align: left;
            padding: 0;
            display: flex;
            flex-direction: row;
            gap: 18px;
            align-items: flex-start;
          }

          .hiw-num {
            flex-direction: column;
            align-items: center;
            flex-shrink: 0;
            margin-bottom: 0;
          }

          .hiw-connector-v {
            display: block;
            width: 1px;
            flex: 1;
            min-height: 32px;
            margin-top: 8px;
            background: repeating-linear-gradient(
              180deg,
              var(--border-lt), var(--border-lt) 5px,
              transparent 5px, transparent 11px
            );
          }

          .hiw-content {
            padding-top: 12px;
            padding-bottom: 28px;
          }
        }
      `}</style>
    </section>
  )
}
