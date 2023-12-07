function simuladorFutbol() {
    
    const equipoLocal = "Boca Juniors";
    const equipoVisitante = "River Plate";

    let golesBoca = 0;
    let golesRiver = 0;

    
    for (let i = 0; i < 6; i++) {
        const probabilidadGolBoca = 0.7;
        const probabilidadGolRiver = 0.7;

        if (Math.random() < probabilidadGolBoca) {
            golesBoca++;
        }

        if (Math.random() < probabilidadGolRiver) {
            golesRiver++;
        }
    }

    const resultadoHtml = `<h2>Resultado:</h2>
                           <p>${equipoLocal} ${golesBoca} - ${golesRiver} ${equipoVisitante}</p>`;
    
    document.getElementById("resultado").innerHTML = resultadoHtml;
}
