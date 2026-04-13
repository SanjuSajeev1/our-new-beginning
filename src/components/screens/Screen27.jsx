import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "love",
  "text": "I just need something real.",
  "screenNumber": 27
}

export default function Screen27(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
