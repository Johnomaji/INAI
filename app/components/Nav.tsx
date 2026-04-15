'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Platform', href: '#platform' },
  { label: 'Docs',     href: '#docs' },
  { label: 'Pricing',  href: '#pricing' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      // Scroll progress
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docH > 0 ? (window.scrollY / docH) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section detection
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Close menu on outside click
  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [open])

  const handleNavClick = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <nav data-scrolled={scrolled}>
        {/* Scroll progress bar */}
        <div className="nav-progress" style={{ width: `${progress}%` }} />

        {/* Logo */}
        <a className="nav-logo" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <div className="nav-icon">
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
              <path d="M3 4h10M3 8h7M3 12h9" stroke="#000" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
          <span className="nav-brand">INAI</span>
        </a>

        {/* Desktop links */}
        <div className="nav-links-desktop">
          {links.map(({ label, href }) => (
            <a key={label} className={`nav-link${active === href ? ' nav-link-active' : ''}`} href={href}
              onClick={(e) => { e.preventDefault(); handleNavClick(href) }}>
              {label}
            </a>
          ))}
          <a className="btn-primary nav-cta" href="#pricing"
            onClick={(e) => { e.preventDefault(); handleNavClick('#pricing') }}>
            Get started
          </a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="nav-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={(e) => { e.stopPropagation(); setOpen((v) => !v) }}
        >
          <span className={`burger-line ${open ? 'open-top' : ''}`} />
          <span className={`burger-line ${open ? 'open-mid' : ''}`} />
          <span className={`burger-line ${open ? 'open-bot' : ''}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-drawer ${open ? 'drawer-open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="drawer-inner">
          {links.map(({ label, href }) => (
            <a key={label} className="drawer-link" href={href}
              onClick={(e) => { e.preventDefault(); handleNavClick(href) }}>
              {label}
            </a>
          ))}
          <a className="btn-primary drawer-cta" href="#pricing"
            onClick={(e) => { e.preventDefault(); handleNavClick('#pricing') }}>
            Get started
          </a>
        </div>
      </div>

      <style>{`
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          height: 56px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 40px;
          background: rgba(8,8,12,0.75);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(26,26,40,0.5);
          transition: background 0.3s, border-color 0.3s;
        }
        nav[data-scrolled="true"] {
          background: rgba(8,8,12,0.95);
          border-bottom-color: rgba(26,26,40,0.8);
        }

        /* Scroll progress bar */
        .nav-progress {
          position: absolute; bottom: 0; left: 0; height: 2px;
          background: var(--ac);
          box-shadow: 0 0 8px rgba(118,185,0,0.5);
          transition: width 0.1s linear;
          border-radius: 0 2px 2px 0;
        }

        .nav-logo {
          display: flex; align-items: center; gap: 8px;
          text-decoration: none; cursor: pointer;
        }
        .nav-icon {
          width: 22px; height: 22px; border-radius: 6px;
          background: var(--ac); display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 12px rgba(118,185,0,0.4); flex-shrink: 0;
        }
        .nav-brand {
          font-weight: 700; font-size: 14px; color: var(--white); letter-spacing: -0.02em;
        }

        .nav-links-desktop {
          display: flex; gap: 28px; align-items: center;
        }
        .nav-cta {
          padding: 7px 16px; font-size: 12.5px; border-radius: 7px;
          text-decoration: none;
        }
        .nav-link-active { color: var(--tx) !important; }

        /* Hamburger */
        .nav-burger {
          display: none;
          flex-direction: column; gap: 5px; justify-content: center; align-items: center;
          width: 36px; height: 36px;
          background: none; border: none; cursor: pointer; padding: 6px;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .nav-burger:hover { background: rgba(255,255,255,0.06); }

        .burger-line {
          display: block; width: 18px; height: 1.5px;
          background: var(--tx2); border-radius: 2px;
          transform-origin: center; transition: transform 0.25s, opacity 0.25s, background 0.2s;
        }
        .open-top  { transform: translateY(6.5px) rotate(45deg);  background: var(--tx); }
        .open-mid  { opacity: 0; }
        .open-bot  { transform: translateY(-6.5px) rotate(-45deg); background: var(--tx); }

        /* Mobile drawer */
        .nav-drawer {
          position: fixed; top: 56px; left: 0; right: 0; z-index: 99;
          background: rgba(8,8,12,0.97);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(26,26,40,0.6);
          transform: translateY(-8px);
          opacity: 0;
          pointer-events: none;
          transition: transform 0.28s cubic-bezier(0.22,1,0.36,1), opacity 0.22s;
        }
        .nav-drawer.drawer-open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }
        .drawer-inner {
          display: flex; flex-direction: column;
          padding: 16px 24px 24px;
          gap: 4px;
        }
        .drawer-link {
          font-size: 15px; font-weight: 500; color: var(--tx2);
          text-decoration: none; padding: 12px 8px;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
        }
        .drawer-link:hover { color: var(--tx); background: rgba(255,255,255,0.04); }
        .drawer-cta {
          margin-top: 12px; text-align: center; text-decoration: none;
          border-radius: 8px; padding: 12px 0; font-size: 14px;
        }

        @media (max-width: 640px) {
          nav { padding: 0 20px; }
          .nav-links-desktop { display: none; }
          .nav-burger { display: flex; }
        }
      `}</style>
    </>
  )
}
