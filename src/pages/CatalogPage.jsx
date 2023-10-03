import { Component } from "react";
import { Page } from "./Page";
import { ContextCatalog } from "../components/ContextCatalog";
import { FilterBox } from "../components/FilterBox";

export class CatalogPage extends Component {
    render() {
        return (
            <Page>
                <h1 className="page__title">Catalogo</h1>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: "0 140px",
                    }}
                >
                    <div
                        style={{
                            width: "30%",
                        }}
                    >
                        <FilterBox />
                    </div>
                    <div
                        style={{
                            width: "50%",
                        }}
                    >
                        <ContextCatalog />
                    </div>
                </div>
            </Page>
        );
    }
}
