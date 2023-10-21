import React from "react"
import { BloArticles } from "./data";
import clsx from "clsx";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useState } from "react";
import $ from "jquery";
import "./Blog.scss"
const Articles = () =>{
    
    const [showView,setShowView] = useState ("false");
    const [PageNumber,setPageNumber] = useState(0);
    const [Items,setItems] = useState(BloArticles.slice(0, 45));
    
    const HandleView =() =>{
        setShowView(!showView)
    };
   
    let itemsPerPage = 8;
    if($(window).width() > 1100 && $(window).width() < 1740){
        itemsPerPage = 10;
    }
    const PageVisited = PageNumber * itemsPerPage;
    const PageCount = Math.ceil(Items.length / itemsPerPage);

    const ChangePage =({selected}) => {
           setPageNumber(selected);
    }

    const displayItem = Items
    .slice(PageVisited, PageVisited + itemsPerPage)
    .map((props , i ) => {
        return(
            <div className={`articlesCard ${props.className}`} key={i}>
                <div className="img">
            <div
              className="inner-img"
              style={{content: `url(${props.img})`}}
                
            ></div>
          </div>
          <div className="content">
            <span>{props.date}</span>
            <h1 className="small-title">{props.title}</h1>
            <p className="def-text">
              {props.text1}
              <br />
              <br />

             
            </p>
            <Link
              to={{
                pathname: `/BlogArticles/${props.to}`,
              }}
            >
              <FormattedMessage
                id="ReadArticle"
                defaultMessage="Read Article"
              />
              <BsArrowRight />
            </Link>
            </div>
          </div>
        )
            });
            return(
              <div className="Paniagtion-Blog">
                {displayItem}
          <ReactPaginate
        previousLabel={<BsArrowLeft />}
        nextLabel={<BsArrowRight />}
        pageCount={PageCount}
        onPageChange={ChangePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
          </div>  
            
        )
    };

export default Articles