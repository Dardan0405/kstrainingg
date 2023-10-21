import React from "react";
import NavBar from "../../Components/Shared/NavBar/Navbar"
import Footer from "../../Components/Shared/Footer/Footer"

import BlogArticle from "../../Components/Pages/BlogArticles/BlogArticles";
const BlogA = () =>{
    return(
<div className="BlogPages">
    <NavBar/>
    <BlogArticle/>
    <Footer/>
</div>
    )
}
export default BlogA