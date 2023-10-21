import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import {AiOutlineInbox,AiFillAppstore} from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'
import {  MdKeyboardArrowDown } from 'react-icons/md'
import {GrResources} from 'react-icons/gr'
import {  RiApps2Fill } from 'react-icons/ri'
import {FcAbout} from 'react-icons/fc'
import { AboutUs,Resource, Popular } from "../../NavBar/Megamenus/data1";

const Sidebar = (props) =>{
const [list,showList] = useState(false);
const [list1,showList1]= useState(false);
const [list2,showList2] = useState(false);

function show(){
    showList(!list);
}
function show1(){
    showList1(!list1);
}
function show2(){
    showList2(!list2);
}


return(
    <div className="mobile-sidebar">
        <div className="sidebar-logo-row">
            <Link to='/'>
                <div className="mobile-logo-container"></div>
            </Link>
            <button onClick={props.click}><CgClose/> </button>
        </div>
        
        <div className="mobile-sidebar-links">
            
            <div className="sidebar-dropdown">
                <div className="nav-sidebar-link" onClick={show}>
                    <Link to='/' className="nav-anchor">
                        <AiOutlineInbox/>
                        <FormattedMessage id="Course" defaultMessage='Courses'/>
                    </Link>
                    <div className="dropdown-arrow">
                        <MdKeyboardArrowDown/>
                    </div>
                </div>
                {list === true && 
                <div className="mobile-dopdown">
                    {Popular.map((props)=>{
                        return(
                         <div className="inner-links">
                            <Link to={props.to}>{props.title}</Link>
                        
                </div>
                        )
                })}
            </div>
}
</div>

         
         <div className="nav-sidebar-link">
            <Link to='/' className="nav-anchor">
                <AiFillAppstore/>
                <FormattedMessage id ='App' defaultMessage='Apps'/>
            </Link>
         </div>
         

         <div className="sidebar-dropdown">
            <div className="nav-sidebar-link" onClick={show1}>
                <Link to='/' className="nav-anchor">
                  <GrResources />
                  <FormattedMessage id="Res" defaultMessage='Resources'/>
                </Link>
                <div className="dropdown-arrow">
                    <MdKeyboardArrowDown/>
                </div>
            </div>
            {list1 === true &&
            <div className="mobile-dopdown">
                {Resource.map((props) =>{
                    return(
                        <div className="inner-links">
                            <Link to={props.to}>{props.title}</Link>
                        </div>
                    )
                })}
                </div>
            }
         </div>

         <div className="nav-sidebar-link">
         
            <Link to='/' className="nav-anchor">
                <RiApps2Fill/>
                <FormattedMessage id ='Blog' defaultMessage='Blog'/>
            </Link>
        
         </div> 
         <div className="sidebar-dropdown">
         <div className="nav-sidebar-link" onClick={show2}>
            <Link to='/' className="nav-anchor">
                <FcAbout/>
                <FormattedMessage id ='About' defaultMessage='About Us'/>
            </Link>
            <div className="dropdown-arrow">
                <MdKeyboardArrowDown/>
            </div>
         </div>
         {list2 === true && 
         <div className="mobile-dopdown">
            
            {AboutUs.map((props)=> {
                return(
                <div className="inner-links">
                     <Link to={props.to}>{props.title}</Link>
                </div>
                )
            }
            )}
            </div>
        
        }
  
    </div>
         </div>

        
        <div className="sidebar-auth">
            <Link to='/'  className="Log-in">
                <FormattedMessage id="log-in" defaultMessage='Log in'/>
            </Link>
        </div>
        <div className="sidebar-auth">
            <Link to='/' className="Sign-up">
                <FormattedMessage id="Sign-up" defaultMessage='Sign up'/>
            </Link>
        </div>
        <div className="space"></div>



    </div>

)

}

export default Sidebar