//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

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
    console.log('Lista de amigos HTML limpa');
    
    for (let i = 0; i < amigos.length; i++) {
        
        const novoItem = document.createElement("li");
        
        novoItem.textContent = amigos[i];
        
        listaAmigos.appendChild(novoItem);
        console.log("Adicionando a lista HTML");
    }

    console.log("Lista de amigos atualizada")

}