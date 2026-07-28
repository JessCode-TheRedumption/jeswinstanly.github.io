import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { profile } from '../data'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'

const highlights = [
  { label: 'Physics to Production', icon: '⚛️', desc: 'From B.Sc. Physics to enterprise software engineering — a uniquely broad problem-solving lens.' },
  { label: '160+ Day Streak', icon: '🔥', desc: 'Consistent daily LeetCode practice. Algorithmic thinking sharpened under discipline.' },
  { label: 'OWASP Contributor', icon: '🔐', desc: 'Active open-source security contributor. Code that ships is code that is secure.' },
  { label: 'Cambridge Certified', icon: '🎓', desc: 'Advanced English proficiency certified — precision in communication, not just code.' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #070A14 0%, #0A1020 100%)' }}>
      
      {/* Static ambient glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #4FD1C5, transparent)' }}
      />

      <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-16">
        
        {/* Section label */}
        <Reveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[11px] uppercase tracking-widest text-cyan">01 · About</span>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan/30 to-transparent max-w-xs" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            From Physics to
            <br />
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #E3A83B, #4FD1C5)' }}>
              Production Systems
            </span>
          </h2>
        </Reveal>

        {/* Main grid */}
        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Image + contact info */}
          <Reveal delay={0.05}>
            <div className="relative">
              {/* Decorative glow ring */}
              <div className="absolute inset-[-16px] rounded-3xl opacity-25 blur-2xl pointer-events-none"
                style={{ background: 'linear-gradient(135deg, #4FD1C5, #E3A83B)' }} />

              {/* Avatar frame */}
              <div className="relative rounded-2xl overflow-hidden glass border border-white/10"
                style={{ aspectRatio: '3/4', maxHeight: '480px' }}>
                <img
                  src="/hero_bg.png"
                  alt="About Visual"
                  className="w-full h-full object-cover"
                  style={{ opacity: 0.8 }}
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24"
                  style={{ background: 'linear-gradient(to top, rgba(7,10,20,0.7), transparent)' }} />
              </div>

              {/* Contact chips */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { icon: <FiMapPin size={13} />, text: profile.location },
                  { icon: <FiMail size={13} />, text: profile.email },
                  { icon: <FiPhone size={13} />, text: profile.phone },
                ].map((c) => (
                  <div key={c.text} className="flex items-center gap-2 px-3 py-2 rounded-lg glass border border-white/10 text-muted text-xs font-mono">
                    <span className="text-cyan">{c.icon}</span>
                    {c.text}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right — Text + highlights */}
          <div className="space-y-8">
            <Reveal delay={0.1}>
              <p className="text-muted leading-relaxed text-base md:text-lg">
                {profile.name.split(' ')[0]} moved from a physics background into enterprise software the way a good
                learner should — by understanding the business first, then the system. Now training as a{' '}
                <span className="text-gold font-medium">Techno-Functional Consultant</span> at Woxro Technology Solutions,
                with a focus on <span className="text-cyan font-medium">Business Central and AL development</span>, backed
                by a Python engineering practice built across backend APIs, data pipelines, and deployed services.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                Based in <span className="text-white font-medium">{profile.location}</span>, gaining hands-on exposure to{' '}
                <span className="text-gold font-medium">Microsoft Dynamics 365 Business Central</span> client deployments,
                while maintaining an active open-source contribution record as a Frontend and Backend Contributor with OWASP BLT.
              </p>
            </Reveal>

            {/* Education cards */}
            <Reveal delay={0.15}>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: 'Master\'s', title: 'MCA — University of Calicut', sub: '2024–2026 · First Class with Distinction', icon: '🎓' },
                  { label: 'Bachelor\'s', title: 'B.Sc. Physics', sub: 'Sahrdaya College · First Class', icon: '⚛️' },
                ].map((e) => (
                  <div key={e.label}
                    className="p-5 rounded-xl glass border border-white/10 hover:border-cyan/30 transition-all duration-300 group card-glow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{e.icon}</span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted">{e.label}</span>
                    </div>
                    <p className="font-display text-white font-semibold group-hover:text-cyan transition-colors">{e.title}</p>
                    <p className="text-xs text-muted mt-1">{e.sub}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Highlights grid */}
            <Reveal delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-3">
                {highlights.map((h) => (
                  <div key={h.label}
                    className="flex items-start gap-3 p-4 rounded-xl glass border border-white/5 hover:border-gold/20 transition-all duration-300">
                    <span className="text-xl shrink-0 mt-0.5">{h.icon}</span>
                    <div>
                      <p className="font-display text-sm font-semibold text-white">{h.label}</p>
                      <p className="text-xs text-muted mt-0.5 leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
