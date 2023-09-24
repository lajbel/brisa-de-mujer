import "../styles/item.css";

export default function Item(props) {
    return (
        <div className="item">
            <img className="item__image" src={props.image}></img>
            <div className="item__infobox">
                <h1 className="item__title">{props.title}</h1>
                <p className="item__price">{props.price}</p>
            </div>
        </div>
    );
}
