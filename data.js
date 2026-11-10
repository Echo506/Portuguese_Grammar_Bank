const bancoGramatica = [
  {
    id: "artigos-definidos",
    nivel: "A1",
    titulo: "Artigos definidos: o, a, os, as",
    regra:
      "Em português brasileiro, os artigos definidos acompanham substantivos específicos. Use <strong>o</strong> para masculino singular, <strong>a</strong> para feminino singular, <strong>os</strong> para masculino plural e <strong>as</strong> para feminino plural.",
    exemplos: [
      "O livro está na mesa.",
      "A casa é bonita.",
      "Os meninos estão na escola.",
      "As meninas gostam de música."
    ],
    exercicio: {
      pergunta: "Complete: ___ menina está feliz.",
      opcoes: ["O", "A", "Os", "As"],
      correta: 1
    }
  },
  {
    id: "artigos-indefinidos",
    nivel: "A1",
    titulo: "Artigos indefinidos: um, uma, uns, umas",
    regra:
      "Use <strong>um/uns</strong> para substantivos masculinos e <strong>uma/umas</strong> para substantivos femininos. Eles indicam algo não específico.",
    exemplos: [
      "Eu tenho um carro.",
      "Ela comprou uma bolsa.",
      "Há uns livros na mesa.",
      "Existem umas perguntas fáceis."
    ],
    exercicio: {
      pergunta: "Complete: Eu quero ___ café.",
      opcoes: ["uma", "um", "uns", "umas"],
      correta: 1
    }
  },
  {
    id: "verbos-presente",
    nivel: "A1",
    titulo: "Presente do indicativo: falar, comer, partir",
    regra:
      "No presente, os verbos regulares terminados em <strong>-ar</strong>, <strong>-er</strong> e <strong>-ir</strong> seguem padrões diferentes. Exemplo com <em>falar</em>: eu falo, você fala, nós falamos, eles falam.",
    exemplos: [
      "Eu falo português.",
      "Você come arroz e feijão.",
      "Nós partimos amanhã.",
      "Eles estudam à noite."
    ],
    exercicio: {
      pergunta: "Complete: Eu ___ português todos os dias.",
      opcoes: ["fala", "falo", "falamos", "falam"],
      correta: 1
    }
  },
  {
    id: "ser-estar",
    nivel: "A1",
    titulo: "Ser x Estar",
    regra:
      "Use <strong>ser</strong> para características permanentes, identidade, profissão e origem. Use <strong>estar</strong> para estados temporários, localização e situações do momento.",
    exemplos: [
      "Eu sou brasileiro.",
      "Ela é professora.",
      "Eu estou cansado hoje.",
      "O livro está na mesa."
    ],
    exercicio: {
      pergunta: "Complete: Hoje eu ___ muito feliz.",
      opcoes: ["sou", "estou", "é", "está"],
      correta: 1
    }
  },
  {
    id: "pronomes-pessoais",
    nivel: "A1",
    titulo: "Pronomes pessoais",
    regra:
      "No português brasileiro, os pronomes mais usados na fala são <strong>eu</strong>, <strong>você</strong>, <strong>ele/ela</strong>, <strong>nós</strong>, <strong>vocês</strong> e <strong>eles/elas</strong>. Em muitas regiões, <strong>a gente</strong> substitui <strong>nós</strong> na fala informal.",
    exemplos: [
      "Eu estudo português.",
      "Você fala inglês?",
      "A gente vai ao cinema.",
      "Eles moram em São Paulo."
    ],
    exercicio: {
      pergunta: "Qual frase é mais comum na fala informal brasileira?",
      opcoes: [
        "Nós vamos ao mercado.",
        "A gente vai ao mercado.",
        "Vós ides ao mercado.",
        "Tu vais ao mercado."
      ],
      correta: 1
    }
  },
  {
    id: "pretrito-perfeito",
    nivel: "A2",
    titulo: "Pretérito perfeito",
    regra:
      "O pretérito perfeito descreve ações concluídas no passado. Exemplo com <em>falar</em>: eu falei, você falou, nós falamos, eles falaram.",
    exemplos: [
      "Ontem eu estudei português.",
      "Ela viajou para o Rio de Janeiro.",
      "Nós almoçamos juntos.",
      "Eles chegaram tarde."
    ],
    exercicio: {
      pergunta: "Complete: Ontem eu ___ uma carta.",
      opcoes: ["escrevo", "escrevi", "escreverei", "escrevesse"],
      correta: 1
    }
  },
  {
    id: "pretrito-imperfeito",
    nivel: "A2",
    titulo: "Pretérito imperfeito",
    regra:
      "O pretérito imperfeito expressa hábitos, descrições ou ações contínuas no passado. Exemplo com <em>falar</em>: eu falava, você falava, nós falávamos, eles falavam.",
    exemplos: [
      "Quando eu era criança, eu brincava na rua.",
      "Ela estudava todas as noites.",
      "Nós morávamos perto da praia.",
      "Eles assistiam televisão depois do jantar."
    ],
    exercicio: {
      pergunta: "Complete: Quando eu era criança, eu ___ no parque.",
      opcoes: ["brinquei", "brincava", "brincarei", "brincasse"],
      correta: 1
    }
  },
  {
    id: "futuro",
    nivel: "A2",
    titulo: "Futuro: vou + infinitivo",
    regra:
      "No português brasileiro, a forma mais comum de falar do futuro é <strong>vou + verbo no infinitivo</strong>. Também existe o futuro simples, como <em>falarei</em>, mas ele é menos frequente na fala cotidiana.",
    exemplos: [
      "Eu vou estudar hoje.",
      "Ela vai viajar amanhã.",
      "Nós vamos almoçar às 12h.",
      "Eles vão chegar mais tarde."
    ],
    exercicio: {
      pergunta: "Complete: Amanhã eu ___ viajar para Salvador.",
      opcoes: ["vou", "vou a", "irei a", "vou de"],
      correta: 0
    }
  },
  {
    id: "por-para",
    nivel: "B1",
    titulo: "Por x Para",
    regra:
      "Use <strong>para</strong> para destino, finalidade, prazo e destinatário. Use <strong>por</strong> para causa, meio de transporte, troca, duração aproximada e agente da passiva.",
    exemplos: [
      "Vou para São Paulo amanhã.",
      "Estudo português para trabalhar no Brasil.",
      "Passei por São Paulo.",
      "Este presente é para você."
    ],
    exercicio: {
      pergunta: "Complete: Este presente é ___ você.",
      opcoes: ["por", "para", "per", "pro"],
      correta: 1
    }
  },
  {
    id: "objeto-direto-indireto",
    nivel: "B1",
    titulo: "Pronomes oblíquos: o, a, lhe",
    regra:
      "Os pronomes <strong>o/a/os/as</strong> funcionam como objeto direto, enquanto <strong>lhe/lhes</strong> funcionam como objeto indireto. Na fala brasileira, é muito comum usar <strong>ele/ela</strong> como objeto direto.",
    exemplos: [
      "Eu a vi ontem.",
      "Eu vi ela ontem. — comum na fala brasileira",
      "Eu lhe dei um presente.",
      "Eu dei um presente para ele."
    ],
    exercicio: {
      pergunta: "Qual opção é mais natural na fala brasileira cotidiana?",
      opcoes: [
        "Eu o vi ontem.",
        "Eu vi ele ontem.",
        "Eu lhe vi ontem.",
        "Eu vi lhe ontem."
      ],
      correta: 1
    }
  },
  {
    id: "subjuntivo-presente",
    nivel: "B2",
    titulo: "Presente do subjuntivo",
    regra:
      "O subjuntivo expressa desejo, dúvida, possibilidade, emoção ou situações hipotéticas. Ele costuma aparecer depois de expressões como <em>espero que</em>, <em>talvez</em>, <em>é importante que</em> e <em>quando</em> em sentido futuro.",
    exemplos: [
      "Espero que você esteja bem.",
      "Talvez ela venha amanhã.",
      "É importante que nós estudemos.",
      "Quando eu tiver tempo, vou te ligar."
    ],
    exercicio: {
      pergunta: "Complete: Espero que você ___ bem.",
      opcoes: ["é", "seja", "está", "será"],
      correta: 1
    }
  },
  {
    id: "condicional",
    nivel: "B2",
    titulo: "Futuro do pretérito / condicional",
    regra:
      "O futuro do pretérito expressa cortesia, hipóteses e ações condicionais. Exemplo: <em>eu falaria</em>, <em>você faria</em>, <em>nós faríamos</em>, <em>eles fariam</em>.",
    exemplos: [
      "Eu viajaria se tivesse dinheiro.",
      "Você poderia me ajudar?",
      "Nós faríamos o projeto juntos.",
      "Eles chegariam mais cedo."
    ],
    exercicio: {
      pergunta: "Complete: Se eu tivesse tempo, eu ___ viajar.",
      opcoes: ["viajarei", "viajaria", "viaje", "viajava"],
      correta: 1
    }
  },
  {
    id: "voz-passiva",
    nivel: "C1",
    titulo: "Voz passiva",
    regra:
      "A voz passiva enfatiza quem recebe a ação. A forma analítica usa <strong>ser + particípio</strong>; a forma sintética usa <strong>ser + particípio</strong> com concordância, ou construções com <em>se</em>.",
    exemplos: [
      "O relatório foi escrito pela equipe.",
      "As regras foram alteradas.",
      "Vendem-se casas nesta região.",
      "O problema será resolvido amanhã."
    ],
    exercicio: {
      pergunta: "Complete: O livro ___ pelos alunos.",
      opcoes: ["foi lido", "foi lida", "foi ler", "foi lidos"],
      correta: 0
    }
  },
  {
    id: "concordancia-verbal",
    nivel: "C1",
    titulo: "Concordância verbal avançada",
    regra:
      "O verbo deve concordar com o sujeito em número e pessoa. Em construções com <em>haver</em> no sentido de existir, o verbo fica no singular: <em>havia muitas pessoas</em>.",
    exemplos: [
      "Havia muitas pessoas na festa.",
      "Houve problemas na reunião.",
      "Fazem dois anos que eu estudo português.",
      "Faz dois anos que eu estudo português."
    ],
    exercicio: {
      pergunta: "Qual frase está correta no português padrão?",
      opcoes: [
        "Haviam muitas pessoas na festa.",
        "Havia muitas pessoas na festa.",
        "Houveram muitas pessoas na festa.",
        "Haveram muitas pessoas na festa."
      ],
      correta: 1
    }
  },
  {
    id: "registro-formal-informal",
    nivel: "C2",
    titulo: "Registro formal e informal",
    regra:
      "No português brasileiro, a escolha entre <strong>você</strong>, <strong>o senhor/a senhora</strong>, <strong>tu</strong> e <strong>vós</strong> depende da região, do grau de formalidade e do contexto. Em textos formais, prefira estruturas mais impessoais e vocabulário preciso.",
    exemplos: [
      "Você pode me ajudar? — informal",
      "O senhor poderia me ajudar? — formal",
      "Nós vamos discutir o assunto. — neutro",
      "Procede-se à análise dos documentos. — formal / administrativo"
    ],
    exercicio: {
      pergunta: "Qual opção é mais adequada em um e-mail formal?",
      opcoes: [
        "E aí, tudo certo?",
        "Prezado senhor, espero que esteja bem.",
        "Me manda aquele arquivo, por favor.",
        "Valeu pela ajuda!"
      ],
      correta: 1
    }
  },
  {
    id: "conectivos-discursivos",
    nivel: "C2",
    titulo: "Conectivos e coesão textual",
    regra:
      "Conectivos organizam o texto e mostram relações de causa, contraste, conclusão, adição e condição. Dominá-los é essencial para escrever com clareza em níveis avançados.",
    exemplos: [
      "Portanto, é necessário revisar o texto.",
      "No entanto, os resultados foram positivos.",
      "Além disso, o projeto gerou empregos.",
      "Caso haja dúvidas, entre em contato."
    ],
    exercicio: {
      pergunta: "Complete: Os dados foram analisados; ___, as conclusões ainda são preliminares.",
      opcoes: ["portanto", "no entanto", "além disso", "porque"],
      correta: 1
    }
  }
];