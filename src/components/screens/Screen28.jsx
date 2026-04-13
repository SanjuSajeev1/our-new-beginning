import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "love",
  "text": "And with you...",
  "screenNumber": 28
}

export default function Screen28(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
