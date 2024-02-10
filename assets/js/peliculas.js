var imagenes = [
    "img/dumbo.png",
    "img/aladin.png",
    "img/bellaybestia.png",
    "img/princesayelsapo.png",
    "img/rapunzel.png"
];

var opciones = [
    ["Dumbo", "Zootopia", "El Libro de la Selva", "Madagascar"],
    ["Moana", "Jorge el curioso", "El libro de la Selva", "Aladín"],
    ["Blancanieves", "La Bella y la Bestia", "Crepúsculo", "Valiente"],
    ["Encanto", "Shrek", "La Princesa y el Sapo", "Dos sapos enamorados"],
    ["Rapunzel", "La chica del cabello de oro", "Cenicienta", "Hércules"]
];

var puntajePorOpcion = [
    [5, 0, 0, 0],
    [0, 0, 0, 5],
    [0, 5, 0, 0],
    [0, 0, 5, 0],
    [5, 0, 0, 0]
];

// Necesitamos saber en qué imagen estamos y la opción seleccionada
var puntaje = 0;
var i = 0;

function mostrarPregunta() {
    // Cargamos la pregunta
    document.getElementById("pregunta").innerHTML = "¿CUÁL ES LA PELÍCULA?";
    // Cargamos la imagen
    document.getElementById("imagen").src = imagenes[i];
    // Cargamos las opciones
    document.getElementById("op1").innerHTML = opciones[i][0];
    document.getElementById("op2").innerHTML = opciones[i][1];
    document.getElementById("op3").innerHTML = opciones[i][2];
    document.getElementById("op4").innerHTML = opciones[i][3];
    // Actualizamos la barra de progreso
    document.getElementById("barra-progreso").value = (i + 1) * 100 / imagenes.length;
}

function mostrarResultado() {
    // Limpiamos el tablero de juego
    var div = document.getElementById("tablero-de-juego");
    div.innerHTML = "";



    // Agregamos los elementos
    div.innerHTML += "<h3 class='resultado_titulo'>RESULTADOS</h3>";

    // Evaluamos el estilo de vida según el puntaje

    div.innerHTML += "<h3 class='resultado_titulo'>Estos son tus resultados:</h3>";

    if (puntaje >= 20) {
        resultado = "<span id='resultado-excelente'>LO HICISTE EXCELENTE</span>";
    } else if (puntaje >= 10) {
        resultado = "<span id='resultado-bueno'>LO HICISTE UN POCO MAL</span>";
    } else {
        resultado = "<span id='resultado-malo'>NO TIENES INFANCIA</span>";
    }

    div.innerHTML += `<p class='resultado_obtenido'>Has obtenido ${puntaje} puntos, lo cual significa que  ${resultado}.</p>`;
}

function actualizarPuntaje(opcion) {
    puntaje += puntajePorOpcion[i][opcion];
    i++;
    if (i < imagenes.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
}

// Esto se ejecuta una vez apenas carga el archivo
mostrarPregunta();

// Se ejecuta constantemente al hacer clic en una opción
document.getElementById("op1").addEventListener("click", function () {
    actualizarPuntaje(0);
});
document.getElementById("op2").addEventListener("click", function () {
    actualizarPuntaje(1);
});
document.getElementById("op3").addEventListener("click", function () {
    actualizarPuntaje(2);
});
document.getElementById("op4").addEventListener("click", function () {
    actualizarPuntaje(3);
});