import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";



const Root = () => {
    return (
        <div>
           <div className="container mx-auto px-8">
           <Header></Header>
           <div className="min-h-[calc(100vh-446px)]">
           <Outlet></Outlet>
           </div>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;