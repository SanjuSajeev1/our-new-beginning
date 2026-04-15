import ScreenTemplate from "./ScreenTemplate";

const screenConfig = {
  mood: "love",
  text: "If I had a time machine… I’d go back and choose you even earlier.",
  screenNumber: 24,
  imageSrc: "/images/screen24.jpg",
};

export default function Screen24(props) {
  return <ScreenTemplate {...screenConfig} {...props} />;
}
