import { FormattedMessage } from "react-intl";

import Bussineas from '../../../assets/Home/Top-Categories/Bussineas.svg'
import Design from '../../../assets/Home/Top-Categories/Design.svg'
import Dev from '../../../assets/Home/Top-Categories/Dev.svg'
import Game from '../../../assets/Home/Top-Categories/Game.svg'
import Photo from '../../../assets/Home/Top-Categories/Photo.svg'
import iconCard1 from '../../../assets/Home/WordsfromStudents/iconCard1.png'
import Quote1 from '../../../assets/Home/WordsfromStudents/Quote1.svg'
import Quote2 from '../../../assets/Home/WordsfromStudents/Quote2.svg'
import iconCard2 from '../../../assets/Home/WordsfromStudents/iconCard2.png'
import  Icons1 from '../../../assets/Home/WordsfromStudents/Icons1.webp'
import Icons2 from "../../../assets/Home/WordsfromStudents/Icons2.webp"
import image1 from '../../../assets/Home/OurBlog/image1.webp'
import image2 from '../../../assets/Home/OurBlog/image2.webp'
import image3 from '../../../assets/Home/OurBlog/image3.webp'
import clock from '../../../assets/Home/OurBlog/clock.svg'
import eye from '../../../assets/Home/OurBlog/eye.svg'
import logo1 from '../../../assets/Home/Top-Categories/logo1.svg'
export const TopCategoriesdata =[
{
to: '/',
icon:Bussineas,
title:<FormattedMessage id="buss" defaultMessage="Business"/>,
paragraph:<FormattedMessage id="383" defaultMessage="383 Courses"/>,
color:'#6C5CE7'
},
{
    to: '/',
    icon:Design,
    title:<FormattedMessage id="Desig" defaultMessage="Design"/>,
    paragraph:<FormattedMessage id="587" defaultMessage="587 Courses"/>,
    color:"#2929D6"
},
{
    to: '/',
    icon:Dev,
    title:<FormattedMessage id="DEV" defaultMessage="Development"/>,
    paragraph:<FormattedMessage id="506" defaultMessage="506 Courses"/>,
    color:'#FFBE58'
},
{
   to: '/',
   icon:Photo,
   title:<FormattedMessage id="pHO" defaultMessage="Photography"/>,
   paragraph:<FormattedMessage id="203" defaultMessage="203 Courses"/>,
   color:'#34B4B3'
},
{
    to: '/',
    icon:Game,
    title:<FormattedMessage id="Game" defaultMessage="Gaming"/>,
    paragraph:<FormattedMessage id="173" defaultMessage="173 Courses"/>,
    color:'#E0474E'
},
{
   to: '/',
   icon:logo1,
   title:<FormattedMessage id="Acc" defaultMessage="Accounting"/>,
   paragraph:<FormattedMessage id="89" defaultMessage="89 Courses"/>,
   color:'#3EB135'
},
]

export const dataCards =[
    {
        icon:Icons2,
        Quote:Quote1,
        Quote2:Quote2,
        Description:<FormattedMessage id = "I studied" defaultMessage="Kosova Training transformed my career.&nbsp; Knowledgeable instructors,&nbsp; hands-on experience,&nbsp; and industry-relevant curriculum prepared me for success.&nbsp; Highly recommended."/>,
        infoStudent:<FormattedMessage id="Albana" defaultMessage="Albana Uka"/>,
        status:<FormattedMessage id="ST" defaultMessage= "(Student)" />
    },
    {
        icon:Icons1,
        Quote:Quote1,
        Quote2:Quote2,
        Description:<FormattedMessage id="Help" defaultMessage="Enrolling was a game-changer.&nbsp; Comprehensive curriculum,&nbsp; expert guidance,&nbsp; and interactive learning boosted my skills and confidence. &nbsp;Grateful for the Training Centers impact on my career."/>,
        infoStudent:<FormattedMessage id="Arian" defaultMessage="Arjan Elezaj"/>,
        status:<FormattedMessage id="S" defaultMessage="(Student)"/>


    },
    {
        icon:Icons2,
        Quote:Quote1,
        Quote2:Quote2,
        Description:<FormattedMessage id = "I studied" defaultMessage="The impact of Kosova Training on my career has been transformative. With knowledgeable instructors and a curriculum that is industry-relevant, I was well-prepared for success. The hands-on experience and practical learning were invaluable. I highly recommend it"/>,
        infoStudent:<FormattedMessage id="amina" defaultMessage="Alba Muhameti"/>,
        status:<FormattedMessage id="ST" defaultMessage= "(Student)" />
    },
    {
        icon:Icons1,
        Quote:Quote1,
        Quote2:Quote2,
        Description:<FormattedMessage id="Help" defaultMessage="Kosova Training has been a career-transforming experience for me. The combination of knowledgeable instructors, hands-on learning, and industry-focused curriculum has equipped me for success. I'm highly impressed and recommend it to anyone looking to advance their career."/>,
        infoStudent:<FormattedMessage id="Ashton" defaultMessage="Arben Islami"/>,
        status:<FormattedMessage id="S" defaultMessage="(Student)"/>
    },
    {
        icon:Icons2,
        Quote:Quote1,
        Quote2:Quote2,
        Description:<FormattedMessage id = "I studied" defaultMessage="Kosova Training played a pivotal role in shaping my career. The instructors' expertise and the hands-on experience offered a solid foundation for my success. The Training Center's impact on my professional journey has been remarkable, and I can't stress enough how beneficial the program was"/>,
        infoStudent:<FormattedMessage id="amina" defaultMessage="Rina Ahmeti"/>,
        status:<FormattedMessage id="ST" defaultMessage= "(Student)" />
    },
    {
        icon:Icons1,
        Quote:Quote1,
        Quote2:Quote2,
        Description:<FormattedMessage id="Help" defaultMessage="Choosing Kosova Training was a turning point in my career journey. The interactive learning, combined with a comprehensive curriculum and expert guidance, elevated my skills and knowledge. The Training Center's influence on my career trajectory is undeniable, and I'm truly appreciative of the experience."/>,
        infoStudent:<FormattedMessage id="Ashton" defaultMessage="Leonit Rrahimi "/>,
        status:<FormattedMessage id="S" defaultMessage="(Student)"/>

}



]

export const DataBlog =[
    {
      image:image1,
      title:<FormattedMessage id="Women"  defaultMessage="Women Are Becoming Climate Leaders Through New Online ..."/>,
      Time:clock,
      date:<FormattedMessage id="22" defaultMessage="May 04,2023"/>,
      icon:eye,
      views:<FormattedMessage id="40" defaultMessage="402 Views"/>,
      to:"BlogArticles/article1"

    },
    {
        image:image2,
        title:<FormattedMessage id="Trending"  defaultMessage="Trending online courses in business, data science,health..."/>,
        Time:clock,
        date:<FormattedMessage id="18" defaultMessage="April 18,2023"/>,
        icon:eye,
        views:<FormattedMessage id="34" defaultMessage="342 Views"/>,
        to:"/BlogArticles/article2"
    },
    {
        image:image3,
        title:<FormattedMessage id="By"  defaultMessage="By designing a healthy learning schedule, Janelle`s on her way..."/>,
        Time:clock,
        date:<FormattedMessage id="12" defaultMessage="Jun 22 2023"/>,
        icon:eye,
        views:<FormattedMessage id="29" defaultMessage="292 Views"/>,
        to:"/BlogArticles/article3"
    }

]