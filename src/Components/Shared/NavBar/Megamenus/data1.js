import React from 'react'
import { FormattedMessage } from 'react-intl'
import{IoIosArrowForward} from 'react-icons/io'

import JavaScript from '../../../../assets/Nav/Categories/JavaScript.svg'
import Reactjs from '../../../../assets/Nav/Categories/Reactjs.svg'
import Css from '../../../../assets/Nav/Categories/Css.svg'
import Angular from '../../../../assets/Nav/Categories/Angular.svg'
import TypeScript from '../../../../assets/Nav/Categories/TypeScript.svg'
import Node from '../../../../assets/Nav/Categories/Node.svg'
import Html from '../../../../assets/Nav/Categories/Html.svg'
import Blog from '../../../../assets/Nav/Categories/Resources/Blog.svg'
import Certicates from '../../../../assets/Nav/Categories/Resources/Certicates.svg'
import Events from '../../../../assets/Nav/Categories/Resources/Events.svg'
import Guidevideo from '../../../../assets/Nav/Categories/Resources/Guidevideo.svg'
import Helpcenter from '../../../../assets/Nav/Categories/Resources/Helpcenter.svg'
import Studentstories from '../../../../assets/Nav/Categories/Resources/Studentstories.svg'
import Support from '../../../../assets/Nav/Categories/Resources/Support.svg'
import Teacher from '../../../../assets/Nav/Categories/Resources/Teacher.svg'
import Whatsnew from '../../../../assets/Nav/Categories/Resources/Whatsnew.svg'
import About from '../../../../assets/Nav/Categories/Aboutus/About.svg'
import Friend from '../../../../assets/Nav/Categories/Aboutus/Friend.svg'
import Instructors from '../../../../assets/Nav/Categories/Aboutus/Instructors.svg'
import Partner from '../../../../assets/Nav/Categories/Aboutus/Partner.svg'
import School from '../../../../assets/Nav/Categories/Aboutus/School.svg'
import Sponsor from '../../../../assets/Nav/Categories/Aboutus/Sponsor.svg'
import { Link } from 'react-router-dom'


export const Cat=[
    {
        
items:[
        {
            to :'',
            title:<Link to='/Apply'><FormattedMessage id='Design' defaultMessage='Development'/></Link>,
            icon:<IoIosArrowForward/>,
        },
        {
            to :'',
            title:<Link to='/Apply'><FormattedMessage id='Bussiness' defaultMessage='Busines'/></Link>,
            icon: <IoIosArrowForward/>
        },
        
        {
            to :'/Apply',
            title:<Link to='/Apply'> <FormattedMessage id='Finance' defaultMessage='Finance & Accounting'/> </Link>,
            icon:<IoIosArrowForward/>
        },
        {
            to :'/Apply',
            title:<Link to='/Apply'><FormattedMessage id='IT' defaultMessage='IT & Software'/> </Link>,
            icon:<IoIosArrowForward/>
        },
        {
            to :'',
            title: <Link to='/Apply'><FormattedMessage id='Office' defaultMessage='Office Prductivity'/></Link>,
            icon:<IoIosArrowForward/>
        },
        {
            to :'',
            title:<Link to='/Apply'><FormattedMessage id='Prsonal' defaultMessage='Personal Development'/></Link>,
            icon:<IoIosArrowForward/>
        },
        {
            to :'',
            title:<Link to='/IntrotoUx'><FormattedMessage id='Design' defaultMessage='Design'/></Link>,
            icon:<IoIosArrowForward/>
        },
        {
            to :'/',
            title:<Link to='/Apply'><FormattedMessage id='Market' defaultMessage='Marketing'/></Link>,
            icon:<IoIosArrowForward/>
        },
        {
            to :'/',
            title:<Link to='/Apply'><FormattedMessage id='Life' defaultMessage='Lifestyle'/></Link>,
            icon:<IoIosArrowForward/>
        },
        {
            to :'/',
            title: <Link to='/Apply'><FormattedMessage id='Photo' defaultMessage='Photography & Video'/></Link>,
            icon:<IoIosArrowForward/>
        },
        {
            to :'/',
            title:<Link to='/Apply'><FormattedMessage id='Health' defaultMessage='Health & Fitness'/></Link>,
            icon: <IoIosArrowForward/>
           },
           
    ],
    
    item:[
        { 
            to :'/',
            title:<Link to='/Apply'><FormattedMessage id='Web' defaultMessage='Web Development'/></Link>,
            icon: <IoIosArrowForward/>
        },
        {
            to :'/',
            title:<Link to='/Apply'><FormattedMessage id='Data' defaultMessage='Data Science'/></Link>,
            icon: <IoIosArrowForward/>
        },
        {
            to :'/',
            title:<Link to='/Apply'><FormattedMessage id='Mobile' defaultMessage='Mobile Development'/></Link>,
            icon: <IoIosArrowForward/>
        },
        {
            to :'/',
            title:<Link to='/Apply'><FormattedMessage id='Programing' defaultMessage='Programing Languages'/></Link>,
            icon: <IoIosArrowForward/>
        },
        {
            to :'/',
            title:<Link to='/Apply'><FormattedMessage id='Game' defaultMessage='Game Devlopment'/></Link>,
            icon: <IoIosArrowForward/>
        },
        {
            to :'/',
            title:<Link to='/Apply'><FormattedMessage id='DB' defaultMessage='Database Design'/></Link>,
            icon: <IoIosArrowForward/>
        },
        {
            to :'/',
            title:<Link to='/Apply'><FormattedMessage id='Software' defaultMessage='Software Testing'/></Link>,
            icon: <IoIosArrowForward/>
        },
        {
            to :'/',
            title:<Link to='/Apply'><FormattedMessage id='Soft' defaultMessage='Software Engineering'/></Link>,
            icon: <IoIosArrowForward/>
        },
        {
            to :'/',
            title:<Link to='/Apply'><FormattedMessage id='Tools' defaultMessage='Software Development Tools'/></Link>,
            icon: <IoIosArrowForward/>
        },
        {
            to :'/',
            title:<Link to='/Apply'><FormattedMessage id='No' defaultMessage='No-code Development'/></Link>,
            icon: <IoIosArrowForward/>
        },
    ]
    }
]
export const Popular =[
    {
        to: '/',
        icon:JavaScript,
        title:<FormattedMessage id='JS' defaultMessage= 'JavaScript'/>,
        bg:'#48494B',
        color:'#F7DF1E'
        

    },
    {
        to: '/',
        icon:Reactjs,
        title:<FormattedMessage id='Rea' defaultMessage= 'React'/>,
        bg:'#48494B',
        color:'#61DAFB' 
    },
    {
        to: '/',
        icon:Css,
        title:<FormattedMessage id='CS' defaultMessage= 'CSS'/>,
        bg:'#48494B',
        color:'#62196F3' 
    },
    {
        to: '/',
        icon:Angular,
        title:<FormattedMessage id='Ang' defaultMessage= 'Angular'/>,
        bg:'#48494B',
        color:'#E23237' 
    },
    {
        to: '/',
        icon:TypeScript,
        title:<FormattedMessage id='Type' defaultMessage= 'Typescript'/>,
        bg:'#48494B',
        color:'#007FACC' 
    },
    {
        to: '/',
        icon:Node,
        title:<FormattedMessage id='Node' defaultMessage= 'Node.Js'/>,
        bg:'#48494B',
        color:'#3765AF' 
    },
    {
        to: '/',
        icon:Html,
        title:<FormattedMessage id='Html' defaultMessage= 'HTML5'/>,
        bg:'#48494B',
        color:'#FF5722' 
    },
]
export const Resource=[{
    to:'/',
    icon:Guidevideo,
    title: <FormattedMessage id='Guide' defaultMessage='Video Guide'/>,
    bg:'#C1BBBB',
},
{
    to:'/',
    icon:Helpcenter,
    title: <FormattedMessage id='Help' defaultMessage='Help Center'/>,
    bg:'#C1BBBB',
},
{
    to:'/',
    icon:Events,
    title: <FormattedMessage id='Event' defaultMessage='Events'/>,
    bg:'#C1BBBB',
},
{
    to:'/',
    icon:Support,
    title: <FormattedMessage id='Sup' defaultMessage='Support'/>,
    bg:'#C1BBBB',
},
{
    to:'/',
    icon:Whatsnew,
    title: <FormattedMessage id='What' defaultMessage="Whats's new"/>,
    bg:'#C1BBBB',
},
{
    to:'/',
    icon:Certicates,
    title: <FormattedMessage id='Cert' defaultMessage='Certificates'/>,
    bg:'#C1BBBB',
},
{
    to:'/',
    icon:Blog,
    title: <FormattedMessage id='Blog' defaultMessage='Blog'/>,
    bg:'#C1BBBB',
},
{
    to:'/',
    icon:Studentstories,
    title: <FormattedMessage id='Student' defaultMessage='Student Stories'/>,
    bg:'#C1BBBB',
},
{
    to:'/',
    icon:Teacher,
    title: <FormattedMessage id='Become' defaultMessage='Become a Teacher'/>,
    bg:'#C1BBBB',
},
]
export const AboutUs =[{
    to:'/',
    icon:About,
    title:<FormattedMessage id='About' defaultMessage='About Us'/>,
    bg:'#C1BBBB'

},
{
    to:'/',
    icon:School,
    title:<FormattedMessage id='Kosova' defaultMessage='Kosova Training School'/>,
    bg:'#C1BBBB'

},
{
    to:'/',
    icon:Partner,
    title:<FormattedMessage id='Become' defaultMessage='Become a partner'/>,
    bg:'#C1BBBB'

},
{
    to:'/',
    icon:Friend,
    title:<FormattedMessage id='Refer' defaultMessage='Refer a Friend'/>,
    bg:'#C1BBBB'

},
{
    to:'/',
    icon:Instructors,
    title:<FormattedMessage id='Our' defaultMessage='Our Instructors'/>,
    bg:'#C1BBBB'

},
{
    to:'/',
    icon:Sponsor,
    title:<FormattedMessage id='Sponsor' defaultMessage='Sponsors'/>,
    bg:'#C1BBBB'

},
]    