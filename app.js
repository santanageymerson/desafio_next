//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];  
let nomeAmigo;
let listaTagLi;
const idListaAmigos = "listaAmigos"
const idListaResultado = "resultado"

function adicionarAmigo(){
    
    nomeAmigo = document.querySelector("input").value;
    if (nomeAmigo == ''){
        alert("Por favor, insira um nome ");
    }
    else{
        listaAmigos.push(nomeAmigo);
    }
    
    limparCampo();  
    percorreListaAmigos();
}

function limparCampo(){
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}

function percorreListaAmigos(){
    limpaListaLi(idListaAmigos);
    for (let i=0;i<listaAmigos.length;i++){
        
        criarListaLi(i);
        document.getElementById(idListaAmigos).append(listaTagLi);
    }

}
function criarListaLi(indice){
    listaTagLi = document.createElement("li");
    listaTagLi.innerHTML= listaAmigos[indice];
}
function limpaListaLi(id){
    listaTagLi = document.getElementById(id);
    listaTagLi.innerHTML='';
}
function sortearAmigo(){
    if (listaAmigos.length != 0){
        limpaListaLi(idListaAmigos);
        limpaListaLi(idListaResultado)
        let indiceAleatorio = parseInt(Math.random()* listaAmigos.length );
        let amigoSorteado = listaAmigos[indiceAleatorio];
        document.getElementById(idListaResultado).append(` O amigo secreto sorteado é : ${amigoSorteado}`)
    }
}