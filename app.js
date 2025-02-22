//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = []; 
let nomeAmigo;
let listaLi;

function adicionarAmigo(){
    
    nomeAmigo = document.querySelector("input").value;
    if (nomeAmigo == ''){
        alert("Por favor, insira um nome ");
    }
    else{
        listaAmigos.push(nomeAmigo);
    }
    limparCampo();
    console.log(listaAmigos);
    
    percorreListaAmigos();


}

function limparCampo(){
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}

function percorreListaAmigos(){
    limpaListaLi();
    for (let i=0;i<listaAmigos.length;i++){
        
        listaLi = document.createElement("li");
        listaLi.innerHTML= listaAmigos[i];
        document.getElementById("listaAmigos").append(listaLi);

    }

}
function limpaListaLi(){
    listaLi = document.getElementById("listaAmigos");
    listaLi.innerHTML='';
}