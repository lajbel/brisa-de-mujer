import { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { CatalogPage } from "./pages/CatalogPage";
import { CartPage } from "./pages/CartPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainContext } from "./context/MainContext";

// add fontawesome icons
library.add(fas);
export default class App extends Component {
    state = {
        popUpActive: false,
        currentItem: null,
        filter: {
            minPrice: 0,
            maxPrice: 0,
            colors: [],
            sizes: [],
        },
        cart: [],
    };

    updateFilter = (filter) => {
        this.setState({ filter });
    };

    updateCurrentItem = (item) => {
        this.setState({ currentItem: item });
    };

    togglePopUp = (toggleTo) => {
        this.setState({ popUpActive: toggleTo ? toggleTo : !this.state.popUpActive });
    };

    addToCart = (item) => {
        this.setState({ cart: [...this.state.cart, item] });
    };

    render() {
        return (
            <MainContext.Provider
                value={{
                    state: this.state,
                    updateFilter: this.updateFilter,
                    updateCurrentItem: this.updateCurrentItem,
                    togglePopUp: this.togglePopUp,
                    addToCart: this.addToCart,
                }}
            >
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/catalog" element={<CatalogPage />} />
                        <Route path="/about" element={<AboutPage />} />\
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                </BrowserRouter>
            </MainContext.Provider>
        );
    }
}
