// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const resultado = document.getElementById("resultado");

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    
    if(nombreAmigo === ''){
        alert('Por favor, inserte un nombre.');
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
    let numeroRandom = Math.floor(Math.random()*amigos.length);
    let nombreAmigo = amigos[numeroRandom];

    resultado.innerHTML = `<li>El amigo secreto es: ${nombreAmigo}</li>`; 

}
