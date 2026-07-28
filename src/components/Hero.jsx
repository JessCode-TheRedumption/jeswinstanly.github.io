import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi'
import { profile, stats } from '../data'

/* ─── Typewriter hook ───────────────────────────────────── */
function useTypewriter(words, { typeSpeed = 52, deleteSpeed = 28, pause = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let t
    if (!deleting && text === current)      t = setTimeout(() => setDeleting(true), pause)
    else if (deleting && text === '')       { setDeleting(false); setIndex(i => i + 1) }
    else t = setTimeout(() => {
      setText(s => deleting ? current.slice(0, s.length - 1) : current.slice(0, s.length + 1))
    }, deleting ? deleteSpeed : typeSpeed)
    return () => clearTimeout(t)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause])

  return text
}

/* ─── Smooth cursor-tracking magnetic effect ────────────── */
function useMagnetic(strength = 0.08) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 80, damping: 18 })
  const sy = useSpring(y, { stiffness: 80, damping: 18 })
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const move = (e) => {
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      x.set((e.clientX - cx) * strength)
      y.set((e.clientY - cy) * strength)
    }
    const leave = () => { x.set(0); y.set(0) }
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave) }
  }, [x, y, strength])

  return { ref, sx, sy }
}

/* ─── Stagger animation container ──────────────────────── */
const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.2 } },
}
const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

/* ─── Component ─────────────────────────────────────────── */
export default function Hero() {
  const role = useTypewriter(profile.roles)
  const [booted, setBooted] = useState(false)
  const { ref: cardRef, sx: cardX, sy: cardY } = useMagnetic(0.06)

  useEffect(() => {
    const t = setTimeout(() => setBooted(true), 180)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #060910 0%, #0D1526 55%, #0A1525 100%)' }}
    >
      {/* ─── Background layers ─── */}

      {/* Hero BG image */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: 'url(/hero_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Static gradient orbs instead of floating ones */}
      <div
        className="absolute top-1/4 left-[15%] w-[520px] h-[520px] rounded-full blur-[100px] pointer-events-none opacity-50"
        style={{ background: 'radial-gradient(circle, rgba(79,209,197,0.12), transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 right-[15%] w-[440px] h-[440px] rounded-full blur-[100px] pointer-events-none opacity-50"
        style={{ background: 'radial-gradient(circle, rgba(227,168,59,0.1), transparent 70%)' }}
      />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(rgba(79,209,197,1) 1px, transparent 1px), linear-gradient(to right, rgba(79,209,197,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent)',
        }}
      />

      {/* ─── Content ─── */}
      <div className="relative w-full max-w-screen-2xl mx-auto px-6 lg:px-16 pt-36 pb-24">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-16 items-center">

          {/* Left — text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={booted ? 'show' : 'hidden'}
          >
            {/* Status pill */}
            <motion.div variants={staggerItem} className="mb-8">
              <span className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-widest uppercase text-cyan border border-cyan/25 rounded-full px-4 py-1.5 glass animate-border-glow">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                Currently building systems at Woxro Technology
              </span>
            </motion.div>

            {/* Name — full name on one line */}
            <motion.h1
              variants={staggerItem}
              className="font-display font-bold tracking-tight whitespace-nowrap leading-[1.05]"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 5rem)' }}
            >
              <span className="text-white">{profile.name.split(' ').slice(0, -1).join(' ')}{' '}</span>
              <span className="shimmer-text">{profile.name.split(' ').slice(-1)[0]}</span>
            </motion.h1>

            {/* Role typewriter */}
            <motion.div variants={staggerItem}
              className="mt-5 h-10 font-mono text-xl md:text-2xl text-gold flex items-center gap-1.5">
              <span className="text-cyan/50 select-none">&gt;</span>
              <span>{role}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.55, repeat: Infinity, repeatType: 'reverse' }}
                className="inline-block w-[2px] h-[1em] bg-gold align-middle"
              />
            </motion.div>

            {/* Summary */}
            <motion.p variants={staggerItem}
              className="mt-6 max-w-[540px] text-muted text-base md:text-[17px] leading-[1.8]">
              {profile.summary}
            </motion.p>

            {/* CTA row */}
            <motion.div variants={staggerItem} className="mt-9 flex flex-wrap items-center gap-3">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-ink text-sm shadow-lg shadow-gold/20"
                style={{ background: 'linear-gradient(135deg, #E3A83B 0%, #F5C842 100%)' }}
              >
                View My Work <FiArrowDown size={14} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-white text-sm glass border border-white/10 hover:border-cyan/40 hover:text-cyan transition-colors duration-300"
              >
                <FiDownload size={14} /> Get Resume
              </motion.a>
              {[
                { href: profile.links.github, icon: <FiGithub size={17} /> },
                { href: profile.links.linkedin, icon: <FiLinkedin size={17} /> },
              ].map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.12, rotate: 3 }}
                  whileTap={{ scale: 0.93 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                  className="w-11 h-11 grid place-items-center rounded-xl glass border border-white/10 text-muted hover:text-white hover:border-white/30 transition-colors duration-200"
                >
                  {l.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Stats row */}
            <motion.dl variants={staggerItem}
              className="mt-12 grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-white/8">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={booted ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 + i * 0.12, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="group"
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-xl leading-none">{s.icon}</span>
                    <dt className="font-display text-xl md:text-2xl text-white font-bold">{s.value}</dt>
                  </div>
                  <dd className="font-mono text-[10px] uppercase tracking-wider text-muted leading-snug mt-0.5">
                    {s.label}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </motion.div>

          {/* Right — Quotes block */}
          <motion.div
            ref={cardRef}
            style={{ x: cardX, y: cardY }}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={booted ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-[420px]">
              {/* Glow behind */}
              <div className="absolute inset-0 rounded-[40px] opacity-10 blur-3xl pointer-events-none animate-orb"
                style={{ background: 'linear-gradient(135deg, #E3A83B, #4FD1C5)' }} />
              
              <div className="glass-strong rounded-3xl p-10 shadow-2xl shadow-black/40 border border-white/10 relative z-10 flex flex-col gap-8">
                <p className="font-display text-3xl text-white font-semibold leading-snug">
                  "Dreams don't work unless you do."
                </p>
                <div className="h-px w-16 bg-gradient-to-r from-gold to-transparent" />
                <p className="font-mono text-[13px] text-muted leading-relaxed uppercase tracking-wide">
                  Building enterprise-grade systems demands more than just code. It requires relentless problem-solving, late nights, and a commitment to engineering excellence that holds up under pressure.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: booted ? 1 : 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted/60">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
