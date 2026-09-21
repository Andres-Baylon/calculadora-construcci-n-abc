const formulario = document.querySelector(".form-login");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const espesor = parseFloat(document.getElementById("Espesor").value);
    const ancho = parseFloat(document.getElementById("Ancho").value);
    const largo = parseFloat(document.getElementById("Largo").value);

    const volumen = espesor * ancho * largo;

    const cemento = volumen * 105;
    const arena = volumen * 0.45;
    const piedra = volumen * 0.9;

    document.getElementById("resCemento").textContent = cemento.toFixed(2) + " kg";
    document.getElementById("resArena").textContent = arena.toFixed(2) + " m³";
    document.getElementById("resPiedra").textContent = piedra.toFixed(2) + " m³";

    document.getElementById("resultados").style.display = "block";
});