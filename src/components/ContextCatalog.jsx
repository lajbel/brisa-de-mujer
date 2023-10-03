import React, { Component } from "react";
import { Item } from "./Item";
import { ItemPopUp } from "./ItemPopUp";
import { MainContext } from "../context/MainContext";

export class ContextCatalog extends Component {
    state = {
        items: [],
    };

    componentDidMount() {
        this.getItems();
    }

    getItems = () => {
        fetch("catalog.json")
            .then((response) => response.json())
            .then((data) => {
                this.setState({ items: data.items });
            });
    };

    render() {
        return (
            <div className="catalog">
                <ItemPopUp />
                <MainContext.Consumer>
                    {(context) => {
                        const filteredItems = [];

                        this.state.items.map((item) => {
                            // If no filters
                            if (context.state.filter.colors.length === 0 && context.state.filter.sizes.length === 0) {
                                filteredItems.push(item);
                            }

                            item.colors.forEach((color) => {
                                if (context.state.filter.colors.includes(color)) {
                                    filteredItems.push(item);
                                }
                            });
                        });

                        return filteredItems.map((item) => {
                            return (
                                <Item
                                    title={item.name}
                                    price={item.price}
                                    image={item.image}
                                    key={item.id}
                                    data={item}
                                />
                            );
                        });
                    }}
                </MainContext.Consumer>
            </div>
        );
    }
}
