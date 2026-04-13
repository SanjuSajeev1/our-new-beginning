import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "playful",
  "text": "I win 😌",
  "screenNumber": 42
}

export default function Screen42(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
