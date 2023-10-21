import React from "react";
import Navbar from "../../Components/Shared/NavBar/Navbar";
import Articles from "../../Components/Pages/Blog/Blog";
import Footer from "../../Components/Shared/Footer/Footer";

const Blog =() =>{
    return(
        <div className="Blog-Page">
            <Navbar/>
            <Articles/>
          <Footer/>
        </div>
    )
}
export default Blog