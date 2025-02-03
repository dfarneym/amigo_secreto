//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function selecionaAmigo(){
    //Verifica se o array está vazio
    if (amigos.length == 0) {
        alert("Não há amigos na lista.");
        return;
    }
    //Sorteia o amigo
    const sorteitoAmigoAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSelecionado = amigos[sorteitoAmigoAleatorio];

    //Exibe o amigo selecionado
    document.getElementById("resultado").textContent = `O amigo selecionado é : ${amigoSelecionado}`;
    
}

function adicionarAmigo(){
    
    const amigo = document.getElementById("amigo").value;
    
    
    if (amigo.trim() === ""){
        alert("Insira o nome dos amigos");
        return;
    }  
   

    amigos.push(amigo);    
    document.getElementById("amigo").value = "";
         
    atualizarLista();

}

function atualizarLista(){
    console.log("Atualizando lista de amigos");
    
    const listaAmigos = document.getElementById("listaAmigos");
    
    listaAmigos.innerHTML = "";
    
    
    for (let i = 0; i < amigos.length; i++) {
        
        const novoItem = document.createElement("li");
        
        novoItem.textContent = amigos[i];
        
        listaAmigos.appendChild(novoItem);
        
    }

    

}