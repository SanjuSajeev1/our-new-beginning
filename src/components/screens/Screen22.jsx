import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "love",
  "text": "I started liking you.",
  "screenNumber": 22
}

export default function Screen22(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
