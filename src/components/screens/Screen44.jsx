import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "playful",
  "text": "You smiled.",
  "screenNumber": 44,
  "imageSrc": "/images/screen44.jpeg"
}

export default function Screen44(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
