let amigos = [];
let amigo = document.getElementById('nome-amigo');
let lista = document.getElementById('lista-amigos');
let sorteio = document.getElementById('lista-sorteio');

function adicionar(){
    if (amigo.value == ''){
        alert('Por favor, digite um nome.');
        return;
    }
    if(amigos.includes(amigo.value)){
        alert('Este nome já foi incluido, diferencie os nomes.');
        return;
    }
    amigos.push(amigo.value)

    if(lista.textContent == ''){
    lista.textContent = amigo.value;
    }else{
    lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
    
}   

function sortear(){
    if(amigos.length <= 2){
        alert('Digite ao menos 3 nomes.')
    }else{
        embaralhar(amigos);
        for(let i = 0; i < amigos.length; i++){
            if(i == amigos.length - 1){
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
            }else{
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
            }
        }
    }
}

function embaralhar(lista){
    for (let indice = lista.length; indice; indice--){
        const indiceAleatorio = Math.floor(Math.random() * indice);
        //atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
                [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigo.value = '';
    amigos = [];
    lista.textContent = '';
    sorteio.innerHTML = '';
}