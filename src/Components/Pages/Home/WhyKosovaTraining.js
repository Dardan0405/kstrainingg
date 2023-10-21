import React from "react";
import { FormattedMessage,  } from 'react-intl'
import { Link } from "react-router-dom";
import './styles/WhyKosovaTraining.scss'
import Certifications from '../../../assets/Home/WhyKosovaTraining/Certifications.svg'
import Export from '../../../assets/Home/WhyKosovaTraining/Expert.svg';
import Flexible from '../../../assets/Home/WhyKosovaTraining/Flexible.svg'
const Why =()=>{
    return(
        <div className="Logos-WhyKs">
            <div className="Logo-Container-WhyKosovaTraining">
                <div className="Icon-Olimpic" ></div>
                <div className="Icon-Half"></div>
                <div className="Icon-Art"></div>
                <div className="Icon-HalfCircle"></div>
                <div className="Icon-Book"></div>
                <div className="Icon-Brush"></div>
                <div className="Icon-2pieceIcon"></div>
                <div className="Icon-Calendar"></div>
            </div>

            <div className="Info-WhyKS">
                <div className="Info-contaier">
                    <h1><FormattedMessage id="why Kosova" defaultMessage='Why '/> <span><FormattedMessage id="?" defaultMessage=' Kosova Training? '/></span></h1>
                    <p>
                        <FormattedMessage id="Beacouse" defaultMessage='Kosova Training gives you a wide range of options to advance in  
                         your career, switch careers, or archieve personal growth.
                          We offer you easy and secure access to many courses, literatures and other resources anytime anywhere'/>
                    </p>
                    <div className="About-UsKosovaTraining">
                        <Link to ='/' className="About-Circle">
                            <FormattedMessage id="About" defaultMessage='About us'/>

                        </Link>
                    </div>
                                        
            </div>
    </div>
    <div className = "Boy">
        <div className="Boy-School"></div>
    </div>

    <div className="cards-Certifications">
        <div className="Containers-CardsCertificaton">
            <div className="Logo-CardsCertification">
                <div className="Square-Certification">
                    <div className="Certification"style={{content:`url(${Certifications})`}} ></div>
                </div>
            </div>
            <div className="Info-Certificates">
                <h4><FormattedMessage id="Cert" defaultMessage="Certification"/></h4>
                <p><FormattedMessage id="Study" defaultMessage="Study flexibly online as you build to a degree"/></p>

            </div>
        </div>
    </div>

    <div className="cards-Expert">
        <div className="Containers-CardsExpert">
            <div className="Logo-CardsExpert">
                <div className="Square-Expert">
                    <div className="Expert"style={{content:`url(${Export})`}} ></div>
                </div>
            </div>
            <div className="Info-Export">
                <h4><FormattedMessage id="Ex" defaultMessage="Expert Teachers"/></h4>
                <p><FormattedMessage id="Learn" defaultMessage="Learn from industry experts who are passionate about teaching"/></p>

            </div>
        </div>
    </div>

    <div className="cards-Flexible">
        <div className="Containers-Flexible">
            <div className="Logo-Flexible">
                <div className="Square-Flexible">
                    <div className="Flexible"style={{content:`url(${Flexible})`}} ></div>
                </div>
            </div>
            <div className="Info-Flexible">
                <h4><FormattedMessage id="Flex" defaultMessage="Flexible learning"/></h4>
                <p><FormattedMessage id="Lear" defaultMessage="Learn new skills with a flexible online courses anytime, anywhere"/></p>

            </div>
        </div>
    </div>

        </div>

    )
}
export default Why 