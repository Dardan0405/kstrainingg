import React, { useState, useEffect } from "react"
import './Colorswitch.scss'

const ColorSwitch =() =>{
const [mode, setMode] = useState(() => localStorage.getItem("mode"));

useEffect (()=> {
    window.addEventListener("storage",setPreferedTheme);
    return () => {
        window.removeEventListener("storage",setPreferedTheme);
    };

},[]);
const setPreferedTheme = () =>{
    const __mode = localStorage.getItem("mode");
    if (__mode){
        setMode(__mode);
    }
    else{
        setMode("light");
    }

};
useEffect(() =>{
    if(mode === "theme-purple"){
        document.body.classList.add("theme-purple");
        document.body.classList.remove('theme-orange','theme-red','theme-blue');
        localStorage.setItem("mode","theme-purple");
    }
    else if (mode === "theme-red"){
        document.body.classList.add("theme-red");
        document.body.classList.remove('theme-orange','theme-purple','theme-blue');
        localStorage.setItem("mode","theme-red");
    }
    else if(mode === "theme-blue"){
        document.body.classList.add("theme-blue");
        document.body.classList.remove('theme-orange','theme-purple','theme-red');
        localStorage.setItem("mode","theme-blue");
    }
    else if(mode === "theme-orange"){
        document.body.classList.add("theme-orange");
        document.body.classList.remove('theme-blue','theme-purple','theme-red');
        localStorage.setItem("mode","theme-orange");
    }

},[mode]);
return(
    <div className="color-SwitchContainer">

        <div className={`${mode === 'theme-purple' ? "color color1 active" : "color color1"}`}
        onClick={()=> setMode('theme-purple')}>
            
            <div className="ccircle2"></div>
            <div className="ccircle1"></div>
            
            
        </div>

        <div className={`${mode === 'theme-red' ? "color color2 active" : "color color2"}`}
        onClick={()=> setMode('theme-red')}>
            <div className="ccircle2"></div>
            <div className="ccircle1"></div>
            
        </div>

        <div className={`${mode === 'theme-blue' ? "color color3 active" : "color color3"}`}
        onClick={()=> setMode('theme-blue')}>
             <div className="ccircle2"></div>
            <div className="ccircle1"></div>
           
        </div>

        <div className={`${mode === 'theme-orange' ? "color color4 active" : "color color4"}`}
        onClick={()=> setMode('theme-orange')}>
            <div className="ccircle2"></div>
            <div className="ccircle1"></div>
            
        </div>
    </div>

)
};
export default ColorSwitch