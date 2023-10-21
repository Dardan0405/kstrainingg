import { FormattedMessage } from "react-intl"


import {FaFacebookF,FaLinkedinIn} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'



export const Footericons =[
    {
        icon:<FaFacebookF/>,
        link:'https://www.facebook.com/profile.php?id=61550784545121'
    },
    {
        icon: <BsTwitter/>,
        link:'https://twitter.com/kosovatraining'
        
    },
    
    {
        icon:<AiFillInstagram />,
        link:'https://www.instagram.com/kosovatraining/'

    },
    {
        icon:<FaTiktok/>,
        link:"https://www.tiktok.com/@kosovatraining"
    }
]


export const FooterData =[
    {
    category:<FormattedMessage id="Company" defaultMessage="Company"/>,
    links:[
        {
            link:<FormattedMessage id="About" defaultMessage="About"/>,
            to:'/'
        },
        {
            link:<FormattedMessage id="What we" defaultMessage="What We Offer"/>,
            to:'/'

        },
        {
            link:<FormattedMessage id="Leader" defaultMessage="Leadership"/>,
            to:'/'
        },
        {
            link:<FormattedMessage id="Career" defaultMessage="Careers"/>,
            to:'/'
        },
        {
            link:<FormattedMessage id="Catalog" defaultMessage="Catalog"/>,
            to:'/'
        },
        {
            link:<FormattedMessage id="Proffesional" defaultMessage="Professional Certificates"/>,
            to:'/'
        },
        {
            link:<FormattedMessage id="Master" defaultMessage="MasterTrack® Certificates"/>,
            to:'/'
        },
        {
            link:<FormattedMessage id="Degrees" defaultMessage="Degrees"/>,
            to:'/'
        },
        {
            link:<FormattedMessage id="For" defaultMessage="For Enterprise"/>,
            to:'/'
        }

    ]
    },
    {
        category: <FormattedMessage id="Course" defaultMessage="Courses"/>,
        links:[
            {
                link:<FormattedMessage id="Busines" defaultMessage="Business"/>,
                to:'/'
            },
            {
                link:<FormattedMessage id="Dev" defaultMessage="Development"/>,
                to:'/'
            },
            {
                link:<FormattedMessage id="Des" defaultMessage="Design"/>,
                to:'/'
            },
            {
                link:<FormattedMessage id="PR" defaultMessage="PR & Marketing"/>,
                to:'/'
            },
            {
                link:<FormattedMessage id="IT" defaultMessage="IT & Software"/>,
                to:'/'
            },
            {
                link:<FormattedMessage id="Photo" defaultMessage="Photography"/>,
                to:'/'

            },
            {
                link:<FormattedMessage id="More" defaultMessage="More"/>,
                to:'/'
            }
        ]
    },
    {
        category:<FormattedMessage id="Reasources" defaultMessage="Resources"/>,
        links:[
            {
                link:<FormattedMessage id="Client" defaultMessage="Client Login"/>,
                to:'/'
            },
            {
                link:<FormattedMessage id="Aff" defaultMessage="Affiliate Login"/>,
                to:'/'
            },
            {
                link:<FormattedMessage id="Merchant" defaultMessage="Merchant Login"/>,
                to:'/'
            },
            {
             link:<FormattedMessage id="E-book" defaultMessage="E-books"/>,
             to:'/'
            },
            {
                link:<FormattedMessage id="Costumer" defaultMessage="Costumer Voice"/>,
                to:'/'
            },
            {
                link:<FormattedMessage id="Sucess" defaultMessage="Success Stories"/>,
                to:'/'
            }
        ]
    },
    {
        category:<FormattedMessage id="SUPPORT" defaultMessage="Support"/>,
        links:[
            {
                link:<FormattedMessage id="Help" defaultMessage="Help center"/>,
                to:'/'
            },
            {
                link:<FormattedMessage id="Contact" defaultMessage="Contact us"/>,
                to:'/'
            },
            {
                link:<FormattedMessage id="Priv" defaultMessage="Privacy"/>,
                to:'/'
                
            },
            {
                link:<FormattedMessage id="BLOG" defaultMessage="Blog"/>,
                to:'/'
            },
            {
                link:<FormattedMessage id="Careere" defaultMessage="Careers"/>,
                to:'/'
            }

        ]
    }
]