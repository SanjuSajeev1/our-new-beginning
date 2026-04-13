import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "playful",
  "text": "You owe me one smile",
  "screenNumber": 47
}

export default function Screen47(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
