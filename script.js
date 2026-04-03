function clicou() {
  const texto = document.getElementById("texto");
  const botao = document.getElementById("botao");

  texto.innerText = "Você clicou e eu continuo evoluindo todos os dias 🔥";
  texto.style.color = "#00ffcc";

  botao.innerText = "já cliquei🔥";
  botao.classList.add("clicado");
}

function mudarTitulo() {
  const titulo = document.getElementById("titulo2");
  titulo.innerText = "🔥 VIREI DEV 🔥";
}

function mudarTema() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("tema", "dark");
  } else {
    localStorage.setItem("tema", "light");
  }
}

function carregarTema() {
  const temaSalvo = localStorage.getItem("tema");

  if (temaSalvo === "dark") {
    document.body.classList.add("dark");
  }
}

carregarTema();