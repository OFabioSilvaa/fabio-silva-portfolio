import Reveal from "./Reveal.jsx";

export default function Projetos() {
  return (
    <section id="projetos" className="section section-dark">
      <div className="page-shell narrow">
        <span className="section-label">Projetos em destaque</span>

        <div className="project-list">
          <Reveal as="article" className="project-card project-featured">
            <div className="project-header">
              <div>
                <span className="project-kicker">Projeto principal</span>
                <h3>Aurora Bank Enterprise Data Lab</h3>
              </div>
              <a
                href="https://github.com/OFabioSilvaa/aurora-bank-enterprise-data-lab"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>

            <p>
              Data Lab bancário fictício criado para simular um ambiente analítico corporativo de
              um banco digital/múltiplo, com dados sintéticos, PostgreSQL, DuckDB, SQL, Cliente
              360, DWs de negócio, quality checks e KPIs executivos.
            </p>

            <div className="project-columns">
              <ul>
                <li>Arquitetura em camadas Bronze, Silver, SDX, Gold e Meta</li>
                <li>Migração DuckDB para PostgreSQL</li>
                <li>DWs de contratação, portabilidade, CRM, canais digitais, cobrança e churn</li>
              </ul>
              <ul>
                <li>KPIs executivos e quality checks</li>
                <li>Simulação de regras bancárias, indicadores e visão Cliente 360</li>
                <li>Base para Power BI, Excel e análises SQL</li>
              </ul>
            </div>

            <div className="tags">
              <span>PostgreSQL</span>
              <span>DuckDB</span>
              <span>SQL</span>
              <span>Data Warehouse</span>
              <span>Cliente 360</span>
              <span>Churn</span>
              <span>Portabilidade</span>
            </div>
          </Reveal>

          <Reveal as="article" className="project-card" delay={0.08}>
            <div className="project-header">
              <h3>J.A.R.V.I.S. — Agente de IA para Dados</h3>
              <a
                href="https://www.linkedin.com/posts/f%C3%A1bio-andre-silva_dados-ia-sql-share-7455718522430775296-iw9Z?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE7hbYYBOeo6Et0c4t9_6VLbR1sgXOQh6Ss"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <p>
              Agente de IA com LLM + RAG para apoio à análise de dados, consulta a dicionários de
              dados, interpretação de regras de negócio e geração assistida de queries SQL em
              contexto analítico.
            </p>

            <div className="project-columns">
              <ul>
                <li>Construção de agente com arquitetura baseada em LLM + RAG</li>
                <li>Consulta a dicionários de dados e regras de negócio</li>
                <li>Apoio à geração e explicação de queries SQL</li>
              </ul>
              <ul>
                <li>Uso de IA como camada de produtividade analítica</li>
                <li>Organização de conhecimento técnico</li>
                <li>Foco em governança de conhecimento e onboarding técnico</li>
              </ul>
            </div>

            <p className="project-note">
              Case apresentado de forma conceitual, sem exposição de dados internos, tabelas reais
              ou informações confidenciais.
            </p>

            <div className="tags">
              <span>IA Generativa</span>
              <span>LLM</span>
              <span>RAG</span>
              <span>SQL</span>
              <span>Regras de Negócio</span>
            </div>
          </Reveal>

          <Reveal as="article" className="project-card" delay={0.16}>
            <div className="project-header">
              <h3>AI News Podcast Generator</h3>
              <a href="https://github.com/OFabioSilvaa/ai-news-podcast" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>

            <p>
              Pipeline automatizado com Python, IA, RSS, GitHub Actions e Telegram para geração e
              entrega de conteúdo.
            </p>

            <div className="project-columns">
              <ul>
                <li>Coleta de dados via RSS</li>
                <li>Processamento e geração de conteúdo com IA</li>
              </ul>
              <ul>
                <li>Automação de entrega</li>
                <li>Controle incremental para evitar duplicidades</li>
              </ul>
            </div>

            <div className="tags">
              <span>Python</span>
              <span>ETL</span>
              <span>LLM</span>
              <span>GitHub Actions</span>
              <span>Automação</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
