import { useEffect, useRef } from 'react'
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
  imageContain,
  videoSrc,
  videoAutoPlay,
  videoMuted,
  videoPoster,
  bgMusicVolume,
  pauseBgMusic,
  hideMedia,
  onNext,
  onBack,
  isFirst,
  isLast,
  direction,
  lightweight,
}) {
  const localImageSrc = imageSrc || `/images/screen${screenNumber}.jpg`
  const resolvedVideoMuted = typeof videoMuted === 'boolean' ? videoMuted : videoAutoPlay
  const swipeThreshold = 60
  const transitionDuration = lightweight ? 0.45 : 0.8
  const dragElastic = lightweight ? 0.08 : 0.2
  const videoRef = useRef(null)

  useEffect(() => {
    if (typeof bgMusicVolume !== 'number') return
    const bgMusic = document.getElementById('bgMusic')
    if (!bgMusic) return

    const previousVolume = bgMusic.volume
    bgMusic.volume = bgMusicVolume

    return () => {
      bgMusic.volume = previousVolume
    }
  }, [bgMusicVolume])

  useEffect(() => {
    if (!pauseBgMusic) return
    const bgMusic = document.getElementById('bgMusic')
    if (!bgMusic) return

    const wasPausedBefore = bgMusic.paused
    bgMusic.pause()

    return () => {
      if (wasPausedBefore) return
      bgMusic.play().catch(() => {})
    }
  }, [pauseBgMusic])

  useEffect(() => {
    if (!videoAutoPlay) return
    const video = videoRef.current
    if (!video) return

    const playAttempt = video.play()
    if (playAttempt && typeof playAttempt.catch === 'function') {
      playAttempt.catch(() => {
        video.muted = true
        video.play().catch(() => {})
      })
    }

    const enableAudioOnFirstInteraction = () => {
      video.muted = false
      video.volume = 1
      video.play().catch(() => {})
      window.removeEventListener('touchstart', enableAudioOnFirstInteraction)
      window.removeEventListener('pointerdown', enableAudioOnFirstInteraction)
      window.removeEventListener('click', enableAudioOnFirstInteraction)
    }

    window.addEventListener('touchstart', enableAudioOnFirstInteraction, { once: true })
    window.addEventListener('pointerdown', enableAudioOnFirstInteraction, { once: true })
    window.addEventListener('click', enableAudioOnFirstInteraction, { once: true })

    return () => {
      window.removeEventListener('touchstart', enableAudioOnFirstInteraction)
      window.removeEventListener('pointerdown', enableAudioOnFirstInteraction)
      window.removeEventListener('click', enableAudioOnFirstInteraction)
    }
  }, [videoAutoPlay, resolvedVideoMuted])

  useEffect(() => {
    if (!videoSrc) return
    const video = videoRef.current
    const bgMusic = document.getElementById('bgMusic')
    if (!video || !bgMusic) return

    const resumeBackgroundMusic = () => {
      if (!bgMusic.paused) return
      bgMusic.play().catch(() => {})
    }

    video.addEventListener('ended', resumeBackgroundMusic)
    video.addEventListener('pause', resumeBackgroundMusic)

    return () => {
      video.removeEventListener('ended', resumeBackgroundMusic)
      video.removeEventListener('pause', resumeBackgroundMusic)
      resumeBackgroundMusic()
    }
  }, [videoSrc])

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
            ref={videoRef}
            className="media media-video"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src={videoSrc}
            poster={videoPoster}
            controls={!videoAutoPlay}
            autoPlay={videoAutoPlay}
            muted={resolvedVideoMuted}
            loop={videoAutoPlay}
            playsInline={videoAutoPlay}
          />
        ) : (
          <motion.img
            src={localImageSrc}
            alt={`${mood} journey illustration`}
            className={`media media-image ${imageContain ? 'media-image-contain' : ''}`}
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
