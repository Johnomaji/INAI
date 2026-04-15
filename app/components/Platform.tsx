import RevealOnScroll from './RevealOnScroll'

const ck = (color: string) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const platforms = [
  {
    name: 'INAI Studio',
    tag: 'SELF-SERVE',
    color: 'var(--ac)',
    desc: 'No-code agent builder. Visual flows, model selection, multi-channel deploy, analytics.',
    features: ['Drag-and-drop builder', 'GPT-4 / Claude / Llama / Mistral', 'WhatsApp, Web, Slack, Voice', 'Real-time analytics dashboard', 'Built-in A/B testing'],
  },
  {
    name: 'INAI Build',
    tag: 'MANAGED',
    color: 'var(--blue)',
    desc: 'We architect, build, and operate custom AI agents for your enterprise. Weeks, not months.',
    features: ['Discovery workshop', 'Custom development', 'Multi-channel deploy', 'Ongoing optimization', 'Dedicated success manager'],
  },
  {
    name: 'INAI Infra',
    tag: 'GPU COMPUTE',
    color: 'var(--purple)',
    desc: 'LLM routing, GPU inference, vector storage, conversation state, workflow orchestration.',
    features: ['NVIDIA GPU inference', 'Multi-model routing', 'Vector DB + RAG', 'Observability + tracing', 'Auto-scaling to zero'],
  },
]

export default function Platform() {
  return (
    <section id="platform" style={{ padding: '88px 0', borderTop: '1px solid rgba(26,26,40,0.4)' }}>
      <div className="wrap">
        <RevealOnScroll>
          <p className="mono section-tag">Platform</p>
          <h2 className="section-title">Three products. One stack.</h2>
        </RevealOnScroll>

        <div className="platform-grid">
          {platforms.map((p, i) => (
            <RevealOnScroll key={i} delay={i * 80}>
              <div className="platform-card">
                {/* Top accent line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                  background: `linear-gradient(90deg, transparent, ${p.color}, transparent)`,
                  opacity: 0.6,
                }} />

                <span className="mono" style={{
                  fontSize: '10px', fontWeight: 600, color: p.color,
                  background: `${p.color}18`,
                  padding: '3px 9px', borderRadius: '5px', letterSpacing: '0.07em',
                }}>
                  {p.tag}
                </span>

                <h3 style={{ fontSize: '21px', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.02em', margin: '14px 0 8px' }}>
                  {p.name}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--tx2)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {p.desc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                  {p.features.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {ck(p.color)}
                      <span style={{ fontSize: '12.5px', color: 'var(--tx2)' }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
