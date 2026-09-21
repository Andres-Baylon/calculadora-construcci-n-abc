const formulario = document.querySelector(".form-login");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const largo = parseFloat(document.getElementById("Largo").value);

    const cemento = largo * 7.5;
    const arena = largo * 0.016;
    const piedra = largo * 0.016;
    const hierro10 = largo * 6;
    const hierro4 = largo * 3;

    document.getElementById("resCemento").textContent = cemento.toFixed(2) + " kg";
    document.getElementById("resArena").textContent = arena.toFixed(2) + " m³";
    document.getElementById("resPiedra").textContent = piedra.toFixed(2) + " m²";
    document.getElementById("resHierro10").textContent = hierro10.toFixed(2) + " m";
    document.getElementById("resHierro4").textContent = hierro4.toFixed(2) + " m";

    document.getElementById("resultados").style.display = "block";
});