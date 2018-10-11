const express = require('express');
const bodyParser = require('body-parser');
const port = 4000;

const app = express();
app.use(bodyParser.json());
app.listen(port, console.log("I am here"))

let dragons = [{
    index: 0,
    name: "Gronckle",
    length: "2m",
    attributes: "Sturdy and loyal. Lava blasts"
  }, {
    index: 1,
    name: "Zipple-back",
    length: "10m",
    attributes: "Two-headed. One head releases flammable gas, the other head ignites"
  }, {
    index: 2,
    name: "Monstrous Nightmare",
    length: "12m",
    attributes: "Very large dragon with ability to set itself aflame"
  }, {
    index: 3,
    name: "Nadder",
    length: "4m",
    attributes: "Extremely agile dragon with spikes attached to tail that can be whipped"

  }, {
    index: 4,
    name: "Terrible Teror",
    length: ".25m",
    attributes: "Smallest of dragons, rapid-fire shots"
  },
  {
    index: 5,
    name: "Night Fury",
    length: "4m",
    attributes: "Extreme accuracy and speed. Plasma blasts"
  }, 
];

app.get("/api/test", (req, res) => {res.status(200).send("Ready for info!")})

app.get("/api/dragons", (req, res) => {res.status(200).send(dragons)})

app.get("/api/dragonInfo/:index", (req,res) => {
    const {index} = req.params;

    res.status(200).send(dragons[index])
})

app.post("/api/addDragon/", (req,res) => {
    const {newDragon} = req.body;
    dragons = {...newDragon};
    res.status(200).send(dragons)
})

// app.put("/api/updateName/:index", (req,res) => {
//     const {name} = req.body;
//     const {index} = req.params;
//     let id = dragons.findIndex(dragon => {
//         return dragon.name == index
//     })
//     dragons[id].name = name;
//     res.status(200).send(dragons)
// })

app.delete("/api/buh-bye/:index", (req, res) => {
    const {index} = req.params;
    dragons.splice(index, 1)
    res.status(200).send(dragons)
})

app.get(`api/pokemonName/:id/`, (req, res) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.num}`)
  .then(res => {
    res.status(200).send(res.data.name)
  })
})

app.get(`api/pokemonHeight/:id/`, (req, res) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.num}`)
  .then(res => {
    res.status(200).send(res.data)
  })
})

app.get(`api/pokemonWeight/:id`, (req, res) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.num}`)
  .then(res => {
    res.status(200).send(res.data)
  })
})

app.get(`api/pokemonId/:id`, (req, res) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.num}`)
  .then(res => {
    res.status(200).send(res.data)
  })
})