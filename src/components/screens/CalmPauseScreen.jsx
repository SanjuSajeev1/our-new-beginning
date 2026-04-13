import { motion } from 'framer-motion'

const particles = [
  { id: 1, left: '18%', delay: 0.2, duration: 8.8 },
  { id: 2, left: '32%', delay: 1.4, duration: 9.4 },
  { id: 3, left: '45%', delay: 0.9, duration: 7.9 },
  { id: 4, left: '58%', delay: 1.8, duration: 9.8 },
  { id: 5, left: '70%', delay: 0.6, duration: 8.6 },
  { id: 6, left: '82%', delay: 2.1, duration: 10.1 },
]

export default function CalmPauseScreen({ onNext, onBack, isFirst, isLast, direction }) {
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
        className="screen calm-pause-screen"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.97 }}
        animate={{ opacity: 1, x: 0, scale: [1, 1.02] }}
        exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.97 }}
        transition={{ opacity: { duration: 1.05, ease: 'easeOut' }, x: { duration: 0.9, ease: 'easeOut' }, scale: { duration: 5, ease: 'linear' } }}
      >
        <div className="calm-particles" aria-hidden="true">
          {particles.map((particle) => (
            <motion.span
              key={particle.id}
              className="calm-particle"
              style={{ left: particle.left }}
              animate={{ y: [0, -16, 0], opacity: [0.1, 0.2, 0.1] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: particle.duration,
                delay: particle.delay,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <div className="calm-glow" aria-hidden="true" />

        <motion.img
          src="/images/Screen5.png"
          alt="Calm emotional illustration"
          className="media media-image"
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />

        <motion.p
          className="story-text calm-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          Not doing anything big...
          {'\n'}
          just being there.
        </motion.p>

        <p className="swipe-hint">Slide left for next, right for back</p>
      </motion.section>
    </>
  )
}
