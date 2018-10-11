import React from 'react'
import axios from 'axios'

export default function Pokemon() {
    let num = Math.floor(Math.random() * 151 + 1)
    let height = axios.get(`api/pokemonHeight/${num}/`).then(res => { res.data.height })
    let weight = axios.get(`api/pokemonWeight/${num}/`).then(res => { res.data.weight })
    let id = axios.get(`api/pokemonId/${num}/`).then(res => { res.data.id })
    console.log(num)
    function getStats(val) {
        return (
            <div>
                <p>Height: {height}</p>
                <p>Weight: {weight}</p>
                <p>Id: {id}</p>
            </div>
        )
    }
    function getPokemon() {
        let name = axios.get(`api/pokemonName/${num}/`).then(res => { res.data.name })
        return (
            <div>
                <h6>{name}</h6>
                <p>Want to know more about this pet?</p>
                <button onClick={getStats()}>Click Here</button>
            </div >
        )
    }
    return (
        <button onClick={getPokemon()}>Get New Pet</button>
    )
}