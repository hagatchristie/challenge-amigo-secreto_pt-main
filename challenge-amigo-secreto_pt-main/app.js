let nomesAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();
    let resultado = document.getElementById('resultado');

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    if (nomesAmigos.includes (nome)) {
        alert('Este nome já foi adicionado.');
        return;
    }
    nomesAmigos.push(nome);
    input.value = '';
    exibirNomes();
    resultado.innerHTML = ''; // Limpa apenas o resultado do sorteio
}

function exibirNomes() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de mostrar os nomes

    for (let i = 0; i < nomesAmigos.length; i++) {
        lista.innerHTML += `<li>${nomesAmigos[i]}</li>`;
    }
}

function embaralhar(array) {  // Função que embaralha a lista (mistura a ordem)
    let copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]]; // troca os itens de lugar
    }
    return copia;
}

function sortearAmigo() {
    if (nomesAmigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    let sorteio;
    let valido = false;

    while (!valido) { // Embaralha até garantir que ninguém tirou a si mesmo
        sorteio = embaralhar(nomesAmigos);
        valido = true;
        for (let i = 0; i < nomesAmigos.length; i++) {
            if (nomesAmigos[i] === sorteio[i]) {
                valido = false;
                break;
            }
        }
    }


    for (let i = 0; i < nomesAmigos.length; i++) { // Mostra o resultado final
        resultado.innerHTML += `<li>${nomesAmigos[i]} → ${sorteio[i]}</li>`;
    }
    nomesAmigos = []; // limpa o array
    exibirNomes();    // limpa a lista que aparece na tela
    }