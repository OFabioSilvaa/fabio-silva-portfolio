import Reveal from "./Reveal.jsx";

const STACK_ITEMS = [
  {
    title: "SQL & Dados",
    description: "SQL, Snowflake, Databricks, PostgreSQL, DuckDB, Modelagem Analítica, Data Warehouse",
  },
  {
    title: "Python & Automação",
    description: "Python, Pandas, Polars, Selenium, RPA, Power Automate",
  },
  {
    title: "BI & Visualização",
    description: "Power BI, DAX, Tableau, Excel, Google Sheets",
  },
  {
    title: "Engenharia de Dados",
    description: "ETL, Bronze/Silver/Gold, Quality Checks, Logs, Git/GitHub, Pipelines",
  },
  {
    title: "IA aplicada",
    description: "LLMs, RAG, Agentes de IA, Gemini, Claude Code, Prompt Engineering, Geração assistida de SQL",
  },
  {
    title: "Crédito & Negócio financeiro",
    description: "Análise de Crédito, Retenção, Portabilidade, Fechamento de RCO, Indicadores financeiros",
  },
];

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="page-shell narrow">
        <span className="section-label">Stack técnica</span>

        <div className="stack-grid">
          {STACK_ITEMS.map((item, i) => (
            <Reveal as="div" key={item.title} className="stack-card" delay={(i % 3) * 0.06}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
