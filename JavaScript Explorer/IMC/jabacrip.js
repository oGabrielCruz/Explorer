// calcular o IMC peso / (altura*altura)
function calcularIMC() {
    var pesoInput = document.getElementById("peso");
    var alturaInput = document.getElementById("altura");
    var resultadoIMC = document.getElementById("resultado-imc");
  
    var peso = parseFloat(pesoInput.value);
    var altura = parseFloat(alturaInput.value);

  // Calcular o IMC
  var imc = peso / (altura * altura);

  // Arredondar o resultado para duas casas decimais
  imc = imc.toFixed(2);
    
  // Exibir o resultado na página
  resultadoIMC.textContent = "O seu IMC é: " + imc;
}

var botaoCalcular = document.getElementById("botao-calcular");
botaoCalcular.addEventListener("click", calcularIMC);