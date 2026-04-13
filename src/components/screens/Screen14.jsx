import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "confident",
  "text": "Your pace is okay.",
  "screenNumber": 14
}

export default function Screen14(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
