import { useActiveSection } from "../hooks/useActiveSection.js";

const NAV_ITEMS = [
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "stack", label: "Stack" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "formacao", label: "Formação" },
  { id: "contato", label: "Contato" },
];

const NAV_IDS = NAV_ITEMS.map((item) => item.id);

export default function Header() {
  const active = useActiveSection(NAV_IDS);

  return (
    <header className="header">
      <div className="page-shell nav">
        <a href="#home" className="brand">
          <span className="brand-mark">FS</span>
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? "active" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contato">
          Contato
        </a>
      </div>
    </header>
  );
}
