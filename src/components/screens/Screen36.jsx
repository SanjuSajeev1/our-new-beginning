import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "fun",
  "text": "But it’s kinda cute.",
  "screenNumber": 36,
  "videoSrc": "/images/screen35.mp4",
  "videoAutoPlay": true
}

export default function Screen36(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
