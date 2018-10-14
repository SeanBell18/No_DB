import React, { Component } from 'react'
import axios from 'axios'

export default class Pokemon extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            weight: 0,
            height: 0,
            id: 0
        }
        this.getPokemon = this.getPokemon.bind(this)
        this.getStats = this.getStats.bind(this)
    }
    getStats() {
        return (
            <div>
                <p>Pet ID: {this.state.id}</p>
                <p>Pet Weight: {this.state.weight}</p>
                <p>Pet Height: {this.state.height}</p>
            </div>
        )
    }
    getPokemon (id) {
        let pokemon = {}
        axios.get(`api/pokemonInfo/${id}`).then(res => {
            pokemon = res.data
        }) 
        this.setState({
            name: pokemon.name,
            weight: pokemon.weight,
            height: pokemon.height, 
            id: id
        })
        return (
            <div>
                <h6>{this.state.name}</h6>
                <p>Want to know more about this pet?</p>
                <button onClick={this.getStats()}>Click Here!</button>
            </div >
        )
    }
    randomNumber () {
        let num = Math.floor(Math.random() * 151 + 1)
        return (num)
    }
    render() {
        return (
            <button onClick={this.getPokemon(this.randomNumber())}>Get New Pet</button>
        )
    }
}