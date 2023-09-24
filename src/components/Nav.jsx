import "../styles/nav_bar.css";

export default function Nav() {
    return (
        <nav className="nav">
            <h1 className="nav__title">Brisa de Mujer</h1>
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="/" className="nav__link">
                        Inicio
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/about" className="nav__link">
                        Sobre Nosotras
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/about" className="nav__link">
                        Catalogo
                    </a>
                </li>
            </ul>
        </nav>
    );
}
