const formulario = document.querySelector(".form-login");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const correo = document.getElementById("Correo").value;

    if (correo === "") {
        alert("Por favor ingresa tu correo electrónico.");
        return;
    }

    alert("Si el correo existe en nuestro sistema, recibirás instrucciones para restablecer tu contraseña.");
    window.location.href = "login.html";
});