const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const gatosPresos = mongoose.model(gatosPresos,{
    nome: String
    ,tempodeprisao: Number
    ,idadedopreso: Number
})

const listaDeGatos = [
    {
        nome: "Carlos",
        tempodeprisao: 2,
        idadedopreso: 5
    },
    {
        nome: "guilherme",
        tempodeprisao: 2,
        idadedopreso: 5
    },
    {
        nome: "lucas",
        tempodeprisao: 2,
        idadedopreso: 5
    }
]



async function gatos (nome, numeroDeGatos) {
let contador = 0
while(contador <= numeroDeGatos -1) {
    console.log(contador)
    contador ++
    }
}
listaDeGatos({nome:'carlos'})