import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "love",
  "text": "It feels real.",
  "screenNumber": 29,
  "imageSrc": "/images/screen29.png"
}

export default function Screen29(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
