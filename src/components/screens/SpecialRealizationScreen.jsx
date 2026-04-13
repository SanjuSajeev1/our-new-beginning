import { motion } from 'framer-motion'

const particles = [
  { id: 1, left: '14%', delay: 0.2, duration: 9.2 },
  { id: 2, left: '24%', delay: 0.9, duration: 8.8 },
  { id: 3, left: '36%', delay: 1.4, duration: 9.9 },
  { id: 4, left: '48%', delay: 0.6, duration: 8.6 },
  { id: 5, left: '61%', delay: 1.7, duration: 9.4 },
  { id: 6, left: '72%', delay: 1.1, duration: 10.1 },
  { id: 7, left: '83%', delay: 0.4, duration: 9.6 },
  { id: 8, left: '90%', delay: 1.9, duration: 8.9 },
]

export default function SpecialRealizationScreen({
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
        className="screen screen8-special"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.16}
        onDragEnd={handleDragEnd}
        initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: [1, 1.02] }}
        exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.98 }}
        transition={{
          opacity: { duration: 0.8, ease: 'easeOut' },
          x: { duration: 0.8, ease: 'easeOut' },
          scale: { duration: 6, ease: 'linear' },
        }}
      >
        <motion.div
          className="screen8-glow"
          aria-hidden="true"
          animate={{ scale: [1, 1.05, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{
            duration: 4.8,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        />

        <div className="screen8-particles" aria-hidden="true">
          {particles.map((particle) => (
            <motion.span
              key={particle.id}
              className="screen8-particle"
              style={{ left: particle.left }}
              animate={{ y: [0, -16, 0], opacity: [0.1, 0.2, 0.1] }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <div className="screen8-text-wrap">
          <motion.p
            className="screen8-line-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            You were... different.
          </motion.p>

          <motion.p
            className="screen8-line-2"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            In a way I didn’t expect.
          </motion.p>
        </div>

        <p className="swipe-hint">Slide left for next, right for back</p>
      </motion.section>
    </>
  )
}
