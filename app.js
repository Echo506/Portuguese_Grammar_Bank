const listaTemas = document.getElementById("lista-temas");
const busca = document.getElementById("busca");
const botoesFiltro = document.querySelectorAll(".filtro");
const semResultados = document.getElementById("sem-resultados");
const progressoTexto = document.getElementById("progresso-texto");
const progressoBarra = document.getElementById("progresso-barra");

let nivelSelecionado = "todos";
let perguntasEstudadas =
  JSON.parse(localStorage.getItem("perguntasEstudadas")) || [];

function salvarProgresso() {
  localStorage.setItem(
    "perguntasEstudadas",
    JSON.stringify(perguntasEstudadas)
  );
}

function atualizarProgresso() {
  const total = bancoGramatica.length;
  const concluidas = perguntasEstudadas.length;
  const porcentagem =
    total === 0 ? 0 : Math.round((concluidas / total) * 100);

  progressoTexto.textContent = `${concluidas} de ${total} perguntas estudadas`;
  progressoBarra.style.width = `${porcentagem}%`;
}

function criarPergunta(pergunta) {
  const card = document.createElement("article");
  card.className = "tema pergunta";
  card.dataset.nivel = pergunta.nivel;

  const estudada = perguntasEstudadas.includes(pergunta.id);

  card.innerHTML = `
    <div class="tema-cabecalho">
      <h2>${pergunta.titulo}</h2>
      <span class="nivel nivel-${pergunta.nivel}">${pergunta.nivel}</span>
    </div>

    <p class="tema-tag">${pergunta.tema}</p>
    <p class="regra">${pergunta.regra}</p>
    <p class="pergunta-texto">${pergunta.pergunta}</p>

    <div class="opcoes"></div>

    <p class="explicacao oculto">${pergunta.explicacao}</p>
  `;

  const opcoes = card.querySelector(".opcoes");
  const explicacao = card.querySelector(".explicacao");

  if (!pergunta.opcoes || typeof pergunta.correta !== "number") {
    console.warn("Pergunta inválida:", pergunta.id);
    return card;
  }

  pergunta.opcoes.forEach((opcao, indice) => {
    const botao = document.createElement("button");
    botao.className = "opcao";
    botao.textContent = opcao;

    botao.addEventListener("click", () => {
      opcoes.querySelectorAll(".opcao").forEach((botaoOpcao, i) => {
        botaoOpcao.disabled = true;

        if (i === pergunta.correta) {
          botaoOpcao.classList.add("correta");
        }
      });

      if (indice !== pergunta.correta) {
        botao.classList.add("errada");
      }

      explicacao.classList.remove("oculto");
    });

    opcoes.appendChild(botao);
  });

  const acoes = document.createElement("div");
  acoes.className = "acoes";

  const botaoEstudado = document.createElement("button");
  botaoEstudado.className =
    "btn-estudado" + (estudada ? " ativo" : "");
  botaoEstudado.textContent = estudada
    ? "✔ Estudada"
    : "Marcar como estudada";

  botaoEstudado.addEventListener("click", () => {
    if (perguntasEstudadas.includes(pergunta.id)) {
      perguntasEstudadas = perguntasEstudadas.filter(
        id => id !== pergunta.id
      );

      botaoEstudado.classList.remove("ativo");
      botaoEstudado.textContent = "Marcar como estudada";
    } else {
      perguntasEstudadas.push(pergunta.id);

      botaoEstudado.classList.add("ativo");
      botaoEstudado.textContent = "✔ Estudada";
    }

    salvarProgresso();
    atualizarProgresso();
  });

  acoes.appendChild(botaoEstudado);
  card.appendChild(acoes);

  return card;
}

function renderizarTemas() {
  const termo = busca.value.toLowerCase().trim();
  listaTemas.innerHTML = "";

  const perguntasFiltradas = bancoGramatica.filter(pergunta => {
    const correspondeNivel =
      nivelSelecionado === "todos" ||
      pergunta.nivel === nivelSelecionado;

    const textoBusca = `
      ${pergunta.id}
      ${pergunta.tema}
      ${pergunta.titulo}
      ${pergunta.regra}
      ${pergunta.pergunta}
      ${pergunta.opcoes ? pergunta.opcoes.join(" ") : ""}
      ${pergunta.explicacao}
    `.toLowerCase();

    const correspondeBusca = textoBusca.includes(termo);

    return correspondeNivel && correspondeBusca;
  });

  if (perguntasFiltradas.length === 0) {
    semResultados.classList.remove("oculto");
  } else {
    semResultados.classList.add("oculto");
  }

  perguntasFiltradas.forEach(pergunta => {
    listaTemas.appendChild(criarPergunta(pergunta));
  });

  atualizarProgresso();
}

busca.addEventListener("input", renderizarTemas);

botoesFiltro.forEach(botao => {
  botao.addEventListener("click", () => {
    botoesFiltro.forEach(item => item.classList.remove("ativo"));
    botao.classList.add("ativo");

    nivelSelecionado = botao.dataset.nivel;
    renderizarTemas();
  });
});

renderizarTemas();