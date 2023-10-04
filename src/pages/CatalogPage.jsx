import { Component } from "react";
import { Page } from "./Page";
import { ContextCatalog } from "../components/ContextCatalog";
import { FilterBox } from "../components/FilterBox";
import "../styles/catalog-page.css";

export class CatalogPage extends Component {
    render() {
        return (
            <Page>
                <h1 className="page__title">Catalogo</h1>
                <div className="catalog-page">
                    <FilterBox />
                    <ContextCatalog />
                </div>
            </Page>
        );
    }
}
