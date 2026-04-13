import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "confident",
  "text": "Real matters more than perfect.",
  "screenNumber": 19
}

export default function Screen19(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
