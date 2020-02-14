import React, { Component } from 'react'

class Music extends Component {
    state = {
        play: false
    }
    audio = new Audio(`https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=Katt&tl=no&total=1&idx=0&textlen=${4}`)

    componentDidMount() {
        this.audio.addEventListener('ended', () => this.setState({ play: false }));
    }

    componentWillUnmount() {
        this.audio.removeEventListener('ended', () => this.setState({ play: false }));
    }

    togglePlay = () => {
        this.setState({ play: !this.state.play }, () => {
            this.state.play ? this.audio.play() : this.audio.pause();
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
            </div>
        );
    }
}

export default Music;