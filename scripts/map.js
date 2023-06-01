mapboxgl.accessToken = 'pk.eyJ1IjoiY29zc2lkZXZlbG9wIiwiYSI6ImNsaWNmcHh2bzBmNXkzdG56Yzd4N3R6NW4ifQ.VwKn5MbLV8Gg4SSEiC4qmQ';


  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/cossidevelop/clicg9rta000901p18yeod5gb',
    
    center: [-62.25, -38.72], // Cambia las coordenadas según tu ubicación deseada
    zoom: 9 // Ajusta el nivel de zoom según tus necesidades
  });

  var marker = new mapboxgl.Marker()
    .setLngLat([-62.25, -38.72]) // Cambia las coordenadas según tu ubicación deseada
    .addTo(map);


// Agrega este código después de haber creado el mapa y el marcador inicial
map.on('click', function(e) {
    var coordinates = e.lngLat;
    
    // Crea un nuevo marcador en la ubicación seleccionada
    var newMarker = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
    
    // Aquí puedes realizar acciones adicionales con el nuevo marcador, como almacenarlo en una base de datos o mostrar información adicional al usuario.
  });
  


// ANIMACION SIDEBAR //

const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");
toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})

// MODALES ABRIR // 

 const newInvoice = document.querySelector ("#NewInvoiceModal")

const modal = document.querySelector ("#modalBackground")
newInvoice.addEventListener ("click", ( ) => {
    modal.classList.add ("show")
    
})


modal.addEventListener ("click",(e) => {
    if (e.target === modal) modal.classList.remove ("show")
})


// MODAL 2
const statuInvoice = document.querySelector ("#NewInvoiceModal2")

const modal2 = document.querySelector ("#modalBackground2")
statuInvoice.addEventListener ("click", ( ) => {
    modal2.classList.add ("show2")
     
})


modal2.addEventListener ("click",(e) => {
    if (e.target === modal2) modal2.classList.remove ("show2")
})





