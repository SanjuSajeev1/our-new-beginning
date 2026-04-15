import ScreenTemplate from "./ScreenTemplate";

const screenConfig = {
  mood: "fun",
  text: "And yeah...",
  screenNumber: 33,
  imageSrc: "/images/try.webp",
};

export default function Screen33(props) {
  return <ScreenTemplate {...screenConfig} {...props} />;
}
