import ScreenTemplate from "./ScreenTemplate";

const screenConfig = {
  mood: "love",
  text: "Not possible , Right??",
  screenNumber: 27,
  imageSrc: "/images/error.avif",
};

export default function Screen27(props) {
  return <ScreenTemplate {...screenConfig} {...props} />;
}
