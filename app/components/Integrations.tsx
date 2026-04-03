import RevealOnScroll from './RevealOnScroll'

const integrations = [
  { icon: '💬', name: 'WhatsApp'   },
  { icon: '🌐', name: 'Web Chat'   },
  { icon: '💼', name: 'Slack'      },
  { icon: '📧', name: 'Email'      },
  { icon: '🎙️', name: 'Voice/SIP'  },
  { icon: '📱', name: 'SMS'        },
  { icon: '🔗', name: 'Salesforce' },
  { icon: '📋', name: 'HubSpot'    },
  { icon: '🏗️', name: 'Zendesk'    },
  { icon: '📊', name: 'Freshdesk'  },
  { icon: '⚡', name: 'Zapier'     },
  { icon: '🔌', name: 'REST API'   },
]

export default function Integrations() {
  return (
    <section style={{ padding: '88px 0', borderTop: '1px solid rgba(26,26,40,0.4)' }}>
      <div className="wrap">
        <RevealOnScroll>
          <p className="mono section-tag">Integrations</p>
          <h2 className="section-title">Connects to everything</h2>
          <p className="section-sub">Native integrations with the tools your team already uses. No middleware.</p>
        </RevealOnScroll>

        <div className="int-grid">
          {integrations.map((it, i) => (
            <RevealOnScroll key={i} delay={i * 28}>
              <div className="int-chip">
                <div style={{ fontSize: '22px', marginBottom: '7px' }}>{it.icon}</div>
                <div style={{ fontSize: '11px', color: 'var(--tx2)', fontWeight: 500 }}>{it.name}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
