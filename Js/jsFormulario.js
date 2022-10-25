function recogeDatos (evento) {
    evento.preventDefault ();

    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let curso = document.querySelector("#curso").value;
    let division = document.querySelector("#division").value;
    let materia = document.querySelector("#materia").value;
    let bienvenida = document.querySelector("#bienvenida");
    let mensaje;
    mensaje = "Hola " + nombre + apellido + " Ya te inscribiste a la materia" + materia + "de " + curso + materia;
    bienvenida.textContent = mensaje;
}

let miForm = document.querySelector("#formulario");
miForm.addEventListener("submit", recogeDatos);

function capturaDatos(){
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    curso = document.getElementById("curso").value;
    division = document.getElementById("division").value;
    materia = document.getElementById("materia").value;
    console.log(nombre+ " " + apellido + " " + curso + " " + division + " " + materia )
}
let input = document.getElementsByTagName("INPUT");
for (i=0; i<input.length; i++) {
 input[i].addEventListener("change",  function(){
 });
};


