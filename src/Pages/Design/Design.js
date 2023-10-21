import React from "react";
import NavBar from "../../Components/Shared/NavBar/Navbar"
import Footer from "../../Components/Shared/Footer/Footer"
import RecomandedCourse from "../../Components/Shared/RecomandedCourse/RecomandedCourse"
import Title from "../../Components/Pages/Design/title";
import Sidebutton from "../../Components/Pages/Design/SideButton";
import Gotopremium from "../../Components/Pages/Design/Gotopremium";

const Design =() =>{
    return(
        <div className="Design-page">
            <NavBar/>
            <Title/>
            <Sidebutton/>
            <Gotopremium/>
            <RecomandedCourse/>
            <Footer/>
            
        </div>
    )
}
export default Design