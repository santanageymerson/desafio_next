//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = []; 
let nomeAmigo;

function adicionarAmigo(){
    
    nomeAmigo = document.querySelector("input").value;
    if (nomeAmigo == ''){
        alert("Por favor, insira um nome ");
    }
    else{
        listaAmigos.push(nomeAmigo);
    }
    limparCampo();
    console.log(listaAmigos)


}

function limparCampo(){
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}


