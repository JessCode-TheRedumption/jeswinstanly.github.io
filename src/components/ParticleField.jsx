import { useEffect, useRef } from 'react'

export default function ParticleField({ count = 60, className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animId
    let W, H
    const particles = []

    const resize = () => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    class Particle {
      constructor() { this.reset(true) }
      reset(initial = false) {
        this.x = Math.random() * W
        this.y = initial ? Math.random() * H : H + 10
        this.r = Math.random() * 1.5 + 0.3
        this.speed = Math.random() * 0.4 + 0.15
        this.drift = (Math.random() - 0.5) * 0.3
        this.alpha = Math.random() * 0.5 + 0.1
        this.color = Math.random() > 0.5 ? '79,209,197' : '227,168,59'
        this.pulse = Math.random() * Math.PI * 2
        this.pulseSpeed = Math.random() * 0.02 + 0.01
      }
      update() {
        this.y -= this.speed
        this.x += this.drift
        this.pulse += this.pulseSpeed
        this.alpha = (Math.sin(this.pulse) * 0.25 + 0.35)
        if (this.y < -10) this.reset()
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${this.color},${this.alpha})`
        ctx.fill()
      }
    }

    resize()
    for (let i = 0; i < count; i++) particles.push(new Particle())

    const loop = () => {
      ctx.clearRect(0, 0, W, H)
      for (const p of particles) { p.update(); p.draw() }
      animId = requestAnimationFrame(loop)
    }

    loop()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden
    />
  )
}
