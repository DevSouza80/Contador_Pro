
const textArea = document.getElementById("texto");
const contadorCaracteres = document.getElementById("contador-caracteres");
const contadorPalavras = document.getElementById("contador-palavras");
const contadorFrases = document.getElementById("contador-frases");

const tempoElemento = document.getElementById("tempo-leitura");
const excluirEspacos = document.getElementById("excluir-espacos");
const limiteCheckbox = document.getElementById("limite-caracteres");
const avisoLimite = document.getElementById("aviso-limite");

const botaoTema = document.getElementById("click-moon");
const icone = document.getElementById("img");

const containerDensidade = document.getElementById("densidade-container");

// TEMA SALVO

if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark");
    icone.src = "./assets/img/sun.png";
}


// EVENTOS

textArea.addEventListener("input", atualizar);
excluirEspacos.addEventListener("change", atualizar);
limiteCheckbox.addEventListener("change", atualizar);

//  DARK MODE

botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        icone.src = "./assets/img/sun.png";
        localStorage.setItem("tema", "dark");
    } else {
        icone.src = "./assets/img/moon.png";
        localStorage.setItem("tema", "light");
    }
});


//  FUNÇÃO PRINCIPAL

function atualizar() {
    let limite = 280;
    let texto = textArea.value;

    //  LIMITE
    if (limiteCheckbox.checked && texto.length > limite) {
        texto = texto.substring(0, limite);
        textArea.value = texto;
    }

    //  AVISO
    if (limiteCheckbox.checked && texto.length >= limite) {
        avisoLimite.textContent = `Limite de ${limite} caracteres atingido!`;
    } else {
        avisoLimite.textContent = "";
    }

    //  CARACTERES
    let caracteres = excluirEspacos.checked
        ? texto.replace(/\s/g, "").length
        : texto.length;

    //  PALAVRAS
    const palavras = texto.trim() === ""
        ? 0
        : texto.trim().split(/\s+/).length;

    // FRASES
    const frases = texto.trim() === ""
        ? 0
        : texto.split(/[.!?]+/).filter(f => f.trim() !== "").length;

    // TEMPO
    const minutos = Math.ceil(palavras / 200);

    // ATUALIZA
    contadorCaracteres.textContent = caracteres;
    contadorPalavras.textContent = palavras;
    contadorFrases.textContent = frases;
    tempoElemento.textContent = `Tempo de leitura aproximado: ${minutos} minuto`;

   //Densidade de Letras
    containerDensidade.innerHTML = "";

    const textoLimpo = texto.replace(/\s/g, "").toLowerCase();

    if (textoLimpo.length === 0) {
        containerDensidade.innerHTML = `
            <p>
                Nenhum caractere encontrado. Comece a digitar para ver a densidade de letras.
            </p>
        `;
        return;
    }

    const contagem = {};

    for (let letra of textoLimpo) {
        contagem[letra] = (contagem[letra] || 0) + 1;
    }

    const letrasOrdenadas = Object.entries(contagem)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    const total = textoLimpo.length;

    const wrapper = document.createElement("div");
    wrapper.classList.add("dimension-parts");

    letrasOrdenadas.forEach(([letra, quantidade]) => {
        const porcentagem = ((quantidade / total) * 100).toFixed(2);

        const linha = document.createElement("div");
        linha.classList.add("sub-letter");

        linha.innerHTML = `
            <div class="letter">
                <p>${letra.toUpperCase()}</p>
            </div>

            <div class="bar-size">
                <div class="color-size" style="width: ${porcentagem}%"></div>
            </div>

            <div class="percentage">
                <p>${quantidade} (${porcentagem}%)</p>
            </div>
        `;

        wrapper.appendChild(linha);
    });

    containerDensidade.appendChild(wrapper);
}
