// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const resultado = document.getElementById("resultado");

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    
    if(nombreAmigo === ''){
        alert('Por favor, inserte un nombre.');
        return;
    } else if(amigos.includes(nombreAmigo)) {
        alert('No se pueden repetir nombres.');
        return;
    } else {
        amigos.push(nombreAmigo);
    }
    
    limpiarCampo();
    actulizarAmigos();
    return;
}

function limpiarCampo(){
    document.getElementById('amigo').value = '';
}

function actulizarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for(let i=0; i<amigos.length; i++){
        let test = document.createElement('li');
        test.appendChild(document.createTextNode(`${amigos[i]}`))
        lista.appendChild(test);
    }
    
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('No se han ingresado nombres para sortear.');
        return;
    }
    if(amigos.length < 2){
        alert('Debes ingresar al menos dos nombres para sortear.');
        return;
    }
    
    let counter = 0;
    resultado.classList.remove("fade-in");

    let intervalo = setInterval(() => {
        let random = Math.floor(Math.random()*amigos.length);
        resultado.textContent = `El amigo secreto es: ${amigos[random]}`;

        counter++;
        if (counter > 20) {
            clearInterval(intervalo);

            amigos.splice(random, 1);
            actulizarAmigos();

            resultado.classList.add("fade-in");
        }
    }, 100);
}

document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
        event.preventDefault();
    }
});
