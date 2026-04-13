import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "fun",
  "text": "I like that.",
  "screenNumber": 40
}

export default function Screen40(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
