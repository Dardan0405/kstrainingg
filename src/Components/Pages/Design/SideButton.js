import React ,{useState} from "react";
import {  Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import {IoIosArrowUp} from 'react-icons/io'
import Video from "./Video.js";
import { IoIosArrowDown } from "react-icons/io";
import {BsPlayCircle} from 'react-icons/bs';
import {BiBookOpen} from "react-icons/bi";
import './styles/SideButton.scss'
import Readin1 from "./Reading1.js";
import Reading from "./Reading.js";
import Video1 from "./Video1.js";


const Sidebutton =() =>{
    const [click,setClick] = useState (false);
    const [inclick,setInClick] = useState(false);
    const [clickVideo,setclickVideo] = useState(false);
    
    const [clickReading,setclickReading] = useState(false)
    const [clickReading1,setReading1] = useState(false)
    const [clickVideo1,setclickVideo1] = useState (false)
  
    return(
        <div className="Button-Side">
            <div className="Desciption-Button">
                
            <button className="Module1 module"   onClick={() => setClick(!click)}><h4 className="Module1-Button"><FormattedMessage id="Modul1" 
            defaultMessage='Module 1'/></h4>
            <div className="Icon-Side1">
            {click? <IoIosArrowDown/>: <IoIosArrowUp />}
            </div>
            </button>
            {click &&  <div className="Inner-button">
                <button  to='/Design' className="Link-Inner1" onClick={()=> setclickVideo(!clickVideo)}>
                    <div className="Video-WelcomeIcons">
                        <BsPlayCircle/>
                    </div>
                    <div className="Container-Side">
                        <span>
                            <FormattedMessage id="Video" defaultMessage='Video:'/>
                        </span>
                        <p>
                            <FormattedMessage id="Welcome-Video" defaultMessage='Welcome-Video'/>
                        </p>
                    </div>
                    
                        {  clickVideo && <div className="Video-sidebar" onClick={(e) => e.preventDefault()} >
                    <Video/>
                        </div>}
                </button>
                <button to='/Design' className="Link-Inner1"  onClick={() => setclickReading(!clickReading)}>
                    <div className="Video-WelcomeIcons" >
                        <BiBookOpen/>

                    </div>
                    <div className="Container-Side ">
                        <span>
                            <FormattedMessage id="Reading" defaultMessage='Reading:'/>
                        </span>
                        <p>
                            <FormattedMessage id="Ux Design" defaultMessage='What is Ux Design?'/>
                        </p>

                    </div>
                    {clickReading && <div className="Video-sidebar"  >
                        <Reading/>
                        </div>}

                </button>
                <button to='/Design' className="Link-Inner1"  onClick={() => setReading1(!clickReading1)}>
                   
                <div className="Video-WelcomeIcons"  >
                    <BiBookOpen/>

                </div>
                <div className="Container-Side ">
                    <span>
                        <FormattedMessage id="Reading" defaultMessage='Reading:'/>
                    </span>
                    <p>
                        <FormattedMessage id="Design Thinking" defaultMessage='Design Thinking Proc...'/>
                    </p>
                </div>
                     {clickReading1 && <div className="Video-sidebar">
                        <Readin1/>
                        </div>}
                </button>
                <button to='/Design' className="Link-Inner1" onClick={() => setclickVideo1(!clickVideo1)}>
                <div className="Video-WelcomeIcons">
                        <BsPlayCircle/>
                    </div>
                    <div className="Container-Side">
                        <span>
                            <FormattedMessage id="Video" defaultMessage='Video:'/>
                        </span>
                        <p>
                            <FormattedMessage id="UserExperience" defaultMessage='User Experience Introd...'/>
                        </p>
                    </div>
                </button>
                {clickVideo1 && <div className="Video-sidebar1">
                    <Video1/>
                    </div>}
                </div>}
            
            <div className="Button-Side">
            <button className="Module1"  onClick={() => setInClick(!inclick)}><h4 className="Module1-Button"><FormattedMessage id="Modul1" defaultMessage='Module 2'/></h4>
            <div className="Icon-Side1">
                <IoIosArrowUp/>
            </div>
            </button>
            
            {inclick &&  <div className="Inner-button">
                </div>}

        </div>
        <div className="Button-Side">
            <button className="Module1"  onClick={() => setInClick(!inclick)}><h4 className="Module1-Button"><FormattedMessage id="Modul1" defaultMessage='Module 3'/></h4>
            <div className="Icon-Side1">
                <IoIosArrowUp/>
            </div>
            </button>
            
            {inclick &&  <div className="Inner-button">
                
            
                </div>}

        </div>
        <div className="Button-Side">
            <button className="Module1"  onClick={() => setInClick(!inclick)}><h4 className="Module1-Button"><FormattedMessage id="Modul1" defaultMessage='Module 4'/></h4>
            <div className="Icon-Side1">
                <IoIosArrowUp/>
            </div>
            </button>
            
            {inclick &&  <div className="Inner-button">
                
                </div>}

        </div>
        <div className="Button-Side">
            <button className="Module1"  onClick={() => setInClick(!inclick)}><h4 className="Module1-Button"><FormattedMessage id="Modul1" defaultMessage='Module 5'/></h4>
            <div className="Icon-Side1">
                <IoIosArrowUp/>
            </div>
            </button>
            
            {inclick &&  <div className="Inner-button">
                </div>}

        </div>
        <div className="Button-Side">
            <button className="Module1"  onClick={() => setInClick(!inclick)}><h4 className="Module1-Button"><FormattedMessage id="Modul1" defaultMessage='Module 6'/></h4>
            <div className="Icon-Side1">
                <IoIosArrowUp/>
            </div>
            </button>
            
            {inclick &&  <div className="Inner-button">
                </div>}

        </div>
        <div className="Button-Side">
            <button className="Module1"  onClick={() => setInClick(!inclick)}><h4 className="Module1-Button"><FormattedMessage id="Modul1" defaultMessage='Module 7'/></h4>
            <div className="Icon-Side1">
                <IoIosArrowUp/>
            </div>
            </button>
            
            {inclick &&  <div className="Inner-button">
               
                </div>}

        </div>
        <div className="Button-Side">
            <button className="Module1 module8"  onClick={() => setInClick(!inclick)}><h4 className="Module1-Button"><FormattedMessage id="Modul1" defaultMessage='Module 8'/></h4>
            <div className="Icon-Side1">
                <IoIosArrowUp/>
            </div>
            </button>
            
            {inclick &&  <div className="Inner-button">
                </div>}
                </div>


        </div>
        </div>
    )

}
export default Sidebutton