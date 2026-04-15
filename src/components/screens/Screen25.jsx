import ScreenTemplate from "./ScreenTemplate";

const screenConfig = {
  mood: "love",
  text: "You at this age? As Lil Kummmmuu ?",
  imageSrc: "/images/screen25.jpeg",
  screenNumber: 25,
};

export default function Screen25(props) {
  return <ScreenTemplate {...screenConfig} {...props} />;
}
