/**
 * Conteúdo da Trilha NR 33 — Segurança no Trabalho em Espaço Confinado
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
      objective: "Capacitar o aluno nos procedimentos formais de abertura e gestão da PET, isolamento de energias (LOTO), sinalização de área, medição técnica de gases e operação de ventilação.",
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
          title: "Módulo 3 — Permissão de Entrada e Trabalho (PET), LOTO, Gases e Ventilação",
          subtitle: "Abertura e gestão da PET, bloqueio LOTO, sinalização, medição de gases e ventilação."
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
      title: "Equipamentos (EPI/EPC), Plano de Emergência, APH e Primeiros Socorros",
      objective: "Instruir sobre a seleção de EPIs/EPCs, os procedimentos de emergência e resgate, a rede de contatos de socorro, os primeiros socorros em trauma/queimaduras e a confecção de nós de resgate.",
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
          title: "Módulo 4 — Equipamentos (EPI/EPC), Plano de Emergência, APH e Primeiros Socorros",
          subtitle: "EPIs e EPCs, plano de emergência, socorro, primeiros socorros e nós de resgate."
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
          body: "Você concluiu o treinamento de NR-33 — Segurança no Trabalho em Espaço Confinado.",
          quote: "EPI certo, Vigia do lado de fora e socorro sem agravar a lesão.",
          chips: ["NR-33", "Espaço confinado", "Resgate"]
        }
      ]
    }
  ]
};
