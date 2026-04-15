import ScreenTemplate from "./ScreenTemplate";

const screenConfig = {
  mood: "fun",
  text: "You being you",
  screenNumber: 39,
  videoSrc: "/images/screen39.mp4",
  videoAutoPlay: true,
  videoMuted: false,
  pauseBgMusic: true,
};

export default function Screen39(props) {
  return <ScreenTemplate {...screenConfig} {...props} />;
}
