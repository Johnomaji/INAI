import RevealOnScroll from './RevealOnScroll'

const techs = [
  { t: 'NVIDIA GPU Inference',  d: 'A100/H100 accelerated inference for production AI agents. Optimized throughput, low latency at scale.',             c: 'var(--ac)'     },
  { t: 'Multi-Model Routing',   d: 'GPT-4, Claude, Llama, Mistral — route per agent, per conversation, or per task. Hot-swap without downtime.',        c: 'var(--blue)'   },
  { t: 'NVIDIA TensorRT',       d: 'Optimized model serving with TensorRT-LLM for maximum inference performance on NVIDIA GPUs.',                        c: 'var(--ac)'     },
  { t: 'Africa-Local Compute',  d: 'Low-latency inference from African data centers. Data sovereign. NDPR, POPIA, Kenya DPA compliant.',                 c: 'var(--purple)' },
  { t: 'Vector DB + RAG',       d: 'Built-in retrieval-augmented generation. Chunk, embed, and search your knowledge base at GPU speed.',                c: 'var(--green)'  },
  { t: 'Conversation Memory',   d: 'Persistent state across sessions. Context window management, summarization, and long-term user memory.',             c: 'var(--amber)'  },
]

export default function Technology() {
  return (
    <section style={{
      padding: '88px 0',
      borderTop: '1px solid rgba(26,26,40,0.4)',
      borderBottom: '1px solid rgba(26,26,40,0.4)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '600px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(118,185,0,0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div className="wrap" style={{ position: 'relative' }}>
        <RevealOnScroll>
          <p className="mono section-tag">Technology</p>
          <h2 className="section-title">GPU-accelerated. Model-agnostic.</h2>
          <p className="section-sub">Built on NVIDIA infrastructure. Run any model on any hardware. Optimized for enterprise-scale AI workloads.</p>
        </RevealOnScroll>

        <div className="tech-grid">
          {techs.map((f, i) => (
            <RevealOnScroll key={i} delay={i * 55}>
              <div className="tech-card">
                <div style={{
                  width: '28px', height: '28px', borderRadius: '8px',
                  background: `${f.c}14`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '14px',
                }}>
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: f.c, boxShadow: `0 0 8px ${f.c}` }} />
                </div>
                <h3 style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--white)', marginBottom: '7px' }}>{f.t}</h3>
                <p style={{ fontSize: '13px', color: 'var(--tx2)', lineHeight: 1.6 }}>{f.d}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
