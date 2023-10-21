import React from "react";
import {  Link } from "react-router-dom";
import { FormattedMessage,  } from 'react-intl'
import './styles/Rightpick.scss'
import icon from '../../../assets/Shared/Tabs/icon.svg'
import Price from '../../../assets/Home/RightPIck/Price.svg'
import Calendar from '../../../assets/Home/RightPIck/Calendar.svg'
import Medal from '../../../assets/Home/RightPIck/Medal.svg'

const Rightpick =()=>{
return(
    <div className="RightPick">
        <div className="RightPick-ImageContainer">
    <div className="icon-RightPick"style={{content:`url(${icon})`}}></div>
        </div>
        <div className="Content-PickD">

        <div className="Right-PickDescription">
            <h4>
                <FormattedMessage id="Not" defaultMessage='Not sure what is the '/> <span> right pick for you?</span>
            </h4>
            <p>
                <FormattedMessage id="Let" defaultMessage='Let us help you buy taking this short quiz wehre  you answer couple questions and get proffesional career advice'/>
            </p>
        </div>
        <div className="Links-RightPick">
            <div className="Take-aquiz-Rightpick">
                <Link>Take a quiz</Link>
            </div>
            <div className="Learn-more-RightPick">
                <Link>Learn more</Link>
            </div>
        </div>
        <div className="Icon-redblueorangeRightPick">
            <div className="Price-RedPick">
                <div className="logo-PricePick">
                    <div className="Circle-PricePick CirclePrice">
                        <div className="Logo-ContainerPrice Price-Red"style={{content:`url(${Price})`}} ></div>
                    </div>
                </div>
                <div className="Content-Price">
                    <p><FormattedMessage id="Aff" defaultMessage="Affrodable prices"/></p>
                </div>
            </div>

            <div className="Price-RedPick">
                <div className="logo-PricePick">
                    <div className="Circle-PricePick Calendar-Blue">
                    <div className="Logo-ContainerPrice Logo-Cal"style={{content:`url(${Calendar})`}} ></div>
                    </div>
                </div>
                <div className="Content-Price">
                    <p><FormattedMessage id="Flexible" defaultMessage="Flexible learning"/></p>
                </div>
            </div>
            

            <div className="Price-RedPick">
                <div className="logo-PricePick">
                    <div className="Circle-PricePick Medal-OrangP">
                        <div className="Logo-ContainerPrice Logo-Medal" style={{content:`url(${Medal})`}} ></div>
                    </div>
                </div>
                <div className="Content-Price">
                    <p><FormattedMessage id="Online" defaultMessage="Online degrees"/></p>
                </div>
            </div>
        </div>
        </div>
    </div>
)
}
export default Rightpick