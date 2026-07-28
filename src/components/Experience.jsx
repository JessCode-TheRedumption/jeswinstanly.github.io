import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import { experience } from '../data'
import { FiMapPin, FiBriefcase, FiCalendar, FiChevronDown } from 'react-icons/fi'

export default function Experience() {
  const [expanded, setExpanded] = useState(0)

  return (
    <section id="experience" className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A1020 0%, #0D1526 100%)' }}>
      
      {/* Static ambient glow */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E3A83B, transparent)' }}
      />

      <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-16">
        
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <Reveal>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-cyan">02 · Experience</span>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan/30 to-transparent max-w-xs" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Where I've
              <br />
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #E3A83B, #F0C05A)' }}>
                Delivered
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="lg:pt-16">
              <p className="text-muted text-lg leading-relaxed">
                From a brief but impactful stint at Aptivora Global Solutions to full-time consulting 
                at Woxro — every role has been about shipping real enterprise value.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Experience cards with visual */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-start">
          {/* Left — cards */}
          <div className="space-y-4">
            {experience.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.1}>
                <div
                  className={`rounded-2xl glass border transition-all duration-500 cursor-pointer overflow-hidden ${
                    expanded === i
                      ? 'border-opacity-60 shadow-xl'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                  style={{
                    borderColor: expanded === i ? exp.color : undefined,
                    boxShadow: expanded === i ? `0 0 40px ${exp.color}20` : undefined,
                  }}
                  onClick={() => setExpanded(expanded === i ? -1 : i)}
                >
                  {/* Card header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                          style={{ background: `${exp.color}20`, border: `1px solid ${exp.color}40` }}>
                          {exp.logo}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-display text-lg font-bold text-white">{exp.company}</h3>
                            <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full"
                              style={{ color: exp.color, background: `${exp.color}15`, border: `1px solid ${exp.color}30` }}>
                              {exp.type}
                            </span>
                          </div>
                          <p className="font-mono text-sm mt-0.5" style={{ color: exp.color }}>{exp.role}</p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expanded === i ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0 mt-1"
                      >
                        <FiChevronDown size={18} className="text-muted" />
                      </motion.div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center gap-1.5 text-muted text-xs font-mono">
                        <FiCalendar size={12} className="text-cyan" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-muted text-xs font-mono">
                        <FiMapPin size={12} className="text-cyan" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Expandable content */}
                  <AnimatePresence>
                    {expanded === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-6 pb-6 border-t border-white/5 pt-5">
                          <p className="text-muted leading-relaxed text-sm">{exp.description}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {exp.highlights.map((h) => (
                              <span key={h}
                                className="text-xs font-mono px-3 py-1.5 rounded-lg"
                                style={{
                                  color: exp.color,
                                  background: `${exp.color}10`,
                                  border: `1px solid ${exp.color}25`,
                                }}>
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right — visual */}
          <Reveal delay={0.2}>
            <div className="hidden lg:block sticky top-28">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] glass border border-white/10">
                <img
                  src="/experience_visual.png"
                  alt="Enterprise consulting workspace"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(7,10,20,0.9) 100%)' }} />
              </div>

              {/* Floating stat */}
              <div className="mt-4 p-4 rounded-xl glass border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/20 border border-gold/30 flex items-center justify-center">
                    <FiBriefcase size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-white font-display font-bold">2 Companies</p>
                    <p className="text-muted text-xs font-mono">Consulting & ERP focus</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
