import Reveal from './Reveal'
import { timeline } from '../data'
import { motion } from 'framer-motion'

const isSpecial = (year) => year === 'In progress' || year === 'Ahead'

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A1020 0%, #070A14 100%)' }}>
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E3A83B, transparent)' }} />

      <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-16">
        
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <Reveal>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-cyan">06 · Timeline</span>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan/30 to-transparent max-w-xs" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              The Path,
              <br />
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #E3A83B, #4FD1C5)' }}>
                In Order
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted text-lg leading-relaxed">
              From physics lectures to ERP implementations — a journey built on deliberate choices and continuous learning.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(180deg, transparent, #E3A83B40 20%, #E3A83B40 80%, transparent)' }} />

          {timeline.map((t, i) => {
            const isLeft = i % 2 === 0
            const special = isSpecial(t.year)

            return (
              <Reveal key={i} delay={i * 0.06} y={15}>
                <div className={`relative flex items-center gap-8 mb-10 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Card */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="inline-block max-w-sm rounded-2xl p-5 glass border transition-all duration-300 hover:border-gold/30"
                      style={{ borderColor: special ? 'rgba(227,168,59,0.3)' : 'rgba(255,255,255,0.08)' }}
                    >
                      <span className="font-mono text-xs font-bold"
                        style={{ color: special ? '#E3A83B' : '#4FD1C5' }}>
                        {t.year}
                      </span>
                      <h3 className="font-display text-lg font-bold text-white mt-1">{t.label}</h3>
                      <p className="text-muted text-sm mt-1">{t.detail}</p>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex shrink-0 items-center justify-center">
                    <div className={`w-4 h-4 rounded-full border-2 relative z-10 transition-all duration-300 ${
                      special
                        ? 'border-gold bg-gold/20 shadow-[0_0_12px_rgba(227,168,59,0.5)]'
                        : i === timeline.length - 1
                        ? 'border-muted bg-transparent'
                        : 'border-cyan bg-cyan/20 shadow-[0_0_12px_rgba(79,209,197,0.4)]'
                    }`} />
                  </div>

                  {/* Empty side */}
                  <div className="hidden md:block flex-1" />
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
