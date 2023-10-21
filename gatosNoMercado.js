// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// const gatosNoMercado = mongoose.model(
//     'gatosNoMercado',{
//           nomeDoGato: String
//         , idade: Number 
//         , produto: String 
//         , codigoDoproduto: Number
//     });

// async function encontraTodosOsGatos (){
//     console.log(await gatosNoMercado.find());
// }

// async function criaUmGato (modelo){
//     console.log(await gatosNoMercado.create(modelo));
// }

// async function atualizaUmGato (nome, atualizacao){
//     console.log(await gatosNoMercado.findOneAndUpdate({
//         nomeDoGato: nome
//     }
//     , atualizacao
//     ));
// }

// async function deletaUmGato (nome){
//     console.log(await gatosNoMercado.findOneAndDelete({ 
//     nomeDoGato: nome
// }));
// }

// criaUmGato({
//     nomeDoGato: 'lucas'
//         , idade: 5
//         , produto:'Angorá'
//         , codigoDoproduto:766349889 
//     });
// encontraTodosOsGatos()
// atualizaUmGato("lucas", {
//     nomeDoGato: 'carlos'
//     , idade:9
//     , produto:'GranPlus'
//     , codigoDoproduto:46566895489549 })
// deletaUmGato('carlos')
// deletaUmGato('lucas')