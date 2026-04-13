import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "playful",
  "text": "Deal? 😏",
  "screenNumber": 50
}

export default function Screen50(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
