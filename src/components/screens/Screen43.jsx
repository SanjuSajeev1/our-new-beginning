import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "playful",
  "text": "Don’t lie.",
  "screenNumber": 43
}

export default function Screen43(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
