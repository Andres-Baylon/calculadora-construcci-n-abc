const formulario = document.querySelector(".form-login");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("Nombre").value;
    const apellidos = document.getElementById("Apellidos").value;
    const usuario = document.getElementById("Usuario").value;
    const correo = document.getElementById("Correo").value;
    const perfil = document.getElementById("Perfil").value;
    const contrasena = document.getElementById("Contrasena").value;
    const confirmar = document.getElementById("ConfirmarContrasena").value;

    if (nombre === "" || apellidos === "" || usuario === "" || correo === "" || perfil === "" || contrasena === "") {
        alert("Por favor completa todos los campos.");
        return;
    }

    if (contrasena !== confirmar) {
        alert("Las contraseñas no coinciden. Revisa e intenta de nuevo.");
        return;
    }

    fetch("registro.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, apellidos, usuario, correo, perfil, contrasena })
    })
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (resultado) {
            if (resultado.error) {
                alert(resultado.error);
            } else {
                alert(resultado.mensaje);
                window.location.href = "login.html";
            }
        })
        .catch(function (error) {
            alert("Ocurrió un error al conectar con el servidor.");
            console.error(error);
        });
});