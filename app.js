//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

adicionarAmigo();

// Função de adicionar amigos na lista
function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo == "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nomeAmigo);
        document.getElementById('amigo').value = "";
        atualizarLista();
    }
}

//Função para atualizar a lista de amigos
function atualizarLista() {
    let listaAtualizada = document.getElementById('listaAmigos');
    listaAtualizada.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let itemLista = document.createElement('li');
        itemLista.innerHTML = amigos[i];
        listaAtualizada.appendChild(itemLista);
    }
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length == 0) {
        alert('Por favor, insira um nome.');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `Seu amigo secreto é: ${nomeSorteado}`;
    return;
}
