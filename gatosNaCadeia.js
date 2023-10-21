const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const gatosPresos = mongoose.model(gatosPresos,{
    nome: String
    ,tempodeprisao: Number
    ,idadedopreso: Number
})

async function criaUmGato (preso){   
   await gatosPresos.create(preso);
}


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

criaUmGato(listaDeGatos[0])


async function criaMultiplosGatos (gatosACriar, numeroDeGatos) {

}

criaMultiplosGatos(gatos2, 6)

let contador = 0
while(contador <= 3) {
    console.log(contador)
    contador ++
}