/**
 * Conteúdo da Trilha NR-11 — Operação de Paleteira Manual
 * Tipos: cover | content | quiz-intro | question | finale
 */
window.QUESTION_SCREEN_SESSION = {
  meta: {
    title: "NR 33 — Segurança no Trabalho em Espaço Confinado",
    brand: "TecnoCursos",
    musicSrc: "musica/musica_foco.mp3"
  },
  modules: [
    {
      id: 1,
      title: "Fundamentos Legais, Caracterização e Gerenciamento de Riscos",
      objective: "Apresentar o embasamento normativo da NR-33, conceituar tecnicamente o espaço confinado e as atmosferas perigosas, e ensinar a metodologia de identificação de perigos e causas de acidentes.",
      titleUnlock: {
        title: "RISCOS MAPEADOS",
        body: "Você reconhece os riscos do espaço confinado e a diferença entre ato inseguro e condição insegura.",
        icon: "🛡️"
      },
      screens: [
        {
          id: "nr11-m1-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo1.png",
          imageAlt: "Capa do módulo 1",
          title: "Módulo 1 — Fundamentos Legais, Caracterização e Gerenciamento de Riscos",
          subtitle: "Embasamento normativo da NR-33, conceito de espaço confinado e atmosferas perigosas, e identificação de perigos e causas de acidentes."
        },
        {
          id: "nr11-m1-objetivo",
          type: "video",
          kicker: "Vídeo",
          title: "Legislação, Objetivo e Definição de Espaço Confinado",
          playerId: "panda-0de8b1fa-97b4-47d7-bcc0-dc00b7d88cb3",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=0de8b1fa-97b4-47d7-bcc0-dc00b7d88cb3"
        },
        {
          id: "nr11-m1-nr11",
          type: "content",
          title: "Exemplos de espaços confinados",
          body: "Toque na foto para ver o próximo exemplo.",
          stack: [
            { image: "assets/fotos/espaço 1.png", imageAlt: "Espaço 1", caption: "Espaço 1" },
            { image: "assets/fotos/espaço 2.png", imageAlt: "Espaço 2", caption: "Espaço 2" },
            { image: "assets/fotos/espaço 3.png", imageAlt: "Espaço 3", caption: "Espaço 3" }
          ]
        },
        {
          id: "nr11-m1-credencial",
          type: "video",
          kicker: "Vídeo",
          title: "Caracterização de Atmosferas Perigosas e Parâmetros de Oxigênio",
          playerId: "panda-79c04e08-079c-43e5-b757-c6aefef31b88",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=79c04e08-079c-43e5-b757-c6aefef31b88"
        },
        {
          id: "nr33-m1-onde",
          type: "content",
          title: "Onde é encontrado o espaço confinado?",
          groups: [
            {
              label: "Indústrias",
              items: [
                { icon: "📄", text: "Indústria de papel e celulose" },
                { icon: "🖨️", text: "Indústria gráfica" },
                { icon: "🥫", text: "Indústria alimentícia" },
                { icon: "🧵", text: "Indústria da borracha, do couro e têxtil" },
                { icon: "⚓", text: "Indústria naval e operações marítimas" },
                { icon: "⚗️", text: "Indústrias químicas e petroquímicas" }
              ]
            },
            {
              label: "Serviços e outras atividades",
              items: [
                { icon: "🔥", text: "Serviços de gás" },
                { icon: "💧", text: "Serviços de água e esgoto" },
                { icon: "⚡", text: "Serviços de eletricidade" },
                { icon: "📞", text: "Serviços de telefonia" },
                { icon: "🏗️", text: "Construção civil" },
                { icon: "⛏️", text: "Beneficiamento de minérios" },
                { icon: "🏭", text: "Siderúrgicas e metalúrgicas" }
              ]
            }
          ]
        },
        {
          id: "nr33-m1-pgr",
          type: "video",
          kicker: "Vídeo",
          title: "Gerenciamento no PGR e Riscos Químicos, Biológicos e Físicos",
          playerId: "panda-2a3ac3aa-de71-4c0a-a5cf-ca01635ed25b",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=2a3ac3aa-de71-4c0a-a5cf-ca01635ed25b"
        },
        {
          id: "nr11-m1-definicao",
          type: "video",
          kicker: "Vídeo",
          title: "Riscos Ergonômicos, Mecânicos e Causas de Acidentes",
          playerId: "panda-aadae03f-82e3-4286-bc06-68780acb340e",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=aadae03f-82e3-4286-bc06-68780acb340e"
        },
        {
          id: "nr33-m1-desafio",
          type: "quiz-intro",
          title: "Ato ou condição?",
          body: "Não é pergunta de alternativa. Cada carta descreve uma situação dos vídeos: jogue em <strong>Ato inseguro</strong> ou <strong>Condição insegura</strong>. Acerte no mínimo <strong>3</strong> de <strong>4</strong>.",
          count: 4,
          minCorrect: 3,
          icon: "🎮"
        },
        {
          id: "nr33-m1-sort",
          type: "sort",
          title: "Ato ou condição?",
          body: "Toque no lado certo antes do tempo acabar.",
          time: 45,
          minCorrect: 3,
          review: "A diferença entre ato inseguro e condição insegura",
          left: { id: "ato", label: "Ato inseguro", icon: "🙅" },
          right: { id: "cond", label: "Condição insegura", icon: "⚠️" },
          items: [
            {
              text: "Vapores e gases tóxicos dentro do espaço confinado.",
              bin: "cond",
              hint: "Gás e vapor tóxico são risco químico do ambiente: condição insegura."
            },
            {
              text: "Ruído elevado, pouca iluminação e calor extremo.",
              bin: "cond",
              hint: "Ruído, luz ruim e temperatura extrema são riscos físicos do ambiente."
            },
            {
              text: "Entrar no espaço sem autorização.",
              bin: "ato",
              hint: "Entrar sem permissão é desrespeito à regra: ato inseguro."
            },
            {
              text: "Desrespeitar o procedimento e continuar o serviço mesmo assim.",
              bin: "ato",
              hint: "Seguir contra a regra é falha de comportamento: ato inseguro."
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Direitos, Capacitação e Papéis da Equipe de Trabalho",
      objective: "Estabelecer os direitos e deveres do trabalhador, detalhar a matriz de treinamento e definir a composição da equipe com as atribuições específicas de cada função.",
      titleUnlock: {
        title: "EQUIPE NO LUGAR",
        body: "Você reconhece o direito à entrada segura, as cargas horárias e o que cabe a cada função.",
        icon: "👥"
      },
      screens: [
        {
          id: "nr11-m2-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo2.png",
          imageAlt: "Capa do módulo 2",
          title: "Módulo 2 — Direitos, Capacitação e Papéis da Equipe de Trabalho",
          subtitle: "Direitos e deveres do trabalhador, matriz de treinamento e atribuições de cada função da equipe."
        },
        {
          id: "nr11-m2-ritmo",
          type: "video",
          kicker: "Vídeo",
          title: "Direitos, Deveres e Obrigações da Empresa na NR-33",
          playerId: "panda-e47845e1-cc4b-497c-978d-6cee05a3203d",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=e47845e1-cc4b-497c-978d-6cee05a3203d"
        },
        {
          id: "nr11-m2-ergonomia",
          type: "video",
          kicker: "Vídeo",
          title: "Programa de Capacitação: Cargas Horárias e Regras do Treinamento",
          playerId: "panda-e47845e1-cc4b-497c-978d-6cee05a3203d",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=e47845e1-cc4b-497c-978d-6cee05a3203d"
        },
        {
          id: "nr11-m2-proibicoes",
          type: "video",
          kicker: "Vídeo",
          title: "Composição da Equipe e Atribuições do RT e Supervisor de Entrada",
          playerId: "panda-c33978a1-aaa1-4ec7-b8d9-4d76c97a57f3",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=c33978a1-aaa1-4ec7-b8d9-4d76c97a57f3"
        },
        {
          id: "nr33-m2-supervisor",
          type: "content",
          title: "Responsável Técnico e Supervisor de Entrada",
          body: "O trabalho em espaço confinado é sempre uma operação em equipe.",
          groups: [
            {
              label: "Quem responde",
              items: [
                { icon: "📋", text: "O Responsável Técnico é o profissional habilitado que supervisiona a conformidade técnica e a capacitação." },
                { icon: "👷", text: "No campo, a liderança operacional é do Supervisor de Entrada." }
              ]
            },
            {
              label: "Item 33.3.3",
              items: [
                { icon: "🧪", text: "Testar a atmosfera antes de autorizar o acesso." },
                { icon: "📝", text: "Emitir, assinar e entregar a Permissão de Entrada e Trabalho — a PET — antes do início do serviço." },
                { icon: "🚨", text: "Garantir que os recursos de emergência estejam apostos." }
              ]
            }
          ],
          note: "O Supervisor tem autoridade para cancelar a PET e suspender o trabalho caso surja uma condição de risco não prevista, além de ser o responsável por encerrar formalmente a PET ao término da atividade."
        },
        {
          id: "nr11-m2-transito",
          type: "video",
          kicker: "Vídeo",
          title: "Atribuições do Vigia, Trabalhador Autorizado e Equipe de Resgate",
          playerId: "panda-9a3cd422-fbaf-4cce-af55-431f438c17af",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=9a3cd422-fbaf-4cce-af55-431f438c17af"
        },
        {
          id: "nr33-m2-desafio",
          type: "quiz-intro",
          title: "Quem faz o quê?",
          body: "Não é pergunta de alternativa. Una cada situação à função certa. São <strong>4</strong> pares.",
          count: 4,
          minCorrect: 4,
          icon: "🎮"
        },
        {
          id: "nr33-m2-match",
          type: "match",
          title: "Quem faz o quê?",
          leftTitle: "Situação",
          rightTitle: "Função",
          review: "Direitos, cargas horárias e papéis da equipe",
          pairs: [
            {
              ex: "Tem direito à entrada segura. Deve seguir a PET, usar o EPI e avisar o Vigia.",
              body: "Trabalhador"
            },
            {
              ex: "Treino inicial de 40 horas. Testa a atmosfera, emite a PET e pode cancelá-la.",
              body: "Supervisor"
            },
            {
              ex: "Treino de 16 horas. Fica fora, conta quem entra e sai e não abandona o posto.",
              body: "Vigia"
            },
            {
              ex: "Até 32 horas de treino. No mínimo 2 resgatistas a cada 20 trabalhadores.",
              body: "Resgate"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Permissão de Entrada e Trabalho (PET), LOTO, Gases e Ventilação",
      objective: "Ensinar a captar e estabilizar a carga, escolher o palete, respeitar o piso e estacionar sem bloquear emergência.",
      titleUnlock: {
        title: "CARGA ESTÁVEL",
        body: "Você escolhe o palete, transporta na altura certa e não bloqueia saída nem hidrante.",
        icon: "📦"
      },
      screens: [
        {
          id: "nr11-m3-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo3.png",
          imageAlt: "Capa do módulo 3",
          title: "Módulo 3 — Permissão de Entrada e Trabalho (PET), LOTO, Gases e Ventilação",
          subtitle: "Captação, amarração, altura do solo, paletes de 2 e 4 entradas, piso e onde estacionar."
        },
        {
          id: "nr11-m3-captacao",
          type: "video",
          kicker: "Vídeo",
          title: "Captação, Estabilização e Altura da Carga",
          playerId: "panda-613f3feb-8556-4cd4-88af-95ac0cd4ed00",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=613f3feb-8556-4cd4-88af-95ac0cd4ed00"
        },
        {
          id: "nr11-m3-altura",
          type: "video",
          kicker: "Vídeo",
          title: "Regras de Armazenamento e Limites Estruturais do Piso",
          playerId: "panda-0acc37f0-8d41-4789-97d6-9605e041c175",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=0acc37f0-8d41-4789-97d6-9605e041c175"
        },
        {
          id: "nr11-m3-paletes",
          type: "content",
          fit: true,
          layout: "duo",
          kicker: "Paletes",
          title: "Duas entradas ou quatro",
          body: "O palete é o apoio: uma estrutura com aberturas para os garfos. A entrada muda a manobra.",
          compare: [
            { ok: false, label: "Duas entradas", image: "assets/fotos/PALLET%202.png", imageAlt: "Palete de duas entradas", text: "Aberturas em lados opostos. A paleteira só entra por esses lados, e a manobra fica limitada." },
            { ok: true, label: "Quatro entradas", image: "assets/fotos/PALLET%204.webp", imageAlt: "Palete de quatro entradas", text: "Aberturas nos quatro lados. Os garfos entram em qualquer direção e a manobra no corredor estreito fica mais fácil." }
          ],
          note: { label: "Vazio", text: "No máximo 10 paletes sobrepostos para movimentar sem carga." }
        },
        {
          id: "nr11-m3-piso",
          type: "video",
          kicker: "Vídeo",
          title: "Estacionamento Seguro e Desobstrução de Emergências",
          playerId: "panda-6891e9bf-1d28-4e12-abe6-1a2907a85962",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=6891e9bf-1d28-4e12-abe6-1a2907a85962"
        },
        {
          id: "nr11-m3-estacionar",
          type: "content",
          fit: true,
          layout: "spots",
          kicker: "Estacionamento",
          title: "Onde a paleteira pode parar",
          body: "Estacione só em local permitido e disponível. O resto do galpão não é vaga.",
          items: [
            { icon: "🚪", title: "Saída", text: "Emergência e rota de fuga ficam livres." },
            { icon: "🧯", title: "Incêndio", text: "Hidrante e extintor sem nada na frente." },
            { icon: "⚡", title: "Energia", text: "Painel elétrico com acesso livre." },
            { icon: "🚶", title: "Circulação", text: "Via de pedestre, rua e prateleira desobstruídas." }
          ],
          quote: "Se alguém precisa passar ou combater um incêndio, a paleteira não pode estar no caminho."
        },
        {
          id: "nr11-m3-desafio",
          type: "quiz-intro",
          title: "Verdadeiro ou falso",
          body: "Uma frase por vez. Toque em <strong>Verdadeiro</strong> ou <strong>Falso</strong>. São 6 frases da carga, do palete, do piso e do estacionamento. Acerte pelo menos <strong>4</strong>.",
          count: 6,
          minCorrect: 4,
          icon: "✅"
        },
        {
          id: "nr11-m3-vf",
          type: "sort",
          title: "Verdadeiro ou falso",
          body: "Uma frase por vez. Toque no botão certo.",
          time: 75,
          minCorrect: 4,
          review: "Altura da carga, palete, piso e estacionamento",
          left: { id: "falso", label: "Falso", icon: "✕" },
          right: { id: "verdadeiro", label: "Verdadeiro", icon: "✓" },
          items: [
            {
              text: "No piso regular, a base da carga fica a 15–20 cm do solo.",
              bin: "verdadeiro",
              hint: "Verdade. Essa é a altura de transporte."
            },
            {
              text: "Peça solta pode seguir sem fitilho nem fita stretch.",
              bin: "falso",
              hint: "Falso. Peça solta precisa de amarração."
            },
            {
              text: "Paletes de madeira vazios: no máximo 10 empilhados.",
              bin: "verdadeiro",
              hint: "Verdade. O limite é de 10 paletes vazios."
            },
            {
              text: "O palete de duas entradas abre nos quatro lados.",
              bin: "falso",
              hint: "Falso. Duas entradas só abrem em lados opostos."
            },
            {
              text: "No corredor, deixe pelo menos 50 cm livres.",
              bin: "verdadeiro",
              hint: "Verdade. Esse espaço livre é obrigatório."
            },
            {
              text: "Pode estacionar na frente da saída de emergência.",
              bin: "falso",
              hint: "Falso. Saída, hidrante e extintor ficam livres."
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Equipamentos (EPI/EPC), Plano de Emergência, APH e Primeiros Socorros",
      objective: "Reconhecer falhas que causam acidente, não consertar o equipamento por conta própria, usar os EPIs e agir no alarme de incêndio.",
      titleUnlock: {
        title: "PRONTO PARA A EMERGÊNCIA",
        body: "Você alinha o palete, usa os EPIs, não faz conserto caseiro e sabe o que fazer no alarme.",
        icon: "⛑️"
      },
      screens: [
        {
          id: "nr11-m4-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo4.png",
          imageAlt: "Capa do módulo 4",
          title: "Módulo 4 — Equipamentos (EPI/EPC), Plano de Emergência, APH e Primeiros Socorros",
          subtitle: "Palete mal alinhado, manutenção, equipamentos de proteção e o que fazer no incêndio."
        },
        {
          id: "nr11-m4-alinhamento",
          type: "video",
          kicker: "Vídeo",
          title: "Riscos Operacionais e Alinhamento Incorreto da Carga",
          playerId: "panda-eec3f7eb-ecf6-466f-a8fc-5d167fc3f1c0",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=eec3f7eb-ecf6-466f-a8fc-5d167fc3f1c0"
        },
        {
          id: "nr11-m4-outros",
          type: "video",
          kicker: "Vídeo",
          title: "Manutenção do Equipamento e Comunicação de Avarias",
          playerId: "panda-603b1fdb-6204-4bc5-90ea-df90d2ff44bd",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=603b1fdb-6204-4bc5-90ea-df90d2ff44bd"
        },
        {
          id: "nr11-m4-manutencao",
          type: "video",
          kicker: "Vídeo",
          title: "Equipamentos de Proteção Individual (EPIs) Obrigatórios",
          playerId: "panda-a23b1184-73a5-41f8-af65-258842e0f049",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=a23b1184-73a5-41f8-af65-258842e0f049"
        },
        {
          id: "nr11-m4-emergencia",
          type: "video",
          kicker: "Vídeo",
          title: "Procedimentos de Emergência e Combate a Incêndios",
          playerId: "panda-24489907-3d57-44ef-ad62-d74fb1947a5c",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=24489907-3d57-44ef-ad62-d74fb1947a5c"
        },
        {
          id: "nr11-m4-incendio",
          type: "content",
          fit: true,
          kicker: "Emergência",
          title: "Alarme de incêndio",
          items: [
            { n: "1", title: "Pare", text: "Ao ouvir o alarme, estacione imediatamente em local seguro." },
            { n: "2", title: "Baixe a carga", text: "Desça a carga e deixe a passagem livre." },
            { n: "3", title: "Saia e acione", text: "Conheça o extintor da área e saiba chamar os brigadistas." }
          ],
          note: { label: "Princípio de incêndio", text: "Peça ajuda e comunique a Brigada. Só inicie o combate com extintor se você for brigadista treinado, usando pó químico ou CO2, o adequado ao fogo." }
        },
        {
          id: "nr11-m4-desafio",
          type: "quiz-intro",
          title: "Desafio NR-11 — Módulo 4",
          count: 3,
          minCorrect: 2,
          icon: "🎮"
        },
        {
          id: "nr11-m4-p1",
          type: "question",
          icon: "📦",
          image: "assets/fotos/m4p1.png",
          imageAlt: "Palete desalinhado sobre a paleteira, com caixas prestes a tombar",
          question: "O que acontece se os garfos não entram até a base do palete?",
          alternatives: [
            { id: "a", text: "A carga fica mais estável, porque sobra espaço", correct: false },
            { id: "b", text: "O palete pode desequilibrar e tombar", correct: true },
            { id: "c", text: "Só reduz a velocidade, sem risco de queda", correct: false },
            { id: "d", text: "A paleteira trava sozinha e avisa o operador", correct: false }
          ],
          explanation: "Garfo que não entra até o fim deixa folga. A carga desequilibra e o palete pode tombar.",
          review: "O encaixe dos garfos"
        },
        {
          id: "nr11-m4-p2",
          type: "question",
          icon: "🦺",
          image: "assets/fotos/m4p2.png",
          imageAlt: "Operador de capacete, colete e botina conduzindo a paleteira com carga estável",
          question: "Qual EPI vale o turno inteiro na operação da paleteira?",
          alternatives: [
            { id: "a", text: "Só luvas de malha, sem botina", correct: false },
            { id: "b", text: "Botina com biqueira, capacete com jugular e luvas", correct: true },
            { id: "c", text: "Capacete sem jugular e sandália", correct: false },
            { id: "d", text: "Avental e óculos escuros", correct: false }
          ],
          explanation: "A empresa fornece e exige botina com biqueira, capacete com jugular e luvas durante todo o turno. Material pesado ou abrasivo pede luva de raspa.",
          review: "Os EPIs obrigatórios"
        },
        {
          id: "nr11-m4-p3",
          type: "question",
          icon: "🚨",
          image: "assets/fotos/m4p3.png",
          imageAlt: "Alarme de incêndio aceso no corredor, com o operador ao lado da paleteira",
          question: "Ao ouvir o alarme de incêndio, qual é a conduta correta?",
          alternatives: [
            { id: "a", text: "Deixar a paleteira no corredor com a carga alta", correct: false },
            { id: "b", text: "Estacionar em local seguro, baixar a carga e chamar a brigada", correct: true },
            { id: "c", text: "Qualquer pessoa começa o combate com o extintor", correct: false },
            { id: "d", text: "Empurrar a carga até a saída de emergência", correct: false }
          ],
          explanation: "Estacione em local seguro, baixe a carga e deixe a saída livre. Só o brigadista treinado inicia o combate, com pó químico ou CO2.",
          review: "O alarme de incêndio"
        },
        {
          id: "nr11-m4-final",
          type: "finale",
          image: "assets/fotos/capafinal.png",
          kicker: "Conclusão",
          eyebrow: "Treinamento concluído",
          title: "Parabéns",
          body: "Você concluiu o treinamento NR-11 de operação de paleteira manual.",
          quote: "Carteirinha válida, checklist feito, carga estável e passagem livre.",
          chips: ["NR-11", "Paleteira manual", "2.500 kg"]
        }
      ]
    }
  ]
};
