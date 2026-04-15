'use client'
import { useState } from 'react'
import RevealOnScroll from './RevealOnScroll'

const points = [
  { icon: '⚡', color: 'var(--ac)',     bg: 'rgba(118,185,0,0.1)',   title: 'Sub-200ms latency',     desc: 'GPU-accelerated inference with automatic batching and request coalescing.'                     },
  { icon: '🔗', color: 'var(--blue)',   bg: 'rgba(14,165,233,0.1)',  title: 'Streaming & webhooks',  desc: 'Real-time SSE streaming. Webhook events for every conversation lifecycle stage.'             },
  { icon: '📊', color: 'var(--purple)', bg: 'rgba(129,140,248,0.1)', title: 'Full observability',    desc: 'Structured logs, traces, cost tracking, and latency percentiles per agent.'                 },
  { icon: '🧪', color: 'var(--green)',  bg: 'rgba(52,211,153,0.1)',  title: 'Sandbox + CI/CD',       desc: 'Test in sandbox before production. Git-based version control for agents.'                   },
]

const pythonCode = `<span style="color:var(--purple)">import</span> <span style="color:var(--tx)">inai</span>

client = inai.Client(<span style="color:var(--green)">api_key</span>=<span style="color:var(--amber)">"sk-..."</span>)

<span style="color:var(--tx3)"># Deploy an agent in 4 lines</span>
agent = client.agents.create(
  <span style="color:var(--green)">name</span>=<span style="color:var(--amber)">"support-bot"</span>,
  <span style="color:var(--green)">model</span>=<span style="color:var(--amber)">"claude-sonnet"</span>,
  <span style="color:var(--green)">knowledge</span>=[<span style="color:var(--amber)">"./docs"</span>],
  <span style="color:var(--green)">channels</span>=[<span style="color:var(--amber)">"whatsapp"</span>, <span style="color:var(--amber)">"web"</span>],
  <span style="color:var(--green)">gpu</span>=<span style="color:var(--amber)">"a100"</span>
)

<span style="color:var(--tx3)"># That's it. Agent is live.</span>
<span style="color:var(--purple)">print</span>(agent.url)
<span style="color:var(--tx3)"># → https://app.inai.cloud/agents/support-bot</span>`

const curlCode = `<span style="color:var(--tx3)"># Create and deploy an agent</span>
curl -X POST https://api.inai.cloud/v1/agents \\
  -H <span style="color:var(--amber)">"Authorization: Bearer sk-..."</span> \\
  -H <span style="color:var(--amber)">"Content-Type: application/json"</span> \\
  -d <span style="color:var(--amber)">'\\{
    "name": "support-bot",
    "model": "claude-sonnet",
    "knowledge": ["./docs"],
    "channels": ["whatsapp", "web"],
    "gpu": "a100"
  \\}'</span>

<span style="color:var(--tx3)"># Response</span>
<span style="color:var(--green)">\{
  "id": "agt_01hx...",
  "url": "https://app.inai.cloud/agents/support-bot",
  "status": "live"
\}</span>`

export default function Developers() {
  const [tab, setTab] = useState<'python' | 'curl'>('python')

  return (
    <section id="docs" style={{ padding: '88px 0' }}>
      <div className="wrap">
        <RevealOnScroll>
          <p className="mono section-tag">Developers</p>
          <h2 className="section-title">API-first. Ship in minutes.</h2>
          <p className="section-sub">RESTful API, Python &amp; Node SDKs, webhooks, and full observability.</p>
        </RevealOnScroll>

        <div className="dev-layout">
          {/* Left: feature points */}
          <RevealOnScroll delay={0}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {points.map((p) => (
                <div key={p.title} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '8px',
                    background: p.bg, color: p.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '14px', flexShrink: 0,
                  }}>
                    {p.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--white)', marginBottom: '3px' }}>
                      {p.title}
                    </h4>
                    <p style={{ fontSize: '12.5px', color: 'var(--tx2)', lineHeight: 1.55 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Right: code block */}
          <RevealOnScroll delay={120}>
            <div style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              overflow: 'hidden',
            }}>
              {/* Tab bar */}
              <div style={{
                padding: '10px 14px',
                borderBottom: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                {/* Dots */}
                {['#FF5F57','#FEBC2E','#28C840'].map((c) => (
                  <span key={c} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c, opacity: 0.75, marginRight: c === '#28C840' ? '10px' : 0 }} />
                ))}
                {/* Tabs */}
                {(['python', 'curl'] as const).map((t) => (
                  <button
                    key={t}
                    className="mono"
                    onClick={() => setTab(t)}
                    style={{
                      fontSize: '10.5px', padding: '3px 10px', borderRadius: '4px',
                      cursor: 'pointer', border: 'none', fontFamily: 'inherit',
                      background: tab === t ? 'rgba(118,185,0,0.12)' : 'transparent',
                      color: tab === t ? 'var(--ac)' : 'var(--tx3)',
                      transition: 'all 0.18s',
                    }}
                  >
                    {t === 'python' ? 'Python' : 'cURL'}
                  </button>
                ))}
              </div>

              {/* Code body */}
              <pre
                className="mono"
                style={{
                  padding: '18px 20px',
                  fontSize: '11.5px', lineHeight: 1.85,
                  color: 'var(--tx2)', margin: 0,
                  overflowX: 'auto',
                  whiteSpace: 'pre',
                }}
                dangerouslySetInnerHTML={{ __html: tab === 'python' ? pythonCode : curlCode }}
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
