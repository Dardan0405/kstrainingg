import React, { useState } from 'react'
import { FormattedMessage  } from 'react-intl'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Recoamded } from "./data";
import './RecomandedCourse.scss';
import Arrowleft from "../../../assets/Shared/Tabs/Arrowleft.svg"
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from 'react-icons/md'

import Arrowright from "../../../assets/Shared/Tabs/Arrowright.svg"

import { Link } from "react-router-dom"

const  RecomandedCourse=() =>{
  const [selectedTab,setselectedTab] = useState(0);
  const tabCount = 7;
    
   
    return(
        <div className="Recomaded-Coruse-Container">
            <h1><FormattedMessage id="Recomanded" defaultMessage= "Recommended"/>
            <span> Courses</span></h1>
           
          
           
             
                <Tabs className ="Tab-Reomanded" selectedIndex={selectedTab} onSelect ={index => setselectedTab(index)}>
                
                    
                
        
                
                <TabList>
                    <div className='Border-Recomanded Border-left'>
                  <button className='Arrow-left-Recomanded Arrow-Recomanded' 
                  onClick={() => setselectedTab((selectedTab + tabCount -1)% tabCount)} >
                    <MdKeyboardArrowLeft/>
                  </button>
                  </div>
                    
                 
                        <Tab><FormattedMessage id="al" defaultMessage="All"/></Tab>
                        <Tab><FormattedMessage id="Design" defaultMessage="Design"/></Tab>
                        <Tab><FormattedMessage id="Dev" defaultMessage="Development"/></Tab>
                        <Tab><FormattedMessage id="Busi" defaultMessage="Business"/></Tab>
                        <Tab><FormattedMessage id="IT" defaultMessage="IT & Software"/></Tab>
                        <Tab><FormattedMessage id="Photo" defaultMessage="Photography"/></Tab>
                        <Tab><FormattedMessage id="Market" defaultMessage="Marketing"/></Tab>
                        <Tab><FormattedMessage id="Finance" defaultMessage="Finance & Accounting"/></Tab>


                        <div className='Border-Recomanded Border-Right'>
                        <button className='Arrow-right-Recomanded Arrow-Recomanded' onClick={() => setselectedTab((selectedTab +1 )% tabCount) }
                       > 
                       <MdKeyboardArrowRight/>

                        </button>
                       </div>
                        </TabList>
                        
                        
                    
                    
                    
                    
                    
                    
                  
                    <div className="Tabs-Containers">
                     {Recoamded.map((props)=> {
                        return(
                            <TabPanel>
                            {props.contens.map((i)=>{
                                return(
                                    <div className={`col ${i.col}`}>
                                        {i.innercontent.map((a) => {
                                            return(
                                                <div className="inner-cotentRec">
                                                    <div className="Image-Rec">
                                                    <div className="image-containerRec" style={{content: `url(${a.image})`}} ></div>
                                                    <div className="Recomanded-Play">
                                                    <div className="Play-Rec"style={{content: `url(${a.icon1})`}} ></div>
                                                    <p>{a.textplay}</p>
                                                   </div> 
                                                    </div>
                                                    
                                                    
                                                    <div className="Pargraph-monthsRec">
                                                        <p>{a.category}</p>
                                                        
                                                            <div className="Circle-Recomanded">
                                                                <p>{a.months}</p>
                                                            </div>
                                                    
                                                    </div>
                                                    <div className="Title-Recomanded">
                                                        <h4>{a.title}</h4>
                                                    </div>
                                                    <div className="StsrRev-Students">
                                                        <div className="Icon-Rec"style={{content: `url(${a.icon})`}} ></div>
                                                        <p>{a.review}</p>
                                                        <p className="Students-REC">{a.sutdents}</p>
                                                    </div>
                                                    <div className="Enrollnow-Rec">
                                                        <Link>{a.link}</Link>
                                                    </div>
                                                    
                                                    </div>
                                                  
                                                    
                                                
                                            )
                                        })}
                                    </div>
                                )
                            }
                            )}
                            </TabPanel>
                            
                            
                          
                            
                        )
                        

                    })}
                    </div>

                    </Tabs>
                    
                    <div className="Link-RecomandedL">
                    <Link>Load More</Link>
                     </div>
                    </div>
                                
       
        
        
    )
    
   
}
export default RecomandedCourse