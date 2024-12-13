function geradorDeNumero() {
    const min = Math.ceil(document.getElementById('input1').value)
    const max = Math.floor(document.getElementById('input2').value)
    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(resultado)}