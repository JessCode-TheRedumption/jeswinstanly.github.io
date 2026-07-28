import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiSun, FiTerminal, FiMenu, FiX } from 'react-icons/fi'

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certs' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#contact', label: 'Contact' },
]

function useClock() {
  const [time, setTime] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

function useScrolled() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return scrolled
}

export default function Header({ theme, toggleTheme }) {
  const time = useClock()
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const timeStr = time.toLocaleTimeString('en-GB', { hour12: false })

  return (
    <header className="fixed top-0 left-0 right-0 z-50">


      {/* Main navbar */}
      <motion.nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-ink/95 dark:bg-ink/95 backdrop-blur-xl shadow-2xl shadow-black/30 border-b border-line/50'
            : 'bg-ink/80 dark:bg-ink/80 backdrop-blur-md border-b border-line/30'
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center group">
            <span className="font-display font-semibold text-lg tracking-tight text-white hover:text-gold transition-colors duration-300">
              Jeswin Stanly A
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="px-3 py-2 rounded-md text-muted hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">

            <button
              className="md:hidden w-9 h-9 grid place-items-center rounded-lg border border-line text-muted hover:text-gold"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <FiX size={16} /> : <FiMenu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-surface border-t border-line"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider text-muted hover:text-gold hover:bg-white/5 transition-all"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.nav>
    </header>
  )
}
