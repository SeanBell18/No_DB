import React, { Component } from 'react';
import './reset.css';
import './App.css';
import CloseBox from './components/CloseBox'
import axios from 'axios';

import DisplayCards from './components/DisplayCards';
import Pokemon from './components/Pokemon';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [],
      dragons: [],
      index: 6,
      name: "",
      length: '',
      attributes: '',
      dragonSearch: '',
      toggle: true,
      pokemon1Name: '',
      pokemon2Name: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddDragon = this.handleAddDragon.bind(this);
    this.eName = this.eName.bind(this);
    this.eLength = this.eLength.bind(this);
    this.eAttributes = this.eAttributes.bind(this);
    this.handleDeleteDragon = this.handleDeleteDragon.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
  }
  handleSearch(e) { this.setState({ dragonSearch: e.target.value }); }
  eName(e) { this.setState({ name: e.target.value }); }
  eLength(e) { this.setState({ length: e.target.value }); }
  eAttributes(e) { this.setState({ attributes: e.target.value }); }
  handleAddDragon(index, name, length, attributes) {
    this.setState({
      dragons: [...this.state.dragons],
      index: this.state.index + 1
    })
    let newDragon = {
      index: index,
      name: name, 
      length: length, 
      attributes: attributes
    }
    axios.post(`/api/addDragon/`, newDragon).then(res => this.setState({ users: res.data }))
  }
  componentDidMount() {
    axios.get('/api/test').then((res) => {
      this.setState({ test: res.data })
    });
    axios.get('/api/dragons').then((res) => { this.setState({ dragons: res.data }) })
  }
  handleCloseBox() {
    this.setState({ clicked: true })
  }
  handleDeleteDragon(arr) {
    this.setState({ dragons: [...arr] })
  }
  toggleButton() {
    this.setState(prevState => ({ toggle: !prevState.toggle }))
  }
  render() {
    return (
      <div id="App">
        <link href="https://fonts.googleapis.com/css?family=Metal+Mania|Yatra+One" rel="stylesheet" />
        <header>
          <h1 className="title">How to Find your</h1>
          <h1 id="dragonTitle">DRAGON</h1>
        </header>
        <section>
          <div className="searchbar">
            <p id="searchInvite">Search for a dragon</p>
            <input id="inputSearch" type="text" onChange={this.handleSearch} />
          </div>
          <div className="subtitle">
            <h3>Known Dragons {`Number: ${this.state.dragons.length}`} </h3>
          </div>
          {/*<div className="music">
          </div>
          <div className = "team">
          </div> */}
          <div className="collection">
            <div >
              <DisplayCards cardBacks={this.state.dragons.filter(dragon => dragon.name.toLowerCase().includes(this.state.dragonSearch.toLowerCase()))} handleDeleteDragon={this.handleDeleteDragon} />
            </div>
          </div>
        </section>
        <div class = "pokemon">
          <h3>Want to give the dragons a pet?</h3>
          <Pokemon>Pokemon Pet 1</Pokemon>
          <Pokemon>Pokemon Pet 2</Pokemon>
        </div>
        {this.state.toggle === true ?

          <div id="addBox">
            <CloseBox id='closeBox' toggleButton={this.toggleButton} str ="X"/>
            <h2 className='cornerBox'>Found a new Dragon? Create a new card!</h2>
            <p className='cornerBox'>Name:</p>
            <input className='cornerBox' type="text" onChange={this.eName} />
            <p className='cornerBox'>Length(m):</p>
            <input className='cornerBox' type="text" onChange={this.eLength} />
            <p className='cornerBox'>Attributes:</p>
            <input className='cornerBox' type="text" onChange={this.eAttributes} />
            <button className='cornerBox' id="addButton" onClick={this.handleAddDragon(this.state.index, this.state.name, this.state.length, this.state.attributes)}>Add</button>
            <CloseBox toggleButton={this.toggleButton} str ="Add Later"/>
          </div>
          : <button onClick={this.toggleButton} id="dragonAdd">Add Dragon</button>}
      </div>
    );
  }
}

export default App;
