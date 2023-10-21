import React from "react";
import { FormattedMessage } from "react-intl";
import '../KosovaTrainingBusiness/KosovaBusiness.scss'
import { Link } from "react-router-dom";
import KosovaBusiness1 from '../../../assets/Shared/KosovaBusiness/KosovaBusiness1.png'

 


const KosovaBusiness =() =>{
return(
   <div className="Kosova-Buiness-Image">
    <div className="Kosova-Business-Image2"></div>
    <div className="Kosova-BusinessContent">
        <div className="Logo-KosovaBusiness" style={{content:`url(${KosovaBusiness1})`}}></div>
        <div className="Text-Content">
        <h4>
            <FormattedMessage id="Get" defaultMessage='Get KosovaTraining'/> <span> Business</span>
        </h4>
        <p>
            <FormattedMessage id="unlimited" defaultMessage='Get ulimited access to 15,000+ of KosovaTraining`s top courses
            for your team. Learn and imporve skills across business, tech, design, and more.'/>
        </p>
        <div className="Link-KosovaBusiness">
        <Link>Get started</Link>
        </div>
    </div>
    </div>
    
   </div> 
)
}
export  default KosovaBusiness