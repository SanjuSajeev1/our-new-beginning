import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "fun",
  "text": "Your random texts",
  "screenNumber": 38
}

export default function Screen38(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
