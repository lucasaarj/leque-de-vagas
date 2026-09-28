export type Vaga = {
  id: string;
  titulo: string;
  empresa: string;
  empresaSlug: string;
  area: string;
  senioridade: string;
  local: string;
  aceitaIniciante: boolean;
  descricao: string;
};

export const vagas: Vaga[] = [
  {
    id: "1",
    titulo: "Pessoa Desenvolvedora Front-end Júnior",
    empresa: "Aurora Tech",
    empresaSlug: "aurora-tech",
    area: "Front-end",
    senioridade: "Júnior",
    local: "Remoto",
    aceitaIniciante: true,
    descricao:
      "Você vai trabalhar com React e Next.js num time de produto que já " +
      "está no ar, pareando com gente mais experiente nas primeiras semanas " +
      "e assumindo telas inteiras depois. O dia a dia é ler o código dos " +
      "outros, abrir pull request pequeno e conversar com quem desenha. Não " +
      "exigimos experiência anterior em empresa: exigimos vontade de " +
      "aprender em público e de pedir ajuda antes de travar dois dias.",
  },
  {
    id: "2",
    titulo: "Analista de Dados Júnior",
    empresa: "Aurora Tech",
    empresaSlug: "aurora-tech",
    area: "Dados",
    senioridade: "Júnior",
    local: "Híbrido · Recife",
    aceitaIniciante: true,
    descricao:
      "O time de dados cuida dos painéis que a diretoria abre toda segunda " +
      "de manhã. Você vai escrever SQL, limpar planilha que chegou torta e " +
      "montar visualização que responde uma pergunta de negócio por vez. " +
      "Metade do trabalho é técnico; a outra metade é descobrir o que a " +
      "pessoa que pediu o relatório realmente queria saber. Python é " +
      "bem-vindo e não é obrigatório para se candidatar.",        
  },
  {
    id: "3",
    titulo: "Pessoa Desenvolvedora Mobile Pleno",
    empresa: "Nuvem Rosa",
    empresaSlug: "nuvem-rosa",
    area: "Mobile",
    senioridade: "Pleno",
    local: "Presencial · Olinda",
    aceitaIniciante: false,
    descricao:
      "O aplicativo da Nuvem Rosa está nas duas lojas e tem gente usando " +
      "todo dia, então a vaga é para quem já publicou app e sabe o que " +
      "acontece quando uma atualização quebra na mão de quem usa. A stack " +
      "é React Native com Expo, testes em Detox e uma esteira de release " +
      "que você vai ajudar a arrumar. Pedimos dois anos de experiência com " +
      "mobile porque hoje não há ninguém sênior no time para revisar.",   
  },
  {
    id: "4",
    titulo: "Analista de Suporte Técnico Júnior",
    empresa: "Conecta Soluções",
    empresaSlug: "conecta-solucoes",
    area: "Suporte",
    senioridade: "Júnior",
    local: "São Paulo, SP",
    aceitaIniciante: true,
    descricao: "Atendimento a chamados de nível 1 e 2, suporte a hardware e software, e documentação de processos."
  },
  {
    id: "5",
    titulo: "Desenvolvedor(a) Front-end Júnior",
    empresa: "TechStart Inovação",
    empresaSlug: "techstart-inovacao",
    area: "Tecnologia",
    senioridade: "Júnior",
    local: "Remoto",
    aceitaIniciante: true,
    descricao: "Desenvolvimento e manutenção de interfaces web utilizando React, HTML, CSS e JavaScript. Participação em rituais ágeis."
  },
  {
    id: "6",
    titulo: "Desenvolvedor(a) Back-end Pleno",
    empresa: "CloudScale Sistemas",
    empresaSlug: "cloudscale-sistemas",
    area: "Tecnologia",
    senioridade: "Pleno",
    local: "Remoto",
    aceitaIniciante: false,
    descricao: "Criação e manutenção de APIs RESTful com Node.js e TypeScript, integração com bancos de dados relacionais e arquitetura em nuvem."
  },
  {
    id: "7",
    titulo: "Product Owner Pleno",
    empresa: "AgileSoft",
    empresaSlug: "agilesoft",
    area: "Produto",
    senioridade: "Pleno",
    local: "Remoto",
    aceitaIniciante: false,
    descricao: "Gestão do backlog de produtos, refinamento de histórias de usuário e alinhamento contínuo com stakeholders e equipes de desenvolvimento."
  },
  {
    id: "8",
    titulo: "Analista de Dados Pleno",
    empresa: "DataPulse Analytics",
    empresaSlug: "datapulse-analytics",
    area: "Dados",
    senioridade: "Pleno",
    local: "Belo Horizonte, MG",
    aceitaIniciante: false,
    descricao: "Desenvolvimento de dashboards em Power BI, modelagem de dados e escrita de consultas SQL avançadas para apoiar a tomada de decisão."
  },
  {
    id: "9",
    titulo: "Arquiteto(a) de Software Sênior",
    empresa: "Enterprise Solutions",
    empresaSlug: "enterprise-solutions",
    area: "Tecnologia",
    senioridade: "Sênior",
    local: "São Paulo, SP",
    aceitaIniciante: false,
    descricao: "Definição de arquitetura de microsserviços, tomada de decisões técnicas de longo prazo e mentoria técnica para desenvolvedores."
  },
  {
    id: "10",
    titulo: "Engenheiro(a) de DevOps Sênior",
    empresa: "DevOps Masters",
    empresaSlug: "devops-masters",
    area: "Infraestrutura",
    senioridade: "Sênior",
    local: "Remoto",
    aceitaIniciante: false,
    descricao: "Implementação e gestão de pipelines de CI/CD, automação de infraestrutura com Terraform e monitoramento de ambientes em AWS."
  },
  {
    id: "11",
    titulo: "Gerente de Projetos Sênior",
    empresa: "Global Projects",
    empresaSlug: "global-projects",
    area: "Gestão",
    senioridade: "Sênior",
    local: "Curitiba, PR",
    aceitaIniciante: false,
    descricao: "Liderança de projetos estratégicos de grande porte, gestão de orçamento, mitigação de riscos e alinhamento com a diretoria."
  },
  {
    id: "12",
    titulo: "UX/UI Designer Sênior",
    empresa: "DesignLab Studio",
    empresaSlug: "designlab-studio",
    area: "Design",
    senioridade: "Sênior",
    local: "Remoto",
    aceitaIniciante: false,
    descricao: "Condução de pesquisas com usuários, criação de wireframes, protótipos de alta fidelidade e manutenção do design system da empresa."
  },
];