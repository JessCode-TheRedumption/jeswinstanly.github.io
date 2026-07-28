import { profile } from '../data'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10"
      style={{ background: '#070A14' }}>
      <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo + credit */}
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-ink font-display font-bold text-sm"
              style={{ background: 'linear-gradient(135deg, #E3A83B, #F0C05A)' }}>
              JS
            </div>
            <div>
              <p className="font-display font-semibold text-white text-sm">{profile.name}</p>
              <p className="font-mono text-[10px] text-muted">
                © {new Date().getFullYear()} · Built with React, Tailwind & Framer Motion
              </p>
            </div>
          </div>

          {/* Center status */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Status · Active</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a href={profile.links.github} target="_blank" rel="noreferrer"
              className="w-9 h-9 grid place-items-center rounded-lg glass border border-white/10 text-muted hover:text-white hover:border-white/30 transition-all duration-200">
              <FiGithub size={15} />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer"
              className="w-9 h-9 grid place-items-center rounded-lg glass border border-white/10 text-muted hover:text-white hover:border-white/30 transition-all duration-200">
              <FiLinkedin size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
