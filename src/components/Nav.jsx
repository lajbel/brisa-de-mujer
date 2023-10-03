import "../styles/nav_bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav() {
    return (
        <nav className="nav">
            <h1 className="nav__title">Brisa de Mujer</h1>
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="/" className="nav__link">
                        <FontAwesomeIcon icon="fa-solid fa-house" className="nav__icon" />
                        <p className="nav__link-text">Inicio</p>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/about" className="nav__link">
                        <FontAwesomeIcon icon="fa-solid fa-child-dress" className="nav__icon" />
                        <p className="nav__link-text">Sobre Nosotras</p>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/catalog" className="nav__link">
                        <FontAwesomeIcon icon="fa-solid fa-shirt" className="nav__icon" />
                        <p className="nav__link-text">Catalogo</p>
                    </a>
                </li>
            </ul>
            <div>
                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className="nav__icon" />
            </div>
        </nav>
    );
}
