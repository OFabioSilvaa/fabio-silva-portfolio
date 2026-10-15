import Reveal from "./Reveal.jsx";

const DIFFERENTIALS = [
  {
    title: "Crédito + dados",
    description: "Combino análise de crédito e retenção com SQL, indicadores e bases analíticas para decisões mais seguras.",
  },
  {
    title: "Automação com impacto",
    description: "Uso Python, RPA e automação para reduzir esforço operacional — como o RPA que cortou 87,5% do tempo de fechamento do RCO.",
  },
  {
    title: "IA aplicada a crédito e dados",
    description: "Experiência prática com LLMs, RAG e agentes de IA para apoio analítico, documentação e geração assistida de SQL.",
  },
  {
    title: "Contexto corporativo",
    description: "Atuação em ambiente financeiro com foco em qualidade, rastreabilidade e tomada de decisão.",
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="section section-dark">
      <div className="page-shell narrow">
        <span className="section-label">Diferenciais</span>

        <div className="differentials-grid">
          {DIFFERENTIALS.map((item, i) => (
            <Reveal as="div" key={item.title} className="diff-card" delay={(i % 4) * 0.06}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
