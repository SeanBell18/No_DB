import React, { Component } from 'react'
import Card from './Card'
import axios from 'axios'

export default class DisplayCards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      dragon: {}
    }
    this.handleChildClick = this.handleChildClick.bind(this)
  }
  handleClick(el) {
    this.setState({ open: true, dragon: el })
    console.log(this.state.dragon)
  }
  handleChildClick() {
    this.setState({ open: false })
  }
  render() {
    const cards = this.props.cardBacks.map((el) => {
      return (
        <div className="cardback" key={el.index}>
          <img src={require("./images/cardback.png")} alt="Dragon Card Back"
            onClick={() => this.handleClick(el)}></img>
          <p className="dragonName">{el.name}</p>
          <div></div>
          <div>
            <button onClick=
              {() => {
                axios.delete(`/api/buh-bye/${el.index}`)
                .then(res => {
                  alert("Dragon has been removed");
                  this.props.handleDeleteDragon(res.data)
                  this.handleChildClick();
                })
              }
              }>Delete</button>
          </div>
        </div>
      )
    })
    return (
      <div>
        {this.state.open ? <Card dragon={this.state.dragon} handleChildClick={this.handleChildClick} />
          : cards}
      </div>
    )
  }
}