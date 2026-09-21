const formulario = document.querySelector(".form-login");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const espesor = document.getElementById("Espesor").value;
    const largo = parseFloat(document.getElementById("Largo").value);
    const alto = parseFloat(document.getElementById("Alto").value);

    const superficie = largo * alto;

    let cemento, arena, ladrillos;

    if (espesor === "20") {
        cemento = superficie * 10.9;
        arena = superficie * 0.09;
        ladrillos = superficie * 90;
    } else {
        cemento = superficie * 15.2;
        arena = superficie * 0.115;
        ladrillos = superficie * 120;
    }

    document.getElementById("resSuperficie").textContent = superficie.toFixed(2) + " m²";
    document.getElementById("resCemento").textContent = cemento.toFixed(2) + " kg";
    document.getElementById("resArena").textContent = arena.toFixed(2) + " m³";
    document.getElementById("resLadrillos").textContent = Math.round(ladrillos) + " unidades";

    document.getElementById("resultados").style.display = "block";
});