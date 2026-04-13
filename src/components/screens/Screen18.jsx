import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "confident",
  "text": "I just... choose you.",
  "screenNumber": 18
}

export default function Screen18(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
