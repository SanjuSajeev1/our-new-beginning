import ScreenTemplate from "./ScreenTemplate";

const screenConfig = {
  mood: "playful",
  text: "If you’re smiling right now...",
  screenNumber: 41,
  imageSrc: "/images/smile.jpg",
};

export default function Screen41(props) {
  return <ScreenTemplate {...screenConfig} {...props} />;
}
