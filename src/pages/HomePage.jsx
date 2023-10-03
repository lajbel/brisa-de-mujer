import { Component } from "react";
import { Page } from "./Page";
import Catalog from "../components/Catalog";

export class HomePage extends Component {
    render() {
        return (
            <Page>
                <h1 className="page__title">Brisa de Mujer</h1>
                <h2 className="page__title2">Último Catalogo</h2>
                <Catalog />
            </Page>
        );
    }
}
