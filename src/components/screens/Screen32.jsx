import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "fun",
  "text": "You’re actually funny sometimes 😌",
  "screenNumber": 32,
  "videoSrc": "/images/screen32.mp4",
  "videoAutoPlay": true
}

export default function Screen32(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
