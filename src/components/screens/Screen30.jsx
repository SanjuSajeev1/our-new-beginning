import ScreenTemplate from "./ScreenTemplate";

const screenConfig = {
  mood: "love",
  text: "And that’s enough for me. (I'll be your Peter Parker!!",
  screenNumber: 30,
  imageSrc: "/images/spider.jpg",
};

export default function Screen30(props) {
  return <ScreenTemplate {...screenConfig} {...props} />;
}
