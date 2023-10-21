import React from "react"
import { FormattedMessage } from "react-intl"
import { Link } from "react-router-dom"
import Phone from '../../../assets/Shared/Footer/Phone.svg'
import Mail from '../../../assets/Shared/Footer/Mail.svg'
import { FooterData,Footericons } from "./data"
import ColorSwitch from "./Colorswitch"
import GoMail from "react-icons/go"
import NewsletterForm from "./Newsletter"
import './Footer.scss'

const Footer =() =>{
    return(
        <div className="Footer">
            <div className="Main-rowFooter">
                <div className="first-ColumnFooter">
                    <div className="Top-Footer">
                        <Link to='/' className="Logo-Container-Footer">
                            <div className="KosovaTraining-LogoFooter"></div>
                        </Link>
                        <h5><FormattedMessage id="Investing" defaultMessage="Investing in knowledge and your future"/></h5>

                        <div className="Contact">
                            <h4><FormattedMessage id="Contact" defaultMessage="Contact"/></h4>
                            <div className="Phone-Footer">
                                <div className="Phone-IconFooter" style={{content: `url(${Phone})`}} ></div>
                                <p><FormattedMessage id="Mobile" defaultMessage="+383 (49) 284 544"/></p>
                                </div>
                                <div className="Mail-Footer">
                                <div className="Mail-IconFooter"style={{content: `url(${Mail})`}} ></div>
                                <p><FormattedMessage id="Mail" defaultMessage="info@kosovatraining.com"/></p>   
                            </div>
                            

                        </div>

                        
                        </div>
                        <div className="Present-ColorsFooter">
                            <h5><FormattedMessage id="Present-Colors" defaultMessage="Present colors:"/></h5>
                            <ColorSwitch/>
                        </div>
                    </div>
                    <div className="All-LinksFooter">
                        {FooterData.map((props)=>{
                            return(
                                <div className="Footer-LinksList">
                                    <h4>{props.category}</h4>
                                    <div className="Links-Footer">
                                        {props.links.map((i)=>{
                                            return(
                                            <Link key={i.to} to={i.to} className="Footer-items">
                                                {i.link}
                                            </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div className="Newsletter">
                    <div className="Title-NewsLetter">
                    <h1><FormattedMessage id="News-letter" defaultMessage="Subscribe to our newsletter"/></h1>
                    </div>
                    <NewsletterForm/>
                </div>
                <div className="Bottom-rowFooter">
                    <p><FormattedMessage id="2022" defaultMessage="©2022 KosovaTraining. All rights reserved"/></p>
                    
                    <div className="Icons-Foooter">
                        {Footericons.map((props)=>{
                        return(
                            
                         <div className="Icons-SocialMedia" >
                            <a href={props.link} target="_blank"><div className="Icons" >{props.icon}</div></a>
                           
                         </div>
                         
                        )
                       })}
                    </div>
                    <div className="Reserved-Footer">
                        <p><FormattedMessage id="Copyright" defaultMessage="Copyright | Terms of Use"/></p>
                        </div>
                    
                </div>

                </div>
            
        
    )
}
export default Footer