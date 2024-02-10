document.addEventListener("DOMContentLoaded", function () {
    console.log("Script cargado");
    const nombre = localStorage.getItem('nombreUsuario');
    document.getElementById('nombreUsuario').innerText = nombre;
});