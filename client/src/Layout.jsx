import Footer from "./components/Footer"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Topmenu from "./components/Topmenu"
import {Outlet} from "react-router-dom"
import "./css/layout.css"



const Layout=()=>{
    return(
        <>
    
        {/* <Header />
        <Topmenu  /> */}

        <div  className="nav">
        <Nav/>
        </div>
       
        <Outlet/>
        <Footer/>



        
        </>
    )
}

export default Layout