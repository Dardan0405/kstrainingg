import React, { useState } from "react"
import { FormattedMessage } from "react-intl";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import "./styles/Tabs.scss"
import Footer from "../../Shared/Footer/Footer";
import { TabData } from "./Data";
import {MdKeyboardArrowUp,MdKeyboardArrowDown} from "react-icons/md"
import { Link } from "react-router-dom";
import RecomandedCourse from "../../Shared/RecomandedCourse/RecomandedCourse";
import calendar from "../../../assets/IntroUx/calendar.svg"
import Gold from "../../../assets/IntroUx/Gold.png"
import medal from "../../../assets/IntroUx/medal.svg"
import subtitle from "../../../assets/IntroUx/subtitle.svg"
import Gold2 from "../../../assets/IntroUx/Gold2.png"
import Gold3 from "../../../assets/IntroUx/Gold3.png"
import Gold4 from "../../../assets/IntroUx/Gold4.png"
import Gold5 from "../../../assets/IntroUx/Gold5.png"
import Logo from "../../../assets/IntroUx/Logo.png"
import Image from "../../../assets/IntroUx/Image.png"
import Gold1 from "../../../assets/IntroUx/Gold1.png"
import { FeaturedReviewsData } from "./Data";



const TabsIntro =() =>{
    const [click,setClick]= useState(true)
    const [open,setOpen] = useState(false)
    
    return(
       <Tabs className="Tabs-IntroUX" >
        <TabList >
            <Tab><FormattedMessage id="About"  defaultMessage="About"/></Tab>
            <Tab><FormattedMessage id="Instructors" defaultMessage="Instructors"/></Tab>
            <Tab><FormattedMessage id="Syllabus" defaultMessage="Syllabus"/></Tab>
            <Tab><FormattedMessage id="Reviews" defaultMessage="Reviews"/></Tab>
            <Tab> <FormattedMessage id="Enrollment" defaultMessage="Enrollment Options"/></Tab>
            <Tab><FormattedMessage id="FAQ" defaultMessage="FAQ"/></Tab>
        </TabList>

      <div className="tab-panel-IntroUX">
        <TabPanel>
            <div className="Tab-About-Description">
                <p><FormattedMessage id="Inthis" defaultMessage="In this UX capstone couse,&nsbp; you'll conduct a multi-stage user experience project to desgin
                a product from scratch. You will employ interwievs,&nbsp; inspection methods, and user testing, along with ideation,
                design, and prototyping methods to gain and comunicate valuable isnsight that can be used to deliver a compelling prdouct" /></p>
                <div className="Button-ShowMoreIntroUX">
                    <button className="Showmore-IntroUx" onClick={() => setClick(!click)}><FormattedMessage id="Show" defaultMessage="Show More"/>
                    <div className="ArrowUp-downIntroUx">{click ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}</div> </button>
                    {click && <div className="Inner-descriptionButtonIntroUx">  
                    <div className="TitleofContentIntroUx">
                        <h4><FormattedMessage id="Skills" defaultMessage="Skills you will gain"/></h4>
                    </div>
                    <div className="Content-IntroUxColumn">
                    { 
                        TabData.map((props)=>{
                            return(
                                <div className="TitleofDataIntroUx">
                                    <h5>{props.title}</h5>
                                </div>
                            )
                        }
                        )
                    }
                    </div>
                    <div className="MoreInfo-IntroUX">
                        <div className="Title-MoreinfoIntroUX">
                            <h4><FormattedMessage id="More" defaultMessage="More info"/></h4>
                        </div>
                        <div className="MoreInfoContainer-IntroUx">
                            <div className="Background-Moreinfo-IntroUx Flexible">
                                <div className="Icons-MoreinfoIntroUx"style={{content:`url(${calendar})`}}></div>
                            </div>
                            <div className="Details-MoreinfoIntroUx">
                                
                        <h3><FormattedMessage id="Flexible" defaultMessage="Flexible deadlines"/></h3>
                        <p><FormattedMessage id="Reset" defaultMessage="Reset deadlines in accordance to your schedule"/></p>
                                
                            </div>
                            <div className="Background-Moreinfo-IntroUx Medal">
                                <div className="Icons-MoreinfoIntroUx "style={{content:`url(${medal})`}}></div>
                            </div>
                            <div className="Details-MoreinfoIntroUx">
                                
                        <h3><FormattedMessage id="Flexible" defaultMessage="Sherable Certificate"/></h3>
                        <p><FormattedMessage id="Reset" defaultMessage="Earn Certificate competition"/></p>
                                
                            </div>
                        
                        <div className="Background-Moreinfo-IntroUx Subtitle">
                                <div className="Icons-MoreinfoIntroUx" style={{content:`url(${subtitle})`}}></div>
                            </div>
                            <div className="Details-MoreinfoIntroUx">
                                
                        <h3><FormattedMessage id="Flexible" defaultMessage="Flexible deadlines"/></h3>
                        <p><FormattedMessage id="Reset" defaultMessage="English,Albanian,"/>&nbsp;<span><FormattedMessage id="5" defaultMessage="5 more"/></span></p> &nbsp;
                              
                            </div>
                            </div>
                       
                        
                    </div>
                    </div>}
                </div>
              
            
            </div>
            
        </TabPanel>
        <TabPanel/>
        <TabPanel/>
        <TabPanel>
        <div className="Content-Review-IntroUX">
        <div className="Title-StudentFeedback">
            <h4><FormattedMessage id="Student" defaultMessage="Student feedback"/></h4>
        </div>
        <div className="Ratings-IntorUX">
            <div className="Right-Size-IntroUxRating">
                <div className="POints-Rating">
                    <h1><FormattedMessage id="Rating" defaultMessage="4.8"/></h1>
                </div>
                <div className="Stars-Ratings">
                    <div className="Icons-Rating-Stars"style={{content:`url(${Gold})`}}></div>
                </div>
                <div className="Course-RatingIntroUx">
                    <p><FormattedMessage id="Rating" defaultMessage="Course Rating"/></p>
                </div>
            </div>
            <div className="Left-Size-IntroUXRating">
                <div className="Board-Percent-IntroUX ">
                    <div className="Board2-Percent-IntroUx one"></div>
                </div>
                <div className="Stars-Percent-SIDEIntroUX ">
                    <div className="Stars-Site-IntoUx " style={{content:`url(${Gold1})`}}></div>
                    <p><FormattedMessage id="64%" defaultMessage="64%"/></p>
                </div>
                <div className="Board-Percent-IntroUX ">
                    <div className="Board2-Percent-IntroUx two"></div>
                </div>
                <div className="Stars-Percent-SIDEIntroUX ">
                    <div className="Stars-Site-IntoUx " style={{content:`url(${Gold2})`}}></div>
                    <p><FormattedMessage id="64%" defaultMessage="28%"/></p>
                </div>
                <div className="Board-Percent-IntroUX ">
                    <div className="Board2-Percent-IntroUx three"></div>
                </div>
                <div className="Stars-Percent-SIDEIntroUX ">
                    <div className="Stars-Site-IntoUx " style={{content:`url(${Gold3})`}}></div>
                    <p><FormattedMessage id="64%" defaultMessage="6%"/></p>
                    </div>
                    <div className="Board-Percent-IntroUX ">
                    <div className="Board2-Percent-IntroUx four"></div>
                </div>
                <div className="Stars-Percent-SIDEIntroUX ">
                    <div className="Stars-Site-IntoUx " style={{content:`url(${Gold4})`}}></div>
                    <p><FormattedMessage id="64%" defaultMessage="1%"/></p>
                </div>
                
                <div className="Board-Percent-IntroUX ">
                    <div className="Board2-Percent-IntroUx five"></div>
                </div>
                <div className="Stars-Percent-SIDEIntroUX">
                    <div className="Stars-Site-IntoUx" style={{content:`url(${Gold5})`}}></div>
                    <p><FormattedMessage id="64%" defaultMessage="1%"/></p>
                </div>
            </div>
        </div>
        <div className="FeaturedReview-IntroUX">
            <div className="Title-FeaturedReview">
                <h4><FormattedMessage id="Featured" defaultMessage="Featured reviews"/></h4>

            </div>
            <div className="DataFeaturedReview">
                {
                    FeaturedReviewsData.map((props)=>{
                        return(
                            <div className="StudentInfo-Featrued">
                                <div className="Info-ALL">
                                <div className="ImageStudent-FeaturedReviews"style={{content:`url(${props.Profile})`}}> </div>
                                <div className="InfoStudent-NameCourses">
                                    <h5>{props.Name}</h5>
                                    <p>{props.Courses}</p>
                                </div>
                                </div>
                                <div className="ReviewsForCourse">
                                    <p>{props.Score}</p>
                                    <div className="Stars-ReviewFeatured" style={{content:`url(${props.Icon})`}}></div>
                                    <p className="Months-Active">{props.Months}</p>
                                </div>
                                <div className="Desciption-CourseReview">
                                    <p>{props.Description}</p>
                                    <p className="Descrition2-Review">{props.Description2}</p>
                                
                                </div>
                                
                            </div>

                        )
                    })
                }
                
            </div>
            <div className="Button-ReviewShowmore">
                <button className="ButtonShowMoreReview" onClick={() => setOpen(!open)}><FormattedMessage id="ShowMore" defaultMessage="Show More"/>
                <div className="ArrowUP-DOWN">{open ? <MdKeyboardArrowDown/> : <MdKeyboardArrowUp/>}</div></button>
                {open && <div className="DataFeaturedReview">
                {
                    FeaturedReviewsData.map((props)=>{
                        return(
                            <div className="StudentInfo-Featrued">
                                <div className="Info-ALL">
                                <div className="ImageStudent-FeaturedReviews"style={{content:`url(${props.Profile})`}}> </div>
                                <div className="InfoStudent-NameCourses">
                                    <h5>{props.Name}</h5>
                                    <p>{props.Courses}</p>
                                </div>
                                </div>
                                <div className="ReviewsForCourse">
                                    <p>{props.Score}</p>
                                    <div className="Stars-ReviewFeatured" style={{content:`url(${props.Icon})`}}></div>
                                    <p className="Months-Active">{props.Months}</p>
                                </div>
                                <div className="Desciption-CourseReview">
                                    <p>{props.Description}</p>
                                    <p className="Descrition2-Review">{props.Description2}</p>
                                
                                </div>
                                
                            </div>

                        )
                    })
                }
                
            </div>}
            </div>
        </div>
        <div className="Button-SeemoreReviews">
            <button><FormattedMessage id="Seemore" defaultMessage="See more reviews"/></button>
        </div>
        </div>
        </TabPanel>
        <TabPanel/>
        <TabPanel/>
        <div className="Background2-Training5">
                    <div className="Training5-Image"></div>
                    <div className="Logo-Training5" style={{content:`url(${Logo})`}}></div>
                    <div className="Info-Training5">
                        <div className="Ttile-Training5">
                            <h4><FormattedMessage id="Training" defaultMessage="Training 5 or more people ?"/></h4>
                            <div className="Description-Training5">
                                <p><FormattedMessage id="Get" defaultMessage="Get unlimented access to 15,000+ of KosovaTraining's top courses
                                for your team. Learn and improve skills across bussiness, tech, design, and more"/></p>
                            </div>
                            
                        </div>
                        <div className="Button-GetStarted-Training5">
                            <button><FormattedMessage id="Started" defaultMessage="Get Started"/></button>
                        </div>
                        
                    </div>
                    <div className="Image-TrainingStart"></div>
                </div>
                <div className="RecomandedCourse-IntroUx">
                    <RecomandedCourse/>
                </div>
                <div className="Footer-Intro-Ux">
                    <Footer/>
                </div>
        </div>
       
       </Tabs>
    )
}
export default TabsIntro