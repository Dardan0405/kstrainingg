import React from "react";
import Footer from "../../Components/Shared/Footer/Footer";
import Navbar from "../../Components/Shared/NavBar/Navbar";
import LoginAccount from "../../Components/Pages/Login/LoginAccount";
import LoginCard from "../../Components/Pages/Login/LoginCard";



const LoginPage =() =>{
    return(
        <div className="Login-page">
        <Navbar/>
        <LoginAccount/>
        <LoginCard/>
        <Footer/>
        </div>
    )
}
export default LoginPage
 