export const site = {
  nome: "Dra. Aline Maria",
  marca: "Aline Maria Almeida",
  nomeCompleto: "Aline Maria Freire da Rocha Almeida",
  titulo: "Advogada",
  qualificacoes: ["Advogada", "Assistente Social", "Mestre em Serviço Social"],
  slogan: "Excelência técnica. Olhar humano.",
  descricaoMarca: "Advocacia e Consultoria Jurídica",

  oab: "OAB/RN 24.650",

  // DDI + DDD + número, só dígitos
  whatsapp: "5584999050607",
  whatsappExibicao: "(84) 99905-0607",
  whatsappMensagem:
    "Olá, Dra. Aline! Vim pelo site e gostaria de agendar uma consulta.",

  instagram: "draalinemariaalmeida.adv",

  // E-mail exibido no site (o e-mail que RECEBE o formulário fica no .env)
  email: "alinemariaralmeida.adv@gmail.com",

  cidade: "Parnamirim/RN",
  cidadeExtenso: "Parnamirim — Rio Grande do Norte",
  horario: "Segunda a sexta, das 8h às 18h",

  // TODO: trocar pelo domínio definitivo quando ele for registrado
  url: "https://www.seudominio.com.br",
};

export const whatsappLink = (mensagem = site.whatsappMensagem) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;

export const instagramLink = `https://instagram.com/${site.instagram}`;

export const areas = [
  {
    id: "familia",
    curto: "Direito de Família e Sucessões",
    titulo: "Direito de Família e Sucessões",
    chamada:
      "Porque decisões familiares envolvem muito mais do que questões patrimoniais.",
    texto: [
      "Divórcio, guarda, pensão alimentícia, união estável e sucessões exigem uma atuação jurídica cuidadosa, capaz de considerar os direitos envolvidos e as consequências de cada decisão para a vida familiar.",
      "A atuação é orientada pela proteção de direitos, pela responsabilidade técnica e pelo respeito às pessoas envolvidas.",
    ],
    casos: [
      "Divórcio consensual e litigioso",
      "Guarda, convivência e pensão alimentícia",
      "União estável: reconhecimento e dissolução",
      "Inventário, partilha e planejamento sucessório",
    ],
  },
  {
    id: "previdenciario",
    curto: "Direito Previdenciário",
    titulo: "Direito Previdenciário",
    chamada:
      "A proteção social é um direito. Seu reconhecimento exige conhecimento e atenção.",
    texto: [
      "Aposentadorias, benefícios por incapacidade, salário-maternidade e BPC/LOAS estão diretamente relacionados à segurança e à dignidade de pessoas e famílias.",
      "A formação em Direito, somada à experiência no Serviço Social, permite uma análise que considera tanto os requisitos legais quanto a realidade social de quem busca o benefício.",
    ],
    casos: [
      "Aposentadorias e planejamento previdenciário",
      "Benefícios por incapacidade",
      "Salário-maternidade e pensão por morte",
      "BPC/LOAS para pessoa idosa ou com deficiência",
    ],
  },
  {
    id: "saude",
    curto: "Direito da Saúde",
    titulo: "Direito da Saúde",
    chamada: "O acesso à saúde é um direito que merece ser levado a sério.",
    texto: [
      "Atuação em demandas relacionadas ao acesso à saúde, a planos de saúde e a tratamentos médicos, tanto na rede privada quanto no Sistema Único de Saúde.",
    ],
    casos: [
      "Negativa de cirurgia, exame ou medicamento",
      "Tratamentos contínuos e terapias multidisciplinares",
      "Reajustes e cancelamentos de plano de saúde",
      "Fornecimento de medicamentos pelo SUS",
    ],
  },
  {
    id: "trabalho",
    curto: "Direito do Trabalho",
    titulo: "Direito do Trabalho",
    chamada: "Dignidade também nas relações de trabalho.",
    texto: [
      "Orientação e atuação na proteção de direitos nas relações trabalhistas, da contratação ao encerramento do vínculo.",
    ],
    casos: [
      "Verbas rescisórias e horas extras",
      "Reconhecimento de vínculo de emprego",
      "Assédio moral e acidente de trabalho",
      "Estabilidade da gestante e do acidentado",
    ],
  },
] as const;

export type AreaId = (typeof areas)[number]["id"];
