import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { skillModules } from '../data'

const allSkills = [
  { name: 'Business Central', category: 'ERP', level: 85 },
  { name: 'AL Language', category: 'ERP', level: 80 },
  { name: 'Python', category: 'Backend', level: 92 },
  { name: 'Django', category: 'Backend', level: 88 },
  { name: 'FastAPI', category: 'Backend', level: 82 },
  { name: 'PostgreSQL', category: 'Backend', level: 80 },
  { name: 'React', category: 'Frontend', level: 75 },
  { name: 'Docker', category: 'DevOps', level: 78 },
  { name: 'Redis', category: 'Backend', level: 76 },
  { name: 'Git', category: 'DevOps', level: 90 },
  { name: 'Scikit-learn', category: 'Data', level: 72 },
  { name: 'Pandas', category: 'Data', level: 84 },
]

const moduleColors = {
  M1: { from: '#E3A83B', to: '#F59E0B', bg: 'rgba(227,168,59,0.08)', border: 'rgba(227,168,59,0.25)' },
  M2: { from: '#4FD1C5', to: '#38B2AC', bg: 'rgba(79,209,197,0.08)', border: 'rgba(79,209,197,0.25)' },
  M3: { from: '#8B5CF6', to: '#7C3AED', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.25)' },
}

export default function Skills() {
  const [activeModule, setActiveModule] = useState('M1')
  const active = skillModules.find((m) => m.id === activeModule)
  const colors = moduleColors[activeModule]

  return (
    <section id="skills" className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0D1526 0%, #0A1628 100%)' }}>
      
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <img src="/skills_bg.png" alt="" aria-hidden
          className="w-full h-full object-cover opacity-[0.04]" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: `radial-gradient(circle, ${colors.from}, transparent)` }} />

      <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-16">
        
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <Reveal>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-cyan">03 · Skills</span>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan/30 to-transparent max-w-xs" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Skills, Organized
              <br />
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: `linear-gradient(135deg, ${colors.from}, ${colors.to})` }}>
                Like a System
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted text-lg leading-relaxed lg:text-right">
              Every module is production-tested. No buzzword fillers — only technologies used to ship real systems.
            </p>
          </Reveal>
        </div>

        {/* Module tabs */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-12">
            {skillModules.map((mod) => {
              const c = moduleColors[mod.id]
              const isActive = activeModule === mod.id
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod.id)}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl font-mono text-sm transition-all duration-300"
                  style={{
                    background: isActive ? c.bg : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${isActive ? c.border : 'rgba(255,255,255,0.08)'}`,
                    color: isActive ? c.from : '#7A8499',
                    boxShadow: isActive ? `0 0 20px ${c.from}20` : 'none',
                  }}
                >
                  <span className="text-lg">{mod.icon}</span>
                  <span className="font-mono text-[11px] uppercase tracking-wider">{mod.id}</span>
                  <span className="hidden sm:inline">{mod.title}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Main content */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">
          {/* Left — skill grid */}
          <div>
            <motion.div
              key={activeModule}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4"
            >
              {active.items.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 cursor-default"
                  style={{
                    background: colors.bg,
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display text-sm font-semibold text-white">{item}</span>
                    <span className="font-mono text-[10px]" style={{ color: colors.from }}>
                      {active.id}
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${colors.from}, ${colors.to})` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${allSkills.find(s => s.name === item)?.level ?? 75}%` }}
                      transition={{ duration: 0.8, delay: i * 0.05, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* All skills pill cloud */}
            <Reveal delay={0.3}>
              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted mb-4">All Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {allSkills.map((s) => (
                    <span key={s.name}
                      className="text-xs font-mono px-3 py-1.5 rounded-full glass border border-white/10 text-muted hover:text-white hover:border-white/25 transition-all duration-200 cursor-default">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — module info card */}
          <Reveal delay={0.2}>
            <div className="sticky top-28">
              <motion.div
                key={activeModule}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl p-6 transition-all duration-500"
                style={{
                  background: colors.bg,
                  border: `1px solid ${colors.border}`,
                  boxShadow: `0 0 40px ${colors.from}15`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{active.icon}</span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider" style={{ color: colors.from }}>
                      Module {active.id}
                    </p>
                    <h3 className="font-display text-xl font-bold text-white">{active.title}</h3>
                  </div>
                </div>

                <div className="space-y-2">
                  {active.items.map((item, i) => (
                    <div key={item} className="flex items-center justify-between">
                      <span className="text-sm text-muted font-mono">{item}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, j) => (
                          <div key={j} className="w-1.5 h-1.5 rounded-full"
                            style={{
                              background: j < Math.ceil((allSkills.find(s => s.name === item)?.level ?? 75) / 20)
                                ? colors.from : 'rgba(255,255,255,0.1)'
                            }} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t" style={{ borderColor: colors.border }}>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded"
                    style={{ color: colors.from, background: `${colors.from}15` }}>
                    ● Active Module
                  </span>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
