import React, { Component } from "react";
import { Item } from "./Item";
import { ItemPopUp } from "./ItemPopUp";
import { MainContext } from "../context/MainContext";
import "../styles/catalog.css";

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

                        if (this.props.latest) {
                            return this.state.items
                                .slice(this.state.items.length - 4, this.state.items.length)
                                .map((item) => {
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
                        }

                        this.state.items.map((item) => {
                            let hasColor = false;
                            let hasSize = false;
                            let hasMinPrice = false;
                            let hasMaxPrice = false;

                            // If no filters
                            if (context.state.filter.colors.length === 0) {
                                hasColor = true;
                            }

                            if (context.state.filter.sizes.length === 0) {
                                hasSize = true;
                            }

                            if (context.state.filter.maxPrice === 0) {
                                hasMaxPrice = true;
                            }

                            if (context.state.filter.minPrice === 0) {
                                hasMinPrice = true;
                            }

                            item.colors.forEach((color) => {
                                if (context.state.filter.colors.includes(color)) {
                                    hasColor = true;
                                }
                            });

                            item.sizes.forEach((size) => {
                                if (context.state.filter.sizes.includes(size)) {
                                    hasSize = true;
                                }
                            });

                            if (item.price <= context.state.filter.maxPrice) {
                                hasMaxPrice = true;
                            }
                            if (item.price >= context.state.filter.minPrice) {
                                hasMinPrice = true;
                            }

                            if (hasColor && hasSize && hasMinPrice && hasMaxPrice) {
                                filteredItems.push(item);
                            }
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
