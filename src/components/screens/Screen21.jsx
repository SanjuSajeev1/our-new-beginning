import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "love",
  "text": "Somewhere along the way...",
  "screenNumber": 21
}

export default function Screen21(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
