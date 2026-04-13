import { motion } from 'framer-motion'

const moodFallbacks = {
  emotional: 'https://source.unsplash.com/featured/?sad,anime,couple',
  confident: 'https://source.unsplash.com/featured/?calm,anime,couple',
  love: 'https://source.unsplash.com/featured/?romantic,illustration',
  fun: 'https://source.unsplash.com/featured/?cute,anime,couple',
  playful: 'https://source.unsplash.com/featured/?playful,anime,couple',
}

export default function ScreenTemplate({
  mood,
  text,
  screenNumber,
  imageSrc,
  videoSrc,
  hideMedia,
  onNext,
  onBack,
  isFirst,
  isLast,
  direction,
  lightweight,
}) {
  const localImageSrc = imageSrc || `/images/screen${screenNumber}.jpg`
  const swipeThreshold = 60
  const transitionDuration = lightweight ? 0.45 : 0.8
  const dragElastic = lightweight ? 0.08 : 0.2

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -swipeThreshold && !isLast) {
      onNext()
    } else if (info.offset.x > swipeThreshold && !isFirst) {
      onBack()
    }
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
        className="screen"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={dragElastic}
        onDragEnd={handleDragEnd}
        initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.98 }}
        transition={{ duration: transitionDuration, ease: 'easeOut' }}
      >
        {hideMedia ? null : videoSrc ? (
          <motion.video
            className="media media-video"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src={videoSrc}
            controls
          />
        ) : (
          <motion.img
            src={localImageSrc}
            alt={`${mood} journey illustration`}
            className="media media-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            onError={(event) => {
              event.currentTarget.src = moodFallbacks[mood]
            }}
          />
        )}

        <p className="story-text">{text}</p>
        <p className="swipe-hint">Slide left for next, right for back</p>
      </motion.section>
    </>
  )
}
