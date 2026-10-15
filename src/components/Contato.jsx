import Reveal from "./Reveal.jsx";

export default function Contato() {
  return (
    <section id="contato" className="section contact-section">
      <div className="page-shell">
        <Reveal as="div" className="contact-card">
          <h2>Vamos conversar sobre crédito, dados, automação e IA aplicada?</h2>
          <p>
            Entre em contato para conversar sobre projetos, crédito, dados, analytics, automação,
            IA aplicada e tecnologia no setor financeiro.
          </p>

          <div className="contact-actions">
            <a href="https://wa.me/5531982071294" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href="mailto:fabiosilvabh6@gmail.com">E-mail</a>
            <a href="https://www.linkedin.com/in/fábio-andre-silva/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/OFabioSilvaa" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
