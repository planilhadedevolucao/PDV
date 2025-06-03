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
