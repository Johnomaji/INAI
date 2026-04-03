'use client'
import { useState } from 'react'
import RevealOnScroll from './RevealOnScroll'

const faqs = [
  {
    q: 'How long does it take to deploy an agent?',
    a: 'Most teams go live same-day using INAI Studio. Managed builds with INAI Build typically ship in 2–4 weeks depending on complexity.',
  },
  {
    q: 'Which LLMs do you support?',
    a: 'GPT-4o, Claude Sonnet/Opus, Llama 3, Mistral, and any OpenAI-compatible model. You can route different models per agent or per conversation turn.',
  },
  {
    q: 'Where is my data stored?',
    a: 'Data is stored in Africa-local data centers (Lagos, Johannesburg, Nairobi) by default. We also support EU and US regions. All data is encrypted at rest (AES-256) and in transit (TLS 1.3).',
  },
  {
    q: 'Can I bring my own model or fine-tune?',
    a: 'Yes. Upload custom GGUF/ONNX models or fine-tune supported base models on your data. We handle serving on GPU infrastructure.',
  },
  {
    q: 'Do you offer on-premise deployment?',
    a: 'Enterprise plans include VPC and on-prem deployment options with dedicated GPU allocation and full data isolation.',
  },
  {
    q: 'What happens if I exceed my conversation limit?',
    a: "We'll notify you at 80% usage. Overages are billed at a per-conversation rate — no surprise shutdowns.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section style={{
      padding: '88px 0',
      borderTop: '1px solid rgba(26,26,40,0.4)',
    }}>
      <div className="wrap">
        <RevealOnScroll>
          <p className="mono section-tag">FAQ</p>
          <h2 className="section-title">Common questions</h2>
        </RevealOnScroll>

        <div style={{ marginTop: '36px' }}>
          {faqs.map((f, i) => (
            <RevealOnScroll key={i} delay={i * 30}>
              <div style={{ borderBottom: '1px solid var(--border)' }}>
                <button
                  style={{
                    width: '100%', padding: '20px 0',
                    fontSize: '14px', fontWeight: 600, color: open === i ? 'var(--ac)' : 'var(--white)',
                    cursor: 'pointer', background: 'none', border: 'none',
                    fontFamily: 'inherit', display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', textAlign: 'left', transition: 'color 0.2s',
                    gap: '16px',
                  }}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span>{f.q}</span>
                  <span style={{
                    fontSize: '20px', color: 'var(--tx3)', fontWeight: 300,
                    transition: 'transform 0.3s',
                    transform: open === i ? 'rotate(45deg)' : 'none',
                    flexShrink: 0, lineHeight: 1,
                  }}>
                    +
                  </span>
                </button>

                <div className={`faq-answer ${open === i ? 'open' : ''}`}>
                  <p style={{ fontSize: '13.5px', color: 'var(--tx2)', lineHeight: 1.65 }}>
                    {f.a}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
