// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosSorteados = []; // Array para almacenar los amigos ya sorteados

function agregarAmigo() {
    // Definimos variable 
    let amigo = document.getElementById('amigo').value
    // Comprobamos si el valor está vacío
    if (!amigo) {
        // mostrar alerta
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(amigo); // Si el nombre es válido, lo añadimos al array
        console.log(amigos); // Imprime la lista de amigos (opcional)
        verAmigos();
    }
    document.getElementById('amigo').value = ''; //Limpiar campo para escribir nuevamente
}

function verAmigos() {
    let lista = document.getElementById('listaAmigos'); // Obtener el elemento <ul>

    // Limpiar la lista existente
    lista.innerHTML = '';

    // Iterar sobre el array de amigos y agregar cada uno como un <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); // Crear <li>
        li.textContent = amigos[i]; // Establecer el texto del <li> al nombre del amigo
        lista.appendChild(li); // Agregar el <li> a la lista <ul>
    }
}

function sortearAmigo() {
    // Validar si hay suficientes amigos
    if (amigos.length > 1) {
        // Verificar si ya todos los amigos han sido sorteados
        if (amigosSorteados.length === amigos.length) {
            alert("Ya fueron sorteados todos los amigos. ¡Inicia un nuevo juego!");
            resetearJuego(); // Llamar a la función para reiniciar el juego
            return;
        }

        // Mezclar el array de amigos utilizando el algoritmo de Fisher-Yates
        for (let i = amigos.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Índice aleatorio entre 0 y i
            // Intercambiar amigos[i] con amigos[j]
            [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
        }

        // Mostrar la lista de amigos mezclada (opcional)
        console.log(amigos);
        verAmigos();

        // Obtener un amigo aleatorio de la lista mezclada
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

        // Asegurarse de que el amigo no haya sido sorteado antes
        while (amigosSorteados.includes(amigoSorteado)) {
            amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        }

        // Marcar al amigo como sorteado
        amigosSorteados.push(amigoSorteado);
        document.getElementById('resultado').innerHTML = `Sorteo: ${amigoSorteado}`;
    } else {
        alert('Debe haber al menos dos amigos para hacer un sorteo.');
    }
}

function resetearJuego() {
    // Limpiar los arrays
    amigos = [];
    amigosSorteados = [];

    // Limpiar la lista en el DOM
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';

    alert("¡El juego ha sido reiniciado!");
}