import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MainContext } from "../context/MainContext";
import { Link } from "react-router-dom";
import "../styles/nav_bar.css";

export default class Nav extends Component {
    static contextType = MainContext;

    render() {
        return (
            <nav className="nav">
                <h1 className="nav__title">Brisa de Mujer</h1>
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="/" className="nav__link">
                            <FontAwesomeIcon icon={["fa-solid", "fa-house"]} className="nav__icon" />
                            <p className="nav__link-text">Inicio</p>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/about" className="nav__link">
                            <FontAwesomeIcon icon={["fa-solid", "fa-child-dress"]} className="nav__icon" />
                            <p className="nav__link-text">Sobre Nosotras</p>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/catalog" className="nav__link">
                            <FontAwesomeIcon icon={["fa-solid", "fa-shirt"]} className="nav__icon" />
                            <p className="nav__link-text">Catalogo</p>
                        </Link>
                    </li>
                </ul>
                <div>
                    <div className="nav__cart">
                        <Link to="/cart" className="nav__link">
                            <p className="nav__cart-count">{this.context.state.cart.length}</p>
                            <FontAwesomeIcon icon={["fa-solid", "fa-cart-shopping"]} className="nav__icon" />
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}
