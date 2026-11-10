const listaTemas = document.getElementById("lista-temas");
const busca = document.getElementById("busca");
const botoesFiltro = document.querySelectorAll(".filtro");
const semResultados = document.getElementById("sem-resultados");
const progressoTexto = document.getElementById("progresso-texto");
const progressoBarra = document.getElementById("progresso-barra");

let nivelSelecionado = "todos";
let temasEstudados = JSON.parse(localStorage.getItem("temasEstudados")) || [];

function salvarProgresso() {
  localStorage.setItem("temasEstudados", JSON.stringify(temasEstudados));
}

function atualizarProgresso() {
  const total = bancoGramatica.length;
  const concluidos = temasEstudados.length;
  const porcentagem = total === 0 ? 0 : Math.round((concluidos / total) * 100);

  progressoTexto.textContent = `${concluidos} de ${total} tópicos estudados`;
  progressoBarra.style.width = `${porcentagem}%`;
}

function criarExercicio(tema, card) {
  const exercicio = document.createElement("div");
  exercicio.className = "exercicio";

  exercicio.innerHTML = `
    <p>${tema.exercicio.pergunta}</p>
    <div class="opcoes"></div>
  `;

  const opcoes = exercicio.querySelector(".opcoes");

  tema.exercicio.opcoes.forEach((opcao, indice) => {
    const botao = document.createElement("button");
    botao.className = "opcao";
    botao.textContent = opcao;

    botao.addEventListener("click", () => {
      const correta = indice === tema.exercicio.correta;

      opcoes.querySelectorAll(".opcao").forEach((botaoOpcao, i) => {
        botaoOpcao.disabled = true;

        if (i === tema.exercicio.correta) {
          botaoOpcao.classList.add("correta");
        }
      });

      if (!correta) {
        botao.classList.add("errada");
      }
    });

    opcoes.appendChild(botao);
  });

  return exercicio;
}

function criarTema(tema) {
  const card = document.createElement("article");
  card.className = "tema";
  card.dataset.nivel = tema.nivel;

  const estudado = temasEstudados.includes(tema.id);

  card.innerHTML = `
    <div class="tema-cabecalho">
      <h2>${tema.titulo}</h2>
      <span class="nivel nivel-${tema.nivel}">${tema.nivel}</span>
    </div>

    <p class="regra">${tema.regra}</p>

    <div class="exemplos">
      <strong>Exemplos:</strong>
      <ul>
        ${tema.exemplos.map(exemplo => `<li>${exemplo}</li>`).join("")}
      </ul>
    </div>
  `;

  card.appendChild(criarExercicio(tema, card));

  const acoes = document.createElement("div");
  acoes.className = "acoes";

  const botaoEstudado = document.createElement("button");
  botaoEstudado.className = "btn-estudado" + (estudado ? " ativo" : "");
  botaoEstudado.textContent = estudado ? "✔ Estudado" : "Marcar como estudado";

  botaoEstudado.addEventListener("click", () => {
    if (temasEstudados.includes(tema.id)) {
      temasEstudados = temasEstudados.filter(id => id !== tema.id);
      botaoEstudado.classList.remove("ativo");
      botaoEstudado.textContent = "Marcar como estudado";
    } else {
      temasEstudados.push(tema.id);
      botaoEstudado.classList.add("ativo");
      botaoEstudado.textContent = "✔ Estudado";
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

  const temasFiltrados = bancoGramatica.filter(tema => {
    const correspondeNivel =
      nivelSelecionado === "todos" || tema.nivel === nivelSelecionado;

    const textoTema = `
      ${tema.titulo}
      ${tema.regra}
      ${tema.exemplos.join(" ")}
      ${tema.exercicio.pergunta}
    `.toLowerCase();

    const correspondeBusca = textoTema.includes(termo);

    return correspondeNivel && correspondeBusca;
  });

  if (temasFiltrados.length === 0) {
    semResultados.classList.remove("oculto");
  } else {
    semResultados.classList.add("oculto");
  }

  temasFiltrados.forEach(tema => {
    listaTemas.appendChild(criarTema(tema));
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