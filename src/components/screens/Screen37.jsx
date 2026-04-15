import ScreenTemplate from "./ScreenTemplate";

const screenConfig = {
  mood: "fun",
  text: "Your reactions 😂",
  screenNumber: 37,
  videoSrc: "/images/reaction.mp4",
  videoAutoPlay: true,
};

export default function Screen37(props) {
  return <ScreenTemplate {...screenConfig} {...props} />;
}
