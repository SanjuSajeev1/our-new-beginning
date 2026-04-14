import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "fun",
  "text": "I see it.",
  "screenNumber": 35,
  "videoSrc": "/images/screen35.mp4"
}

export default function Screen35(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
