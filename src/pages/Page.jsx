import { Component } from "react";
import { MainContext } from "../context/MainContext";
import Nav from "../components/Nav";
import "../styles/page.css";

export class Page extends Component {
    state = {
        popUpActive: false,
        currentItem: null,
        filter: {
            minPrice: 0,
            maxPrice: 15000,
            colors: [],
            sizes: [],
        },
    };

    updateFilter = (filter) => {
        this.setState({ filter });
    };

    updateCurrentItem = (item) => {
        this.setState({ currentItem: item });
    };

    togglePopUp = () => {
        this.setState({ popUpActive: !this.state.popUpActive });
    };

    render() {
        return (
            <main className="page">
                <MainContext.Provider
                    value={{
                        state: this.state,
                        updateFilter: this.updateFilter,
                        updateCurrentItem: this.updateCurrentItem,
                        togglePopUp: this.togglePopUp,
                    }}
                >
                    <Nav />
                    <div className="content">{this.props.children}</div>
                </MainContext.Provider>
            </main>
        );
    }
}
