import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "fun",
  "text": "You overthink too much 😏",
  "screenNumber": 34,
  "videoSrc": "/images/screen34.mp4",
  "videoAutoPlay": true
}

export default function Screen34(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
