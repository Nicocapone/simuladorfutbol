function simuladorFutbol() {
    
    const equiposLocales = ["Boca Juniors", "Independiente", "Rosario Central", "Estudiantes LP", "Banfield"];
    const equiposVisitantes = ["River Plate", "Racing", "NOB", "Gimnasia LP","Lanús"];

    let golesLocales = 0;
    let golesVisitante = 0;

    
    for (let i = 0; i < 6; i++) {
        const equipoesLocales = 0.7;
        const equiposVisitantes = 0.7;

        if (Math.random() < probabilidadGolLocales) {
            golesLocales++;
        }

        if (Math.random() < probabilidadGolVisitantes) {
            golesVisitantes++;
        }
    }

    const resultadoHtml = `<h2>Resultado:</h2>
                           <p>${equiposLocales} ${golesLocales} - ${golesVisitante} ${equiposVisitantes}</p>`;
    
    document.getElementById("resultado").innerHTML = resultadoHtml;
}
