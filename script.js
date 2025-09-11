// Preloader
window.addEventListener("load", function () {
  const preload = document.getElementById("preload");
  const body = document.getElementById("body");

  // Hide preloader and show content
  this.setTimeout(() => {
    preload.style.display = "none"; // Hide preloader
    body.style.display = "block"; // Show content
  }, 2000);
});

const form = document.getElementById("form-notas");
const adicionarButton = document.getElementById("adicionar");
const totalNotasEmitidasElement = document.getElementById(
  "total-notas-emitidas"
);
const totalNotasDevolvidasElement = document.getElementById(
  "total-notas-devolvidas"
);
const porcentagemTotalElement = document.getElementById("porcentagem-total");

let totalNotasEmitidas = 0;
let totalNotasDevolvidas = 0;

adicionarButton.addEventListener("click", (e) => {
  e.preventDefault();

  document.getElementById("atualizar").addEventListener("click", function () {
    location.reload();
  });

  const notasEmitidas = parseInt(
    document.getElementById("notas-emitidas").value
  );
  const notasDevolvidas = parseInt(
    document.getElementById("notas-devolvidas").value
  );

  if (
    !isNaN(notasDevolvidas) &&
    !isNaN(notasEmitidas) &&
    !isNaN(notasDevolvidas)
  ) {
    totalNotasEmitidas += notasEmitidas;
    totalNotasDevolvidas += notasDevolvidas;

    totalNotasEmitidasElement.innerText = totalNotasEmitidas;
    totalNotasDevolvidasElement.innerText = totalNotasDevolvidas;
    const porcentagemTotal = (totalNotasDevolvidas / totalNotasEmitidas) * 100;
    porcentagemTotalElement.innerText = `${porcentagemTotal.toFixed(2)}%`;
  } else {
    alert("Por favor, insira valores numéricos válidos.");
  }
});

function atualizarRelogio() {
  var agora = new Date();
  var horas = agora.getHours();
  var minutos = agora.getMinutes();
  var segundos = agora.getSeconds();
  var dia = agora.getDate();
  var mes = agora.getMonth() + 1;
  var ano = agora.getFullYear();

  horas = horas < 10 ? "0" + horas : horas;
  minutos = minutos < 10 ? "0" + minutos : minutos;
  segundos = segundos < 10 ? "0" + segundos : segundos;
  dia = dia < 10 ? "0" + dia : dia;
  mes = mes < 10 ? "0" + mes : mes;
  ano = ano < 10 ? "0" + ano : ano;

  var relogioElement = document.getElementById("relogio");
  relogioElement.innerHTML =
    dia +
    "/" +
    mes +
    "/" +
    ano +
    " - " +
    horas +
    ":" +
    minutos +
    ":" +
    segundos;

  setTimeout(atualizarRelogio, 1000);
}

atualizarRelogio();
