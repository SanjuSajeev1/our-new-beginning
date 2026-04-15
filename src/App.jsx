import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./styles.css";
import { journeyPages } from "./components/screens";
import DiarySection from "./components/DiarySection";

function App() {
  const [screenIndex, setScreenIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showDiary, setShowDiary] = useState(false);
  const isBrightSlides = !showDiary && screenIndex >= 8;
  const isFinalPage = !showDiary && screenIndex === journeyPages.length - 1;
  const CurrentScreen = journeyPages[screenIndex];

  const nextScreen = () => {
    setDirection(1);
    setScreenIndex((prev) => Math.min(prev + 1, journeyPages.length - 1));
  };
  const previousScreen = () => {
    setDirection(-1);
    setScreenIndex((prev) => Math.max(prev - 1, 0));
  };
  const continueFromDiary = () => {
    setShowDiary(false);
    nextScreen();
  };

  useEffect(() => {
    if (showDiary) return;
    if (screenIndex !== 7) return;

    const timer = setTimeout(() => {
      setShowDiary(true);
    }, 1400);

    return () => clearTimeout(timer);
  }, [screenIndex, showDiary]);

  return (
    <main
      className={`app-shell ${showDiary ? "diary-mode" : ""} ${isBrightSlides ? "bright-mode" : ""} ${isFinalPage ? "final-scroll-mode" : ""}`}
    >
      <audio id="bgMusic" loop>
        <source src="/music1.mp3" type="audio/mpeg" />
      </audio>
      <AnimatePresence mode="wait">
        {showDiary ? (
          <DiarySection key="diary" onContinue={continueFromDiary} />
        ) : (
          <CurrentScreen
            key={screenIndex + 1}
            onBack={previousScreen}
            onNext={nextScreen}
            isFirst={screenIndex === 0}
            isLast={screenIndex === journeyPages.length - 1}
            direction={direction}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
