import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "love",
  "text": "I don’t need perfect.",
  "screenNumber": 26
}

export default function Screen26(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
