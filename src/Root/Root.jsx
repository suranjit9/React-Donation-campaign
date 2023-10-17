import { Outlet } from "react-router-dom";

import Header from "../Components/Header";
import Footer from "../Components/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Header></Header>
            
            <Outlet></Outlet>
           
            <div className="">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;