import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import {AiOutlineMenu} from 'react-icons/ai'
import './Toolbar.scss'


const Toolbar =(props)=>{

    const  [isSticky2, setIsSticky2] = useState(false);
    useEffect(()=> {
        const mobileToolbar = document.querySelector(".mobile-toolbar");
        const naveHeight = mobileToolbar.scrollHeight;

        const handlescroll=()=>{
            const  scrollHeight = window.pageYOffset;
            setIsSticky2(scrollHeight > 25 ? true : false);   
    };
    window.addEventListener('scroll',handlescroll);
    return()=> window.removeEventListener('scroll',handlescroll);
    },[]);
    return (
        <div className={clsx("mobile-toolbar", isSticky2 ? "toolbar__sticky" : "")}>
            <div className='mobile-logo-row'>
                <Link to='/'>
                    <div className='mobile-logo-container'></div>
                </Link>
            </div>
            <button onClick={props.drawerClickHandler}><AiOutlineMenu/></button>
        </div>
    )
}


export default Toolbar