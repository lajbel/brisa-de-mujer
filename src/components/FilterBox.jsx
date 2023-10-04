import { Component } from "react";
import { MainContext } from "../context/MainContext";
import "../styles/filter_box.css";

export class FilterBox extends Component {
    static contextType = MainContext;

    handleColorClick = (e) => {
        const target = e.target;
        const value = target.value;

        if (target.checked) {
            this.context.updateFilter({
                ...this.context.state.filter,
                colors: [...this.context.state.filter.colors, value],
            });
        } else {
            this.context.updateFilter({
                ...this.context.state.filter,
                colors: this.context.state.filter.colors.filter((color) => color !== value),
            });
        }
    };

    handleSizeClick = (e) => {
        const target = e.target;
        const value = target.value;

        if (target.checked) {
            this.context.updateFilter({
                ...this.context.state.filter,
                sizes: [...this.context.state.filter.sizes, value],
            });
        } else {
            this.context.updateFilter({
                ...this.context.state.filter,
                sizes: this.context.state.filter.sizes.filter((size) => size !== value),
            });
        }
    };

    render() {
        return (
            <div className="filter-box">
                <h1 className="filter-box__title">COLOR</h1>
                <div className="filter-box__section filter-box__color-selector">
                    <input
                        className="filter-box__color filter-box__color--red"
                        type="checkbox"
                        name="color"
                        value="red"
                        onClick={this.handleColorClick}
                    />
                    <input
                        className="filter-box__color filter-box__color--blue"
                        type="checkbox"
                        name="color"
                        value="blue"
                        onClick={this.handleColorClick}
                    />
                    <input
                        className="filter-box__color filter-box__color--green"
                        type="checkbox"
                        name="color"
                        value="green"
                        onClick={this.handleColorClick}
                    />
                    <input
                        className="filter-box__color filter-box__color--yellow"
                        type="checkbox"
                        name="color"
                        value="yellow"
                        onClick={this.handleColorClick}
                    />
                    <input
                        className="filter-box__color filter-box__color"
                        type="checkbox"
                        name="color"
                        value="white"
                        onClick={this.handleColorClick}
                    />
                    <input
                        className="filter-box__color filter-box__color--black"
                        type="checkbox"
                        name="color"
                        value="black"
                        onClick={this.handleColorClick}
                    />
                </div>
                <h1 className="filter-box__title">TALLES</h1>
                <div className="ffilter-box__section filter-box__size-selector">
                    <label className="filter-box__size-label">S</label>
                    <input
                        className="filter-box__size"
                        type="checkbox"
                        name="size"
                        value="S"
                        onClick={this.handleSizeClick}
                    />
                    <label className="filter-box__size-label">M</label>
                    <input
                        className="filter-box__size"
                        type="checkbox"
                        name="size"
                        value="M"
                        onClick={this.handleSizeClick}
                    />
                    <label className="filter-box__size-label">L</label>
                    <input
                        className="filter-box__size"
                        type="checkbox"
                        name="size"
                        value="L"
                        onClick={this.handleSizeClick}
                    />
                    <label className="filter-box__size-label">XL</label>
                    <input
                        className="filter-box__size"
                        type="checkbox"
                        name="size"
                        value="XL"
                        onClick={this.handleSizeClick}
                    />
                    <label className="filter-box__size-label">XXL</label>
                    <input
                        className="filter-box__size"
                        type="checkbox"
                        name="size"
                        value="XXL"
                        onClick={this.handleSizeClick}
                    />
                </div>
                <h1 className="filter-box__title">PRECIO</h1>
                <div className="filter-box__section filter-box__price-selector">
                    <input
                        className="filter-box__price"
                        type="number"
                        name="min-price"
                        placeholder="Min"
                        onChange={(e) => {
                            this.context.updateFilter({
                                ...this.context.state.filter,
                                minPrice: Number(e.target.value),
                            });
                        }}
                    />
                    <input
                        className="filter-box__price"
                        type="number"
                        name="max-price"
                        placeholder="Max"
                        onChange={(e) => {
                            this.context.updateFilter({
                                ...this.context.state.filter,
                                maxPrice: Number(e.target.value),
                            });
                        }}
                    />
                </div>
            </div>
        );
    }
}
