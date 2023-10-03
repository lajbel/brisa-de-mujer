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
                </div>
                <h1 className="filter-box__title">TALLES</h1>
                <div className="ffilter-box__section filter-box__size-selector">
                    <label className="filter-box__size-label">S</label>
                    <input className="filter-box__size" type="checkbox" name="size" value="small" />
                    <label className="filter-box__size-label">M</label>
                    <input className="filter-box__size" type="checkbox" name="size" value="medium" />
                    <label className="filter-box__size-label">L</label>
                    <input className="filter-box__size" type="checkbox" name="size" value="large" />
                    <label className="filter-box__size-label">XL</label>
                    <input className="filter-box__size" type="checkbox" name="size" value="x-large" />
                    <label className="filter-box__size-label">XXL</label>
                    <input className="filter-box__size" type="checkbox" name="size" value="xx-large" />
                </div>
            </div>
        );
    }
}
