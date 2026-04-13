import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "fun",
  "text": "Your reactions 😂",
  "screenNumber": 37
}

export default function Screen37(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
