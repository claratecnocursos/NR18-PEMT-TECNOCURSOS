/**
 * Conteúdo da Trilha NR 18 — PEMT/PTA
 * Tipos: cover | content | quiz-intro | question | finale
 */
window.QUESTION_SCREEN_SESSION = {
  meta: {
    title: "NR 18 — PEMT/PTA",
    brand: "TecnoCursos",
    musicSrc: "musica/musica_foco.mp3"
  },
  modules: [
    {
      id: 1,
      title: "Fundamentos Legais, Normativos e Tipologia das PEMT/PTA",
      objective: "Capacitar o aluno sobre a sustentação legal da NR 18 (e seu histórico regulamentar), a definição técnica formal de PEMT/PTA, o escopo de aplicação, as responsabilidades de fabricantes, locadores e fornecedores, e a classificação detalhada dos modelos de plataformas.",
      titleUnlock: {
        title: "FRASES NO LUGAR",
        body: "Você separou o que a NR 18 afirma do que ela não permite.",
        icon: "✓"
      },
      screens: [
        {
          id: "nr11-m1-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo1.png",
          imageAlt: "Capa do módulo 1",
          title: "Módulo 1 — Fundamentos Legais, Normativos e Tipologia das PEMT/PTA",
          subtitle: "Legislação da NR 18, definição de PEMT/PTA, deveres de fornecedores e modelos de plataforma.",
          transcript: "Módulo 1. Fundamentos legais, normativos e tipologia das plataformas elevatórias móveis de trabalho. Legislação da NR 18, definição de PEMT e PTA, deveres de fornecedores e modelos de plataforma."
        },
        {
          id: "nr18-m1-historico",
          type: "video",
          kicker: "Vídeo",
          title: "Introdução à NR 18 e o Histórico da Norma",
          playerId: "panda-4aee45e2-0279-4b9c-8092-78acee241508",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=4aee45e2-0279-4b9c-8092-78acee241508"
        },
        {
          id: "nr18-m1-escopo",
          type: "video",
          kicker: "Vídeo",
          title: "O que é uma PEMT/PTA e seu Escopo de Aplicação",
          playerId: "panda-c6edebb9-d386-40a3-97c6-ad023d89d3c4",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=c6edebb9-d386-40a3-97c6-ad023d89d3c4"
        },
        {
          id: "nr18-m1-fornecedor",
          type: "video",
          kicker: "Vídeo",
          title: "Deveres do Fornecedor, Locador e Regras dos Manuais",
          playerId: "panda-842b4fb0-6b06-4013-a637-169d86851003",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=842b4fb0-6b06-4013-a637-169d86851003"
        },
        {
          id: "nr18-m1-plataformas",
          type: "content",
          layout: "models",
          kicker: "Equipamentos",
          eyebrow: "Equipamentos",
          title: "Modelos de Plataformas Elevatórias Móveis de Trabalho",
          lines: ["Modelos de Plataformas", "Elevatórias"],
          accent: "Móveis de Trabalho",
          image: "assets/fotos/plataformas.jpg",
          imageAlt: "Cinco modelos: Mastro, Telescópica, Tesoura, Unipessoal e Articulada",
          transcript: "Equipamentos. Modelos de plataformas elevatórias móveis de trabalho. A tela mostra cinco modelos: mastro, telescópica, tesoura, unipessoal e articulada."
        },
        {
          id: "nr18-m1-verticais",
          type: "video",
          kicker: "Vídeo",
          title: "Modelos de Elevadores Verticais: Tesoura, Mastro e Unipessoal",
          playerId: "panda-83961920-e851-4e8e-8074-49df531bcb86",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=83961920-e851-4e8e-8074-49df531bcb86"
        },
        {
          id: "nr18-m1-lanca",
          type: "video",
          kicker: "Vídeo",
          title: "Modelos de Lança: Plataformas Articuladas e Telescópicas",
          playerId: "panda-bf278218-5083-4cbc-9479-1e617da834e8",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=bf278218-5083-4cbc-9479-1e617da834e8"
        },
        {
          id: "nr18-m1-vf",
          type: "sort",
          vf: true,
          title: "Verdadeiro ou falso",
          body: "Leia a frase e toque em Falso ou Verdadeiro. Acerte no mínimo 4 de 5.",
          transcript: "Verdadeiro ou falso. Leia a frase e toque em Falso ou Verdadeiro. Acerte no mínimo quatro de cinco.",
          time: 60,
          minCorrect: 4,
          left: { id: "falso", label: "Falso", icon: "F" },
          right: { id: "verdadeiro", label: "Verdadeiro", icon: "V" },
          items: [
            {
              text: "A Portaria MTP 4.390, de 2022, é mais antiga que a Portaria 3.214.",
              bin: "falso",
              hint: "1978 é o começo. A MTP 4.390 é de 2022."
            },
            {
              text: "A PEMT é móvel, com cesto ou plataforma, erguida por lança metálica ou por estrutura em tesoura.",
              bin: "verdadeiro",
              hint: "É essa a definição: móvel, com estação de trabalho, na lança ou na tesoura."
            },
            {
              text: "Este anexo da NR 18 também vale para plataformas em instalações elétricas energizadas.",
              bin: "falso",
              hint: "Instalação energizada fica de fora e segue norma própria."
            },
            {
              text: "Antes da venda, locação ou arrendamento, a PEMT é revisada conforme o fabricante, e cada entrega traz as instruções e a capacitação.",
              bin: "verdadeiro",
              hint: "Revisão, instruções e capacitação acompanham cada entrega."
            },
            {
              text: "A unipessoal leva vários operadores, e a articulada é a lança reta sem dobras.",
              bin: "falso",
              hint: "A unipessoal é para um operador. Quem dobra por cima do obstáculo é a articulada. A lança reta é a telescópica."
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Requisitos Técnicos, Dispositivos de Segurança, Painel de Controle e Checklist Diário",
      objective: "Apresentar todos os componentes de segurança exigidos por norma, as especificações técnicas de fabricação, o manuseio do painel de comando do cesto e a rotina sistemática do checklist pré-operacional diário.",
      titleUnlock: {
        title: "TURNO NO LUGAR",
        body: "Você separou o dispositivo obrigatório, o chassi travado, o painel e o checklist diário.",
        icon: "✓"
      },
      screens: [
        {
          id: "nr11-m2-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo2.png",
          imageAlt: "Capa do módulo 2",
          title: "Módulo 2 — Requisitos Técnicos, Dispositivos de Segurança, Painel de Controle e Checklist Diário",
          subtitle: "Dispositivos de segurança, painel do cesto e checklist pré-operacional diário.",
          transcript: "Módulo 2. Requisitos técnicos, dispositivos de segurança, painel de controle e checklist diário. Dispositivos de segurança, painel do cesto e checklist pré-operacional diário."
        },
        {
          id: "nr18-m2-dispositivos",
          type: "video",
          kicker: "Vídeo",
          title: "Dispositivos de Segurança Obrigatórios da PEMT",
          playerId: "panda-0b811d0e-2623-45b1-a5f9-94703010f9a6",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=0b811d0e-2623-45b1-a5f9-94703010f9a6"
        },
        {
          id: "nr18-m2-dispositivos-lista",
          type: "content",
          layout: "devices",
          kicker: "Segurança",
          eyebrow: "Segurança",
          title: "Dispositivos da PEMT",
          accent: "PEMT",
          body: "A PEMT deve ser dotada de:",
          transcript: "Segurança. Dispositivos da PEMT. A PEMT deve ser dotada de nivelamento. Dispositivos de segurança que garantem seu perfeito nivelamento no ponto de trabalho, conforme especificação do fabricante. Alça de apoio interno. Ponto de apoio fixado no interior do cesto ou plataforma para o operador manter equilíbrio, estabilidade e postura segura durante o trabalho em altura. Proteção contra quedas. Sistema de proteção contra quedas que atenda às especificações do fabricante ou, na falta destas, ao disposto na NR-12. Parada de emergência. Botão de parada de emergência. Descida de emergência. Dispositivo de emergência que possibilite baixar o trabalhador e a plataforma até o solo em caso de pane elétrica, hidráulica ou mecânica. Sinalização sonora. Sistema sonoro automático de sinalização acionado durante a subida e a descida. Proteção elétrica. Proteção contra choque elétrico. Horímetro. Instrumento que mede o tempo de funcionamento de um motor ou equipamento.",
          items: [
            {
              icon: "⚖️",
              title: "Nivelamento",
              text: "Dispositivos de segurança que garantem seu perfeito nivelamento no ponto de trabalho, conforme especificação do fabricante."
            },
            {
              icon: "🤝",
              title: "Alça de apoio interno",
              text: "Ponto de apoio fixado no interior do cesto ou plataforma para o operador manter equilíbrio, estabilidade e postura segura durante o trabalho em altura."
            },
            {
              icon: "🔗",
              title: "Proteção contra quedas",
              text: "Sistema de proteção contra quedas que atenda às especificações do fabricante ou, na falta destas, ao disposto na NR-12."
            },
            {
              icon: "🛑",
              title: "Parada de emergência",
              text: "Botão de parada de emergência."
            },
            {
              icon: "⬇️",
              title: "Descida de emergência",
              text: "Dispositivo de emergência que possibilite baixar o trabalhador e a plataforma até o solo em caso de pane elétrica, hidráulica ou mecânica."
            },
            {
              icon: "🔊",
              title: "Sinalização sonora",
              text: "Sistema sonoro automático de sinalização acionado durante a subida e a descida."
            },
            {
              icon: "⚡",
              title: "Proteção elétrica",
              text: "Proteção contra choque elétrico."
            },
            {
              icon: "⏱️",
              title: "Horímetro",
              text: "Instrumento que mede o tempo de funcionamento de um motor ou equipamento."
            }
          ]
        },
        {
          id: "nr18-m2-chassi",
          type: "video",
          kicker: "Vídeo",
          title: "Estabilidade do Chassi, Normas e Manutenção Capacitada",
          playerId: "panda-41e0a38a-74b2-4150-8a5d-e53b48266045",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=41e0a38a-74b2-4150-8a5d-e53b48266045"
        },
        {
          id: "nr18-m2-painel",
          type: "video",
          kicker: "Vídeo",
          title: "Sensor de Sobrecarga e Painel de Comando do Cesto",
          playerId: "panda-87364781-8400-4fbb-8a12-57159d664037",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=87364781-8400-4fbb-8a12-57159d664037"
        },
        {
          id: "nr18-m2-inspecao",
          type: "video",
          kicker: "Vídeo",
          title: "Inspeção Diária do Local de Trabalho",
          playerId: "panda-7c844aa2-da3e-4ad2-b3c9-f1f1bb0043fa",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=7c844aa2-da3e-4ad2-b3c9-f1f1bb0043fa"
        },
        {
          id: "nr18-m2-checklist",
          type: "video",
          kicker: "Vídeo",
          title: "Checklist Pré-operacional Diário",
          playerId: "panda-2373531c-20d3-453a-bb28-f13b62f04832",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=2373531c-20d3-453a-bb28-f13b62f04832"
        },
        {
          id: "nr18-m2-console",
          type: "console",
          title: "Libera a subida",
          body: "Uma situação por vez. Toque na ação certa.",
          transcript: "Libera a subida. Uma situação por vez. Toque na ação certa.",
          items: [
            {
              ask: "O cesto parou no alto por uma pane. O que faz ele descer até o solo?",
              hint: "A parada só corta o movimento. A descida de emergência rebaixa o cesto na pane elétrica, hidráulica ou mecânica.",
              answer: "descida",
              options: [
                { id: "parada", text: "Parada de emergência" },
                { id: "descida", text: "Descida de emergência" }
              ]
            },
            {
              ask: "A plataforma tem chassi móvel. Como ela fica, da montagem até a desmontagem?",
              hint: "O chassi móvel fica nivelado, patolado ou travado o tempo todo.",
              answer: "patola",
              options: [
                { id: "solto", text: "Solto" },
                { id: "patola", text: "Patolado e travado" }
              ]
            },
            {
              ask: "A tesoura passou do limite de peso. O que você faz?",
              hint: "O sensor bloqueia a subida acima do limite. Tire o excesso antes de erguer.",
              answer: "tirar",
              options: [
                { id: "subir", text: "Subo mesmo assim" },
                { id: "tirar", text: "Tiro o excesso de peso" }
              ]
            },
            {
              ask: "O caminho tem um buraco. Onde a PEMT pode ficar?",
              hint: "O operador confere o local antes: solo firme, sem buraco, vala, declive ou fiação.",
              answer: "solo",
              options: [
                { id: "buraco", text: "Em cima do buraco" },
                { id: "solo", text: "Em solo firme e nivelado" }
              ]
            },
            {
              ask: "O checklist achou vazamento de óleo. O que você faz?",
              hint: "Com vazamento, a PEMT não opera. Quem corrige é o técnico capacitado naquela marca e modelo.",
              answer: "tecnico",
              options: [
                { id: "seguir", text: "Sigo o turno" },
                { id: "tecnico", text: "Paro e chamo o técnico" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Operação Segura, Riscos Ambientais/Aéreos e Vedações Absolutas (Procedimentos Inseguros)",
      objective: "Instruir o operador sobre as regras de tráfego e posicionamento, o isolamento contra riscos externos (rede elétrica, vento, esmagamento) e o cumprimento rigoroso das vedações regulamentares da NR 18.",
      titleUnlock: {
        title: "OPERAÇÃO NO LUGAR",
        body: "Você separou o deslocamento seguro, o risco aéreo, os 3 metros, o vento e a vedação.",
        icon: "✓"
      },
      screens: [
        {
          id: "nr11-m3-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo3.png",
          imageAlt: "Capa do módulo 3",
          title: "Módulo 3 — Operação Segura, Riscos Ambientais/Aéreos e Vedações Absolutas (Procedimentos Inseguros)",
          subtitle: "Deslocamento, riscos elétricos e de vento, e o que a NR 18 proíbe na operação.",
          transcript: "Módulo 3. Operação segura, riscos ambientais e aéreos, e vedações absolutas, procedimentos inseguros. Deslocamento, riscos elétricos e de vento, e o que a NR 18 proíbe na operação."
        },
        {
          id: "nr18-m3-piso",
          type: "video",
          kicker: "Vídeo",
          title: "Regras de Movimentação, Deslocamento e Condições do Piso",
          playerId: "panda-15dae196-7df2-46d2-90c3-4f7db4c3606f",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=15dae196-7df2-46d2-90c3-4f7db4c3606f"
        },
        {
          id: "nr18-m3-aereos",
          type: "video",
          kicker: "Vídeo",
          title: "Riscos Aéreos, Esmagamento e Colisões Superiores",
          playerId: "panda-132f4deb-897d-48fb-9c19-8a907914ae52",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=132f4deb-897d-48fb-9c19-8a907914ae52"
        },
        {
          id: "nr18-m3-eletrico",
          type: "video",
          kicker: "Vídeo",
          title: "Risco Elétrico e Distância Mínima de Segurança (3 Metros)",
          playerId: "panda-8b7d252d-2503-4cdf-8ed1-2d6c775607d1",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=8b7d252d-2503-4cdf-8ed1-2d6c775607d1"
        },
        {
          id: "nr18-m3-vento",
          type: "video",
          kicker: "Vídeo",
          title: "Ação do Vento (Limite de 45 km/h) e Organização de Ferramentas",
          playerId: "panda-a4bbe9c8-f91b-44eb-bde9-ef2aa7fd6cf4",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=a4bbe9c8-f91b-44eb-bde9-ef2aa7fd6cf4"
        },
        {
          id: "nr18-m3-vedacoes",
          type: "content",
          layout: "bans",
          kicker: "Vedação",
          eyebrow: "Vedação",
          title: "Vedações da PEMT",
          accent: "PEMT",
          body: "O item 18.12.39 proíbe:",
          transcript: "Vedação. Vedações da PEMT. O item dezoito ponto doze ponto trinta e nove proíbe. Letra a. Usar pranchas, escadas, caixas ou qualquer dispositivo sobre o cesto para alcançar maior altura. Letra b. Usar a PEMT como guindaste ou guincho para içar cargas. Letra c. Fazer trabalhos sob intempéries ou condições climáticas perigosas. Letra d. Operar a máquina contrariando os limites do fabricante de vento, inclinação ou fiação elétrica. Letra e. Transportar pessoas ou materiais alheios ao serviço em execução.",
          items: [
            {
              letter: "a",
              text: "Usar pranchas, escadas, caixas ou qualquer dispositivo sobre o cesto para alcançar maior altura."
            },
            {
              letter: "b",
              text: "Usar a PEMT como guindaste ou guincho para içar cargas."
            },
            {
              letter: "c",
              text: "Fazer trabalhos sob intempéries ou condições climáticas perigosas."
            },
            {
              letter: "d",
              text: "Operar a máquina contrariando os limites do fabricante de vento, inclinação ou fiação elétrica."
            },
            {
              letter: "e",
              text: "Transportar pessoas ou materiais alheios ao serviço em execução."
            }
          ]
        },
        {
          id: "nr18-m3-inseguros",
          type: "video",
          kicker: "Vídeo",
          title: "Análise de Procedimentos Inseguros e Prevenção de Acidentes",
          playerId: "panda-87a37b23-1a27-44c6-aeb3-8e5b2509eca3",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=87a37b23-1a27-44c6-aeb3-8e5b2509eca3"
        },
        {
          id: "nr18-m3-transposicao",
          type: "content",
          layout: "bans",
          kicker: "18.12.41",
          eyebrow: "Item 18.12.41",
          title: "Proibição de Transposição de Nível e Operação sobre Veículos",
          body: "A PEMT não transfere pessoas de um nível para o outro.",
          transcript: "Item dezoito ponto doze ponto quarenta e um. Proibição de transposição de nível e operação sobre veículos. A PEMT não transfere pessoas de um nível para o outro. Sair do cesto em altura. O cesto é o local de trabalho do início ao fim da tarefa. Escalar o guarda-corpo ou desembarcar em telhado, laje ou estrutura elevada. Posicionar ou operar a PEMT sobre caminhão, carreta, carro, vagão ou balsa. Posicionar ou operar a PEMT sobre estrutura de andaime. A plataforma fica apoiada direto em solo firme.",
          note: "A plataforma fica apoiada direto em solo firme.",
          items: [
            {
              text: "Sair do cesto em altura. O cesto é o local de trabalho do início ao fim da tarefa."
            },
            {
              text: "Escalar o guarda-corpo ou desembarcar em telhado, laje ou estrutura elevada."
            },
            {
              text: "Posicionar ou operar a PEMT sobre caminhão, carreta, carro, vagão ou balsa."
            },
            {
              text: "Posicionar ou operar a PEMT sobre estrutura de andaime."
            }
          ]
        },
        {
          id: "nr18-m3-console",
          type: "console",
          title: "Pode ou para",
          body: "Uma situação por vez. Toque na ação certa.",
          transcript: "Pode ou para. Uma situação por vez. Toque na ação certa.",
          doneText: "As situações estão certas.",
          doneLabel: "Concluir",
          items: [
            {
              ask: "O caminho tem buraco e rampa. Como você desloca a PEMT?",
              hint: "Visão livre, longe de buraco, rampa e vala, com a velocidade do piso. O piso firme é liso, uniforme e consolidado.",
              answer: "desvio",
              options: [
                { id: "cima", text: "Passo por cima" },
                { id: "desvio", text: "Desvio e reduzo" }
              ]
            },
            {
              ask: "Há viga e tubulação acima do cesto. O que você faz antes de subir?",
              hint: "Olhe o topo do cesto. O corpo não pode ser prensado contra viga, telhado ou tubulação.",
              answer: "olhar",
              options: [
                { id: "painel", text: "Subo olhando o painel" },
                { id: "olhar", text: "Olho o topo e subo devagar" }
              ]
            },
            {
              ask: "A lança aponta para uma rede energizada. Qual a distância mínima?",
              hint: "São 3 metros de rede ou fiação energizada. O arco elétrico pode saltar sem contato.",
              answer: "tres",
              options: [
                { id: "perto", text: "Posso chegar perto" },
                { id: "tres", text: "No mínimo 3 metros" }
              ]
            },
            {
              ask: "O vento passou de 45 km/h. O que você faz?",
              hint: "Acima de 45 km/h, a plataforma volta ao solo. Cabo e caixa não ficam pendurados para fora do cesto.",
              answer: "solo",
              options: [
                { id: "sigo", text: "Sigo elevado" },
                { id: "solo", text: "Recolho ao solo" }
              ]
            },
            {
              ask: "A tesoura está em cima dos garfos da empilhadeira. Você sobe?",
              hint: "Não opere. Também é proibido escada ou caixa no cesto, usar a PEMT como guindaste, sair no telhado e pôr a máquina sobre caminhão ou andaime.",
              answer: "nao",
              options: [
                { id: "subo", text: "Subo para ganhar altura" },
                { id: "nao", text: "Não opero" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Proteção Contra Quedas (NR 06 / NR 18), SPIQ, Ancoragem e Boas Práticas",
      objective: "Detalhar a obrigatoriedade do Sistema de Proteção Individual Contra Quedas (SPIQ), as especificações do cinturão tipo paraquedista, o ponto de ancoragem no cesto aéreo, os deveres do trabalhador conforme a NR 06 e a síntese das boas práticas operacionais.",
      titleUnlock: {
        title: "CINTO NO LUGAR",
        body: "Você reconhece o EPI, o dever da NR 06, o SPIQ e o ponto de ancoragem no cesto.",
        icon: "✓"
      },
      screens: [
        {
          id: "nr11-m4-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo4.png",
          imageAlt: "Capa do módulo 4",
          title: "Módulo 4 — Proteção Contra Quedas (NR 06 / NR 18), SPIQ, Ancoragem e Boas Práticas",
          subtitle: "SPIQ, cinturão paraquedista, ancoragem no cesto e deveres da NR 06.",
          transcript: "Módulo 4. Proteção contra quedas, NR 06 e NR 18, SPIQ, ancoragem e boas práticas. SPIQ, cinturão paraquedista, ancoragem no cesto e deveres da NR 06."
        },
        {
          id: "nr18-m4-epi",
          type: "video",
          kicker: "Vídeo",
          title: "Equipamento de Proteção Individual (EPI) e a NR 06",
          playerId: "panda-26d1d3d8-bdae-41b5-8feb-2c38ff787d6a",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=26d1d3d8-bdae-41b5-8feb-2c38ff787d6a"
        },
        {
          id: "nr18-m4-deveres",
          type: "video",
          kicker: "Vídeo",
          title: "As Responsabilidades do Colaborador sobre o EPI (NR 06)",
          playerId: "panda-3cc63010-d59e-4a8d-ab10-cd2606e63cec",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=3cc63010-d59e-4a8d-ab10-cd2606e63cec"
        },
        {
          id: "nr18-m4-epi-foto",
          type: "content",
          layout: "models",
          kicker: "EPI",
          eyebrow: "EPI",
          title: "EPI — Equipamento de Proteção Individual para Trabalho em Altura",
          lines: ["EPI — Equipamento de Proteção Individual"],
          accent: "Para Trabalho em Altura",
          quote: "Equipamento de segurança utilizado para proteção contra risco de queda no posicionamento e movimentação nos trabalhos em altura, sendo utilizado em conjunto com cinturão de segurança tipo paraquedista.",
          image: "assets/fotos/epi.jpg",
          imageAlt: "Capacete, cinturão paraquedista, talabarte, luvas, bota e óculos",
          transcript: "EPI. Equipamento de proteção individual para trabalho em altura. Equipamento de segurança utilizado para proteção contra risco de queda no posicionamento e movimentação nos trabalhos em altura, sendo utilizado em conjunto com cinturão de segurança tipo paraquedista. Na imagem: capacete, cinturão paraquedista, talabarte, luvas, bota e óculos."
        },
        {
          id: "nr18-m4-spiq",
          type: "video",
          kicker: "Vídeo",
          title: "Sistema de Proteção Individual Contra Quedas (SPIQ) e Ponto de Ancoragem",
          playerId: "panda-b29b8361-1b54-4547-81f4-c4b6515b3d67",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=b29b8361-1b54-4547-81f4-c4b6515b3d67"
        },
        {
          id: "nr18-m4-cinturao",
          type: "video",
          kicker: "Vídeo",
          title: "Cinturão de Segurança Tipo Paraquedista e Ajuste ao Corpo",
          playerId: "panda-32f42640-7f1d-4a5c-9915-d1154bab0cf8",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=32f42640-7f1d-4a5c-9915-d1154bab0cf8"
        },
        {
          id: "nr18-m4-dicas",
          type: "video",
          kicker: "Vídeo",
          title: "Dicas Fundamentais de Segurança e Encerramento do Treinamento",
          playerId: "panda-e38dea99-305c-4ee6-8c35-f59bdd79de33",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=e38dea99-305c-4ee6-8c35-f59bdd79de33"
        },
        {
          id: "nr18-m4-console",
          type: "console",
          title: "Cinto certo",
          body: "Uma situação por vez. Toque na ação certa.",
          transcript: "Cinto certo. Uma situação por vez. Toque na ação certa.",
          doneText: "As situações estão certas.",
          doneLabel: "Concluir",
          items: [
            {
              ask: "Pela NR 06, o EPI é um equipamento de uso:",
              hint: "É o dispositivo de uso individual que protege a segurança e a saúde. Na PEMT: capacete com jugular, bota com biqueira, óculos e luvas.",
              answer: "individual",
              options: [
                { id: "coletivo", text: "Coletivo, da equipe" },
                { id: "individual", text: "Individual, do trabalhador" }
              ]
            },
            {
              ask: "O EPI rasgou no meio do turno. O que você faz?",
              hint: "Use só para a finalidade certa, guarde, higienize e avise na hora quando ele ficar impróprio.",
              answer: "aviso",
              options: [
                { id: "sigo", text: "Sigo usando" },
                { id: "aviso", text: "Aviso que ficou impróprio" }
              ]
            },
            {
              ask: "Onde o talabarte fica preso no cesto?",
              hint: "Todos no cesto usam SPIQ, ligado só no ponto indicado pelo fabricante. Não no guarda-corpo, na tubulação ou no prédio.",
              answer: "fabricante",
              options: [
                { id: "guarda", text: "No guarda-corpo" },
                { id: "fabricante", text: "No ponto do fabricante" }
              ]
            },
            {
              ask: "O cinturão paraquedista ficou frouxo. Você sobe?",
              hint: "Ajuste peito e pernas antes. Cinto frouxo machuca órgão e coluna na queda. O talabarte vai na meia-argola dorsal.",
              answer: "ajusto",
              options: [
                { id: "depois", text: "Sim. Aperto depois" },
                { id: "ajusto", text: "Não. Ajusto antes" }
              ]
            },
            {
              ask: "O vento passou de 45 km/h. Você sobe mesmo assim?",
              hint: "Não opere acima de 45 km/h nem a menos de 3 metros da rede. Cinto no ponto certo e sem sair do cesto.",
              answer: "nao",
              options: [
                { id: "subo", text: "Subo. O cinto segura" },
                { id: "nao", text: "Não subo" }
              ]
            }
          ]
        },
        {
          id: "nr11-m4-final",
          type: "finale",
          image: "assets/fotos/capafinal.png",
          kicker: "Conclusão",
          eyebrow: "Treinamento concluído",
          title: "Parabéns",
          body: "Você concluiu o treinamento de NR 18 — PEMT/PTA.",
          quote: "Cinto ancorado no ponto do fabricante e cultura de prevencionismo.",
          chips: ["NR-18", "PEMT/PTA", "SPIQ"],
          transcript: "Conclusão. Treinamento concluído. Parabéns. Você concluiu o treinamento de NR 18, PEMT e PTA. Cinto ancorado no ponto do fabricante e cultura de prevencionismo. NR 18. PEMT, PTA. SPIQ."
        }
      ]
    }
  ]
};
