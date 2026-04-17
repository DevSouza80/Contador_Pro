# 🧠 Contador de Texto Pro (Text Analyzer)

Um projeto completo de análise de texto desenvolvido com **HTML, CSS e JavaScript puro**, focado em aprendizado prático de manipulação do DOM, eventos e lógica de programação.

---

## 🚀 Sobre o Projeto

O **Contador de Texto Pro** é uma aplicação web interativa que permite analisar textos em tempo real, fornecendo métricas importantes como:

* Quantidade de caracteres
* Contagem de palavras
* Número de frases
* Tempo estimado de leitura
* Densidade de letras (top 5)
* Limite de caracteres com controle
* Modo escuro (Dark Mode)

Este projeto foi construído com foco em aprendizado progressivo e boas práticas de front-end.

---

##Link do projeto  🚀
https://velvety-toffee-5856b2.netlify.app/
## 🎯 Funcionalidades

### 🔢 Contador de Caracteres

* Conta caracteres em tempo real
* Opção de **ignorar espaços**

---

### 📝 Contador de Palavras

* Divide o texto automaticamente
* Atualização dinâmica conforme o usuário digita

---

### 📌 Contador de Frases

* Identifica frases com base em:

  * `.`
  * `!`
  * `?`

---

### ⏱ Tempo de Leitura

* Estimativa baseada em **200 palavras por minuto**
* Resultado exibido em minutos

---

### 🔒 Limite de Caracteres

* Permite ativar/desativar limite (ex: 280 caracteres)
* Bloqueia entrada ao atingir o limite
* Exibe mensagem:

```
Limite de X caracteres atingido!
```

---

### 🔤 Densidade de Letras

* Analisa o texto digitado
* Mostra as **5 letras mais usadas**
* Exibe:

  * Letra
  * Quantidade
  * Porcentagem
* Interface com barras dinâmicas

Exemplo:

```
E ███████████ 40 (16%)
I ███████     29 (11%)
```

---

### 🌙 Dark Mode

* Alterna entre tema claro e escuro
* Ícone dinâmico (lua/sol)
* Persistência com `localStorage`

---

### 🧹 Limpar Texto

* Botão para limpar o textarea
* Atualiza automaticamente todos os dados
* Foco retorna ao campo de texto

---

## 🧠 Conceitos Aplicados

Este projeto aborda diversos conceitos importantes:

### 📌 JavaScript

* Manipulação do DOM (`getElementById`)
* Eventos (`input`, `click`, `change`)
* Condições (`if / else`)
* Arrays e objetos
* Métodos de string:

  * `trim()`
  * `split()`
  * `replace()`
* Regex:

  * `/\s+/`
  * `/[.!?]+/`
* `localStorage`
* Criação dinâmica de elementos (`createElement`)

---

### 🎨 CSS

* Flexbox
* Dark Mode com classe `.dark`
* Transições suaves
* Gradientes
* UI responsiva

---

### 🧩 HTML

* Estrutura semântica
* Inputs interativos
* Organização por seções

---

## 📁 Estrutura do Projeto

```
📦 projeto
 ┣ 📂 assets
 ┃ ┗ 📂 img
 ┣ 📜 index.html
 ┣ 📜 style.css
 ┗ 📜 script.js
```

---

## ⚙️ Como Usar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
```

2. Abra o arquivo:

```bash
index.html
```

3. Comece a digitar ✨

---


## 🏆 Nível do Projeto

Este projeto representa:

* 💼 Projeto de portfólio
* 💻 Nível **Front-end Júnior**
* 🔥 Base sólida para aplicações maiores

---

## 👨‍💻 Autor

Desenvolvido por você DevSouza80 🚀
Evoluindo na prática com projetos reais.

---

## 📌 Conclusão

Este projeto foi essencial para entender:

* Como construir interfaces dinâmicas
* Como manipular dados em tempo real
* Como melhorar a experiência do usuário (UX)

---

🔥 **Projeto completo, funcional e pronto para evoluir!**
