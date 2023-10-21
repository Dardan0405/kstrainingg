import React  from "react";
import "./styles/CardUx.scss"
import {MdOutlinePlayCircle} from "react-icons/md"
import { FormattedMessage } from "react-intl";
import Icon1 from "../../../assets/IntroUx/Icon1.svg"
import Icon3 from "../../../assets/IntroUx/Icon3.svg"
import Icon2 from "../../../assets/IntroUx/Icon2.svg"
import Icon4 from "../../../assets/IntroUx/Icon4.svg"
import Icon5 from "../../../assets/IntroUx/Icon5.svg"
import Icon6 from "../../../assets/IntroUx/Icon6.svg"
import {  Link } from "react-router-dom";
const CardIntroUX =() =>{
    return(
        <div className="CardIntroUx">
            
                <div className="ImageIntroUXCard" >
                  <div className="PlayIcon-IntroCard"><MdOutlinePlayCircle/></div>
                  <div className="PlayDescirption-IntroUx">
                    <p><FormattedMessage id="Prewiv" defaultMessage="Preview this course"/></p>
                  </div>
                  <div className="Price-IntroUX">
                    <h5><FormattedMessage id="522" defaultMessage="522€"/></h5>
                  </div>
                  <div className="ButtonsIntroUx">
                    <div className="ButtonIntroUx Free"><button className="iNTROUx-Button free"><Link to='/Design'><FormattedMessage id="Free" defaultMessage="Enroll for Free"/></Link></button></div>
                    <div className="ButtonIntroUx Card"><button className="iNTROUx-Button card"><Link><FormattedMessage id="Card" defaultMessage="Add to Card"/></Link></button></div>
                  </div>
                  <div className="days-IntroUx">
                    <p><FormattedMessage id="30-Day" defaultMessage="30-DaY Money-Back Guarantee"/></p>
                  </div>
                </div>
                <div className="Content-BottomIntroUX">
                    <div className="Title-CourseInclude">
                        <h5><FormattedMessage id="Course" defaultMessage="This Course includes : "/></h5>
                    </div>
                    <div className="IncludesCourse-IntroUX">
                        <div className="LineIntro">
                            <div className= "Icons1-Includes">
                            <div className="Icons-Includes" style={{content:`url(${Icon1})`}}></div>
                            <div className="Title-Includes"><p><FormattedMessage id="Logo1" defaultMessage="400 hours on-demand video"/></p></div>
                            </div>
                            <div className="Icons1-Includess">
                            <div className="Icons-Includes" style={{content:`url(${Icon2})`}}></div>
                            <div className="Title-Includes"><p><FormattedMessage id="Logo2" defaultMessage="258 articles"/></p></div>
                            </div>
                            <div className="Icons1-Includess">
                            <div className="Icons-Includes" style={{content:`url(${Icon3})`}}></div>
                            <div className="Title-Includes"><p><FormattedMessage id="Logo3" defaultMessage="369 downolads  resources"/></p></div>
                            </div>
                            <div className="Icons1-Includess">
                            <div className="Icons-Includes" style={{content:`url(${Icon4})`}}></div>
                            <div className="Title-Includes"><p><FormattedMessage id="Logo2" defaultMessage="Full lifetime access"/></p></div>
                            </div>
                            <div className="Icons1-Includess">
                            <div className="Icons-Includes" style={{content:`url(${Icon5})`}}></div>
                            <div className="Title-Includes"><p><FormattedMessage id="Logo2" defaultMessage="Acess on mobile and Tv"/></p></div>
                            </div>
                            <div className="Icons1-Includess">
                            <div className="Icons-Includes" style={{content:`url(${Icon6})`}}></div>
                            <div className="Title-Includes"><p><FormattedMessage id="Logo2" defaultMessage="Certificate of competion"/></p></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
       
    )
}
export default CardIntroUX 