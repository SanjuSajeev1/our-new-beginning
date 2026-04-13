import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Screen3({ onNext, onBack, isFirst, isLast, direction }) {
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleContinue = () => {
    if (isTransitioning) return
    setIsTransitioning(true)

    const audio = document.getElementById('bgMusic')
    if (audio && audio.paused) {
      audio.volume = 0
      audio.play().catch(() => {})

      let vol = 0
      const fade = setInterval(() => {
        if (vol < 0.2) {
          vol += 0.02
          audio.volume = Math.min(vol, 0.2)
          return
        }
        clearInterval(fade)
      }, 200)
    }

    setTimeout(() => {
      onNext()
      setIsTransitioning(false)
    }, 300)
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
        className="screen screen3-center"
        initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.98 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="story-text">
          I remember where it all started...
          {'\n\n'}
          At a time when I wasn't really okay...
          {'\n\n'}
          and everything felt a little too much.
        </p>

        <motion.button
          className="nav-button continue-button"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
          whileHover={{ opacity: 1, scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleContinue}
          disabled={isTransitioning}
        >
          continue →
        </motion.button>
      </motion.section>
    </>
  )
}
