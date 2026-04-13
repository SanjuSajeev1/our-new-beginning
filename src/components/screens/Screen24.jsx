import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "love",
  "text": "But in a calm way.",
  "screenNumber": 24
}

export default function Screen24(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
