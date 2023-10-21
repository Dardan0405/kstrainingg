import React from "react"
import "./styles/Introux.scss"
import {MdKeyboardArrowRight} from "react-icons/md"
import { Link } from "react-router-dom"
import { FormattedMessage } from "react-intl"
import {CgChevronRight} from "react-icons/cg"
import Person from "../../../assets/IntroUx/Person.webp"
import TabsIntro from "./TabsIntroUX"
import Line from "../../../assets/IntroUx/Line.png"
import Footer from "../../Shared/Footer/Footer"

import Stars from "../../../assets/IntroUx/Stars.svg"
import CardIntroUX from "./CardUX"
const IntroUx =() =>{
    return (
       <div className="IntroductionToUxBackground">
        <div className="Right-SideIntroUX">

        <div className="LinkIntrotoUX">
            <Link to='/' ><FormattedMessage id="Course" defaultMessage="Courses"/></Link>
            <div className="ArrowIntrotoUx">
            <CgChevronRight/>
            </div>
            <Link to='Design' ><FormattedMessage id="Design" defaultMessage="Design"/> </Link>
            <div className="ArrowIntrotoUx">
            <CgChevronRight/>
            </div>
            <Link to = '/IntroductiontoUX'><FormattedMessage id="IntroUx" defaultMessage="Introduction to UX Design"/></Link>
        </div>
       
            <div className="Ttile-IntroUX">
                <h4><span><FormattedMessage id="IntroUxspan" defaultMessage="Introduction to UX Design:"/></span> &nbsp;
                <FormattedMessage id="Guide" defaultMessage="The Ultimate Guide to Usability and UX"/></h4>
            </div>
            <div className="Description-IntroUX">
                <p><FormattedMessage id="GetJob" defaultMessage="Get a job  in UX and build your user reasearch and UX design skills with this hands-on user experience  training course."/></p>
            </div>
            <div className="Profile-IntroUx">
                <div className="PhotoProfile-IntroUX" style={{content:`url(${Person})`}}></div>
                <div className="NameSurname-IntroUX">
                    <p><FormattedMessage id="Mark" defaultMessage="Bekim Hyseni "/></p>
                </div>
                </div>
                <div className="Ratings-IntroUX">
                    <div className="Star-RatingIntoUX">
                        <p><FormattedMessage id="4.5" defaultMessage="4.7"/></p>&nbsp;
                        <div className="Star4-IntroUX" style={{content:`url(${Stars})`}}></div>
                    </div>
                    <div className="ratings-IntroUX">
                        <p><FormattedMessage id="(3)" defaultMessage="(3.750 ratings)"/></p> &nbsp;
                        <div className="LineIntroUX" style={{content:`url(${Line})`}}></div>
                    </div>
                    <div className="NumberofStudents-IntroUX">
                        <p><FormattedMessage id="21Students" defaultMessage="133 &nbsp; students"/></p>
                         
                    </div>

                </div>

            
        </div>
         <CardIntroUX/>
         <TabsIntro/>
         
       </div>
    )
}
export default IntroUx