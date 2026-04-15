import { motion } from "framer-motion";

const hearts = [
  {
    id: 1,
    left: "8%",
    delay: 0.1,
    duration: 10,
    size: "0.7rem",
    color: "#ff8fab",
  },
  {
    id: 2,
    left: "14%",
    delay: 0.8,
    duration: 11.2,
    size: "0.95rem",
    color: "#ff758f",
  },
  {
    id: 3,
    left: "21%",
    delay: 1.4,
    duration: 9.6,
    size: "0.8rem",
    color: "#ff9eb5",
  },
  {
    id: 4,
    left: "29%",
    delay: 0.4,
    duration: 10.8,
    size: "1rem",
    color: "#ff6f91",
  },
  {
    id: 5,
    left: "37%",
    delay: 1.1,
    duration: 12.1,
    size: "0.75rem",
    color: "#ffb3c6",
  },
  {
    id: 6,
    left: "45%",
    delay: 0.6,
    duration: 9.9,
    size: "0.9rem",
    color: "#ff8fab",
  },
  {
    id: 7,
    left: "52%",
    delay: 1.7,
    duration: 11.5,
    size: "0.7rem",
    color: "#ff7a9b",
  },
  {
    id: 8,
    left: "60%",
    delay: 0.2,
    duration: 10.4,
    size: "1rem",
    color: "#ff8fa3",
  },
  {
    id: 9,
    left: "67%",
    delay: 1.3,
    duration: 11.8,
    size: "0.85rem",
    color: "#ff95b1",
  },
  {
    id: 10,
    left: "74%",
    delay: 0.5,
    duration: 9.7,
    size: "0.72rem",
    color: "#ff6f91",
  },
  {
    id: 11,
    left: "81%",
    delay: 1.6,
    duration: 12.3,
    size: "0.92rem",
    color: "#ffb7cf",
  },
  {
    id: 12,
    left: "89%",
    delay: 0.9,
    duration: 10.9,
    size: "0.78rem",
    color: "#ff8fab",
  },
];

const sparkles = [
  { id: 1, left: "18%", top: "22%", delay: 0.2, duration: 9.6 },
  { id: 2, left: "33%", top: "34%", delay: 1.1, duration: 10.4 },
  { id: 3, left: "49%", top: "26%", delay: 0.6, duration: 11.2 },
  { id: 4, left: "64%", top: "40%", delay: 1.4, duration: 9.8 },
  { id: 5, left: "79%", top: "30%", delay: 0.8, duration: 10.9 },
];

export default function Screen28({
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
        className="screen screen28-romance"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.12}
        onDragEnd={handleDragEnd}
        initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.98 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.div className="screen28-center-glow" aria-hidden="true" />

        <div className="screen28-hearts" aria-hidden="true">
          {hearts.map((heart) => (
            <motion.span
              key={heart.id}
              className="screen28-heart"
              style={{
                left: heart.left,
                fontSize: heart.size,
                color: heart.color,
              }}
              animate={{
                y: [22, -160],
                x: [0, 8, -6, 4, 0],
                rotate: [-7, 6, -4, 3],
                opacity: [0, 0.5, 0.28, 0],
              }}
              transition={{
                duration: heart.duration,
                delay: heart.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              ❤
            </motion.span>
          ))}
        </div>

        <div className="screen28-sparkles" aria-hidden="true">
          {sparkles.map((sparkle) => (
            <motion.span
              key={sparkle.id}
              className="screen28-sparkle"
              style={{ left: sparkle.left, top: sparkle.top }}
              animate={{
                opacity: [0.1, 0.25, 0.12],
                y: [0, -4, 0],
                x: [0, 3, -2, 0],
              }}
              transition={{
                duration: sparkle.duration,
                delay: sparkle.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <motion.p
          className="screen28-text"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: [1, 1.02, 1] }}
          transition={{
            opacity: { duration: 1.5, delay: 0.5, ease: "easeInOut" },
            scale: {
              duration: 4.8,
              delay: 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        >
          But with you
        </motion.p>

        <p className="swipe-hint">Slide left for next, right for back</p>
      </motion.section>
    </>
  );
}
