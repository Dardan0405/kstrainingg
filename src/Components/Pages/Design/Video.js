import React, { useRef } from "react";
import { FormattedMessage } from "react-intl";
import "./styles/Video.scss"
import BurgerMenu from '../../../assets/Design/BurgerMenu.svg'
import Screen from '../../../assets/Design/Screen.svg'
import { useState,} from "react";
import  Video1 from '../../../assets/Design/Video1.mp4'
import Setting from "../../../assets/Design/Setting.svg"
import ReactPlayer from 'react-player'
import { AppBar,Container,Grid,IconButton,Toolbar,makeStyles,Slider, withStyles,styled,Tooltip } from "@mui/material";
import {BsPlayFill} from "react-icons/bs"
import {MdPlayCircleOutline} from "react-icons"
import {MdOutlinePauseCircle} from "react-icons"
import {MdScreenShare} from "react-icons/md"
import PlayingControls from "./PlayingControls";
import screenfull from "screenfull";

import {AiFillPlayCircle} from "react-icons/ai"
import {Player,ControlBar,PlayToogle} from 'video-react'
import Videoo from "../../../assets/Design/Videoo.mp4"
import {RiPlayCircleLine} from "react-icons/ri"
import {RiSettings4Fill} from "react-icons/ri"

import {RiFullscreenFill}  from "react-icons/ri"
import {AiOutlinePlayCircle,AiOutlinePauseCircle} from 'react-icons/ai'
import {BsFillPlayFill,BsFillPauseFill,BsFillVolumeUpFill,BsFillVolumeMuteFill} from 'react-icons/bs'




  
const Video = ()=>{
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
           url={Video1}
           controls
           />
           
         </div>
           
       
                    
                    
                   </div>
                  
             
        
         
                      
                    
              
            
            
       

   
    );
    
};

export default Video