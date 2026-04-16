const textArea = document.getElementById("texto");
const contadorCaracteres = document.getElementById("contador-caracteres");
const contadorPalavras = document.getElementById("contador-palavras");
const contadorFrases = document.getElementById("contador-frases");

const tempoElemento = document.getElementById("tempo-leitura");
const excluirEspacos = document.getElementById("excluir-espacos");

textArea.addEventListener("input", atualizar);
excluirEspacos.addEventListener("change", atualizar);

function atualizar(){
    const texto = textArea.value;
  
    let caracteres;

    if(excluirEspacos.checked) {
        caracteres = texto.replace(/\s/g, "").length;
    } else {
        caracteres = texto.length;
    }


   const palavras = texto.trim() === "" ? 0 : texto.trim().split(/\s+/).length;
   const frases = texto.trim() === "" ? 0 : texto.split(/[.!?]+/).filter(f => f.trim() !== "").length;

   const tempoLeitura = palavras / 200;
   const minutos = Math.ceil(tempoLeitura);

    contadorCaracteres.textContent = caracteres;
    contadorPalavras.textContent = palavras;
    contadorFrases.textContent = frases;

  tempoElemento.textContent = `Tempo de leitura aproximado: ${minutos} minuto`;
}