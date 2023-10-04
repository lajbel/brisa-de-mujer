import { Component } from "react";
import { MainContext } from "../context/MainContext";
import "../styles/payment.css";

export class Payment extends Component {
    static contextType = MainContext;

    render() {
        return (
            <div className="payment">
                <h1>Payment</h1>
                <div className="payment__summary">
                    {this.context.state.cart.map((item) => {
                        return (
                            <div className="payment__item">
                                <p className="payment__price">
                                    {item.name} ${item.price} {item.size}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <button className="payment__button form__button">Comprar</button>
            </div>
        );
    }
}
