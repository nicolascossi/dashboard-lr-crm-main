

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














