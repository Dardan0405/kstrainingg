import React, { useEffect } from "react";
import { Fragment } from "react";
import { FormattedMessage } from "react-intl";

import { useParams } from "react-router-dom";
import "./BlogArticles.scss"

import { useState } from "react";
import axios from "axios";

const BlogArticle = () =>{
   
    const {to}  = useParams() 
    const [articlesData,SetArticlesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}`)
        .then((res) => {
            SetArticlesData(res.data);
            setLoading(false)   
        })
        .catch((err) => {
            setError(err);
            setLoading(false)

        });
    }, []);
    if(loading){
        return<p>Loading...</p>
    }
    if (error){
        return <p>Error:</p>
    }
    const filteredArticles =  articlesData.filter((article) => article.to === to);
        
          
         
    return(
        <Fragment>
            {filteredArticles.map((article,index)=>(
            
            
                <div className="Article-Page" key={article.id}>
                    <div className="Date-BLogArticles">
                        <span><FormattedMessage id={article.date.id} defaultMessage={article.date.defaultMessage} /></span>
                    </div>
                    <div className="Titles-Blog">
                        <h1><FormattedMessage id={article.title.id} defaultMessage={article.title.defaultMessage}/></h1>
                    </div>
                    <div className="Block-ArticlesBlog">
                        <p className="Text2"><FormattedMessage id={article.text2.id} defaultMessage={article.text2.defaultMessage}/></p>
                        <p className="Text3"><FormattedMessage id={article.text3.id} defaultMessage={article.text3.defaultMessage}/></p>
                        <p className="Text4"><FormattedMessage id={article.text4.id} defaultMessage={article.text4.defaultMessage}/></p>
                        <p className="Text5"><FormattedMessage id={article.text5.id} defaultMessage={article.text5.defaultMessage}/></p>
                        <p className="Text6"><FormattedMessage id={article.text6.id} defaultMessage={article.text6.defaultMessage}/></p>
                    </div>
                    <div className="Author-BlogArticles">
                        <h1><FormattedMessage id={article.Author.id} defaultMessage={article.Author.defaultMessage}/></h1>
                    </div>

                </div>

                )
            )}
            
        </Fragment>
    )

}
export default BlogArticle