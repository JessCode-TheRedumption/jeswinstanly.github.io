import Reveal from './Reveal'
import { certifications } from '../data'
import { FiCheckCircle, FiClock, FiCircle, FiAward } from 'react-icons/fi'
import { motion } from 'framer-motion'

const statusConfig = {
  Posted: {
    icon: <FiCheckCircle size={16} />,
    color: '#4FD1C5',
    label: 'Earned',
    bg: 'rgba(79,209,197,0.08)',
    border: 'rgba(79,209,197,0.25)',
  },
  'In Process': {
    icon: <FiClock size={16} />,
    color: '#E3A83B',
    label: 'In Progress',
    bg: 'rgba(227,168,59,0.08)',
    border: 'rgba(227,168,59,0.25)',
  },
  Open: {
    icon: <FiCircle size={16} />,
    color: '#7A8499',
    label: 'Planned',
    bg: 'rgba(122,132,153,0.08)',
    border: 'rgba(122,132,153,0.15)',
  },
}

const issuerColors = {
  'University of Cambridge': '#4FD1C5',
  'Coursera': '#2563EB',
  'Amazon Web Services': '#F59E0B',
  'Google': '#10B981',
  'GitHub': '#8B5CF6',
  'Microsoft': '#0078D4',
}

export default function Certifications() {
  const earned = certifications.filter(c => c.status === 'Posted')
  const inProgress = certifications.filter(c => c.status === 'In Process')
  const planned = certifications.filter(c => c.status === 'Open')

  return (
    <section id="certifications" className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0D1526 0%, #0A1020 100%)' }}>
      
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #4FD1C5, transparent)' }} />

      <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-16">
        
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <Reveal>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-cyan">05 · Certifications</span>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan/30 to-transparent max-w-xs" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Credentials &
              <br />
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #4FD1C5, #E3A83B)' }}>
                In-Progress Goals
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="lg:text-right">
              <p className="text-muted text-lg leading-relaxed">
                Certifications earned, actively pursuing, and on the roadmap.
              </p>
              <div className="flex flex-wrap lg:justify-end gap-3 mt-4">
                <div className="glass border border-white/10 rounded-xl px-4 py-2 text-center">
                  <p className="font-display text-2xl font-bold text-cyan">{earned.length}</p>
                  <p className="font-mono text-[10px] uppercase text-muted">Earned</p>
                </div>
                <div className="glass border border-white/10 rounded-xl px-4 py-2 text-center">
                  <p className="font-display text-2xl font-bold text-gold">{inProgress.length}</p>
                  <p className="font-mono text-[10px] uppercase text-muted">Active</p>
                </div>
                <div className="glass border border-white/10 rounded-xl px-4 py-2 text-center">
                  <p className="font-display text-2xl font-bold text-muted">{planned.length}</p>
                  <p className="font-mono text-[10px] uppercase text-muted">Planned</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Certifications grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {certifications.map((c, i) => {
            const cfg = statusConfig[c.status]
            const issuerColor = issuerColors[c.issuer] || '#7A8499'

            return (
              <Reveal key={c.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="relative h-full rounded-2xl p-5 transition-all duration-300 group"
                  style={{
                    background: cfg.bg,
                    border: `1px solid ${cfg.border}`,
                  }}
                >
                  {/* Status indicator */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${cfg.color}15`, border: `1px solid ${cfg.color}30`, color: cfg.color }}>
                      <FiAward size={18} />
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full shrink-0"
                      style={{
                        color: cfg.color,
                        background: `${cfg.color}15`,
                        border: `1px solid ${cfg.color}30`,
                      }}>
                      {cfg.icon}
                      <span className="font-mono text-[10px] uppercase tracking-wider">{cfg.label}</span>
                    </div>
                  </div>

                  <h3 className="font-display text-sm font-semibold text-white leading-snug">{c.title}</h3>

                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: issuerColor }} />
                    <span className="text-xs font-mono" style={{ color: issuerColor }}>{c.issuer}</span>
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
