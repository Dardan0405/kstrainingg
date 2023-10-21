import React from "react";
import { FormattedMessage } from "react-intl";
import './styles/PopupPreium.scss';
import {AiOutlineClose} from "react-icons/ai"
import Cart from '../../../assets/Gotopremium/Cart.svg'

const PopupPremium =(props) =>{
return(
    <div className="Pop-card">
        <div className="Icon-ColosePopup">
            <button className="Ex-IconPopup" onClick={props.closeModal}><AiOutlineClose/></button>
        </div>
        <div className="background-CartPopup">
            <div className="Cart-Iconpopup"style={{content:`url(${Cart})`}} ></div>
            <span><FormattedMessage id="1" defaultMessage="1"/></span>
        </div>
        <div className="Description-Popup">
                <h4><FormattedMessage id="Course Adeed" defaultMessage="Course Added to Cart"/></h4>
                <p><FormattedMessage id="YourCourses" defaultMessage="Your course has been added to cart, you can now view cart to proceed checkout"/></p>
            </div>
            <div className="Button-Popup">
                <button><FormattedMessage  id="View Cart" defaultMessage="View Cart"/></button>
            </div>
            
    </div>
)
}
export default PopupPremium
