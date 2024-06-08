const campoTexto = document.querySelector("#textoIntroducido");
const resultado = document.querySelector("#resultado");
const errorMessage = document.querySelector("#error-message");

const matriz = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"]
];

function botonE() {
  const inputText = campoTexto.value;
  if (/[A-Z]/.test(inputText) || /[^a-z\s]/.test(inputText)) {
    errorMessage.textContent = "Error: No usar letras mayúsculas ni caracteres especiales.";
    errorMessage.style.display = "block";
    return;
  }
  errorMessage.style.display = "none";
  const texto = encriptar(inputText);
  resultado.value = texto;
}

function encriptar(fraseEncriptada) {
  for (let i = 0; i < matriz.length; i++) {
    if (fraseEncriptada.includes(matriz[i][0])) {
      fraseEncriptada = fraseEncriptada.replaceAll(matriz[i][0], matriz[i][1]);
    }
  }
  return fraseEncriptada;
}

function botonD() {
  const inputText = campoTexto.value;
  if (/[A-Z]/.test(inputText) || /[^a-z\s]/.test(inputText)) {
    errorMessage.textContent = "Error: No usar letras mayúsculas ni caracteres especiales.";
    errorMessage.style.display = "block";
    return;
  }
  errorMessage.style.display = "none";
  const texto = desencriptar(inputText);
  resultado.value = texto;
}

function desencriptar(fraseDesEncriptada) {
  for (let i = 0; i < matriz.length; i++) {
    if (fraseDesEncriptada.includes(matriz[i][1])) {
      fraseDesEncriptada = fraseDesEncriptada.replaceAll(matriz[i][1], matriz[i][0]);
    }
  }
  return fraseDesEncriptada;
}

function botonC() {
  const copiarTexto = document.getElementById("resultado");
  copiarTexto.select();
  document.execCommand("copy");
  alert("Texto copiado al portapapeles");
}
