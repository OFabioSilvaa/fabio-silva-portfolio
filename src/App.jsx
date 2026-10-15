const LINKS = {
  linkedin: "https://www.linkedin.com/in/fábio-andre-silva/",
  github: "https://github.com/OFabioSilvaa",
  email: "fabiosilvabh6@gmail.com",
  whatsapp: "https://wa.me/5531982071294",
  cv: "/assets/curriculo-fabio-silva.pdf",
};

const RESULTS = [
  { processo: "Fechamento mensal do RCO", antes: "1h20", depois: "10 min", ganho: "−87,5%" },
  { processo: "Processamento de consultas no Snowflake", antes: "40 min", depois: "26 min", ganho: "−35%" },
  { processo: "Rotinas de análise automatizadas", antes: "2 h", depois: "30 min", ganho: "−75%" },
  { processo: "5 relatórios diários de acompanhamento", antes: "manual", depois: "2–8 min cada", ganho: "1 clique" },
  { processo: "Bases do comitê mensal", antes: "manual", depois: "~2 min", ganho: "validado" },
];

const EXPERIENCE = [
  {
    period: "jul/2026 — atual",
    role: "Assistente de Crédito",
    team: "Retenção e Portabilidade",
    summary:
      "Analytics engineering no dia a dia de crédito consignado: consultas SQL no Snowflake, pipelines em Python e as bases que alimentam os indicadores da área.",
    bullets: [
      "RPA em Python para o fechamento mensal do RCO, com conciliação automática por instituição financeira: de 1h20 para 10 minutos.",
      "5 relatórios diários que eram montados à mão agora rodam com um clique, com backup e log de cada execução.",
      "Bases do comitê mensal atualizadas direto do Snowflake em cerca de 2 minutos, com validação da estrutura antes de gravar.",
      "Agente de IA que transforma perguntas de negócio em SQL, apoiado em 21 tabelas documentadas e nas métricas oficiais dos dashboards. Passou em 10 de 10 testes antes de entrar em uso.",
      "Acompanhamento dos indicadores de duas BPOs de retenção.",
    ],
  },
  {
    period: "jul/2025 — jun/2026",
    role: "Estagiário em Dados",
    team: "Precificação de Crédito",
    summary: "SQL no Snowflake, automação com Python e dashboards para a área de precificação.",
    bullets: [
      "Otimização de consultas SQL: processamento de 40 para 26 minutos.",
      "Rotinas de análise automatizadas com Python (Pandas) e RPA: de 2 horas para 30 minutos.",
      "Dashboards em Power BI (DAX) e Google Sheets para indicadores de precificação.",
      "Monitoramento e logs de execução para rastrear as rotinas de dados.",
    ],
  },
];

const PROJECTS = [
  {
    name: "Aurora Bank Enterprise Data Lab",
    what: "Um banco fictício com dados sintéticos, montado como um ambiente analítico de verdade.",
    detail:
      "Camadas Bronze, Silver e Gold; data warehouses de contratação, portabilidade, CRM, cobrança e churn; visão Cliente 360; quality checks e KPIs executivos. Começou em DuckDB e migrou para PostgreSQL.",
    stack: "PostgreSQL, DuckDB, SQL, modelagem dimensional",
    links: [{ label: "Código no GitHub", href: "https://github.com/OFabioSilvaa/aurora-bank-enterprise-data-lab" }],
  },
  {
    name: "J.A.R.V.I.S., agente de IA para dados",
    what: "Um assistente que responde perguntas de negócio com SQL pronto e explicado.",
    detail:
      "Usa RAG sobre o dicionário de dados e as regras de negócio para gerar e explicar consultas, e ajuda no onboarding de novos analistas. Apresentado de forma conceitual, sem dados internos.",
    stack: "LLM, RAG, SQL, engenharia de prompt",
    links: [
      {
        label: "Post no LinkedIn",
        href: "https://www.linkedin.com/posts/f%C3%A1bio-andre-silva_dados-ia-sql-share-7455718522430775296-iw9Z",
      },
    ],
  },
  {
    name: "AI News Podcast",
    what: "Um podcast diário de notícias de IA, gerado e entregue sem ninguém apertar um botão.",
    detail:
      "Coleta notícias por RSS, evita duplicidades com DuckDB, escreve o roteiro com um LLM, gera o áudio e entrega no Telegram. Roda sozinho no GitHub Actions.",
    stack: "Python, Gemini, DuckDB, GitHub Actions",
    links: [{ label: "Código no GitHub", href: "https://github.com/OFabioSilvaa/ai-news-podcast" }],
  },
];

const SKILLS = [
  { group: "Dados", items: ["SQL (Snowflake, PostgreSQL, DuckDB)", "Pipelines, ETL e ELT", "Modelagem analítica", "Qualidade de dados"] },
  { group: "Python", items: ["Pandas e Polars", "openpyxl e Selenium", "RPA e Power Automate", "Git e GitHub Actions"] },
  { group: "BI", items: ["Power BI (DAX, Power Query)", "Tableau", "Google Sheets"] },
  { group: "IA aplicada", items: ["LLMs e RAG", "Agentes de IA", "Geração assistida de SQL", "Engenharia de prompt"] },
];

const STUDYING = [
  { step: "SQL avançado", when: "até fev/2027", note: "CTEs, window functions e certificação SQL Associate (DataCamp)" },
  { step: "Engenharia de dados", when: "mar–jun/2027", note: "Modelagem, dbt, orquestração e certificação Data Engineer Associate" },
  { step: "IA aplicada", when: "2º semestre/2027", note: "RAG, agentes e MCP, junto com a pós em Big Data" },
];

function ResultsQuery() {
  return (
    <figure className="query" aria-label="Resultados das automações que construí">
      <figcaption className="query-head">
        <span className="query-comment">-- impacto das automações que construí</span>
        <code>
          <b>select</b> processo, antes, depois, ganho <b>from</b> meu_trabalho;
        </code>
      </figcaption>
      <table>
        <thead>
          <tr>
            <th scope="col">processo</th>
            <th scope="col">antes</th>
            <th scope="col">depois</th>
            <th scope="col">ganho</th>
          </tr>
        </thead>
        <tbody>
          {RESULTS.map((r, i) => (
            <tr key={r.processo} style={{ "--i": i }}>
              <td>{r.processo}</td>
              <td className="num">{r.antes}</td>
              <td className="num">{r.depois}</td>
              <td className="num gain">{r.ganho}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="query-foot">{RESULTS.length} linhas · Banco Mercantil, 2025–2026</p>
    </figure>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">Pular para o conteúdo</a>
      <header className="top">
        <div className="shell top-inner">
          <a href="#inicio" className="mark">Fábio Silva</a>
          <nav aria-label="Seções">
            <a href="#experiencia">Experiência</a>
            <a href="#projetos">Projetos</a>
            <a href="#competencias">Competências</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        <section id="inicio" className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <h1>Fábio Silva</h1>
              <p className="lede">
                Analytics engineering em crédito consignado. Escrevo o SQL, construo os pipelines em Python e
                automatizo o que antes era feito à mão, para que os dados cheguem prontos a quem decide.
              </p>
              <p className="where">Assistente de Crédito no Banco Mercantil, em Belo Horizonte</p>
              <div className="actions">
                <a className="btn primary" href={LINKS.cv} download>Baixar currículo (PDF)</a>
                <a className="btn" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="btn" href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
            <img className="portrait" src="/assets/profile.jpg" alt="Foto de Fábio Silva" width="400" height="400" />
          </div>
          <div className="shell">
            <ResultsQuery />
          </div>
        </section>

        <section id="experiencia" className="block">
          <div className="shell">
            <h2>Experiência</h2>
            <p className="company">Banco Mercantil · Belo Horizonte, híbrido</p>
            <ol className="timeline">
              {EXPERIENCE.map((job) => (
                <li key={job.role} className="job">
                  <p className="period">{job.period}</p>
                  <div>
                    <h3>
                      {job.role} <span>{job.team}</span>
                    </h3>
                    <p className="summary">{job.summary}</p>
                    <ul>
                      {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="projetos" className="block alt">
          <div className="shell">
            <h2>Projetos</h2>
            <div className="projects">
              {PROJECTS.map((p) => (
                <article key={p.name} className="project">
                  <h3>{p.name}</h3>
                  <div>
                    <p className="what">{p.what}</p>
                    <p>{p.detail}</p>
                    <p className="stack">{p.stack}</p>
                    <p className="plinks">
                      {p.links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                      ))}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="competencias" className="block">
          <div className="shell">
            <h2>Competências</h2>
            <div className="skills">
              {SKILLS.map((s) => (
                <div key={s.group}>
                  <h3>{s.group}</h3>
                  <ul>
                    {s.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="next">
              <h3>O que estou estudando, nesta ordem</h3>
              <ol>
                {STUDYING.map((s) => (
                  <li key={s.step}>
                    <strong>{s.step}</strong>
                    <span className="when">{s.when}</span>
                    <span className="note">{s.note}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="edu">
              <h3>Formação</h3>
              <p>Tecnólogo em Análise e Desenvolvimento de Sistemas, Centro Universitário UNA (2024–2026)</p>
              <p>Inglês no CNA, em andamento (intermediário, leitura técnica)</p>
            </div>
          </div>
        </section>

        <section id="contato" className="contact">
          <div className="shell">
            <h2>Vamos conversar</h2>
            <p>Para falar de dados, analytics engineering ou IA aplicada, o caminho mais rápido é o e-mail.</p>
            <a className="email" href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
            <p className="contact-links">
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href={LINKS.cv} download>Currículo (PDF)</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="shell">© 2026 Fábio Silva</div>
      </footer>
    </>
  );
}
