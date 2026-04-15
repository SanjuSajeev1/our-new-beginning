import { motion } from 'framer-motion'

const particles = [
  { id: 1, left: '11%', top: '16%', delay: 0.1, duration: 11 },
  { id: 2, left: '23%', top: '42%', delay: 0.6, duration: 12.5 },
  { id: 3, left: '38%', top: '24%', delay: 1.2, duration: 10.5 },
  { id: 4, left: '52%', top: '38%', delay: 0.4, duration: 11.8 },
  { id: 5, left: '67%', top: '20%', delay: 0.9, duration: 12.2 },
  { id: 6, left: '82%', top: '44%', delay: 0.2, duration: 10.8 },
  { id: 7, left: '18%', top: '62%', delay: 1.4, duration: 11.4 },
  { id: 8, left: '76%', top: '58%', delay: 0.7, duration: 12 },
]

const LINE1_DURATION = 1.5
const PAUSE = 0.8
const LINE2_START = LINE1_DURATION + PAUSE
const LINE2_DURATION = 1.8
const BREATHING_START = LINE2_START + LINE2_DURATION
const OVERTHINKING_EXTRA_DELAY = 0.2

export default function Screen22({ onNext, onBack, isFirst, isLast, direction }) {
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
        className="screen screen22-romance"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.98 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <div className="screen22-particles" aria-hidden="true">
          {particles.map((p) => (
            <motion.span
              key={p.id}
              className="screen22-particle"
              style={{ left: p.left, top: p.top }}
              animate={{
                x: [0, 10, -8, 6, 0],
                y: [0, -8, 6, -5, 0],
                opacity: [0.12, 0.28, 0.18, 0.22, 0.12],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <motion.div
          className="screen22-text-wrap"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{
            duration: 5,
            delay: BREATHING_START,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        >
          <motion.p
            className="screen22-line1 screen22-line-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              opacity: { duration: LINE1_DURATION, ease: 'easeInOut' },
              y: { duration: LINE1_DURATION, ease: 'easeInOut' },
            }}
          >
            The timing isn’t wrong…
          </motion.p>

          <motion.p
            className="screen22-line2 screen22-line-glow"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              opacity: { delay: LINE2_START, duration: LINE2_DURATION, ease: 'easeInOut' },
              scale: { delay: LINE2_START, duration: LINE2_DURATION, ease: 'easeInOut' },
              y: { delay: LINE2_START, duration: LINE2_DURATION, ease: 'easeInOut' },
            }}
          >
            it’s just us{' '}
            <motion.span
              className="screen22-line2-emphasis"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: LINE2_START + OVERTHINKING_EXTRA_DELAY,
                duration: 1.45,
                ease: 'easeInOut',
              }}
            >
              overthinking
            </motion.span>
            {' '}
            something right.
          </motion.p>
        </motion.div>

        <motion.div
          className="screen22-glow-pulse"
          aria-hidden="true"
          animate={{
            opacity: [0.15, 0.28, 0.15],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 3.2,
            delay: BREATHING_START,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        />

        <p className="swipe-hint">Slide left for next, right for back</p>
      </motion.section>
    </>
  )
}
