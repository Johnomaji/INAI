'use client'
import { useEffect, useRef, useState } from 'react'

function Counter({ target, suffix, duration = 1800 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const spanRef = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = spanRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        const startTime = Date.now()
        const tick = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * target))
          if (progress < 1) requestAnimationFrame(tick)
          else setCount(target)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={spanRef}>{count}{suffix}</span>
}

const stats = [
  { target: 63, suffix: '%',   label: 'Ticket deflection'     },
  { target: 12, suffix: 'M',   label: 'Conversations handled' },
  { target: 40, suffix: 'x',   label: 'Faster than in-house'  },
  { target: 99, suffix: '.9%', label: 'Uptime SLA'            },
]

export default function Stats() {
  return (
    <div style={{
      borderTop: '1px solid rgba(26,26,40,0.5)',
      borderBottom: '1px solid rgba(26,26,40,0.5)',
    }}>
      <div className="wrap">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className={`stats-item${i > 0 ? ' stats-item-divider' : ''}`}>
              <div style={{
                fontSize: 'clamp(34px, 4vw, 46px)',
                fontWeight: 800,
                color: 'var(--white)',
                letterSpacing: '-0.045em',
                lineHeight: 1,
              }}>
                <Counter target={s.target} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: '12px', color: 'var(--tx3)', marginTop: '7px', fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
