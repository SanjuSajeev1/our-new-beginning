import ScreenTemplate from './ScreenTemplate'

const screenConfig = {
  "mood": "emotional",
  "text": "Okay…\n\nthis might be a little random 🙂\n\nDon’t judge me…\nthis is just me.",
  "imageSrc": "/images/Screen2.png",
  "screenNumber": 2
}

export default function Screen2(props) {
  return <ScreenTemplate {...screenConfig} {...props} />
}
