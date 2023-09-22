import Nav from "./Nav";

const Page = ({ children }) => {
    return (
        <main>
            <Nav />
            {children}
        </main>
    );
};

export default Page;
