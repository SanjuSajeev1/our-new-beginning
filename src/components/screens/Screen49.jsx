import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "playful",
  "text": "No excuses",
  "screenNumber": 49
}

export default function Screen49(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
