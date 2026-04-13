import { motion } from 'framer-motion'

const petals = Array.from({ length: 18 }, (_, index) => ({
  id: index + 1,
  left: `${(index * 5.35 + 3) % 100}%`,
  delay: (index % 7) * 0.55,
  duration: 6 + (index % 7) * 0.9,
  size: `${0.65 + (index % 5) * 0.15}rem`,
  drift: -26 + (index % 6) * 10,
  startY: -130 - (index % 5) * 25,
  opacity: 0.2 + (index % 5) * 0.08,
}))

export default function HeroMoment({
  onNext,
  onBack,
  isFirst,
  isLast,
  direction,
}) {
  const swipeThreshold = 60

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -swipeThreshold && !isLast) onNext()
    if (info.offset.x > swipeThreshold && !isFirst) onBack()
  }

  return (
    <>
      <motion.button
        className="nav-button back-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.25 }}
        onClick={onBack}
        disabled={isFirst}
      >
        ← Back
      </motion.button>
      <motion.section
        className="screen hero-moment-screen"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.98 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="hero-flowers" aria-hidden="true">
          {petals.map((petal) => (
            <motion.span
              key={petal.id}
              className="hero-flower"
              style={{ left: petal.left, fontSize: petal.size }}
              initial={{ y: petal.startY }}
              animate={{
                y: ['-8vh', '105vh'],
                x: [0, petal.drift, -petal.drift * 0.5, 0],
                rotate: [0, 40, -30, 10],
                opacity: [petal.opacity * 0.25, petal.opacity, petal.opacity * 0.55],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: petal.duration,
                delay: petal.delay,
                ease: 'linear',
              }}
            >
              🌸
            </motion.span>
          ))}
        </div>
        <div className="hero-particles" aria-hidden="true" />

        <div className="hero-glow" aria-hidden="true" />

        <div className="hero-text-wrap">
          <motion.p
            className="hero-line hero-line-soft"
            initial={{ opacity: 0, y: 24, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1.02 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            And then...
          </motion.p>
          <motion.p
            className="hero-line hero-line-strong"
            initial={{ opacity: 0, y: 24, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1.04 }}
            transition={{ duration: 0.8, delay: 0.62, ease: 'easeOut' }}
          >
            there was{' '}
            <motion.span
              className="hero-you"
              initial={{ opacity: 0, scale: 1 }}
              animate={{
                opacity: 1,
                scale: [1, 1.1, 1],
                textShadow: [
                  '0 0 0 rgba(255,255,255,0)',
                  '0 0 22px rgba(255,255,255,0.65)',
                  '0 0 8px rgba(255,255,255,0.35)',
                ],
              }}
              transition={{ duration: 1.2, delay: 0.9, ease: 'easeOut' }}
            >
              YOU.
            </motion.span>
          </motion.p>
        </div>

        <p className="swipe-hint">Slide left for next, right for back</p>
      </motion.section>
    </>
  )
}
