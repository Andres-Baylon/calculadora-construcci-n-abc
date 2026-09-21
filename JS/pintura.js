const formulario = document.querySelector(".form-login");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const superficie = parseFloat(document.getElementById("Superficie").value);

    const pintura = superficie / 6;

    document.getElementById("resPintura").textContent = pintura.toFixed(2) + " litros";

    document.getElementById("resultados").style.display = "block";
});