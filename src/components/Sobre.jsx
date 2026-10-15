import Reveal from "./Reveal.jsx";

export default function Sobre() {
  return (
    <section id="sobre" className="section section-dark">
      <div className="page-shell split">
        <div>
          <span className="section-label">Sobre</span>
          <h2>Crédito, dados e automação em contexto financeiro.</h2>
        </div>

        <Reveal className="body-copy">
          <p>
            Sou Fábio Silva, Assistente de Crédito na área de Retenção e Portabilidade do setor
            financeiro, com base sólida em dados, SQL e automação. Iniciei como estagiário em Dados
            no Banco Mercantil e fui efetivado em julho de 2026, unindo minha experiência analítica
            ao dia a dia de crédito e retenção.
          </p>

          <p>
            Minha atuação combina análise de crédito, retenção e portabilidade, tratamento de dados
            para acompanhamento do desempenho operacional, apoio ao fechamento do Comitê Operacional
            (RCO) e suporte a indicadores de gestão — incluindo o acompanhamento operacional de duas
            BPOs, garantindo o alinhamento das operações de retenção.
          </p>

          <p>
            Aplico Inteligência Artificial, agentes de IA e RPA para automatizar tarefas, reduzir
            esforço manual e identificar oportunidades de melhoria contínua — como o RPA que
            desenvolvi para o fechamento do RCO, reduzindo o tempo de execução em 87,5%.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
