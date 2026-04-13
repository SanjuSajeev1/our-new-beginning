import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "emotional",
  "text": "I understand you... even in silence.",
  "screenNumber": 10
}

export default function Screen10(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
