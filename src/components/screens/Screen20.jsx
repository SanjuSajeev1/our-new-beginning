import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "confident",
  "text": "We’ll figure it out slowly.",
  "screenNumber": 20
}

export default function Screen20(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
