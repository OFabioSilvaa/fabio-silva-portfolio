import Reveal from "./Reveal.jsx";

const CURRENT_ROLE_COLUMN_1 = [
  "Apoio às atividades de retenção e portabilidade de crédito, contribuindo para análises e tomada de decisão por meio de dados e indicadores",
  "Análise, tratamento e consolidação de dados para acompanhamento do desempenho operacional e suporte à gestão",
  "Apoio no fechamento do Comitê Operacional (RCO), consolidando informações e preparando materiais para apresentações gerenciais",
  "Elaboração e envio de relatórios operacionais diários para a área de Control, garantindo a disponibilidade de informações para acompanhamento dos indicadores",
  "Acompanhamento de indicadores e suporte operacional a duas BPOs, assegurando o alinhamento das operações de retenção",
];

const CURRENT_ROLE_COLUMN_2 = [
  "Utilização de Inteligência Artificial e agentes de IA para apoiar análises, automatizar tarefas e identificar oportunidades de melhoria contínua",
  "Desenvolvimento de automações para otimização de processos internos, aumentando a produtividade e reduzindo atividades manuais",
  "Desenvolvimento de um RPA para automatizar o fechamento do RCO, reduzindo o tempo de execução de 1h20 para 10 minutos (−87,5%), padronizando o processo e aumentando a eficiência operacional",
  "Identificação e implementação de melhorias em processos por meio da análise de dados e automação, em colaboração com equipes multidisciplinares",
];

const INTERNSHIP_BULLETS = [
  "Desenvolvimento e otimização de consultas SQL em ambiente Snowflake",
  "Manipulação, tratamento e análise de dados para áreas de precificação e portabilidade",
  "Apoio a análises relacionadas a crédito, portabilidade, produtos financeiros e indicadores de negócio",
  "Automação de rotinas com Python e Pandas",
  "Construção de dashboards e relatórios em Power BI e Google Sheets",
  "Aplicação de IA Generativa, LLMs e RAG para produtividade analítica e geração assistida de SQL",
  "Monitoramento e rastreabilidade de rotinas de dados",
];

export default function Experiencia() {
  return (
    <section id="experiencia" className="section">
      <div className="page-shell narrow">
        <span className="section-label">Experiência</span>

        <Reveal as="article" className="experience-card">
          <div className="experience-company-header">
            <h3>Banco Mercantil</h3>
            <p>Crédito, Retenção e Portabilidade</p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker timeline-marker-current" />
              <div className="timeline-content">
                <div className="timeline-top">
                  <div>
                    <h4>Assistente de Crédito</h4>
                    <span className="role-subtitle">Retenção e Portabilidade</span>
                  </div>
                  <span className="experience-badge experience-badge-current">Efetivado</span>
                </div>
                <span className="timeline-date">Julho/2026 — Atual</span>

                <p className="muted">
                  Efetivado após o estágio em Dados, apoio o time de Retenção e Portabilidade
                  unindo análise de dados, indicadores, IA e automação ao dia a dia operacional de
                  crédito.
                </p>

                <div className="stat-highlight">
                  <strong>−87,5%</strong>
                  <span>
                    no tempo de fechamento do RCO com um RPA desenvolvido internamente — de 1h20
                    para 10 minutos
                  </span>
                </div>

                <div className="project-columns">
                  <ul className="bullet-list">
                    {CURRENT_ROLE_COLUMN_1.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <ul className="bullet-list">
                    {CURRENT_ROLE_COLUMN_2.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-top">
                  <div>
                    <h4>Estagiário em Dados</h4>
                  </div>
                  <span className="experience-badge">Estágio</span>
                </div>
                <span className="timeline-date">Julho/2025 — Junho/2026</span>

                <p className="muted">
                  Atuação com análise de dados, SQL em ambiente Snowflake, automação de rotinas,
                  dashboards e apoio a processos analíticos no setor financeiro.
                </p>

                <ul className="bullet-list">
                  {INTERNSHIP_BULLETS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
