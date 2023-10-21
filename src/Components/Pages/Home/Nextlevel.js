import React from "react"
import { FormattedMessage,  } from 'react-intl' 
import {BsFillPlayFill} from 'react-icons/bs'
import { Link } from "react-router-dom"
import './styles/Nextlevel.scss'
import twoline from '../../../assets/Home/ImagesForHome/twoline.svg'
import Begginers from'../../../assets/Home/ImagesForHome/Begginers.svg'
import Group from '../../../assets/Home/ImagesForHome/Group.svg'
import Arrowright from'../../../assets/Home/ImagesForHome/Arrowright.svg'
import Student1 from '../../../assets/Home/ImagesForHome/Student1.webp'
import Student2 from '../../../assets/Home/ImagesForHome/Student2.webp'
import Student3 from '../../../assets/Home/ImagesForHome/Student3.webp'
import Student4 from '../../../assets/Home/ImagesForHome/Student4.webp'
import Student5 from '../../../assets/Home/ImagesForHome/Student5.webp'
import Student6 from '../../../assets/Home/ImagesForHome/Student6.webp'
import Student7 from '../../../assets/Home/ImagesForHome/Student7.webp'
import medal  from '../../../assets/Home/ImagesForHome/medal.svg'




const Next  =() =>{
    return(
<div className="Next">
    <div className="Learning">
        <h1>
            <FormattedMessage id="Take-learning"
            defaultMessage="Take learning experience to the"/>
            <span>next level !</span>
            <div className="img" style={{content:`url(${twoline})`}} > 
                        </div>
        </h1>
        
        <p>
            <FormattedMessage id="onlie" 
            defaultMessage= "Online learning platform you can easily access antyime, anywhere"/>
        </p>
        <div className="Links">
        <Link to='/'  className="Join-for-free">
                <FormattedMessage id="free" defaultMessage='Join for free'/>
            </Link>
        
        <button className="Play"> 
        <div className="circle">
        <div className="triangle"><BsFillPlayFill/></div>
        </div>
        <h4><FormattedMessage id="Play video" defaultMessage='Play video'/></h4>

                    
            </button>
        </div>
    </div>


<div className="Card">
    <div className="Container">
        <div className="Logo">
            <div className="square">
        <div className="Grpahic-Design"  style={{content:`url(${Begginers})`}} ></div> 
        </div>
        </div>
        <div className="Info">
        <p> <FormattedMessage id ="Graphic" defaultMessage='Graphic design'/></p>
        <h4><FormattedMessage id="Begginer" defaultMessage='Beginner'/></h4>
        </div>
        <div className="Arrow-r">
            <div  className="Right" style={{content:`url(${Arrowright})`}}></div>
        </div>
        
        
       
        </div>
    </div>

    <div className="Card2">
    <div className="Container2">
    
        <div className="Bord-Circle"></div>
        
        <div className="Precentage-Border">
            <p className="Zero"><FormattedMessage id='0%' defaultMessage='0%'/></p>
            <p className="Hundred"><FormattedMessage id="100%" defaultMessage='100%'/> </p>
        
        </div>
        <div className="Info2">
        <h4><FormattedMessage id="50" defaultMessage='50%'/> </h4>
        <p><FormattedMessage id="Finish" defaultMessage='Finished'/></p>
        </div>
       </div>

<div className="Gold-medal">
        <div className="Logo2">
            <div className="square-percent">
                <div className="Medal"  style={{content:`url(${medal})`}}></div>
            </div>
            </div>
            <div className="Info3">
                <p><FormattedMessage id="Medal "  defaultMessage= 'Medal for illustration'/></p>
                <h4><FormattedMessage id="Winner" defaultMessage='Winner'/></h4>
            </div>
        
        </div>
        
        
    
    </div>
    

    <div className="Card3">
        <div className="Container3">
            <div className="Logo1">
                <div className="Circle-student">
            <div className="total-students" style={{content:`url(${Group})`}}></div>
            </div>
            </div>
            <div className="info1">
        <h4><FormattedMessage id="15" defaultMessage='100+'/></h4>
        <p><FormattedMessage id="Total" defaultMessage='Total Students'/></p>
        <div className="Students">
        <div  className="Student1" style={{content:`url(${Student1})`}} ></div>
        <div  className="Student2" style={{content:`url(${Student2})`}} ></div>
        <div  className="Student3" style={{content:`url(${Student3})`}} ></div>
        <div  className="Student4" style={{content:`url(${Student4})`}} ></div>
        <div  className="Student5" style={{content:`url(${Student5})`}} ></div>
        <div  className="Student6" style={{content:`url(${Student6})`}} ></div>
        <div  className="Student7" style={{content:`url(${Student7})`}} ></div>
        
        
        </div>
        </div>
        </div>
    </div>



</div>
    )
}
export default Next
