import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
            {children}
            </main>
            <Footer bg={"bg-black"} text={"text-white"}/>
        </>
    );
}

export default Layout;