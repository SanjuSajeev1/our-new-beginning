import ScreenTemplate from "./ScreenTemplate";

const screenConfig = {
  mood: "love",
  text: "And me as little chuttu?.",
  screenNumber: 26,
  imageSrc: "/images/screen26.jpeg",
};

export default function Screen26(props) {
  return <ScreenTemplate {...screenConfig} {...props} />;
}
