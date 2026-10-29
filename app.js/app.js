/*
const trasporte = document.getElementById("transporte");
const respuesta = document.getElementById("respuesta");

trasporte.addEventListener("change", function(){
    respuesta.textContent =
"opcion seleccionada: " + trasporte.value;
}); 
*/


/*
tipoEntrega.addEventtlistener("change", function () {
    let Opcion = tipoEntrega.value;

    if (opcion === "domicilio") {
        salida.textContent = "Entrega estimada: 2 dias.";
    } else if (opcion === "tienda") {
        salida.textContent = "Puede recojer hoy";
    } else {
        salida.textContent = "Seleccione una opcion.";
    }
})
*/

/*
const selectPrioridad = document.getElementById('prioridad');
const mensaje = document.getElementById('mensaje');

selectPrioridad.addEventListener('change', function() {
    const valor = selectPrioridad.value;

    if (valor === 'baja') {
        mensaje.textContent = 'Puede esperar';[span_3](start_span)[span_3](end_span)
    } else if (valor === 'media') {
        mensaje.textContent = 'Atender próximamente';[span_4](start_span)[span_4](end_span)
    } else if (valor === 'alta') {
        mensaje.textContent = 'Atención prioritaria';[span_5](start_span)[span_5](end_span)
    } else {
        mensaje.textContent = '';
    }
});
*/


const numeroFavorito = 7; 

const inputUsuario = document.getElementById('intentoUsuario');
const boton = document.getElementById('btnComprobar');
const mensaje = document.getElementById('mensajeResultado');
const texto = document.getElementById("mensaj");

function verificar() {
    const intento = parseInt(inputUsuario.value);

    if (inputUsuario.value === "") {
        mensaje.textContent = "";
    } else if (isNaN(intento)) {
        mensaje.textContent = "Por favor, escribe un número primero. 😂";
        mensaje.style.color = "orange";
    } else if (intento === numeroFavorito) {
        mensaje.textContent = "¡Felicidades! 😎 ¡Adivinaste mi número favorito!";
        mensaje.style.color = "green";
    } else if (intento < numeroFavorito) {
        mensaje.textContent = "¡Muy bajo! Intenta con uno más grande. 💬";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "¡Muy alto! Intenta con uno más chico. 💬";
        mensaje.style.color = "red";
    }
}

inputUsuario.addEventListener('input', verificar);
boton.addEventListener('click', verificar);

texto.addEventListener("click", function(){
    alert("Cualquier partidito me convoca si quiere ganar ");
})

const selectPasiones = document.getElementById('pasiones');
const imgSoccer = document.getElementById('soccer');
const imgCanta = document.getElementById('canta');
const imgMusic= document.getElementById('music');

selectPasiones.addEventListener('change', function() {
    const opcion = selectPasiones.value;

    if (opcion === "futbol") {
        imgSoccer.style.display = "block";
        imgCanta.style.display = "none";
        imgMusic.style.display = "none";
    } else if (opcion === "cantar") {
        imgSoccer.style.display = "none";
        imgCanta.style.display = "block";
        imgMusic.style.display = "none";
    } else if (opcion === "musica") {
        imgSoccer.style.display = "none";
        imgCanta.style.display = "none";
        imgMusic.style.display = "block";
    } else {
        imgSoccer.style.display = "none";
        imgCanta.style.display = "none";
        imgMusic.style.display = "none";
    }
});

