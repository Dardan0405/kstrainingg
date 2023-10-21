import React, { useRef } from "react";
import { FormattedMessage } from "react-intl";
import "./styles/Video.scss"
import BurgerMenu from '../../../assets/Design/BurgerMenu.svg'
import Screen from '../../../assets/Design/Screen.svg'
import { useState,} from "react"
import ReactPlayer from 'react-player'
import Video2 from '../../../assets/Design/Video2.mp4'

const Video1 = () =>{
    
        const [playing,setPlaying] = useState(false) 
            return(
        <div className="Video-Container" onClick={(e) => e.preventDefault()}>
            <div className="Desciption-Video">
                <div className="Title-Video">
                    <h4><FormattedMessage id="Intro" defaultMessage="Introduction to UX Desing"/></h4>
                </div>
                <div className="icons-on-top-Video">
                    <div className="Burger-Menu-Video"style={{content:`url(${BurgerMenu})`}}  ></div>
                    <div className="Screen"style={{content:`url(${Screen})`}} ></div>
                </div>
                </div>
             <div  className="Video-AllContent">
               <ReactPlayer 
               playing = {playing}
               url={Video2}
               controls
               />
               
             </div>
               
           
                        
                        
                       </div>
                      
                 
            
             
                          
                        
                  
                
                
           
    
       
        );
        
    };
    
    

export default Video1