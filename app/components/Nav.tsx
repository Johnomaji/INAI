'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const sectionLinks = [
  { label: 'Platform', anchor: '#platform' },
  { label: 'Docs',     anchor: '#docs' },
  { label: 'Pricing',  anchor: '#pricing' },
]

const pageLinks = [
  { label: 'Team',    href: '/team' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeAnchor, setActiveAnchor] = useState('')
  const [progress, setProgress] = useState(0)

  // Scroll progress + scrolled state
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docH > 0 ? (window.scrollY / docH) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section detection (home only)
  useEffect(() => {
    if (!isHome) { setActiveAnchor(''); return }
    const ids = sectionLinks.map((l) => l.anchor.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveAnchor('#' + e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [isHome])

  // Close mobile menu on outside click
  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [open])

  const handleSectionClick = (e: React.MouseEvent, anchor: string) => {
    setOpen(false)
    if (isHome) {
      e.preventDefault()
      document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <nav data-scrolled={scrolled}>
        {/* Scroll progress bar */}
        <div className="nav-progress" style={{ width: `${progress}%` }} />

        {/* Logo */}
        <Link className="nav-logo" href="/" onClick={isHome ? scrollToTop : undefined}>
          <div className="nav-icon">
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
              <path d="M3 4h10M3 8h7M3 12h9" stroke="#000" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
          <span className="nav-brand">INAI</span>
        </Link>

        {/* Desktop links */}
        <div className="nav-links-desktop">
          {sectionLinks.map(({ label, anchor }) => (
            <Link
              key={label}
              className={`nav-link${activeAnchor === anchor ? ' nav-link-active' : ''}`}
              href={isHome ? anchor : `/${anchor}`}
              onClick={(e) => handleSectionClick(e, anchor)}
            >
              {label}
            </Link>
          ))}

          {pageLinks.map(({ label, href }) => (
            <Link
              key={label}
              className={`nav-link${pathname === href ? ' nav-link-active' : ''}`}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link className="btn-primary nav-cta" href="/contact" onClick={() => setOpen(false)}>
            Get started
          </Link>
        </div>

        {/* Hamburger */}
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
          {sectionLinks.map(({ label, anchor }) => (
            <Link
              key={label}
              className={`drawer-link${activeAnchor === anchor ? ' drawer-link-active' : ''}`}
              href={isHome ? anchor : `/${anchor}`}
              onClick={(e) => handleSectionClick(e, anchor)}
            >
              {label}
            </Link>
          ))}

          <div className="drawer-sep" />

          {pageLinks.map(({ label, href }) => (
            <Link
              key={label}
              className={`drawer-link${pathname === href ? ' drawer-link-active' : ''}`}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link className="btn-primary drawer-cta" href="/contact" onClick={() => setOpen(false)}>
            Get started
          </Link>
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
        .nav-progress {
          position: absolute; bottom: 0; left: 0; height: 2px;
          background: var(--ac); box-shadow: 0 0 8px rgba(118,185,0,0.5);
          transition: width 0.1s linear; border-radius: 0 2px 2px 0;
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
        .nav-brand { font-weight: 700; font-size: 14px; color: var(--white); letter-spacing: -0.02em; }
        .nav-links-desktop { display: flex; gap: 24px; align-items: center; }
        .nav-link {
          font-size: 13px; color: var(--tx3); font-weight: 500;
          text-decoration: none; transition: color 0.2s;
        }
        .nav-link:hover { color: var(--tx); }
        .nav-link-active { color: var(--tx) !important; }
        .nav-cta { padding: 7px 16px; font-size: 12.5px; border-radius: 7px; text-decoration: none; }

        /* Hamburger */
        .nav-burger {
          display: none; flex-direction: column; gap: 5px;
          justify-content: center; align-items: center;
          width: 36px; height: 36px;
          background: none; border: none; cursor: pointer; padding: 6px;
          border-radius: 8px; transition: background 0.2s;
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
          background: rgba(8,8,12,0.97); backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(26,26,40,0.6);
          transform: translateY(-8px); opacity: 0; pointer-events: none;
          transition: transform 0.28s cubic-bezier(0.22,1,0.36,1), opacity 0.22s;
        }
        .nav-drawer.drawer-open { transform: translateY(0); opacity: 1; pointer-events: auto; }
        .drawer-inner { display: flex; flex-direction: column; padding: 16px 24px 24px; gap: 4px; }
        .drawer-link {
          font-size: 15px; font-weight: 500; color: var(--tx2);
          text-decoration: none; padding: 12px 8px; border-radius: 8px;
          transition: color 0.2s, background 0.2s;
        }
        .drawer-link:hover { color: var(--tx); background: rgba(255,255,255,0.04); }
        .drawer-link-active { color: var(--tx) !important; }
        .drawer-sep { height: 1px; background: var(--border); margin: 8px 0; }
        .drawer-cta { margin-top: 12px; text-align: center; text-decoration: none; border-radius: 8px; padding: 12px 0; font-size: 14px; }

        @media (max-width: 640px) {
          nav { padding: 0 20px; }
          .nav-links-desktop { display: none; }
          .nav-burger { display: flex; }
        }
      `}</style>
    </>
  )
}
