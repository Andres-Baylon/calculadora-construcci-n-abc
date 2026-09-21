const formulario = document.querySelector(".form-login");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const ancho = parseFloat(document.getElementById("Ancho").value);
    const largo = parseFloat(document.getElementById("Largo").value);

    const superficie = ancho * largo;

    const cemento = superficie * 33;
    const arena = superficie * 0.072;
    const piedra = superficie * 0.072;
    const hierro8 = superficie * 7;
    const hierro6 = superficie * 4;

    document.getElementById("resSuperficie").textContent = superficie.toFixed(2) + " m²";
    document.getElementById("resCemento").textContent = cemento.toFixed(2) + " kg";
    document.getElementById("resArena").textContent = arena.toFixed(2) + " m³";
    document.getElementById("resPiedra").textContent = piedra.toFixed(2) + " m³";
    document.getElementById("resHierro8").textContent = hierro8.toFixed(2) + " m";
    document.getElementById("resHierro6").textContent = hierro6.toFixed(2) + " m";

    document.getElementById("resultados").style.display = "block";
});