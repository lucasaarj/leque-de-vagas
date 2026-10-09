export type Empresa = {
  slug: string;
  nome: string;
  sobre: string;
  site: string;
};

export const empresas: Empresa[] = [
  {
    slug: "aurora-tech",
    nome: "Aurora Tech",
    sobre:
      "Produto próprio na área de logística, 60 pessoas, sede no Recife e " +
      "time distribuído pelo Nordeste inteiro. Contrata pessoas em início " +
      "de carreira desde 2021 e mantém um programa de mentoria interna.",
    site: "https://aurora.exemplo.br",
  },
  {
    slug: "nuvem-rosa",
    nome: "Nuvem Rosa",
    sobre:
      "Estúdio de aplicativos com escritório em Olinda. Trabalha por " +
      "projeto para clientes de saúde e educação, com times pequenos de " +
      "três a cinco pessoas e entrega quinzenal.",
    site: "https://nuvemrosa.exemplo.br",
  },
  {
    slug: "conecta-solucoes",
    nome: "Conecta Soluções",
    sobre:
      "Focada em terceirização de infraestrutura e suporte técnico corporativo de TI. " +
      "Com sede em São Paulo, a empresa atende grandes clientes do setor varejista, " +
      "garantindo estabilidade e alta disponibilidade de sistemas através de um " +
      "atendimento ágil e documentação rigorosa.",
    site: "https://conectasolucoes.exemplo.br",
  },
  {
    slug: "techstart-inovacao",
    nome: "TechStart Inovação",
    sobre:
      "Uma startup que atua como fábrica de software ágil. Com cultura 100% remota, " +
      "constrói MVPs e produtos digitais para outras startups. A cultura interna " +
      "valoriza rituais ágeis e a constante atualização tecnológica, dando muito " +
      "espaço para a evolução de desenvolvedores juniores.",
    site: "https://techstart.exemplo.br",
  },
  {
    slug: "cloudscale-sistemas",
    nome: "CloudScale Sistemas",
    sobre:
      "Especializada em arquiteturas escaláveis em nuvem para o setor financeiro. " +
      "O foco da engenharia é manter a segurança, estabilidade e alta performance " +
      "de APIs complexas. O time atua de forma assíncrona e totalmente remota, " +
      "com forte cultura de testes e documentação.",
    site: "https://cloudscale.exemplo.br",
  }
];