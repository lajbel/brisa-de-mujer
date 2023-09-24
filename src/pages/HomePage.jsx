import Page from "../components/Page";
import Catalog from "../components/Catalog";
import Item from "../components/Item";

const HomePage = () => {
    return (
        <Page>
            <Catalog>
                <Item
                    title="Conjunto Negro"
                    image="https://i.pinimg.com/474x/bf/38/c8/bf38c840ded01f14c6dee76b39c79e99.jpg"
                    price="ARS$1500"
                />
            </Catalog>
        </Page>
    );
};

export default HomePage;
