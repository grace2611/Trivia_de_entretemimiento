var imagenes = [
    "img/harrystyles.png",
    "img/pesopluma.png",
    "img/badbunny.png",
    "img/jbalvin.png",
    "img/rosalia.png"
];

var opciones = [
    ["Shawn Mendes", "Justin Bieber", "Harry Styles", "Ed Sheeran"],
    ["Santa Fe Clan", "Peso Pluma", "Raw alejandro", "Christian Nodal"],
    ["El Alfa", "Feid", "Bad Bunny", "Anuel"],
    ["J Balvin", "Residente", "Daddy Jankee", "Trueno"],
    ["Olivia Rodrigo", "Karol G", "Becky G", "Rosalia"]
];

var puntajePorOpcion = [
    [0, 0, 5, 0],
    [0, 5, 0, 0],
    [0, 0, 5, 0],
    [5, 0, 0, 0],
    [0, 0, 0, 5]
];

// Necesitamos saber en qué imagen estamos y la opción seleccionada
var puntaje = 0;
var i = 0;

function mostrarPregunta() {
    // Cargamos la pregunta
    document.getElementById("pregunta").innerHTML = "¿QUIÉN ES EL CANTANTE?";
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
        resultado = "<span id='resultado-bueno'>UN POCO MAL</span>";
    } else {
        resultado = "<span id='resultado-malo'>NO SABES DE MÚSICA</span>";
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