import React, { Component } from 'react';
import logo from './logo.png';
import reload from './reload.png'
import './App.css';
import { Table } from 'reactstrap';
import { list } from "./config"

class App extends Component {
  state = {
    deuVisible: true,
    norVisible: true,
    vocabularyList: list[0]
  }

  render() {

    const visibleDeu = () => {
      this.setState({ deuVisible: !this.state.deuVisible })
    }

    const visibleNor = () => {
      this.setState({ norVisible: !this.state.norVisible })
    }

    const changeList = (list) => {
      let array = list
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      this.setState({ vocabularyList: array })
    }

    const tableContent = () => {

      return this.state.vocabularyList.map(item => (
        <tr>
          <th className="padding-top padding" scope="row">{this.state.vocabularyList.indexOf(item) + 1}</th>
          {this.state.deuVisible ? <td className="padding-top padding">{item.deu}</td> : <td></td>}
          {this.state.norVisible ? <td className="padding-top padding">{item.nor}</td> : <td></td>}
        </tr>
      )
      )
    }

    const setList = list => {
      this.setState({ vocabularyList: list })
    }

    const getButton = () => {
      return list.map(item => (
        <button className="buttonMenu" onClick={() => setList(item)}>Woche {list.indexOf(item) + 1}</button>
      ))
    }

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div>
              {getButton()}
            </div>
            <Table bordered>
              <thead>
                <tr>
                  <th>
                    <button className="button" onClick={() => changeList(this.state.vocabularyList)}>
                      <img src={reload} alt="logo" className="reload" />
                    </button>
                  </th>
                  <th className="paddingTableTwo"><button className="button" onClick={() => visibleDeu()}>Deutsch</button></th>
                  <th className="paddingTable"><button className="button" onClick={() => visibleNor()}>Norwegisch</button></th>
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
