import React, { useState } from "react";
import "./styles/Gotopremium.scss"
import Crown from "../../../assets/Gotopremium/Crown.svg"
import { FormattedMessage } from "react-intl";
import PopupPremium from "./PopupPremium";



const Gotopremium = ()=>{
    
    const [popup,setPopup] = useState(false);
    const showpopUp = () =>{
        setPopup(!popup)
    }
    return(
        <div className="Background-gotopremium">
            <div className="Icon-crown-Container">
                <div className="Icon-Crown" style={{content:`url(${Crown})`}} >

                </div>
            </div>
            <div className="Description-Premium">
                <p><FormattedMessage id="You can"  defaultMessage="You can either enroll for this course to gain access and also to the materials
                been attached to it online only or you can add to cart for checkout to view online"/></p>
                
            </div>
            <div className="Button-Premium">
                <button className="Premium-Button Button-colors"  onClick={showpopUp}><FormattedMessage id="GoPremium" defaultMessage="Go to premium"/>
                
                </button>
                <button className="Addtocart-button Button-colors"><FormattedMessage id="AddtoCart" defaultMessage="Add to Cart"/></button>
            </div>
            
            {popup ? <PopupPremium closeModal={showpopUp} /> : null}
            {popup ? <div className='backdrop' onClick={showpopUp}></div>: null}
      
            

        </div>
    )
    

}
export default Gotopremium