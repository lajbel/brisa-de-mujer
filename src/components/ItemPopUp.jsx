import { Component } from "react";
import { MainContext } from "../context/MainContext";
import "../styles/item-popup.css";

const formatedColors = {
    red: "Rojo",
    blue: "Azul",
    green: "Verde",
};

export class ItemPopUp extends Component {
    static contextType = MainContext;

    render() {
        return (
            <div className={"item-popup" + (this.context.state.currentItem ? " item-popup--active" : "")}>
                <img className="item-popup__image" src={this.context.state.currentItem?.image}></img>
                <div className="item-popup__info">
                    <h1 className="item-popup__title">{this.context.state.currentItem?.name}</h1>
                    <p className="item-popup__colors">
                        {this.context.state.currentItem?.colors?.map((color, index) => {
                            if (index === this.context.state.currentItem.colors.length - 1) {
                                return formatedColors[color];
                            } else {
                                return formatedColors[color] + ", ";
                            }
                        })}
                    </p>
                </div>
            </div>
        );
    }
}
