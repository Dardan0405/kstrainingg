import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import {MdKeyboardArrowRight} from 'react-icons/md'
import './styles/title.scss'
const Title =()=>{
    return(
<div className="Title-Design">
   <Link className="Link1-Title" to='/'>
     <FormattedMessage id="Courses" defaultMessage='Courses'/>
     <MdKeyboardArrowRight className="Arrow-Links Arrow1"/>
   </Link>
   <Link className="Link2-Title" to='/Design'>
    <FormattedMessage id="Design" defaultMessage="Design"/>
    <MdKeyboardArrowRight className="Arrow-Links Arrow2"/>
   </Link>
   <Link className="Link3-Title" to='/Introduciton to Ux Design'>
    <FormattedMessage id = "Intro" defaultMessage='Introduciton to Ux Design'/>
    <MdKeyboardArrowRight className="Arrow-Links Arrow3"/>
    <span>
        <FormattedMessage id="Week" defaultMessage="Week 1"/>
    </span>
   </Link>
</div>
    )
}
export default  Title