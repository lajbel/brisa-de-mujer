import { Component } from "react";
import { Page } from "./Page";
import { ContactForm } from "../components/ContactForm";
import "../styles/about.css";

export class AboutPage extends Component {
    render() {
        return (
            <Page>
                <div className="about">
                    <div className="about__section">
                        <img className="about__image" src="/Logo.png"></img>
                        <h1 className="about__title">Sobre Nosotras</h1>
                        <p className="about__description">
                            Nosotras somos un grupo de jóvenes emprendedoras, que un día decidimos crear una marca de
                            ropa, más específicamente de lencería. El nombre fue <b>Brisa de Mujer</b>, porque queríamos
                            que fuera una marca que represente a la mujer, que sea delicada y a la vez fuerte, al igual
                            que la brisa.
                        </p>
                    </div>

                    <div className="about__section">
                        <h2 className="about__title">¿Qué nos inspira?</h2>
                        <p className="about__description">
                            Nos inspira la mujer, su fuerza, su delicadeza, su belleza, su sensualidad, su inteligencia,
                            su capacidad de amar, su capacidad de dar vida. Nos inspira la mujer en todas sus formas,
                            colores, tamaños y edades.
                        </p>
                    </div>

                    <div className="about__section">
                        <h2 className="about__title">Contacto</h2>
                        <p className="about__description">
                            Si te interesa alguno de nuestros productos, o querés hacer alguna consulta, no dudes en
                            contactarnos.
                        </p>
                        <ContactForm />
                    </div>
                </div>
            </Page>
        );
    }
}
