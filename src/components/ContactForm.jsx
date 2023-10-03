import { Component } from "react";
import "../styles/form.css";

export class ContactForm extends Component {
    render() {
        return (
            <form className="form">
                <label className="form__label" htmlFor="name">
                    Nombre
                </label>
                <input className="form__input" type="text" name="name" id="name" />
                <label className="form__label" htmlFor="email">
                    Email
                </label>
                <input className="form__input" type="email" name="email" id="email" />
                <label className="form__label" htmlFor="subject">
                    Asunto
                </label>
                <input className="form__input" type="text" name="subject" id="subject" />
                <label className="form__label" htmlFor="message">
                    Mensaje
                </label>
                <textarea className="form__input" name="message" id="message" cols="30" rows="10"></textarea>
                <button className="form__button" type="submit">
                    Enviar
                </button>
            </form>
        );
    }
}
