'use client'

// Agent card sub-components
function SupportCard() {
  const bars = [
    { label: 'WhatsApp', w: '80%' },
    { label: 'Web Chat', w: '64%' },
    { label: 'Slack',    w: '48%' },
  ]
  return (
    <div
      className="float-a glass-card"
      style={{
        position: 'absolute', top: '10px', left: '0px', width: '268px',
        border: '1px solid rgba(118,185,0,0.22)',
        padding: '18px',
        boxShadow: '0 12px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04), 0 0 70px rgba(118,185,0,0.07)',
        zIndex: 10,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--ac)', boxShadow: '0 0 8px var(--ac)', display: 'inline-block' }} />
          <span className="mono" style={{ fontSize: '11px', color: 'var(--tx2)' }}>support-bot</span>
        </div>
        <span style={{ fontSize: '9px', fontWeight: 700, color: 'var(--ac)', background: 'rgba(118,185,0,0.12)', padding: '2px 7px', borderRadius: '4px', letterSpacing: '0.06em' }}>LIVE</span>
      </div>

      <div style={{ marginBottom: '14px' }}>
        <div style={{ fontSize: '38px', fontWeight: 800, color: 'var(--white)', letterSpacing: '-0.045em', lineHeight: 1 }}>63%</div>
        <div style={{ fontSize: '10.5px', color: 'var(--tx3)', marginTop: '2px' }}>ticket deflection rate</div>
      </div>

      {bars.map((b) => (
        <div key={b.label} style={{ marginBottom: '6px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
            <span style={{ fontSize: '10px', color: 'var(--tx3)' }}>{b.label}</span>
          </div>
          <div style={{ height: '3px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px' }}>
            <div style={{ height: '100%', width: b.w, background: 'var(--ac)', borderRadius: '2px', opacity: 0.75 }} />
          </div>
        </div>
      ))}

      <div style={{ marginTop: '12px', fontSize: '10px', color: 'var(--tx3)', display: 'flex', alignItems: 'center', gap: '4px' }}>
        <span style={{ color: 'var(--green)', fontSize: '11px' }}>↑</span>
        4.2K conversations today
      </div>
    </div>
  )
}

function SalesCard() {
  return (
    <div
      className="float-b glass-card"
      style={{
        position: 'absolute', top: '170px', right: '0px', width: '248px',
        border: '1px solid rgba(14,165,233,0.22)',
        padding: '18px',
        boxShadow: '0 12px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04), 0 0 70px rgba(14,165,233,0.07)',
        zIndex: 20,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--blue)', boxShadow: '0 0 8px var(--blue)', display: 'inline-block' }} />
          <span className="mono" style={{ fontSize: '11px', color: 'var(--tx2)' }}>sales-agent</span>
        </div>
        <span style={{ fontSize: '9px', fontWeight: 700, color: 'var(--blue)', background: 'rgba(14,165,233,0.12)', padding: '2px 7px', borderRadius: '4px', letterSpacing: '0.06em' }}>LIVE</span>
      </div>

      <div style={{ fontSize: '10.5px', color: 'var(--tx3)', marginBottom: '8px' }}>Qualifying lead...</div>

      <div style={{
        background: 'rgba(14,165,233,0.07)', border: '1px solid rgba(14,165,233,0.12)',
        borderRadius: '8px', padding: '9px 11px', marginBottom: '6px',
      }}>
        <div style={{ fontSize: '11px', color: 'var(--tx2)', lineHeight: 1.5 }}>What&apos;s your team size?</div>
      </div>

      <div style={{
        background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '8px', padding: '9px 11px', marginBottom: '12px',
      }}>
        <div style={{ fontSize: '11px', color: 'var(--tx)', lineHeight: 1.5 }}>~50 people, fintech startup</div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span className="mono" style={{ fontSize: '9.5px', color: 'var(--tx3)' }}>⚡ claude-sonnet</span>
        <span style={{ fontSize: '9.5px', color: 'var(--blue)', fontWeight: 600 }}>142ms</span>
      </div>
    </div>
  )
}

function CollectionsCard() {
  const rows = [
    { label: 'Response rate', val: '99.2%' },
    { label: 'Active threads', val: '847' },
    { label: 'Avg. resolution', val: '2.4h' },
  ]
  return (
    <div
      className="float-c glass-card"
      style={{
        position: 'absolute', bottom: '0px', left: '40px', width: '256px',
        border: '1px solid rgba(129,140,248,0.22)',
        padding: '18px',
        boxShadow: '0 12px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04), 0 0 70px rgba(129,140,248,0.07)',
        zIndex: 15,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--purple)', boxShadow: '0 0 8px var(--purple)', display: 'inline-block' }} />
          <span className="mono" style={{ fontSize: '11px', color: 'var(--tx2)' }}>collections-bot</span>
        </div>
        <span style={{ fontSize: '9px', fontWeight: 700, color: 'var(--purple)', background: 'rgba(129,140,248,0.12)', padding: '2px 7px', borderRadius: '4px', letterSpacing: '0.06em' }}>LIVE</span>
      </div>

      <div style={{ marginBottom: '14px' }}>
        <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--white)', letterSpacing: '-0.04em', lineHeight: 1 }}>₦2.4M</div>
        <div style={{ fontSize: '10.5px', color: 'var(--tx3)', marginTop: '2px' }}>recovered today</div>
      </div>

      {rows.map((r) => (
        <div
          key={r.label}
          style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            paddingBottom: '6px', borderBottom: '1px solid rgba(255,255,255,0.04)',
            marginBottom: '6px',
          }}
        >
          <span style={{ fontSize: '10px', color: 'var(--tx3)' }}>{r.label}</span>
          <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--purple)' }}>{r.val}</span>
        </div>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section style={{ paddingTop: '128px', paddingBottom: '64px', position: 'relative', overflow: 'hidden' }}>

      {/* ── Background ── */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-120px',
        width: '750px', height: '750px',
        background: 'radial-gradient(ellipse, rgba(118,185,0,0.09) 0%, transparent 65%)',
        pointerEvents: 'none', animation: 'blob-pulse 14s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-80px',
        width: '650px', height: '650px',
        background: 'radial-gradient(ellipse, rgba(14,165,233,0.07) 0%, transparent 65%)',
        pointerEvents: 'none', animation: 'blob-pulse 18s ease-in-out infinite reverse',
      }} />
      <div style={{
        position: 'absolute', top: '35%', left: '40%',
        width: '500px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(129,140,248,0.05) 0%, transparent 65%)',
        pointerEvents: 'none', animation: 'blob-pulse 11s ease-in-out infinite 4s',
      }} />

      {/* Grid mesh */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage:
          'linear-gradient(rgba(118,185,0,0.03) 1px, transparent 1px),' +
          'linear-gradient(90deg, rgba(118,185,0,0.03) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse at 35% 25%, black 0%, transparent 68%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 35% 25%, black 0%, transparent 68%)',
        pointerEvents: 'none',
      }} />

      <div className="wrap" style={{ position: 'relative' }}>
        <div className="hero-layout">

          {/* ── Left: Content ── */}
          <div style={{ animation: 'hero-in 0.8s ease' }}>

            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '4px 12px 4px 5px',
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: '100px', marginBottom: '24px',
            }}>
              <span style={{
                background: 'var(--ac)', color: '#000',
                fontSize: '9px', fontWeight: 800,
                padding: '2px 8px', borderRadius: '100px', letterSpacing: '0.06em',
              }}>
                NVIDIA INCEPTION
              </span>
              <span style={{ fontSize: '12px', color: 'var(--tx2)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '7px' }}>
                <span className="live-dot" />
                GPU-accelerated AI agent platform
              </span>
            </div>

            {/* H1 */}
            <h1 style={{
              fontSize: 'clamp(42px, 5.5vw, 72px)',
              fontWeight: 800, lineHeight: 1.02,
              letterSpacing: '-0.045em',
              color: 'var(--white)',
              maxWidth: '560px', marginBottom: '18px',
            }}>
              Build AI agents.<br />
              <span className="shimmer-text">Ship fast.</span>
            </h1>

            {/* Sub */}
            <p style={{
              fontSize: '17px', lineHeight: 1.6,
              color: 'var(--tx2)', maxWidth: '420px', marginBottom: '32px',
            }}>
              Enterprise platform for conversational AI, automation bots, and custom agents.
              GPU-accelerated inference. Model-agnostic. Africa-native, globally scalable.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '28px', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                Start building — it&apos;s free
              </button>
              <button className="btn-secondary" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                View pricing
              </button>
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '48px', flexWrap: 'wrap' }}>
              {[
                { dot: 'var(--ac)',  text: 'NVIDIA Inception' },
                { dot: 'var(--tx3)', text: 'YC S26' },
                { dot: 'var(--tx3)', text: 'SOC 2 Type II' },
                { dot: 'var(--tx3)', text: 'GPU-Accelerated' },
              ].map((b) => (
                <span key={b.text} style={{ fontSize: '11px', color: 'var(--tx3)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: b.dot, display: 'inline-block', flexShrink: 0 }} />
                  {b.text}
                </span>
              ))}
            </div>

            {/* Terminal */}
            <div style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: '12px', overflow: 'hidden',
            }}>
              <div style={{
                padding: '10px 14px', borderBottom: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                {(['#FF5F57', '#FEBC2E', '#28C840'] as const).map((c) => (
                  <span key={c} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c, opacity: 0.8 }} />
                ))}
                <span className="mono" style={{ fontSize: '10.5px', color: 'var(--tx3)', marginLeft: '8px' }}>inai-cli</span>
              </div>
              <div className="mono" style={{ padding: '16px 18px', fontSize: '12.5px', lineHeight: 2, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                <div style={{ color: 'var(--tx3)', whiteSpace: 'nowrap' }}>
                  <span style={{ color: 'var(--ac)' }}>$</span>
                  {' '}inai deploy --agent support-bot --model claude-sonnet --gpu a100
                </div>
                <div style={{ color: 'var(--green)', whiteSpace: 'nowrap' }}>✓ Trained on 12K docs · 3 channels · GPU inference active</div>
                <div style={{ color: 'var(--tx)', whiteSpace: 'nowrap' }}>
                  → <span style={{ color: 'var(--ac)' }}>live</span> at app.inai.cloud/agents/support-bot
                </div>
                <span style={{ color: 'var(--tx3)', animation: 'blink 1.1s infinite' }}>▌</span>
              </div>
            </div>
          </div>

          {/* ── Right: Floating Agent Cards ── */}
          <div className="hero-cards-col">
            {/* Ambient glow behind cards */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at 55% 45%, rgba(118,185,0,0.05) 0%, transparent 65%)',
              pointerEvents: 'none',
            }} />
            <SupportCard />
            <SalesCard />
            <CollectionsCard />
          </div>
        </div>
      </div>
    </section>
  )
}
