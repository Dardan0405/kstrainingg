import React from "react";
import ApplyPage from "./Apply";
import "./style/Maain.scss"
import Code from "../../../assets/Code.webp"
const Main =() =>{
    return(
        <div className="form-container">
            <ApplyPage/>
            <div className="Image">
                <div className="Image-container" style={{content: `url(${Code})`}}>

                </div>
            </div>
        </div>
    )
}
export default Main