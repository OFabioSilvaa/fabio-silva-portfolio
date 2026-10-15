import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow" />

      <div className="page-shell hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="location-pill">Belo Horizonte, MG · Crédito, Retenção e Portabilidade</div>

          <h1>Fábio Silva</h1>

          <p className="role">Assistente de Crédito | Retenção e Portabilidade</p>

          <p className="subrole">Data & AI | SQL | Python | Databricks | Snowflake | Power BI</p>

          <h2>Crédito, dados e automação inteligente para apoiar decisões de negócio mais seguras.</h2>

          <p className="hero-description">
            Atuo como Assistente de Crédito na área de Retenção e Portabilidade, unindo dados,
            indicadores e IA para apoiar decisões mais rápidas e seguras — desenvolvendo agentes de
            IA e RPA para otimizar os processos operacionais do time.
          </p>

          <p className="highlight-line">
            Uno crédito, dados e automação para transformar processos analíticos em decisões mais
            claras, rastreáveis e eficientes.
          </p>

          <div className="actions">
            <a className="btn btn-primary" href="#projetos">
              Ver projetos
            </a>
            <a className="btn" href="https://github.com/OFabioSilvaa" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a
              className="btn"
              href="https://www.linkedin.com/in/fábio-andre-silva/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a className="btn" href="/assets/curriculo-fabio-silva.pdf" download>
              Baixar currículo
            </a>
          </div>
        </motion.div>

        <motion.aside
          className="profile-panel"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="portrait-frame">
            <img src="/assets/profile.jpg" alt="Foto de Fábio Silva" />
          </div>

          <div className="profile-caption">
            <span className="caption-kicker">Crédito · Retenção · Data & AI</span>
            <div className="tech-row">
              <span>Data & AI</span>
              <span>SQL</span>
              <span>Python</span>
              <span>Databricks</span>
              <span>Snowflake</span>
              <span>Power BI</span>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
