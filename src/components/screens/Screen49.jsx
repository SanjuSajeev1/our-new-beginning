import { motion } from 'framer-motion'

const flowers = [
  { id: 1, left: '8%', char: '❀', delay: 0.2, duration: 12.8 },
  { id: 2, left: '19%', char: '✿', delay: 0.9, duration: 13.1 },
  { id: 3, left: '33%', char: '❁', delay: 0.5, duration: 12.2 },
  { id: 4, left: '48%', char: '✽', delay: 1.2, duration: 13.4 },
  { id: 5, left: '62%', char: '✿', delay: 0.7, duration: 12.6 },
  { id: 6, left: '76%', char: '❀', delay: 1.5, duration: 13.7 },
  { id: 7, left: '90%', char: '❁', delay: 0.3, duration: 12.9 },
]

export default function Screen49({ onNext, onBack, isFirst, isLast, direction }) {
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
        className="screen screen49-floral"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.98 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="screen49-flowers" aria-hidden="true">
          {flowers.map((flower) => (
            <motion.span
              key={flower.id}
              className="screen49-flower"
              style={{ left: flower.left }}
              animate={{ y: [18, -122], x: [0, 8, -6, 0], rotate: [-6, 6, -4, 5], opacity: [0, 0.4, 0.25, 0] }}
              transition={{
                duration: flower.duration,
                delay: flower.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
            >
              {flower.char}
            </motion.span>
          ))}
        </div>

        <motion.p
          className="story-text screen49-text"
          initial={{ opacity: 0, y: 22, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: [1, 1.02, 1] }}
          transition={{
            opacity: { duration: 1.2, ease: 'easeOut' },
            y: { duration: 1.2, ease: 'easeOut' },
            scale: { duration: 4.4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' },
          }}
        >
          No excuses
        </motion.p>

        <p className="swipe-hint">Slide left for next, right for back</p>
      </motion.section>
    </>
  )
}
