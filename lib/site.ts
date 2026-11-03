export const site = {
  nome: "Dra. Aline Maria",
  nomeCompleto: "Aline Maria Freire da Rocha Almeida",
  titulo: "Advogada",

  oab: "OAB/RN 24.650",

 
  whatsapp: "5584999050607",

  whatsappExibicao: "(84) 99905-0607",
  
  whatsappMensagem:
    "Olá, Dra. Aline! Vim pelo site e gostaria de agendar um atendimento.",

  
  instagram: "draalinemariaalmeida.adv",

  // TODO: e-mail exibido no site (o e-mail que RECEBE o formulário fica no .env)
  email: "alinemariaralmeida.adv@gmail.com",

  // TODO: cidade de atendimento presencial
  cidade: "Parnamirim/RN",
  horario: "Segunda a sexta, das 8h às 18h",

  url: "https://www.seudominio.com.br",
};

export const whatsappLink = (mensagem = site.whatsappMensagem) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;

export const instagramLink = `https://instagram.com/${site.instagram}`;

export const areas = [
  {
    id: "familia",
    curto: "família e sucessões",
    titulo: "Direito de Família e Sucessões",
    resumo:
      "Divórcio, guarda, pensão e inventário, conduzidos com cuidado para preservar vínculos e patrimônio.",
    casos: [
      "Divórcio consensual e litigioso",
      "Guarda, convivência e pensão alimentícia",
      "União estável: reconhecimento e dissolução",
      "Inventário, partilha e testamento",
    ],
  },
  {
    id: "saude",
    curto: "direito da saúde",
    titulo: "Direito da Saúde",
    resumo:
      "Atuação contra negativas de planos de saúde e do poder público em tratamentos, exames e medicamentos.",
    casos: [
      "Negativa de cirurgia, exame ou medicamento",
      "Tratamentos para TEA, câncer e doenças raras",
      "Reajustes abusivos de plano de saúde",
      "Fornecimento de medicamentos pelo SUS",
    ],
  },
  {
    id: "previdenciario",
    curto: "INSS e aposentadoria",
    titulo: "Direito Previdenciário",
    resumo:
      "Pedidos, recursos e revisões de benefícios junto ao INSS, na via administrativa e judicial.",
    casos: [
      "Aposentadorias e planejamento previdenciário",
      "Auxílio por incapacidade e BPC/LOAS",
      "Pensão por morte e salário-maternidade",
      "Revisão de benefícios negados ou cortados",
    ],
  },
  {
    id: "trabalho",
    curto: "direito do trabalho",
    titulo: "Direito do Trabalho",
    resumo:
      "Defesa dos direitos do trabalhador, da rescisão do contrato ao acidente de trabalho.",
    casos: [
      "Verbas rescisórias e horas extras",
      "Reconhecimento de vínculo de emprego",
      "Assédio moral e acidente de trabalho",
      "Estabilidade de gestante e de acidentado",
    ],
  },
] as const;
export type AreaId = (typeof areas)[number]["id"];
