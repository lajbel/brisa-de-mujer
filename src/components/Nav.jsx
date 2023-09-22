import "../styles/nav_bar.css";

export default function Nav() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="/" className="nav__link">
                        Home
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/about" className="nav__link">
                        About
                    </a>
                </li>
            </ul>
        </nav>
    );
}
