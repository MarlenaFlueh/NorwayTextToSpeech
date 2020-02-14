import React from 'react'
import AudioPlayer from 'react-h5-audio-player'

const Music = () => (
    <AudioPlayer
        src={`https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=Katt&tl=no&total=1&idx=0&textlen=${4}`}
        onPlay={e => console.log("onPlay")}
    // other props here
    />
)

export default Music;