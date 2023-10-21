import React from "react";
import { FormattedMessage } from "react-intl";
import axios from "axios";
import { useEffect} from "react";
import { courseData,educationData,scheduleData } from "./data";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { coursesUrl } from "../../../urls";
import {MdComputer,MdKeyboardArrowDown,} from "react-icons/md"
import { BsJustify } from 'react-icons/bs'
import { FiAward } from 'react-icons/fi'
import { RiBarChartFill } from 'react-icons/ri'
import { FaGraduationCap } from 'react-icons/fa'
import { HiOutlineDuplicate } from 'react-icons/hi'
import { BiEnvelope, BiPhone, BiUser } from 'react-icons/bi'
import { AiOutlineClockCircle } from 'react-icons/ai'

const ApplyPage=()=>{
const Navigate = useNavigate();
const [course,SetCourse] = useState("Web Design (UI/UX Design) Training Course");
const [type,SetType] = useState('Online');
const [fullname,Setfullname] = useState();
const [email,Setemail] = useState();
const [age,Setage] = useState();
const [education,Seteducation]= useState("High School Student");
const [schedule,Setschedule] = useState("In the morning (from 10.00)");
const [info,Setinfo] = useState();
const [submit,Setsubmit] = useState();
const [Error,SetError] = useState(false);
const [field,setNewfield]= useState('')
const [phone, setPhone] = useState('');

useEffect(() => {
    setNewfield(`${course} ${type}`)
}, [])
useEffect(() => {
    setNewfield(`${course} ${type}`)
}, [type])
useEffect(() => {
   setNewfield(`${course} ${type}`)
}, [course])

const [dropdown, setDropdown] = useState(false);
    const showDropdown = () => {
        setDropdown(!dropdown);
    }
    const [dropdown1, setDropdown1] = useState(false);
    const showDropdown1 = () => {
        setDropdown1(!dropdown1);
    }
    const [dropdown2, setDropdown2] = useState(false);
    const showDropdown2 = () => {
        setDropdown2(!dropdown2);
    }
    const [dropdown3, setDropdown3] = useState(false);
    const showDropdown3 = () => {
        setDropdown3(!dropdown3);
    }
    const [dropdown4, setDropdown4] = useState(false);
    const showDropdown4 = () => {
        setDropdown4(!dropdown4);
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        if(!fullname || !phone || !email || !info || !education || !info){
            SetError(true)
        }
        else{
        axios({
        method:"post",
        url:coursesUrl,
        data:{
            course:field,
            name:fullname,
            email:email,
            phonenr:phone,
            age:age,
            education:education,
            worktime:schedule,
            additionalinfo:info,
            submit:submit
        },
        headers:{"Content-Type": "multipart/form-data"},
})
.then(function(response){
    console.log(response);
    Setfullname("");
    Setemail("");
    setPhone("");
    Setage("");
    Seteducation("");
    Setschedule("");
    Setinfo("");
    Setsubmit("");
    Navigate("/submitted");
})
.catch(function(response){
    console.log(response);
});
    }
}


    return(
        <form onSubmit={handleSubmit}>
            <h1>
                <FormattedMessage id="Online-App" defaultMessage="Online Application">
              </FormattedMessage>
            </h1>
            <div className="inner-input">
                <p><FormattedMessage id="ApplyFor"  defaultMessage="Apply For"/></p>
                <div className={dropdown ? 'input color-border' : "input" } onClick={showDropdown}>
                    <div className="dropdown">
                        <div className="left-side">
                            <div className="icon">
                             <MdComputer/>
                            </div>
                            <div className="selected">
                                {courseData.filter((props)=> props.englishTitle === course).map((props)=>{
                                    return(
                                        <React.Fragment key={props.id}>{props.title}</React.Fragment>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="arrow">
                              <MdKeyboardArrowDown/>
                        </div>
                    </div>
                    {dropdown ? <ul className="list">
                        {courseData.map((props)=>{
                            return(
                                <li key={props.id} onClick={(e) => SetCourse(`${props.englishTitle}`)}>
                                    {props.title}
                                </li>
                            )
                        })}
                    </ul>: null}
                </div>
            </div>
            <div className="inner-input">
                <p><FormattedMessage id="type" defaultMessage="Type"/></p>
                <div className={dropdown1 ? 'input color-border' : "input"} onClick={showDropdown1}>
                    <div className="dropdown">
                        <div className="left-side">
                            <div className="icon">
                                <HiOutlineDuplicate/>
                            </div>
                            <div className="selected">
                                {type === 'Online' ? <FormattedMessage id="Online" defaultMessage='Online'/>:null}
                                {type === 'Physical' ? <FormattedMessage id="Physical" defaultMessage='Physical'/>:null}
                            </div>
                        </div>
                        <div className="arrow">
                            <MdKeyboardArrowDown/>
                        </div>
                    </div>
                    {dropdown1 ? <ul className="list">
                        <li onClick={() => SetType(`Online`)}>
                            <FormattedMessage id="Online" defaultMessage='Online'/>
                        </li>
                        <li onClick={() => SetType(`Physical`)}>
                            <FormattedMessage id="Physical" defaultMessage='Physical'/>
                        </li>
                    </ul>: null}
                </div>
            </div>
            <div className="input-container">
                <div className="inner-input">
                    <p><FormattedMessage id="FullName" defaultMessage="Full Name"/></p>
                    <div className="input">
                        <span><BiUser/></span>
                        <FormattedMessage id="FullName">
                            {(msg)=>(
                                <input 
                                type="text" id="FullName" name="fullname"
                                value={fullname} onChange={(e) => Setfullname(e.target.value)}
                                placeholder={msg}
                                />
                            )}
                        </FormattedMessage>
                    </div>
                </div>
            </div>
            <div className="input-container input-container2">
                <div className="inner-input">
                    <p><FormattedMessage id="Email" defaultMessage="Email"/></p>
                    <div className="input">
                        <span><BiEnvelope/></span>
                        <FormattedMessage id="Email"> 
                            {(msg)=>(
                                <input 
                                type="email" id="email" name="email" 
                                value={email} onChange={(e) =>Setemail(e.target.value)}
                                placeholder={msg}
                                />
                                
                            )}
                        </FormattedMessage>
                    </div>
                </div>
                <div className="inner-input">
                    <p><FormattedMessage id='phonenumber' defaultMessage='Phone Number' /></p>
                    <div className="input">
                        <span><BiPhone /> </span>
                        <FormattedMessage id='Phone Number'>
                            {(msg) => (
                                <input 
                                    type="text" id='phone' name='phone' 
                                    value={phone} onChange={(e) => setPhone(e.target.value)} 
                                    placeholder={msg}
                                />
                            )}
                        </FormattedMessage>
                    </div>
                </div>
            </div>
             <div className="input-container input-container2">
                <div className="inner-input">
                    <p><FormattedMessage id='age' defaultMessage='Age' /></p>
                    <div className="input">
                        <span><BsJustify /> </span>
                        <FormattedMessage id='Age'>
                            {(msg) => (
                                <input 
                                    type="text" id='age' name='age' 
                                    value={age} onChange={(e) => Setage(e.target.value)}  
                                    placeholder={msg}
                                />
                            )}
                        </FormattedMessage>
                    </div>
                </div>
                <div className="inner-input">
                    <p><FormattedMessage id='education' defaultMessage='Education' /></p>
                    <div className={ dropdown2 ?'input color-border' : 'input'} onClick={showDropdown2}>
                        <div className='dropdown'>  
                            <div className='left-side'> 
                            <div className='icon'>
                                <FaGraduationCap />
                            </div>
                            <div className='selected'>
                                {educationData.filter((props) => props.englishTitle === education).map((props) => {
                                return(
                                    <React.Fragment key={props.id}>{props.title}</React.Fragment>
                                )
                                })}
                            </div>
                            </div>
                            <div className="arrow">
                                <MdKeyboardArrowDown />
                            </div>
                        </div>
                        { dropdown2 ? <ul className="list"> 
                            {educationData.map((props) => {
                            return(
                                <li key={props.id} onClick={(e) => Seteducation(`${props.englishTitle}`)}>
                                {props.title}
                                </li>
                            )
                            })}             
                        </ul> : null }
                    </div>
                    </div>
                    </div>
                     <div className="inner-input">
                    <p><FormattedMessage id='schedule-text' defaultMessage='Which schedule do you prefer more to attend the course?' /></p>
                    <div className={ dropdown3 ?'input color-border' : 'input'} onClick={showDropdown3}>
                        <div className='dropdown'>  
                            <div className='left-side'> 
                            <div className='icon'>
                                <AiOutlineClockCircle />
                            </div>
                            <div className='selected'>
                                {scheduleData.filter((props) => props.englishTitle === schedule).map((props) => {
                                return(
                                    <React.Fragment key={props.id}>{props.title}</React.Fragment>
                                )
                                })}
                            </div>
                            </div>
                            <div className="arrow">
                                <MdKeyboardArrowDown />
                            </div>
                        </div>
                        { dropdown3 ? <ul className="list"> 
                            {scheduleData.map((props) => {
                            return(
                                <li key={props.id} onClick={(e) => Setschedule(`${props.englishTitle}`)}>
                                {props.title}
                                </li>
                            )
                            })}             
                        </ul> : null }
                    </div>
            </div>
            <div className="input-container">
                <div className="inner-input">
                    <p><FormattedMessage id='additionalinformation' defaultMessage='Additional Information' />:</p>  
                    <FormattedMessage id='Any Relative Information'>
                            {(msg) => (
                                <textarea 
                                    name="info" 
                                    id="info" 
                                    value={info} onChange={(e) => Setinfo(e.target.value)}
                                    placeholder={msg}
                                ></textarea>
                            )}
                    </FormattedMessage>
                </div>
            </div>
            {
                Error ?
                <p className="error"><FormattedMessage id="Please" defaultMessage="Please fill in all fields"/></p>
                :null
            }
            <div className="button-container">
                <button><FormattedMessage id='apply' defaultMessage='Apply' /></button>
            </div>
            

        </form>
    )

}
export default ApplyPage