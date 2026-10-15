import Reveal from "./Reveal.jsx";

export default function Formacao() {
  return (
    <section id="formacao" className="section">
      <div className="page-shell narrow">
        <span className="section-label">Formação</span>

        <div className="formation-grid">
          <Reveal as="div" className="formation-card">
            <h3>Centro Universitário UNA</h3>
            <p>Análise e Desenvolvimento de Sistemas</p>
            <span>Previsão de conclusão: Jul/2026</span>
          </Reveal>

          <Reveal as="div" className="formation-card" delay={0.08}>
            <h3>Formação complementar</h3>
            <p>Cursos complementares em SQL, Python, Power BI, Big Data, Engenharia de Dados e IA aplicada.</p>
          </Reveal>
        </div>

        <Reveal as="div" className="direction-note" delay={0.14}>
          <h3>Direção técnica</h3>
          <p>
            Tenho direcionado meus estudos para Big Data e Inteligência Artificial, para além do
            contexto financeiro — incluindo Engenharia de Dados, estatística e Machine Learning
            aplicados a problemas de negócio como churn, inadimplência, risco, portabilidade e
            propensão.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
