import { FormattedDate, FormattedMessage } from "react-intl";
import Person1 from "../../../assets/IntroUx/Person1.webp"
import Person2 from "../../../assets/IntroUx/Person2.webp"
import Person3 from "../../../assets/IntroUx/Person3.webp"
import Person4 from "../../../assets/IntroUx/Person4.webp"
import StarIcon1 from "../../../assets/IntroUx/StarIcon1.webp"
import StarIcon2 from "../../../assets/IntroUx/StarIcon2.webp"
import StarIcon3 from "../../../assets/IntroUx/StarIcon3.webp"
import StarIcon4 from "../../../assets/IntroUx/StarIcon4.webp"
import { Form } from "react-router-dom";
export const TabData =[
    {
        title:<FormattedMessage id="Ux" defaultMessage="Ux Design"/>
    },
    {
        title:<FormattedMessage id="User" defaultMessage="User Research"/>

    },
    {
        title:<FormattedMessage id="Thinking" defaultMessage="Design Thinking"/>

    },
    {
     title:<FormattedMessage id="Adobe" defaultMessage="Adobe Photoshop"/>
    },
    {
        title: <FormattedMessage id="UI" defaultMessage="User Interface Desing(UI)"/>
    },
    {
        title:<FormattedMessage id="XD" defaultMessage="Adobe XD"/>
    }
]
export const FeaturedReviewsData =[
    {
        Profile:Person1,
        Name:<FormattedMessage id="Scott" defaultMessage="Albi G."/>,
        Courses:<FormattedMessage id="33" defaultMessage="33 Courses"/>,
        Score:<FormattedMessage id="4" defaultMessage="4.7"/>,
        Icon:StarIcon1,
        Months: <FormattedMessage id="3" defaultMessage="3 months ago"/>,
        Description:<FormattedMessage id="Excellent" defaultMessage="Excellent introduction to the topics. There are  very minor attribute errors for uptade
        modules, but that gives the student an excellent opportunity to search for solutions on StackOverflow or other webstes"/>

    },
    {
        Profile:Person2,
        Name:<FormattedMessage id="Nathan" defaultMessage="Luan D."/>,
        Courses:<FormattedMessage id="16" defaultMessage="16 Courses"/>,
        Score:<FormattedMessage id="9" defaultMessage="4.9"/>,
        Icon:StarIcon2,
        Months: <FormattedMessage id="2" defaultMessage="2 months ago"/>,
        Description:<FormattedMessage id="Instructor" defaultMessage="Instructor was very clear and knowledgeable. I was able to understand all the concepts
        and apply them. The courses was a little outdated but I was still able to get almost everyting  to work"/>

    },
    {
        Profile:Person3,
        Name:<FormattedMessage id="Saira" defaultMessage="Sara M."/>,
        Courses:<FormattedMessage id="6" defaultMessage="6 Courses"/>,
        Score:<FormattedMessage id="5" defaultMessage="5"/>,
        Icon:StarIcon3,
        Months: <FormattedMessage id="month" defaultMessage=" a month ago"/>,
        Description:<FormattedMessage id="What" defaultMessage="What an amazing course. So well explained. I have learnt so much. Wathing the videos 
        a second time helped  the concepts to sink in. This course prepares you to think like a developer. Thank you Bekim. You are amazing! "/>

    },
    {
        Profile:Person4,
        Name:<FormattedMessage id="Aaron" defaultMessage="Erion M."/>,
        Courses:<FormattedMessage id="21" defaultMessage="21 Courses"/>,
        Score:<FormattedMessage id="0" defaultMessage="4.0"/>,
        Icon:StarIcon4,
        Months: <FormattedMessage id="ago" defaultMessage="a month ago"/>,
        Description:<FormattedMessage id="Mark" defaultMessage="Bekim is a great instructor and I love how  he even spent time on the specifics on UX Design
        and what goes behind the scenes"/>,
        Description2:<FormattedMessage id="My" defaultMessage="My biggest complaint is that  the lessons are long and I feel like that could be chooped down"/>

    },
    
    
    

]
    