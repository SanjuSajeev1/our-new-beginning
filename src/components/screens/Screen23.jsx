import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "love",
  "text": "Not loudly...",
  "screenNumber": 23
}

export default function Screen23(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
