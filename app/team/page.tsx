'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import RevealOnScroll from '../components/RevealOnScroll'

const members = [
  {
    name: 'Mariam Oresi',
    role: 'Founder & DevOps Engineer',
    bio: 'Founded INAI to build the AI infrastructure layer Africa deserves. Keeps the entire platform running at scale — from bare-metal GPU provisioning to zero-downtime deployments.',
    color: 'var(--ac)',
    initial: 'MO',
    image: '/team1.jpg',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Mery Ugwu',
    role: 'AI/ML Engineer',
    bio: 'Designs and trains the models powering every INAI agent. Obsessed with low-latency inference on African infrastructure. Deep expertise in fine-tuning, RAG pipelines, and evaluation.',
    color: 'var(--blue)',
    initial: 'MU',
    image: '/team2.jpg',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Francis Igwe',
    role: 'Snr Product Engineer',
    bio: 'Builds the developer-facing APIs and Studio product. Turns complex AI systems into tools operators actually love. Ships fast and breaks nothing.',
    color: 'var(--purple)',
    initial: 'FI',
    image: '/team3.jpg',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Odibe Wellington',
    role: 'Head of Customer Ops',
    bio: 'Owns onboarding and success for every INAI customer. Makes sure every deployment ships on time, hits its KPIs, and that no customer is left figuring things out alone.',
    color: 'var(--green)',
    initial: 'OW',
    image: '/team4.jpg',
    linkedin: '#',
    twitter: '#',
  },
]

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const TwitterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

function MemberCard({ m, i }: { m: typeof members[0]; i: number }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="member-card" style={{ animationDelay: `${i * 80}ms` }}>
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: '28px', right: '28px', height: '1px',
        background: `linear-gradient(90deg, transparent, ${m.color}60, transparent)`,
      }} />
      {/* Corner glow */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '20px',
        background: `radial-gradient(ellipse at top left, ${m.color}0a 0%, transparent 55%)`,
        pointerEvents: 'none',
      }} />

      {/* Photo or fallback avatar */}
      <div className="member-photo-wrap" style={{ border: `1.5px solid ${m.color}30` }}>
        {!imgError ? (
          <Image
            src={m.image}
            alt={m.name}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            style={{ objectFit: 'cover', borderRadius: '18px' }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="member-fallback" style={{
            background: `${m.color}14`,
            color: m.color,
          }}>
            {m.initial}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="member-info">
        <div>
          <h3 className="member-name">{m.name}</h3>
          <p className="member-role" style={{ color: m.color }}>{m.role}</p>
        </div>

        <div className="member-divider" />

        <p className="member-bio">{m.bio}</p>

        {/* Social links */}
        <div className="member-socials">
          <a href={m.linkedin} className="member-social-link" aria-label={`${m.name} on LinkedIn`}>
            <LinkedInIcon />
            LinkedIn
          </a>
          <a href={m.twitter} className="member-social-link" aria-label={`${m.name} on Twitter`}>
            <TwitterIcon />
            Twitter
          </a>
        </div>
      </div>
    </div>
  )
}

export default function TeamPage() {
  return (
    <main className="team-page">
      {/* Page header */}
      <section className="team-hero">
        <div className="wrap">
          <RevealOnScroll>
            <p className="mono section-tag">Our Team</p>
            <h1 className="team-hero-title">Built by operators.</h1>
            <p className="team-hero-sub">
              We&apos;ve shipped AI products in production across Africa.
              We&apos;re building the platform we wished existed.
            </p>
            <div className="team-hero-cta">
              <Link className="btn-primary" href="/contact">Work with us</Link>
              <Link className="btn-secondary" href="/#platform">See the platform</Link>
            </div>
          </RevealOnScroll>
        </div>

        {/* Decorative grid lines */}
        <div className="team-hero-grid" aria-hidden="true" />
      </section>

      {/* Members grid */}
      <section className="team-members-section">
        <div className="team-members-grid">
          {members.map((m, i) => (
            <MemberCard key={m.name} m={m} i={i} />
          ))}
        </div>
      </section>

      {/* Hiring banner */}
      <section className="team-hiring">
        <div className="wrap">
          <RevealOnScroll>
            <div className="team-hiring-card">
              <div className="team-hiring-glow" />
              <p className="mono section-tag" style={{ marginBottom: '12px' }}>Join us</p>
              <h2 style={{ fontSize: 'clamp(22px,4vw,32px)', fontWeight: 800, color: 'var(--white)', letterSpacing: '-0.03em', marginBottom: '10px' }}>
                We&apos;re hiring across the stack.
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--tx2)', lineHeight: 1.7, maxWidth: '440px', margin: '0 auto 28px' }}>
                Remote-friendly. Africa-first. If you love hard infrastructure problems and want your work to matter at scale, let&apos;s talk.
              </p>
              <Link className="btn-primary" href="/contact" style={{ display: 'inline-block', textDecoration: 'none' }}>
                Get in touch
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <style>{`
        .team-page { padding-top: 56px; }

        /* ── Hero ── */
        .team-hero {
          position: relative;
          padding: 96px 0 72px;
          text-align: center;
          overflow: hidden;
          border-bottom: 1px solid rgba(26,26,40,0.4);
        }
        .team-hero-title {
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 800;
          color: var(--white);
          letter-spacing: -0.04em;
          line-height: 1.05;
          margin: 8px 0 14px;
        }
        .team-hero-sub {
          font-size: clamp(15px, 2vw, 17px);
          color: var(--tx2);
          line-height: 1.7;
          max-width: 480px;
          margin: 0 auto 32px;
        }
        .team-hero-cta {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .team-hero-cta .btn-primary,
        .team-hero-cta .btn-secondary {
          padding: 10px 24px;
          font-size: 14px;
          text-decoration: none;
          border-radius: 8px;
        }
        /* Subtle grid bg */
        .team-hero-grid {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image:
            linear-gradient(rgba(26,26,40,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,26,40,0.3) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse at center, black 20%, transparent 75%);
        }
        .team-hero .wrap { position: relative; z-index: 1; }

        /* ── Members grid ── */
        .team-members-section {
          padding: 72px 0 48px;
        }
        .team-members-grid {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .member-card {
          position: relative;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .member-card:hover {
          border-color: var(--border-lt);
          transform: translateY(-4px);
          box-shadow: 0 24px 52px rgba(0,0,0,0.35);
        }

        /* Photo */
        .member-photo-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 3/4;
          border-radius: 18px 18px 0 0;
          overflow: hidden;
          background: var(--card);
          flex-shrink: 0;
        }
        .member-fallback {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 32px; font-weight: 800;
          letter-spacing: -0.02em;
        }

        /* Info section */
        .member-info {
          padding: 20px 22px 22px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          flex: 1;
        }
        .member-name {
          font-size: 17px;
          font-weight: 700;
          color: var(--white);
          letter-spacing: -0.02em;
          margin-bottom: 3px;
        }
        .member-role {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .member-divider {
          height: 1px;
          background: var(--border);
        }
        .member-bio {
          font-size: 13px;
          color: var(--tx2);
          line-height: 1.7;
          flex: 1;
        }
        .member-socials {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .member-social-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11.5px;
          font-weight: 600;
          color: var(--tx3);
          text-decoration: none;
          transition: color 0.2s;
        }
        .member-social-link:hover { color: var(--tx); }

        /* ── Hiring banner ── */
        .team-hiring {
          padding: 24px 0 96px;
        }
        .team-hiring-card {
          position: relative;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 56px 40px;
          text-align: center;
          overflow: hidden;
        }
        .team-hiring-glow {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at top center, rgba(118,185,0,0.06) 0%, transparent 60%);
          pointer-events: none;
        }

        /* ── Responsive ── */
        @media (max-width: 1060px) {
          .team-members-grid { grid-template-columns: repeat(2, 1fr); }
          .member-photo-wrap { aspect-ratio: 1/1; border-radius: 18px 18px 0 0; }
        }

        @media (max-width: 640px) {
          .team-members-section { padding: 48px 0 32px; }
          .team-members-grid {
            grid-template-columns: 1fr;
            padding: 0 20px;
            gap: 14px;
          }
          .member-photo-wrap { aspect-ratio: 4/3; }
          .team-hero { padding: 64px 0 48px; }
          .team-hiring-card { padding: 40px 24px; }
        }
      `}</style>
    </main>
  )
}
