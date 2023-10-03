import React, { Component } from "react";
import { MainContext } from "../context/MainContext";
import "../styles/item.css";

export class Item extends Component {
    static contextType = MainContext;

    handleClick = () => {
        this.context.updateCurrentItem(this.props.data);
        this.context.togglePopUp();
    };

    render() {
        const { image, title, price } = this.props;

        return (
            <div className="item" onClick={this.handleClick}>
                <img className="item__image" src={image}></img>
                <div className="item__infobox">
                    <h1 className="item__title">{title}</h1>
                    <p className="item__price">${price}</p>
                </div>
            </div>
        );
    }
}
