import { useEffect, useState } from "react";
import { Item } from "./Item";
import "../styles/catalog.css";

export default function Catalog(props) {
    const [items, setItems] = useState([]);

    const getItems = () => {
        fetch("catalog.json")
            .then((response) => response.json())
            .then((data) => {
                setItems(data.items);
            });
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        <div className="catalog">
            {items.map((item) => {
                return <Item title={item.name} price={item.price} image={item.image} key={item.id} />;
            })}
        </div>
    );
}
