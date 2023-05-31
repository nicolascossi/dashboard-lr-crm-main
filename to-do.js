// TO DO LIST - JS


// Variables
const formulario = document.querySelector('#formulario')
const listaTweets = document.querySelector('#lista-tweets')
let tweets = []

// Event Listeners

eventListeners()

function eventListeners() {
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet)

    // Cuando el documento está listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets'))

        // Verificar si hay tweets almacenados previamente
        if (tweets === null) {
            tweets = []
        }

        creatHTML()

        
    })
}



// Funciones

function agregarTweet(e) {
    e.preventDefault();

    // Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value

    // Validacion

    if(tweet === ''){
        mostrarError('Un mensaje no puede estar vacio')
        return // evita que se ejecuten mas lineas de codigo
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }
    //Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj]

    // Crear HTML

    creatHTML()

    // reiniciar el formulario

    formulario.reset() 
}

// Funcion de mostrar error

function mostrarError (error) {
    const mensajeError = document.createElement('p')
    mensajeError.textContent= error
    mensajeError.classList.add('error')

    // Insertarlo en el contenido

    const contenido = document.querySelector('#contenido')
    contenido.appendChild(mensajeError)

    // Elimina la alerta despues de 3 segundos
    setTimeout( () => {
        mensajeError.remove()
    }, 3000)
}

// Muestra tweets en el html

function creatHTML () {
    
    limpiarHTML()

    if (tweets.length > 0){
        tweets.forEach(tweet => {
        // Agregar un boton de eliminar
        const btnEliminar = document.createElement('a')
        btnEliminar.classList.add('borrar-tweet')
        btnEliminar.innerText= 'X'

        // Añadri la funcion de eliminar
        btnEliminar.onclick = () => {
            borrarTweet(tweet.id);
        }


        // Crear el HTML
        const li = document.createElement('li')

        // Añadir linea al texto
        li.innerText = tweet.tweet
        //Asignar un boton
        li.appendChild(btnEliminar)

        // Insertarlo en el contenido en el html
        listaTweets.appendChild(li)
        })
    }

    // Sincronizar storge
    sincronizarStorage();

}

// Sincronizar storage

function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

function borrarTweet (id) {
    tweets = tweets.filter(tweet => tweet.id !== id)

    creatHTML()
}

// Limpiar HTML

function limpiarHTML() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild)
    }
}









