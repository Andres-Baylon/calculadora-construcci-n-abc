// Esperamos a que el formulario exista en la página antes de trabajar con él
const formulario = document.querySelector(".form-login");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const usuario = document.getElementById("Usuario").value;
    const contrasena = document.getElementById("Contrasena").value;

    if (usuario === "" || contrasena === "") {
        alert("Por favor completa usuario y contraseña.");
        return;
    }

    alert("Inicio de sesión exitoso. ¡Bienvenido, " + usuario + "!");
    window.location.href = "menu.html";
});