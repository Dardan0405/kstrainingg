import React from "react"
import { FormattedMessage } from "react-intl"
import PlayStore from '../../../assets/Home/KosovaTrainingApp/PlayStore.webp'
import AppStore from '../../../assets/Home/KosovaTrainingApp/AppStore.webp'
import './styles/KosovaTrainingApp.scss'


const KosovaTrainingApp =()=>{
    return(
        <div className="ImageBackground-KosovaTrainingApp">
            <div className="image1-KosovaTrainingApp"></div>
            <div className="image2-KosovaTrainingApp"></div>
            <div className="TitleContainerKosova-TrainingApp">
                <h4><FormattedMessage id="Stay" defaultMessage="Stay always connected with "/><span>Kosova Training app</span></h4>
                
                    <p><FormattedMessage id="Use" defaultMessage="Use our mobile apps to find and join courses, participate in classes, track
                    and monitor performance, download lectures, shop and communicate with mentors while on the go."/></p>
            
                <div className="Download-AppStore-PlayStore">
                    <div className="Border-PlayStore">
                    <div className="PlayStore"style={{content: `url(${PlayStore})`}} ></div>
                    </div>
                    <div className="Border-AppStore">
                    <div className="AppStore"style={{content: `url(${AppStore})`}}></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default KosovaTrainingApp