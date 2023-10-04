import { Component } from "react";
import { Page } from "./Page";
import { Payment } from "../components/Payment";
import "../styles/catalog-page.css";

export class CartPage extends Component {
    render() {
        return (
            <Page>
                <h1 className="page__title">Comprar</h1>
                <Payment />
            </Page>
        );
    }
}
