function numeros() {

    for (var i = 0; i < 1000000; i++) {

        function reverso(numero) {
            return parseFloat(numero.toString().split('').reverse().join(''));
        }

        var num = i.toString().split('').reverse();

        if (num[0] == '0') {
            continue;
        }

        if ((i + reverso(i)) % 2 != 0) {
            console.log(i + ' + ' + reverso(i) + ' = ' + (i + reverso(i)));
        }
    }
}

numeros();