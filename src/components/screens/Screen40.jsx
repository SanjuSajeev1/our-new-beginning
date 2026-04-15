import ScreenTemplate from "./ScreenTemplate";

const screenConfig = {
  mood: "fun",
  text: "I like that.",
  screenNumber: 40,
  imageSrc: "/images/yeah.png",
};

export default function Screen40(props) {
  return <ScreenTemplate {...screenConfig} {...props} />;
}
