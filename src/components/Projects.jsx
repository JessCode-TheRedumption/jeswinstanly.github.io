import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import { projects } from '../data'
import { FiArrowUpRight, FiGithub, FiClock, FiCheckCircle, FiCircle } from 'react-icons/fi'

const statusConfig = {
  Posted: { label: 'Complete', icon: <FiCheckCircle size={12} />, color: '#4FD1C5' },
  'In Process': { label: 'Active', icon: <FiClock size={12} />, color: '#E3A83B' },
  Open: { label: 'Queued', icon: <FiCircle size={12} />, color: '#7A8499' },
}

export default function Projects() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="projects" className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A1628 0%, #0D1526 100%)' }}>
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }} />

      <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-16">
        
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <Reveal>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-cyan">04 · Projects</span>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan/30 to-transparent max-w-xs" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Systems Shipped
              <br />
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #4FD1C5, #8B5CF6)' }}>
                & In Progress
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="lg:text-right">
              <p className="text-muted text-lg leading-relaxed">
                Real systems built to solve real problems. Each project has shipped code, not just concepts.
              </p>
              <div className="flex flex-wrap lg:justify-end gap-3 mt-4">
                {Object.entries(statusConfig).map(([key, cfg]) => (
                  <span key={key} className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full glass border border-white/10"
                    style={{ color: cfg.color }}>
                    {cfg.icon} {cfg.label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const status = statusConfig[p.status]
            const isHovered = hovered === p.code

            return (
              <Reveal key={p.code} delay={i * 0.08}>
                <motion.article
                  onMouseEnter={() => setHovered(p.code)}
                  onMouseLeave={() => setHovered(null)}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative h-full rounded-2xl overflow-hidden cursor-default"
                  style={{
                    background: 'rgba(13, 21, 38, 0.8)',
                    border: `1px solid ${isHovered ? p.accentColor + '50' : 'rgba(255,255,255,0.08)'}`,
                    boxShadow: isHovered ? `0 20px 60px ${p.accentColor}15, 0 0 30px ${p.accentColor}10` : 'none',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                  }}
                >
                  {/* Gradient top accent */}
                  <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${p.accentColor}, transparent)` }} />

                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  <div className="relative p-7">
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div>
                        <span className="font-mono text-[10px] text-muted">{p.code}</span>
                        <h3 className="font-display text-xl font-bold text-white mt-1 group-hover:text-white transition-colors">
                          {p.title}
                        </h3>
                        <p className="text-xs font-mono text-muted mt-0.5">{p.period}</p>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 font-mono text-[10px] uppercase tracking-wider"
                        style={{
                          color: status.color,
                          background: `${status.color}15`,
                          border: `1px solid ${status.color}30`,
                        }}>
                        {status.icon}
                        <span>{status.label}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted leading-relaxed text-[15px]">{p.description}</p>

                    {/* Stack */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span key={s}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg"
                          style={{
                            color: p.accentColor,
                            background: `${p.accentColor}10`,
                            border: `1px solid ${p.accentColor}25`,
                          }}>
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Footer actions */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                      <div className="w-2 h-2 rounded-full"
                        style={{ background: p.accentColor, boxShadow: `0 0 8px ${p.accentColor}` }} />
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-8 h-8 grid place-items-center rounded-lg glass border border-white/10 text-muted hover:text-white transition-colors">
                          <FiGithub size={13} />
                        </button>
                        <button className="w-8 h-8 grid place-items-center rounded-lg glass border border-white/10 text-muted hover:text-white transition-colors">
                          <FiArrowUpRight size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            )
          })}
        </div>

        {/* Featured CTA Block */}
        <Reveal delay={0.3}>
          <div className="mt-16 rounded-3xl relative overflow-hidden glass border border-white/10 group cursor-pointer hover:border-gold/30 transition-colors duration-500">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
              <img src="/projects_visual.png" alt="Project showcase" className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
            </div>

            {/* Content Content */}
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan/30 glass mb-6">
                  <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-cyan">Available for hire</span>
                </div>
                <h3 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                  Building Tomorrow's <span className="text-gold">Systems.</span>
                </h3>
                <p className="mt-4 text-muted text-lg">
                  Ready to collaborate on enterprise-grade software and full-stack solutions.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 min-w-[200px]">
                <a href="#contact" className="px-8 py-4 rounded-xl font-medium text-ink text-center shadow-lg hover:-translate-y-1 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #E3A83B 0%, #F5C842 100%)' }}>
                  Let's Talk
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-xl font-medium text-white text-center glass border border-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                  <FiGithub /> View GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
