//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo(){
    
    const amigo = document.getElementById("amigo").value;
    
    console.log("Nome do amigo: ",amigo)

    if (amigo.trim() === ""){
        alert("Insira o nome dos amigos");
        return;
    }
    
    console.log("Nome ok, pode adicionar a lista");

    amigos.push(amigo);    
    document.getElementById("amigo").value = "";
    console.log("O campo do texto está limpo.")    
       

}