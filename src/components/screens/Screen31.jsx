import ScreenTemplate from "./ScreenTemplate";

const screenConfig = {
  mood: "fun",
  text: "Okay but also...",
  screenNumber: 31,
  imageSrc: "/images/bualso.jpeg",
};

export default function Screen31(props) {
  return <ScreenTemplate {...screenConfig} {...props} />;
}
