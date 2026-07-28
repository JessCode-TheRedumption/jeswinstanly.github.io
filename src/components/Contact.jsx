import Reveal from './Reveal'
import { FiGithub, FiLinkedin, FiMail, FiCode, FiArrowUpRight, FiPhone } from 'react-icons/fi'
import { SiKaggle, SiHuggingface } from 'react-icons/si'
import { profile } from '../data'
import { motion } from 'framer-motion'

const links = [
  { href: `mailto:${profile.email}`, label: 'Email Me', sub: profile.email, icon: <FiMail size={20} />, color: '#4FD1C5' },
  { href: profile.links.github, label: 'GitHub', sub: 'Code repositories', icon: <FiGithub size={20} />, color: '#E3A83B' },
  { href: profile.links.linkedin, label: 'LinkedIn', sub: 'Professional network', icon: <FiLinkedin size={20} />, color: '#0A66C2' },
  { href: profile.links.leetcode, label: 'LeetCode', sub: '160+ day streak', icon: <FiCode size={20} />, color: '#FFA116' },
  { href: profile.links.kaggle, label: 'Kaggle', sub: 'Top 27% globally', icon: <SiKaggle size={20} />, color: '#20BEFF' },
  { href: profile.links.huggingface, label: 'Hugging Face', sub: 'ML models & spaces', icon: <SiHuggingface size={20} />, color: '#FFD21E' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #070A14 0%, #0A1020 100%)' }}>
      
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(79,209,197,0.12) 0%, transparent 70%)' }} />

      <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-16">
        
        {/* Section header — centered */}
        <Reveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-cyan/50" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-cyan">07 · Contact</span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan/50" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Open a New
              <br />
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #4FD1C5, #E3A83B)' }}>
                Engagement
              </span>
            </h2>
            <p className="mt-6 max-w-lg mx-auto text-muted text-lg leading-relaxed">
              Currently consulting on Business Central implementations, open to backend engineering 
              and techno-functional work. Reach out directly —{' '}
              <a href={`tel:${profile.phone}`} className="text-cyan hover:text-white transition-colors">
                {profile.phone}
              </a>
            </p>
          </div>
        </Reveal>

        {/* Contact cards grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {links.map((l, i) => (
            <Reveal key={l.label} delay={i * 0.07}>
              <motion.a
                href={l.href}
                target={l.href.startsWith('mailto') || l.href.startsWith('tel') ? undefined : '_blank'}
                rel="noreferrer"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="group flex items-center gap-4 p-5 rounded-2xl glass border border-white/10 transition-all duration-300 card-glow"
                style={{
                  '--hover-border': l.color,
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = `${l.color}50`}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                  style={{ background: `${l.color}15`, border: `1px solid ${l.color}30`, color: l.color }}>
                  {l.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display text-sm font-bold text-white group-hover:text-white">{l.label}</p>
                  <p className="text-xs text-muted truncate mt-0.5">{l.sub}</p>
                </div>
                <FiArrowUpRight size={14} className="text-muted group-hover:text-white transition-colors shrink-0" />
              </motion.a>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.4}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl glass border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-sm text-muted">
                Currently focused on <span className="text-white font-medium">Business Central</span> &{' '}
                <span className="text-white font-medium">Backend Engineering</span>

              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
