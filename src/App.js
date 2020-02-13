import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Table } from 'reactstrap';
import { list } from "./config"

class App extends Component {
  state = {
    deuVisible: true,
    norVisible: true
  }

  render() {

    const checkWord = (word) => {
      return word.split("").map(item => item === " " ? "%20" : item).join("")
    }

    function readText(word) {
      const audio = new Audio();
      audio.src = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=${checkWord(word)}&tl=no&total=1&idx=0&textlen=${word.length}`;
      audio.addEventListener("canplaythrough", (event) => {
        audio.play()
      })
    }

    const visibleDeu = () => {
      this.setState({ deuVisible: !this.state.deuVisible })
    }

    const visibleNor = () => {
      this.setState({ norVisible: !this.state.norVisible })
    }

    const tableContent = () => {

      return list.map(item => (
        <tr>
          <th className="padding-top" scope="row">{list.indexOf(item) + 1}</th>
          {this.state.deuVisible ? <td className="padding-top">{item.deu}</td> : <td></td>}
          {this.state.norVisible ? <td className="padding-top">{item.nor}</td> : <td></td>}
          <button className="volumeButton" onClick={() => readText(item.speech)}>🔊</button>
        </tr>
      )
      )
    }

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Table bordered>
              <thead>
                <tr>
                  <th></th>
                  <th className="padding"><button className="button" onClick={() => visibleDeu()}>Deutsch</button></th>
                  <th className="padding"><button className="button" onClick={() => visibleNor()}>Norwegisch</button></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {tableContent()}
              </tbody>
            </Table>
          </header>
        </div>
      </div>
    )
  }
}

export default App;
