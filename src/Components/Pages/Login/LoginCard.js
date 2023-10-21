import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import "./style/LoginCard.scss"
import{TfiEmail} from 'react-icons/tfi'
import student from "../../../assets/Home/WhyKosovaTraining/student.png"
import { Form, Link } from "react-router-dom";
import{FiLock} from "react-icons/fi"
import {AiOutlineEyeInvisible} from "react-icons/ai"
import {AiOutlineEye} from "react-icons/ai"
import  Facebook from "../../../assets/Login/Facebook.svg"
import Twitter from "../../../assets/Login/Twitter.svg"
import Google from "../../../assets/Login/Google.svg"
import Group from "../../../assets/Login/Group.svg"
import Student1 from "../../../assets/Home/ImagesForHome/Student1.webp"
import Student2 from "../../../assets/Home/ImagesForHome/Student2.webp"
import Student3 from "../../../assets/Home/ImagesForHome/Student3.webp"
import Student4 from "../../../assets/Home/ImagesForHome/Student4.webp"
import Student5 from "../../../assets/Home/ImagesForHome/Student5.webp"
import Student6 from "../../../assets/Home/ImagesForHome/Student6.webp"
import Student7 from "../../../assets/Home/ImagesForHome/Student7.webp"
import medal from "../../../assets/Home/ImagesForHome/medal.svg"
import axios from "axios";
import validation from "./LoginValidation";
import { useNavigate } from "react-router-dom";

const LoginCard =() =>{

    const history = useNavigate()
    const [remeber,setRemeber] = useState(false);
    const [hidden,setHidden] = useState(true);
    const [email,Setemail] = useState('');
    const [passowrd,setPassword] = useState('')
  
    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:3405/Login",{
                email,passowrd
            })
            .then(res  =>{
                if(res.data=="exist"){
                 history("/",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User is not signup")
                   }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e)
            })
        }
        catch(e){
            console.log(e)
        }
    } 


   
return(
    <form className="Login-Card" >
        <div className="Description-Login">
            <h4><FormattedMessage id="Log in Account" defaultMessage="Log  In   to  Your  Account!"/></h4>
            <p><FormattedMessage id="Welcome back" defaultMessage="Welcome back to your Kosova Training account!"/></p>
        </div>
        <div className="Input-form-Login">
        <div className="input-container-Login">
          <span><TfiEmail/></span>
          <FormattedMessage id="EmailAddres" defaultMessage="Email address">
          {(msg) => (
            <input
            type= "email"
            id="email"
            name="email"
            
           onChange ={(e) =>{Setemail(e.target.value)}}
            
            placeholder={msg}

            />
          )}
          </FormattedMessage> 
              
          </div>
          <div className="input-container-Login">
            <span><FiLock/></span>
            <FormattedMessage id="Pass" defaultMessage="Password">
                {(msg) =>(
                    <input 
                    type={hidden ? "password" : "text"}
                    id="password"
                    name="password"
                 
                    onChange ={(e) =>{setPassword(e.target.value)}}
                    placeholder ={msg}
                    />
                )}
            </FormattedMessage>
            <div className="hidden-login" onClick={() => setHidden(!hidden)}>
                {hidden ? <AiOutlineEyeInvisible/>  : <AiOutlineEye/>}
            </div>
         
          </div>
    </div>
    <div  className="Forgotpassword">
        <Link to="/Login" >
            <FormattedMessage id="Forgot" defaultMessage="Forgot password ?"/>
        </Link>
    </div>
    <div className="Remeberme-Login">
        <label>
            <input type="checkbox" checked={remeber} onChange={() => setRemeber(!remeber)}/>
            <FormattedMessage id="Remember" defaultMessage="Remember me"/>
        </label>
    </div>
    <div className ="Button-Login">
        <button type="submit"><FormattedMessage id="Login" defaultMessage="Log in"/></button>
    </div>
    <div className="Registe-login">
        <p><FormattedMessage id="Don't" defaultMessage="Don't have an account?"/><Link to="/Signin">
            <FormattedMessage id="Register" defaultMessage="Register"/>
        </Link></p>
    </div>
    <div className="Icons-Login">
        <div className="IconLogin SocialmediaLogin"style={{content:`url(${Facebook})`}} ></div>
        <div className="IconLogin SocialmediaLogin"style={{content:`url(${Twitter})`}} ></div>
        <div className="IconLogin SocialmediaLogin"style={{content:`url(${Google})`}}></div>
    </div>

    <div className="Rightside-Login">
    <div className="Right-sidecontainerLogin">
        <div className="Background-image-Login">
           
            <div className="Boy-Login"></div>
            
        </div>
    </div>
    
    <div className="Card3-Login">
        <div className="Container3-Login">
            <div className="Logo1-Login">
                <div className="Circle-student-Login">
            <div className="total-students-Login" style={{content:`url(${Group})`}}></div>
            </div>
            </div>
            <div className="info1-Login">
        <h4><FormattedMessage id="15" defaultMessage='15k+'/></h4>
        <p><FormattedMessage id="Total" defaultMessage='Total Students'/></p>
        <div className="Students-Login">
        <div  className="Student1-Login" style={{content:`url(${Student1})`}} ></div>
        <div  className="Student2-Login" style={{content:`url(${Student2})`}} ></div>
        <div  className="Student3-Login" style={{content:`url(${Student3})`}} ></div>
        <div  className="Student4-Login" style={{content:`url(${Student4})`}} ></div>
        <div  className="Student5-Login" style={{content:`url(${Student5})`}} ></div>
        <div  className="Student6-Login" style={{content:`url(${Student6})`}} ></div>
        <div  className="Student7-Login" style={{content:`url(${Student7})`}} ></div>
        
        
        </div>
        </div>
        </div>
        <div className="Card2-Logini">
    <div className="Container2-Login">
    
        <div className="Bord-Circle-Login"></div>
        
        <div className="Precentage-Border-Login">
            <p className="Zero-Login"><FormattedMessage id='0%' defaultMessage='0%'/></p>
            <p className="Hundred-Login"><FormattedMessage id="100%" defaultMessage='100%'/> </p>
        
        </div>
        <div className="Info2-Login">
        <h4><FormattedMessage id="50" defaultMessage='50%'/> </h4>
        <p><FormattedMessage id="Finish" defaultMessage='Finished'/></p>
        </div>
       </div>

<div className="Gold-medal-Login">
        <div className="Logo2-Login">
            <div className="square-percent-Login">
                <div className="Medal-Login"  style={{content:`url(${medal})`}}></div>
            </div>
            </div>
            <div className="Info3-Login">
                <p><FormattedMessage id="Medal "  defaultMessage= 'Medal for illustration'/></p>
                <h4><FormattedMessage id="Winner" defaultMessage='Winner'/></h4>
            </div>
        
        </div>
        </div>
        
    
    </div>
    </div>
    
    </form>

)
}
export default LoginCard