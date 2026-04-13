import { motion } from 'framer-motion'

const finalEntry = `hey…

if you made it till here,
that already means something to me 🙂

i don’t have everything figured out…

but i know this felt real.

and i’d like to keep it that way…
slow, simple, and honest.

no pressure,
no rush…

just… us,
figuring things out one day at a time.

with love,
your chutttuuuuu 💛`

export default function Screen52({ onBack, isFirst, direction }) {
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
        className="diary-page screen52-diary-page"
        initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.98 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="diary-sheet">
          <h1 className="diary-title">my little diary</h1>
          <motion.article
            className="diary-entry"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p>{finalEntry}</p>
            <span className="doodle doodle-a">💛</span>
            <span className="doodle doodle-b">✦</span>
          </motion.article>
        </div>
      </motion.section>
    </>
  )
}
