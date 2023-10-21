import React from "react";
import Goals from "../../../assets/Signin/Goals.svg"
import Calendar from "../../../assets/Signin/Calendar.svg"
import Settings from "../../../assets/Signin/Settings.svg"
import {IoIosArrowForward} from "react-icons/io"
import ArrayL from "../../../assets/Signin/ArrayL.svg"
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";




export const IconIllustrator = [
{
    to:'/',
    icon:Goals,
    desciption:<Link to="/"><FormattedMessage id="Goals" defaultMessage="Goals"/></Link>,
    array:ArrayL
},
{
    to:'/',
    icon:Calendar,
    desciption:<Link to="/"><FormattedMessage id="Calendar" defaultMessage="Monthly Plan"/></Link>,
    array:ArrayL
},
{
    to:"/",
    icon:Settings,
    desciption:<Link to="/"><FormattedMessage id="Settings"defaultMessage="Settings" /></Link>,
    array:ArrayL
}
]