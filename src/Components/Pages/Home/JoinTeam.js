import React from "react";
import { FormattedMessage,  } from 'react-intl';
import { Link } from "react-router-dom";
import './styles/JoinTeam.scss';
import twoline from '../../../assets/Home/ImagesForHome/twoline.svg'


const JoinTeam =() =>{
    return(
        <div className="JoinTeam-Main">
            <div className="JoinTeam-Ttiles">
                <h4><FormattedMessage id="join" defaultMessage="Join our Team, become"/>
                <span> a Mentor</span></h4>
                <div className="img-JoinTeam"style={{content:`url(${twoline})`}} ></div>
                
            </div>
            <div className="Pargraph-JoinTeam">
                <p><FormattedMessage id="Feel" defaultMessage="Feel like you can be one of us? Send us a message and join our amazing team today!"/></p>
            </div>
            <div className="Links-JoinUsTeam">
                <Link>Join Us</Link>
            </div>
        </div>
    )
}
export default JoinTeam