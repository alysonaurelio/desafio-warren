var x = 3;
var tempoChegada = [-2, -1, 0, 1, 2];

function aula() {

    var atrasados = 0;

    for (var i = 0; i < tempoChegada.length; i++) {

        if (tempoChegada[i] > 0) {
            atrasados = atrasados + 1;
        }
    }
    
    if (atrasados > x) {
        console.log("Aula cancelada.");
    } else {
        console.log("Aula normal.");
    }
}

aula();