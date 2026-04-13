import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "emotional",
  "text": "The way you texted…\n\nlike it actually mattered.\n\nAsking about my day…\nabout my family…\n\nasking me “Kaicho”…\n\n\nand calling me\nwhen I wasn’t okay.",
  "screenNumber": 6,
  "hideMedia": true,
  "lightweight": true
}

export default function Screen6(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
