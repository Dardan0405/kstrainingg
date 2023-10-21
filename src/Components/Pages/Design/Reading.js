import {  Link } from "react-router-dom";
import React  from "react";
import { FormattedMessage } from "react-intl";
import './styles/Reading.scss'

const  Reading = () =>{
    return(
    <div className="Video-Container">
        <div className="Title-Text-Container">
            <h1 ><FormattedMessage id="whatisDesign" 
            defaultMessage='What is UX Desing ?'/></h1>
        </div>   
        <div className="Reading-Text-ContainerPart">
        <p><FormattedMessage id="Text" 
            defaultMessage='UX design considers the elements that shape a user’s experience with a product or service, how these elements make the user feel, and how easy it is for the user to accomplish their desired tasks.

            This could mean anything from how a physical product feels in your hand, to how straightforward the checkout process is when buying something online. The goal of UX design is to create easy, efficient, relevant, and all-around pleasant experiences for the user.
            
            “User experience encompasses all aspects of the end-user’s interaction with the company, its services, and its products.”
            — Don Norman, Cognitive Scientist & User Experience Architect
            
            UX designers combine market research, product development, strategy, and design to create seamless user experiences for products, services, and processes.
            
            They build a bridge to the customer, helping the company to better understand—and fulfill—their needs and expectations.
            
            For a broad overview, check out this video of designer Dee explaining what UX design is all about: &nbsp; When talking about UX, the term user interface (UI) design will inevitably crop up. However, it’s important to recognize that, despite often being used interchangeably, UX and UI are two different things.

            It’s important to outline that user interface design is not the same as UX design. UI refers to the actual interface of a product, the visual design of the screens a user navigates through when using a mobile app, or the buttons they click when browsing a website.
            
            UI design is concerned with all the visual and interactive elements of a product interface, covering everything from typography and color palettes to animations and navigational touch points (such as buttons and scrollbars). You can read more about the work of UI designers in our guide.
            
            “UX is focused on the user’s journey to solve a problem; UI is focused on how a product’s surfaces look and function.”
            — Ken Norton, Partner at Google Ventures, Ex-Product Manager at Google
            
            UX and UI go hand-in-hand, and the design of the product interface has a huge impact on the overall user experience. Learn more about the difference between UX and UI design in this guide.
            
            UX design is everywhere: the layout of a supermarket, the ergonomics of a vehicle, and the usability of a mobile app. &nbsp; UX designers seek to make everyday products, services and technology as user-friendly and accessible as possible. They employ design thinking to reconcile the user’s desires with technical feasibility and business viability.' /> 
             
            </p>
            </div>         
        </div>
    )
}
export default Reading