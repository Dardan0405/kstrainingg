import React from 'react'
import './Megamenus.scss'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { Resource } from './data1'
import Carousel from 'react-elastic-carousel';
import Profile from '../../../../assets/Nav/Categories/Resources/Profile.webp'
import  Star from '../../../../assets/Nav/Categories/Resources/Star.svg'
import Dots from '../../../../assets/Nav/Categories/Resources/Dots.svg'
import {BsArrowRightCircle} from 'react-icons/bs'
const breakPoints =[
    {width:1, itemsToShow:1},
    {width:700, itemsToShow: 2},
    {width:1400,itemsToShow: 3}
  
    
    ]


const Resources = () =>{
    const carouselRef = React.useRef(null);
    const onNextStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
          carouselRef.current.goTo(0);
        }
    };
    const onPrevStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
          carouselRef.current.goTo('single-slide'.length);
        }
    };
    return(
   <div className='nav-megamenus resources-menu'>
    <div className='menu-link'>
        <h5><FormattedMessage id='Res' defaultMessage='Resources'/></h5>
        <div className='inner-link'>
            {Resource.map((props) =>{
                return(
                    <Link  to={props.to} className='menu-main-link'>
                        <div className='icons-style'>
                        <div className='iconss' style={{content:`url(${props.icon})`}}></div>
                        <div className='bgg'  style={{content:`url(${props.bg})`}}></div>
                        </div>
                        <div className='bllock'>
                            <h4>{props.title}</h4>
                        </div>
                    </Link>
                )

            }
            )}
        <Link className='View-ALL-RESOURCES'> <FormattedMessage id='All' defaultMessage='View All'/> <BsArrowRightCircle/></Link>
        </div>
        <div className='Short-Courses'>
            <h4 className='Short-Coursesh4'><FormattedMessage id='Short' defaultMessage='Short Courses'/></h4>
            <Carousel className="slider styled-arrow" 
                breakPoints={breakPoints}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}
            >
                <div className='background-shortCoruses SC1 ' >
                    <div className='Bllock-ShortCouses-Container'>
                        <h6><FormattedMessage id='Introduction' defaultMessage='Intorduction to React: Beginner'/></h6>
                        <div className='Paragraph-Bllock-ShortCourses'>
                            <p><FormattedMessage id='8 hours' defaultMessage='8 hours  of video  tutorials'/></p>
                            <div className='Link-Short'>
                            <Link className='EnrollNow-Short'><FormattedMessage   id='Enroll' defaultMessage='Enroll-Now'/></Link>
                            </div>
                            <div className='Images-ShortCourses'>
                                <div className='Profile-ShortCourses' style={{content:`url(${Profile})`}}></div>
                                <div className='Star-Shorts' style={{content:`url(${Star})`}}></div>
                                <button style={{content:`url(${Dots})`}} ></button>
                                <button className='button2-Short' style={{content:`url(${Dots})`}}></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='background-shortCoruses SC2'>
                    <div className='Bllock-ShortCouses-Container'>
                        <h6><FormattedMessage id='Introduction' defaultMessage='Intorduction to React: Beginner'/></h6>
                        <div className='Paragraph-Bllock-ShortCourses'>
                            <p><FormattedMessage id='8 hours' defaultMessage='8 hours  of video toutorails'/></p>
                            <div className='Link-Short'>
                            <Link className='EnrollNow-Short'><FormattedMessage   id='Enroll' defaultMessage='Enroll-Now'/></Link>
                            </div>
                            <div className='Images-ShortCourses'>
                                <div className='Profile-ShortCourses' style={{content:`url(${Profile})`}}></div>
                                <div className='Star-Shorts' style={{content:`url(${Star})`}}></div>
                                <button style={{content:`url(${Dots})`}} ></button>
                                <button className='button2-Short' style={{content:`url(${Dots})`}}></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='background-shortCoruses SC3'>
                    <div className='Bllock-ShortCouses-Container'>
                        <h6><FormattedMessage id='Introduction' defaultMessage='Intorduction to React: Beginner'/></h6>
                        <div className='Paragraph-Bllock-ShortCourses'>
                            <p><FormattedMessage id='8 hours' defaultMessage='8 hours  of video toutorails'/></p>
                            <div className='Link-Short'>
                            <Link className='EnrollNow-Short'><FormattedMessage   id='Enroll' defaultMessage='Enroll-Now'/></Link>
                            </div>
                            <div className='Images-ShortCourses'>
                                <div className='Profile-ShortCourses' style={{content:`url(${Profile})`}}></div>
                                <div className='Star-Shorts' style={{content:`url(${Star})`}}></div>
                                <button style={{content:`url(${Dots})`}} ></button>
                                <button className='button2-Short' style={{content:`url(${Dots})`}}></button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
        
        </div>
        
        
   
   


   </div>
    )
}
export default Resources