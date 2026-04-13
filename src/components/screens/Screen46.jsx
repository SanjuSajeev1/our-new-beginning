import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "playful",
  "text": "Also...",
  "screenNumber": 46
}

export default function Screen46(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
