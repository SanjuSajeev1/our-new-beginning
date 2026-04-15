import { motion } from 'framer-motion'

const flowers = [
  { id: 1, left: '10%', char: '✿', delay: 0.1, duration: 12.5 },
  { id: 2, left: '24%', char: '❀', delay: 0.8, duration: 13.2 },
  { id: 3, left: '41%', char: '✽', delay: 0.4, duration: 11.8 },
  { id: 4, left: '58%', char: '❁', delay: 1.1, duration: 12.9 },
  { id: 5, left: '74%', char: '✿', delay: 0.6, duration: 13.6 },
  { id: 6, left: '88%', char: '❀', delay: 1.4, duration: 12.1 },
]

export default function Screen46({ onNext, onBack, isFirst, isLast, direction }) {
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
        className="screen screen46-floral"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.98 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="screen46-flowers" aria-hidden="true">
          {flowers.map((flower) => (
            <motion.span
              key={flower.id}
              className="screen46-flower"
              style={{ left: flower.left }}
              animate={{ y: [18, -120], x: [0, 7, -5, 0], rotate: [-5, 5, -3, 4], opacity: [0, 0.38, 0.24, 0] }}
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
          className="story-text screen46-text"
          initial={{ opacity: 0, y: 22, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: [1, 1.02, 1] }}
          transition={{
            opacity: { duration: 1.2, ease: 'easeOut' },
            y: { duration: 1.2, ease: 'easeOut' },
            scale: { duration: 4.4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' },
          }}
        >
          Also...
        </motion.p>

        <p className="swipe-hint">Slide left for next, right for back</p>
      </motion.section>
    </>
  )
}
