import ScreenTemplate from "./ScreenTemplate";

const screenConfig = {
  mood: "fun",
  text: "I see it.",
  screenNumber: 35,
  videoSrc: "/images/seeit.mp4",
  videoAutoPlay: false,
  videoMuted: true,
  bgMusicVolume: 0.2,
};

export default function Screen35(props) {
  return <ScreenTemplate {...screenConfig} {...props} />;
}
