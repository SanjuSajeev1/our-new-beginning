import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "confident",
  "text": "I’m not here to fix you.",
  "screenNumber": 17
}

export default function Screen17(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
