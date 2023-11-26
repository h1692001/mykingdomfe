import { Outlet } from "react-router-dom";
import Header from "../../Containers/Header/Header";
import Footer from "../../Containers/Footer/Footer";
const Public = () => {
    return <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
}

export default Public;