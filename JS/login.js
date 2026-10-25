const formulario = document.querySelector(".form-login");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const usuario = document.getElementById("Usuario").value;
    const contrasena = document.getElementById("Contrasena").value;

    if (usuario === "" || contrasena === "") {
        alert("Por favor completa usuario y contraseña.");
        return;
    }

    fetch("login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, contrasena })
    })
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (resultado) {
            if (resultado.error) {
                alert(resultado.error);
            } else {
                alert("Inicio de sesión exitoso. ¡Bienvenido, " + resultado.nombre + "!");
                window.location.href = "menu.html";
            }
        })
        .catch(function (error) {
            alert("Ocurrió un error al conectar con el servidor.");
            console.error(error);
        });
});