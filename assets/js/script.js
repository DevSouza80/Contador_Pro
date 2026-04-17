const textArea = document.getElementById("texto");
const contadorCaracteres = document.getElementById("contador-caracteres");
const contadorPalavras = document.getElementById("contador-palavras");
const contadorFrases = document.getElementById("contador-frases");

const tempoElemento = document.getElementById("tempo-leitura");
const excluirEspacos = document.getElementById("excluir-espacos");
const limiteCheckbox = document.getElementById("limite-caracteres");
const avisoLimite = document.getElementById("aviso-limite");
const botaoTema = document.getElementById("click-moon");
const icone = document.getElementById("img")

// Salvar no localStorage
if(localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark");
    icone.src = "./assets/img/sun.png";
}

//Eventos
textArea.addEventListener("input", atualizar);
excluirEspacos.addEventListener("change", atualizar);

// Tema Escuro
botaoTema.addEventListener("click",function(){
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        icone.src = "./assets/img/sun.png";
         localStorage.setItem("tema", "dark");
    } else {
        icone.src = "./assets/img/moon.png";
         localStorage.setItem("tema", "light");
    }
});


// Função Principal
function atualizar(){
    let limite = 280;
    let texto = textArea.value;
    
    //LIMITE DE CARACTERES
    if(limiteCheckbox.checked &&  texto.length > limite) {
        texto = texto.substring(0, limite);
        textArea.value = texto;
    }

    // AVISO DE LIMITE
    if(limiteCheckbox.checked && texto.length >= limite) {
      avisoLimite.textContent = `Limite de ${limite} caracteres atingido!`;
    } else {
        avisoLimite.textContent = "";
    }

    //CONTAGEM DE CARACTERES
    let caracteres;

    if(excluirEspacos.checked) {
        caracteres = texto.replace(/\s/g, "").length;
    } else {
        caracteres = texto.length;
    }

   // PALAVRAS
   const palavras = texto.trim() === "" ? 0 : texto.trim().split(/\s+/).length;
   //FRASES
   const frases = texto.trim() === "" ? 0 : texto.split(/[.!?]+/).filter(f => f.trim() !== "").length;
    // TEMPO DE LEITURA
   const tempoLeitura = palavras / 200;
   const minutos = Math.ceil(tempoLeitura);

    //ATUALIZA TELA
    contadorCaracteres.textContent = caracteres;
    contadorPalavras.textContent = palavras;
    contadorFrases.textContent = frases;

  tempoElemento.textContent = `Tempo de leitura aproximado: ${minutos} minuto`;
}
