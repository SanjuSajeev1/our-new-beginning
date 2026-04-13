import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "emotional",
  "text": "Hey Bun… 🐰\n\nSlide… I made this for you →",
  "imageSrc": "/images/Screen1.png",
  "screenNumber": 1
}

export default function Screen1(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
