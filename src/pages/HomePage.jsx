import { Component } from "react";
import { Page } from "./Page";
import { ContextCatalog } from "../components/ContextCatalog";

export class HomePage extends Component {
    render() {
        return (
            <Page clas>
                <h1 className="page__title">Brisa de Mujer</h1>
                <img className="about__image" src="/logo.png"></img>
                <h2 className="page__title2">Último Catalogo</h2>
                <ContextCatalog latest />
            </Page>
        );
    }
}
