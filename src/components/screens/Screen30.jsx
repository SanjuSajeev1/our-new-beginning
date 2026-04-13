import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "love",
  "text": "And that’s enough for me.",
  "screenNumber": 30
}

export default function Screen30(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
