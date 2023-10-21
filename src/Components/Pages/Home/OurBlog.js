import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { DataBlog } from "./data";
import './styles/OurBlog.scss'
 
const OurBlog =()=>{
    return(
        <div className="Our-Blog">
            <h4><FormattedMessage id="Our" defaultMessage="Our"  />&nbsp;<span>Blog</span>
            </h4>
            <div className="Link-Ourblog">
                <Link>View more</Link>
                </div>
                
            <div className="Cards-OurBlog">
            {DataBlog.map ((props)=>{
            return(
            <div className="OurBlog-Container">
                <Link  className="Link-OUrArticle" to={props.to}>
                <div className="Image-OurBlog">
                    <div className="Image-OurBlogContainer"style={{content: `url(${props.image})`}} ></div>
                </div>
                    <div className= "Title-Ourblog">
                       
                        <p>
                            {props.title}</p>

                            
                    </div>
                <div className="Time-ViewOublog">
                    <div className="Time-Container"style={{content: `url(${props.Time})`}}></div>
                    <p>
                        {props.date}
                    </p>
                
                <div className="View-Container"style={{content: `url(${props.icon})`}} ></div>
                <p className="View-OurBlog">
                   {props.views}
                   </p>
                   </div>
                   </Link>

            </div>
            )
            
             } )}

</div>
</div>
        
    )

}
export default OurBlog