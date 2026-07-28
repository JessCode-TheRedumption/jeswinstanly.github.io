import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme] = useState('dark')
  const { scrollYProgress } = useScroll()

  // Ultra-smooth spring progress bar
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="min-h-screen bg-ink text-white font-body overflow-x-hidden">
      {/* ─── Gradient scroll progress bar ─── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] pointer-events-none"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #4FD1C5 0%, #8B5CF6 40%, #E3A83B 80%, #4FD1C5 100%)',
          backgroundSize: '200% 100%',
        }}
      />

      <Header theme={theme} toggleTheme={() => {}} />

      <main>
        <Hero />

        {/* Gradient dividers between sections */}
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Certifications />
        <div className="section-divider" />
        <Timeline />
        <div className="section-divider" />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
