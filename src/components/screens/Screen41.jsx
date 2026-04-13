import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "playful",
  "text": "If you’re smiling right now...",
  "screenNumber": 41
}

export default function Screen41(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
