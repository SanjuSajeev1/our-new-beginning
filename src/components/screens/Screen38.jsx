import { motion } from 'framer-motion'

export default function Screen38({ onNext, onBack, isFirst, isLast, direction }) {
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
        className="screen screen38-dual"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.98 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="screen38-single-card"
          initial={{ opacity: 0, y: 10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/images/screen38.jpeg"
            alt="screen 38 memory"
            className="screen38-card-image"
          />
          <img
            src="/images/screen399.jpeg"
            alt="screen 399 memory"
            className="screen38-card-image"
          />
        </motion.div>

        <p className="story-text">Your random texts</p>
        <p className="swipe-hint">Slide left for next, right for back</p>
      </motion.section>
    </>
  )
}
