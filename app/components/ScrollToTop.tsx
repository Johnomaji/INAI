'use client'
import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <button
        className={`scroll-top-btn${visible ? ' scroll-top-visible' : ''}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      <style>{`
        .scroll-top-btn {
          position: fixed; bottom: 28px; right: 28px; z-index: 200;
          width: 40px; height: 40px; border-radius: 10px;
          background: var(--card);
          border: 1px solid var(--border-lt);
          color: var(--tx2);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          opacity: 0; transform: translateY(8px) scale(0.9);
          transition: opacity 0.25s, transform 0.25s, background 0.2s, border-color 0.2s, color 0.2s;
          pointer-events: none;
          box-shadow: 0 4px 20px rgba(0,0,0,0.35);
        }
        .scroll-top-btn:hover {
          background: var(--card2);
          border-color: var(--ac);
          color: var(--ac);
        }
        .scroll-top-visible {
          opacity: 1; transform: none;
          pointer-events: auto;
        }
        @media (max-width: 640px) {
          .scroll-top-btn { bottom: 20px; right: 16px; }
        }
      `}</style>
    </>
  )
}
