import { useState } from "react";
import { motion } from "framer-motion";

const entries = [
  "okay so...\n\ni did not really expect any of this.\n\nbut somehow...\nyou became part of my day.",
  "some days were messy.\n\nsome days were too loud in my head.\n\nand still...\nyou felt like a calm place.",
  "the little check-ins,\nthe random texts,\nthe way you stayed.\n\nit quietly mattered.",
  "i am still figuring things out.\n\nbut one thing feels clear:\n\nyou feel different.",
  "if this is what comfort feels like...\n\ni want to keep it,\none soft day at a time.",
];

const nextPageEntries = [
  "i don’t really know where this is going…\n\nand i don’t want to rush it either.\n\ni just know…\n\ni like this.\n\nthe way it feels,\nthe way it’s been…\n\nwith you.\.",
];

const doodles = ["🙂", "❤️", "→", "✦", "↗"];

export default function DiarySection({ onContinue }) {
  const [page, setPage] = useState(1);
  const currentEntries = page === 1 ? entries : nextPageEntries;
  const handleNext = () => {
    if (page === 1) {
      setPage(2);
      return;
    }
    onContinue?.();
  };

  return (
    <motion.section
      className="diary-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="diary-sheet">
        <h1 className="diary-title">my little diary</h1>
        {currentEntries.map((entry, idx) => (
          <motion.article
            key={`${page}-${entry}`}
            className="diary-entry"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.18 }}
          >
            <p>{entry}</p>
            <span className="doodle doodle-a">
              {doodles[idx % doodles.length]}
            </span>
            <span className="doodle doodle-b">
              {doodles[(idx + 2) % doodles.length]}
            </span>
          </motion.article>
        ))}
        <motion.button
          type="button"
          className="diary-next-button"
          onClick={handleNext}
          whileTap={{ scale: 0.97 }}
        >
          {page === 1 ? "next page" : "continue"}
        </motion.button>
      </div>
    </motion.section>
  );
}
