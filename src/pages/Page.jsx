import { Component } from "react";
import { MainContext } from "../context/MainContext";
import Nav from "../components/Nav";
import "../styles/page.css";

export class Page extends Component {
    static contextType = MainContext;

    render() {
        return (
            <main className="page">
                <div className={"page__overlay " + (this.context.state.popUpActive ? "page__overlay--active" : "")} />
                <Nav />
                <div className="content">{this.props.children}</div>
            </main>
        );
    }
}
