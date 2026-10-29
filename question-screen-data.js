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
          subtitle: "Legislação da NR 18, definição de PEMT/PTA, deveres de fornecedores e modelos de plataforma."
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
          imageAlt: "Cinco modelos: Mastro, Telescópica, Tesoura, Unipessoal e Articulada"
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
          title: "Módulo 2 — Requisitos Técnicos, Dispositivos de Segurança, Painel de Controle e Checklist Diário",
          subtitle: "Dispositivos de segurança, painel do cesto e checklist pré-operacional diário."
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
      title: "Operação Segura, Riscos Ambientais/Aéreos e Vedações Absolutas (Procedimentos Inseguros)",
      objective: "Instruir o operador sobre as regras de tráfego e posicionamento, o isolamento contra riscos externos (rede elétrica, vento, esmagamento) e o cumprimento rigoroso das vedações regulamentares da NR 18.",
      titleUnlock: {
        title: "PET SOB CONTROLE",
        body: "Você acompanha a validade da PET, o bloqueio das energias, a ordem da medição e a ventilação sem oxigênio puro.",
        icon: "📋"
      },
      screens: [
        {
          id: "nr11-m3-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo3.png",
          imageAlt: "Capa do módulo 3",
          title: "Módulo 3 — Operação Segura, Riscos Ambientais/Aéreos e Vedações Absolutas (Procedimentos Inseguros)",
          subtitle: "Deslocamento, riscos elétricos e de vento, e o que a NR 18 proíbe na operação."
        },
        {
          id: "nr11-m3-captacao",
          type: "video",
          kicker: "Vídeo",
          title: "Permissão de Entrada e Trabalho (PET), Validade e Sinalização",
          playerId: "panda-025b5f4e-c9bb-4165-aaa3-45e8a774ab8a",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=025b5f4e-c9bb-4165-aaa3-45e8a774ab8a"
        },
        {
          id: "nr33-m3-pet",
          type: "content",
          layout: "pet",
          title: "Validade, cancelamento e sinalização",
          body: "A PET autoriza a entrada. Ela tem prazo, placa e arquivo.",
          facts: [
            { value: "24h", label: "Validade máxima da permissão.", tone: "hot" },
            { value: "5 anos", label: "Arquivo depois que a PET encerra.", tone: "purple" },
            { value: "33.5.12.1", label: "A prorrogação só vale nesta regra.", tone: "soft" }
          ],
          reasonTitle: "Emita outra PET se",
          reasons: [
            { n: "1", text: "A entrada atrasou mais de 30 minutos." },
            { n: "2", text: "Entrou ou saiu alguém que não estava na lista." },
            { n: "3", text: "O entorno mudou ou a jornada passou de 12 horas seguidas." }
          ],
          sign: {
            kicker: "Anexo 1",
            title: "PERIGO - RISCO DE MORTE",
            text: "Placa obrigatória no ponto de acesso."
          }
        },
        {
          id: "nr33-m3-loto",
          type: "video",
          kicker: "Vídeo",
          title: "Motivos de Cancelamento da PET e Controle de Energias (LOTO)",
          playerId: "panda-dfb96f40-86e2-484e-bd47-93400a28c44e",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=dfb96f40-86e2-484e-bd47-93400a28c44e"
        },
        {
          id: "nr11-m3-altura",
          type: "video",
          kicker: "Vídeo",
          title: "Avaliação Atmosférica e Sequência Técnica de Medição de Gases",
          playerId: "panda-9b041031-226c-4213-b934-82acc409aa00",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=9b041031-226c-4213-b934-82acc409aa00"
        },
        {
          id: "nr33-m3-medicao",
          type: "content",
          layout: "measure",
          title: "Ordem da medição e o oxigênio puro",
          body: "O Supervisor mede a atmosfera antes da entrada. O monitoramento continua durante o serviço.",
          steps: [
            { n: "1", title: "Oxigênio", text: "O₂. É sempre o primeiro teste." },
            { n: "2", title: "Inflamáveis", text: "O LIE. Só depois do oxigênio." },
            { n: "3", title: "Gases tóxicos", text: "Por último, inclusive o CO₂." }
          ],
          alerts: [
            { tone: "info", kicker: "Limite", title: "CO₂ até 0,5% em 8 horas", text: "De 1% a 2% já há sintomas." },
            { tone: "ban", kicker: "Proibido", title: "Oxigênio puro", text: "Não use na ventilação. A atmosfera pode ficar explosiva." }
          ]
        },
        {
          id: "nr11-m3-paletes",
          type: "video",
          kicker: "Vídeo",
          title: "Sistemas de Ventilação e Proibição de Oxigênio Puro",
          playerId: "panda-b952cbf4-8b11-486a-9a1c-3a1d94dbe696",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=b952cbf4-8b11-486a-9a1c-3a1d94dbe696"
        },
        {
          id: "nr33-m3-desafio",
          type: "quiz-intro",
          title: "Pode ou proibido?",
          body: "Não é pergunta de alternativa. Cada carta traz uma situação do módulo: jogue em <strong>Pode</strong> ou <strong>Proibido</strong>. Acerte no mínimo <strong>3</strong> de <strong>4</strong>.",
          count: 4,
          minCorrect: 3,
          icon: "🎮"
        },
        {
          id: "nr33-m3-sort",
          type: "sort",
          title: "Pode ou proibido?",
          body: "Toque no lado certo antes do tempo acabar.",
          time: 45,
          minCorrect: 3,
          review: "PET, ordem da medição e ventilação sem oxigênio puro",
          left: { id: "proibido", label: "Proibido", icon: "🚫" },
          right: { id: "pode", label: "Pode", icon: "✓" },
          items: [
            {
              text: "Ventilar só com ar atmosférico limpo e deixar o sistema ligado o tempo todo.",
              bin: "pode",
              hint: "A purga é mecânica, com ar fresco. A ventilação fica ligada durante todo o serviço."
            },
            {
              text: "Usar oxigênio puro para ventilar ou purgar o espaço confinado.",
              bin: "proibido",
              hint: "Oxigênio puro cria atmosfera hiper-enriquecida. Uma fagulha pode causar explosão."
            },
            {
              text: "Medir primeiro o oxigênio, depois os inflamáveis e por último os gases tóxicos.",
              bin: "pode",
              hint: "Essa é a ordem técnica: O₂, inflamáveis e LIE, gases tóxicos."
            },
            {
              text: "Entrar com uma PET aberta há mais de 24 horas, sem emitir outra.",
              bin: "proibido",
              hint: "A PET vale no máximo 24 horas. Fora do prazo, é preciso emitir uma nova."
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
        title: "PRONTO PARA O RESGATE",
        body: "Você escolhe o equipamento certo, aciona o socorro e não entra no espaço no lugar do vigia.",
        icon: "⛑️"
      },
      screens: [
        {
          id: "nr11-m4-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo4.png",
          imageAlt: "Capa do módulo 4",
          title: "Módulo 4 — Proteção Contra Quedas (NR 06 / NR 18), SPIQ, Ancoragem e Boas Práticas",
          subtitle: "SPIQ, cinturão paraquedista, ancoragem no cesto e deveres da NR 06."
        },
        {
          id: "nr11-m4-alinhamento",
          type: "video",
          kicker: "Vídeo",
          title: "Equipamentos de Proteção Individual (EPI) e Coletiva (EPC)",
          playerId: "panda-3ce74810-23e4-458e-bfc7-bcee90f481be",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=3ce74810-23e4-458e-bfc7-bcee90f481be"
        },
        {
          id: "nr33-m4-kit",
          type: "content",
          layout: "kit",
          title: "EPCs — Equipamentos de resgate",
          body: "Os números da lista são os mesmos da foto.",
          image: "assets/fotos/EPCS.png",
          imageAlt: "Conjunto de EPCs de resgate numerados de 1 a 7",
          gear: [
            { n: "1", title: "Maca envelope" },
            { n: "2", title: "Tripé de resgate" },
            { n: "3", title: "Motor de insuflação" },
            { n: "4", title: "Kit de respiração autônoma" },
            { n: "5", title: "Conjunto de insuflação e exaustão de ar" },
            { n: "6", title: "Detector de gases" },
            { n: "7", title: "Saco de cordas para resgate" }
          ]
        },
        {
          id: "nr11-m4-outros",
          type: "video",
          kicker: "Vídeo",
          title: "Plano de Emergência, Regra do Vigia e Telefones de Socorro",
          playerId: "panda-4730945b-53db-4cd2-84a6-451bade159c2",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=4730945b-53db-4cd2-84a6-451bade159c2"
        },
        {
          id: "nr33-m4-socorro",
          type: "content",
          layout: "socorro",
          title: "Quem socorre e para onde ligar",
          body: "O vigia aciona o plano. Quem está dentro recebe o primeiro cuidado sem piorar a lesão.",
          ban: {
            kicker: "Regra do vigia",
            title: "Não entre para resgatar.",
            text: "Acione o plano e chame socorro. Entrar sozinho é proibido."
          },
          phones: [
            { n: "193", label: "Bombeiros" },
            { n: "192", label: "SAMU" },
            { n: "190", label: "Polícia" },
            { n: "199", label: "Defesa Civil" }
          ],
          rules: [
            { title: "Hemorragia", text: "Compressão direta primeiro. Torniquete só se falhar ou houver amputação." },
            { title: "Queimadura", text: "1º grau é vermelhidão, 2º grau tem bolha, 3º grau carboniza." },
            { title: "Fratura", text: "Não alinhe o osso. Imobilize uma articulação acima e uma abaixo." }
          ]
        },
        {
          id: "nr11-m4-manutencao",
          type: "video",
          kicker: "Vídeo",
          title: "Atendimento Pré-Hospitalar (APH): Hemorragias e Queimaduras",
          playerId: "panda-c71808d4-f387-428d-9562-c81d1812df4a",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=c71808d4-f387-428d-9562-c81d1812df4a"
        },
        {
          id: "nr11-m4-emergencia",
          type: "video",
          kicker: "Vídeo",
          title: "Primeiros Socorros em Fraturas e Prática de Nós de Resgate",
          playerId: "panda-35e552b2-2fb9-43d2-94fb-a2918f905eba",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=35e552b2-2fb9-43d2-94fb-a2918f905eba"
        },
        {
          id: "nr33-m4-desafio",
          type: "quiz-intro",
          title: "Qual é a conduta?",
          body: "Não é pergunta de alternativa. Una cada situação à conduta certa. São <strong>4</strong> pares.",
          count: 4,
          minCorrect: 4,
          icon: "🎮"
        },
        {
          id: "nr33-m4-match",
          type: "match",
          title: "Qual é a conduta?",
          leftTitle: "Situação",
          rightTitle: "Conduta",
          review: "EPI, regra do Vigia, hemorragia e fratura",
          pairs: [
            {
              ex: "Falta oxigênio ou a toxina está alta. Máscara simples não protege.",
              body: "Ar autônomo"
            },
            {
              ex: "Acidente lá dentro. O Vigia dá o alarme e chama o resgate.",
              body: "Não entra"
            },
            {
              ex: "Hemorragia profunda. O torniquete só entra se a compressão falhar.",
              body: "Compressão"
            },
            {
              ex: "Fratura fechada ou exposta. O osso não volta para o lugar.",
              body: "Imobilizar"
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
          chips: ["NR-18", "PEMT/PTA", "SPIQ"]
        }
      ]
    }
  ]
};
