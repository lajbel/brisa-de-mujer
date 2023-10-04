import { Component } from "react";
import { MainContext } from "../context/MainContext";
import "../styles/item-popup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const formatedColors = {
    red: "Rojo",
    blue: "Azul",
    green: "Verde",
    yellow: "Amarillo",
};

export class ItemPopUp extends Component {
    static contextType = MainContext;

    closePopUp = () => {
        this.context.togglePopUp(false);
    };

    handleAddToCart = () => {
        this.context.addToCart({
            ...this.context.state.currentItem,
            size: document.querySelector(".item-popup__size-selector").value,
        });
    };

    render() {
        return (
            <div className={"item-popup" + (this.context.state.popUpActive ? " item-popup--active" : "")}>
                <FontAwesomeIcon className="item-popup__close" icon="fa-solid fa-x" onClick={this.closePopUp} />
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
                    <p className="item-popup__description">{this.context.state.currentItem?.description}</p>
                    <h2>Talle</h2>
                    <select className="item-popup__size-selector">
                        {this.context.state.currentItem?.sizes?.map((size) => {
                            return <option className="item-popup__size">{size}</option>;
                        })}
                    </select>

                    <div className="item-popup__price-box">
                        <p className="item-popup__price">${this.context.state.currentItem?.price}</p>
                        <button className="form__button item-popup__add-button" onClick={this.handleAddToCart}>
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
