import React from "react";
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import './Megamenus.scss'
import{Cat, PopularCourses} from "./data1"
import { Popular } from "./data1";
import Next from '../../../../assets/Nav/Categories/Next.svg'


 

const Course = () =>{
return(
    <div className="nav-megamenu course-megamenu " >
        <div className="menu-links">
            <h5><FormattedMessage id = 'Cat' defaultMessage = 'Categories' /></h5>
            <div className="inner-links"> 
                <div className="Right">
                    {Cat.map ((props)=> {
                        return(
                         <div className="Content">
                            {props.items.map((l)=>{
                                return(
                                    <Link  to={l.to}  className="dev">
                                            <div className="title" >
                                            <p>{l.title} </p>
                                            </div>
                                             <div className="icon">
                                            {l.icon}
                                            </div>
                                            </Link>
                                )
                            } 
                            )
                    }
                            </div>
                        )
                    
                    })}
                </div>


                <div className="Left">
                {Cat.map((props) => {
                    return(
                    <div className="Contents">
                            {props.item.map((a)=>{
                            
                                return(
                                    <Link  to={a.to}  className="devs">
                                            <div className="titles" >
                                            <p>{a.title} </p>
                                            </div>
                                             <div className="icons">
                                            {a.icon}
                                            </div>
                                            </Link>                     
                                )
                            }
                            )}
                        </div>
                       
                    )
                }
                )}
            </div>
            
            
           </div>



           </div>
    
           
                <div className="Topics">
                <h5><FormattedMessage id="Popular" defaultMessage= "Popular Topics"/></h5>
                
              
                    {Popular.map((props) => {
                        return(
                            <Link to={props.to} className="languages-main">
                               <div className="icon-container">
                                    <div className="icon-style" style={{content:`url(${props.icon})`}}></div>
                                    <div className="bg" style={{border:`${props.bg}`}}></div>
                                </div>
                                <div className="block">
                                    <h4>{props.title}</h4>
                                </div>
                                
                            </Link>
                           
                        )
                    }
                    )}
             
               </div>


            <div className="Line">
                <div className="mid-line"></div>
            </div>
           

           <div className="Popular">
            <h5><FormattedMessage id="Courses" defaultMessage= 'Popular Courses'/></h5>
            
                <div className="Web web1">
                    
                   
                    <p><FormattedMessage id="web" defaultMessage='Web Development'/></p>
                    
                    
                    <h3><FormattedMessage id="JS" defaultMessage='JavScript for Beginners'/></h3>
                   
                  
                <div className="I">
                    <div className="img"  style={{content:`url(${Next})`}} ></div> 
                    </div>
                    </div>
                    
                    
                
                
                
                
                    <div className="Web  web2">
                        <p><FormattedMessage id="WEB" defaultMessage='Web Development'/></p>
                        <h3> <FormattedMessage id="Angular" defaultMessage= 'Angular - The Complete Guide'/></h3>
                        <div className="I">
                        <div className="img" style={{content:`url(${Next})`}} > </div> 
                        </div>
                    </div>
                    
                
              
              
                <div className="Web web3">
                    <p><FormattedMessage id="WWEB" defaultMessage='Web Development'/></p>
                    <h3><FormattedMessage id="HTML" defaultMessage='Real-World Websides with HTML and CSS'/></h3>
                    <div className="I">
                    <div className="img" style={{content:`url(${Next})`}} ></div> 
                    </div>
             </div>

           

           </div>

            
                            
                  
                  
                
     

       
       
     

            


</div>
    

)
}

export default Course