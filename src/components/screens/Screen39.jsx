import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "fun",
  "text": "You being you",
  "screenNumber": 39
}

export default function Screen39(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
