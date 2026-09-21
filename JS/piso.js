const formulario = document.querySelector(".form-login");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const ancho = parseFloat(document.getElementById("Ancho").value);
    const largo = parseFloat(document.getElementById("Largo").value);

    const superficie = ancho * largo;
    const extra = superficie * 0.10;
    const total = superficie + extra;

    document.getElementById("resSuperficie").textContent = superficie.toFixed(2) + " m²";
    document.getElementById("resExtra").textContent = extra.toFixed(2) + " m²";
    document.getElementById("resTotal").textContent = total.toFixed(2) + " m²";

    document.getElementById("resultados").style.display = "block";
});