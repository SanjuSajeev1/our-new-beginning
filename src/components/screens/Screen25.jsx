import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "love",
  "text": "This moment...\nfelt peaceful.",
  "imageSrc": "/us.jpg",
  "screenNumber": 25
}

export default function Screen25(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
