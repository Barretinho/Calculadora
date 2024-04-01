function somar() {
  var primeiro = document.getElementById('primeiro').value;
  var segundo = document.getElementById('segundo').value;
  var primeiroNumero = parseFloat(primeiro);
  var segundoNumero = parseFloat(segundo);
  var resultado = primeiroNumero + segundoNumero;
  document.getElementById('resultado').value = resultado;
}

function subtrair() {
  var primeiro = document.getElementById('primeiro').value;
  var segundo = document.getElementById('segundo').value;
  var primeiroNumero = parseFloat(primeiro);
  var segundoNumero = parseFloat(segundo);
  var resultado = primeiroNumero - segundoNumero;
  document.getElementById('resultado').value = resultado;
}

function multiplicar() {
  var primeiro = document.getElementById('primeiro').value;
  var segundo = document.getElementById('segundo').value;
  var primeiroNumero = parseFloat(primeiro);
  var segundoNumero = parseFloat(segundo);
  var resultado = primeiroNumero * segundoNumero;
  document.getElementById('resultado').value = resultado;
}

function dividir() {
  var primeiro = document.getElementById('primeiro').value;
  var segundo = document.getElementById('segundo').value;
  var primeiroNumero = parseFloat(primeiro);
  var segundoNumero = parseFloat(segundo);
  if (segundoNumero !== 0) {
      var resultado = primeiroNumero / segundoNumero;
  } else {
      var resultado = "Erro: divisão por zero";
  }
  document.getElementById('resultado').value = resultado;
}
