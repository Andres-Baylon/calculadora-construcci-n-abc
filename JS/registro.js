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

    alert("Registro exitoso. Ahora puedes iniciar sesión, " + nombre + ".");
    window.location.href = "login.html";
});