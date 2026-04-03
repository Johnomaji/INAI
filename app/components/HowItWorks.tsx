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

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0, marginTop: '48px', position: 'relative',
        }}>
          {/* Connector line */}
          <div style={{
            position: 'absolute', top: '28px',
            left: 'calc(33.33% - 12px)', right: 'calc(33.33% - 12px)',
            height: '1px',
            background: 'repeating-linear-gradient(90deg, var(--border-lt), var(--border-lt) 6px, transparent 6px, transparent 14px)',
          }} />

          {steps.map((s, i) => (
            <RevealOnScroll key={i} delay={i * 110}>
              <div style={{ textAlign: 'center', padding: '0 24px', position: 'relative' }}>
                {/* Number circle */}
                <div style={{
                  width: '52px', height: '52px', borderRadius: '50%',
                  border: '1.5px solid var(--border-lt)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '15px', fontWeight: 700, color: 'var(--ac)',
                  background: 'var(--card)',
                  position: 'relative', zIndex: 1,
                  boxShadow: '0 0 20px rgba(118,185,0,0.08)',
                  marginBottom: '20px',
                }}>
                  {s.num}
                </div>

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
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
