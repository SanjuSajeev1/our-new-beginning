import { motion } from "framer-motion";

const lines = [
  "Every small thing...",
  "made me feel special.",
  "And with you...",
  "I felt like I mattered.",
];

const particles = [
  { id: 1, left: "16%", delay: 0.2, duration: 8.8 },
  { id: 2, left: "28%", delay: 0.9, duration: 9.4 },
  { id: 3, left: "42%", delay: 1.4, duration: 8.2 },
  { id: 4, left: "57%", delay: 0.6, duration: 9.6 },
  { id: 5, left: "69%", delay: 1.8, duration: 8.9 },
  { id: 6, left: "81%", delay: 1.1, duration: 9.8 },
];

export default function Screen7({
  onNext,
  onBack,
  isFirst,
  isLast,
  direction,
}) {
  const swipeThreshold = 60;

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -swipeThreshold && !isLast) onNext();
    if (info.offset.x > swipeThreshold && !isFirst) onBack();
  };

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
        className="screen screen7-warm"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.18}
        onDragEnd={handleDragEnd}
        initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: [1, 1.02] }}
        exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.98 }}
        transition={{
          opacity: { duration: 0.8, ease: "easeOut" },
          x: { duration: 0.8, ease: "easeOut" },
          scale: { duration: 5, ease: "linear" },
        }}
      >
        <motion.div
          className="screen7-glow"
          aria-hidden="true"
          animate={{ scale: [1, 1.05, 1], opacity: [0.14, 0.2, 0.14] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="screen7-particles" aria-hidden="true">
          {particles.map((particle) => (
            <motion.span
              key={particle.id}
              className="screen7-particle"
              style={{ left: particle.left }}
              animate={{ y: [0, -14, 0], opacity: [0.1, 0.2, 0.1] }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="screen7-text-wrap">
          {lines.map((line, index) => (
            <motion.p
              key={line}
              className="story-text screen7-text"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.52,
                ease: "easeOut",
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <p className="swipe-hint">Slide left for next, right for back</p>
      </motion.section>
    </>
  );
}
