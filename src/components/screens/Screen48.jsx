import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "playful",
  "text": "When we meet",
  "screenNumber": 48
}

export default function Screen48(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
