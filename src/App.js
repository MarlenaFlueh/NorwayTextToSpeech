import React, { Component } from 'react';
import logo from './logo.png';
import reload from './reload.png'
import './App.css';
import { Table } from 'reactstrap';
import { list, verbs } from "./config"

class App extends Component {
  state = {
    deuVisible: true,
    norVisible: true,
    infinitivVisible: true,
    präsensVisible: false,
    verbDeuVisible: true,
    präteritumVisible: false,
    perfectVisible: false,
    vocabularyList: list[0],
    weeksVisible: true,
    activeTab: 1
  }

  render() {

    const changeVisibility = item => {
      this.setState({ [item]: !this.state[item] })
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

    const weeksTableContent = () => {
      return this.state.vocabularyList.map(item => (
        <tr key={this.state.vocabularyList.indexOf(item)}>
          <th className="padding-top padding" scope="row">{this.state.vocabularyList.indexOf(item) + 1}</th>
          {this.state.deuVisible ? <td className="padding-top padding">{item.deu}</td> : <td></td>}
          {this.state.norVisible ? <td className="padding-top padding">{item.nor}</td> : <td></td>}
        </tr>
      )
      )
    }

    const verbsTableContent = () => {
      return this.state.vocabularyList.map(item => (
        <tr key={this.state.vocabularyList.indexOf(item)}>
          <th className="padding-top padding" scope="row">{this.state.vocabularyList.indexOf(item) + 1}</th>
          {this.state.verbDeuVisible ? <td className="padding-top padding">{item.deutsch}</td> : <td></td>}
          {this.state.infinitivVisible ? <td className="padding-top padding">{item.infinitv}</td> : <td></td>}
          {this.state.präsensVisible ? <td className="padding-top padding">{item.präsens}</td> : <td></td>}
          {this.state.präteritumVisible ? <td className="padding-top padding">{item.präteritum}</td> : <td></td>}
          {this.state.perfectVisible ? <td className="padding-top padding">{item.perfect}</td> : <td></td>}
        </tr>
      )
      )
    }

    const setList = (list, activeTab) => {
      this.setState({
        vocabularyList: list,
        weeksVisible: true,
        activeTab
      })
    }

    const getButton = () => {
      return list.map(item => (
        <button
          className={this.state.activeTab === list.indexOf(item) + 1 ? "buttonMenuActive" : "buttonMenu"}
          key={list.indexOf(item)}
          onClick={() => setList(item, list.indexOf(item) + 1)}>
          Woche {list.indexOf(item) + 1}
        </button>
      ))
    }

    const showVerben = () => {
      this.setState({
        vocabularyList: verbs,
        weeksVisible: false,
        activeTab: 0
      })
    }


    const getTable = () => {
      if (this.state.weeksVisible) {
        return (
          <Table bordered>
            <thead>
              <tr>
                <th>
                  <button className="button" onClick={() => changeList(this.state.vocabularyList)}>
                    <img src={reload} alt="logo" className="reload" />
                  </button>
                </th>
                <th className="paddingTableTwo"><button className="button" onClick={() => changeVisibility("deuVisible")}>Deutsch</button></th>
                <th className="paddingTable"><button className="button" onClick={() => changeVisibility("norVisible")}>Norwegisch</button></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {weeksTableContent()}
            </tbody>
          </Table>
        )
      } else {
        return (
          <Table bordered>
            <thead>
              <tr>
                <th>
                  <button className="button" onClick={() => changeList(this.state.vocabularyList)}>
                    <img src={reload} alt="logo" className="reload" />
                  </button>
                </th>
                <th><button className="button" onClick={() => changeVisibility("verbDeuVisible")}>Deu</button></th>
                <th><button className="button" onClick={() => changeVisibility("infinitivVisible")}>Inf</button></th>
                <th><button className="button" onClick={() => changeVisibility("präsensVisible")}>Präs</button></th>
                <th><button className="button" onClick={() => changeVisibility("präteritumVisible")}>Prät</button></th>
                <th><button className="button" onClick={() => changeVisibility("perfectVisible")}>Perf</button></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {verbsTableContent()}
            </tbody>
          </Table>
        )
      }
    }

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div>
              <button
                className={this.state.activeTab === 0 ? "buttonMenuActive" : "buttonMenu"}
                onClick={() => showVerben()}>
                Verben
              </button>
              {getButton()}
            </div>
            {getTable()}
          </header>
        </div>
      </div>
    )
  }
}

export default App
