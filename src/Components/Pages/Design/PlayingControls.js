import React from "react";
import BurgerMenu from '../../../assets/Design/BurgerMenu.svg'
import Screen from '../../../assets/Design/Screen.svg'
import { useState } from "react";
import Setting from "../../../assets/Design/Setting.svg"
import ReactPlayer from 'react-player/youtube'
import { AppBar,Container,Grid,IconButton,Toolbar,makeStyles,Slider, withStyles,styled,Tooltip } from "@mui/material";
import {BsPlayFill} from "react-icons/bs"
import {MdPlayCircleOutline} from "react-icons"
import {MdOutlinePauseCircle} from "react-icons"
import {MdScreenShare} from "react-icons/md"
import { FormattedMessage } from "react-intl";
import {BsPauseFill} from "react-icons/bs"
import "./styles/PlayingControls.scss"

import {AiFillPlayCircle} from "react-icons/ai"
import {Player,ControlBar,PlayToogle} from 'video-react'
import Videoo from "../../../assets/Design/Videoo.mp4"
import {RiPlayCircleLine} from "react-icons/ri"
import {RiPauseCircleLine} from "react-icons/ri"
import {RiSettings4Fill} from "react-icons/ri"
import {BsVolumeMuteFill} from "react-icons/bs"
import {RiFullscreenFill}  from "react-icons/ri"
import {AiOutlinePlayCircle,AiOutlinePauseCircle} from 'react-icons/ai'
import {BsFillPlayFill,BsFillPauseFill,BsFillVolumeUpFill,BsFillVolumeMuteFill} from 'react-icons/bs'
function ValueLabelComponent(props) {
    const { children, value } = props;
  
    return (
      <Tooltip enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }

const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 14,
      width: 14,
      backgroundColor: '#fff',
      
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#52af77',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });



export default ({onPlayPause,playing,muted,onMute,onVolumeChange,onVolumeSeekUp,volume, onToggleFullScreen, played, onSeek,onSeekMouseDown,onSeekMouseUp,elapsedTime,
  totalDuration }) =>{ 
    return (  
    <div className="AllComponents-Video">
<div className="Middle-buttons">
  <button className="Play-PauseMiddleIcons" onClick={onPlayPause}> 
{  playing ? <RiPauseCircleLine/>:<RiPlayCircleLine/>}
<div className="DesciptionPlay-Video-Play">
  <p><FormattedMessage id="Press" defaultMessage="Press Playback to Continue"/></p>
</div>
</button>
</div>
<div className="Buttom-buttons">
  <div className="Slider-Video">
 <PrettoSlider
 min={0}
 max={100}
 value ={played * 100}
 ValueLabelComponent={ValueLabelComponent}
 onChange={onSeek}
 onMouseDown={onSeekMouseDown}
 onChangeCommitted={onSeekMouseUp}
 />
 <div className="Times">
      <p className="Time1">{elapsedTime} </p>
      <p className="Time2">{totalDuration}</p>
      </div>
     
 </div>
 <div className="end-Buttons">
 <div className="Left-Buttons">
     <button className="Play-Pause-VideoLeft" onClick={onPlayPause}>
      { playing?<BsFillPauseFill/> : <BsFillPlayFill/>}</button> 
     <button className="Volume-Up-Down-Video" onClick={onMute}>
      {muted ? <BsFillVolumeMuteFill/>:<BsFillVolumeUpFill/>}
     <Slider
     min={0}
     max={100}
     value={volume * 100}
     onChange={onVolumeChange}
     onChangeCommitted={onVolumeSeekUp}
     
     /></button>
     </div>
     <div className="Right-Buttons">
      
     <div className="Settings">
       <button ><RiSettings4Fill/></button>
     </div>
     <div className="Share-Screen">
       <button><MdScreenShare/></button>
     </div>
     <div className="FullScreen" >
       <button className="FillintheBlank" onClick={ onToggleFullScreen }><RiFullscreenFill/></button>
     </div>
     </div>
     </div>
 </div>
 </div>
 
 );
}
   