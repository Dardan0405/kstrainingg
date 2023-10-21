import React from "react";
import { FormattedMessage } from "react-intl";
import './styles/Reading.scss'


const Readin1 = ()=>{
    return(
        <div className="Video-Container">
        <div className="Title-Text-Container">
            <h1><FormattedMessage id="Reading1" defaultMessage="Design Thinking Process"/></h1>

        </div>
        <div className="Reading-Text-ContainerPart">
            <p><FormattedMessage id="Deign1" defaultMessage="Design thinking originally came about as a way of teaching engineers how to approach problems creatively, like designers do.&nbsp;  One of the first people to write about design thinking was John E. Arnold,&nbsp;professor of mechanical engineering at Stanford University.&nbsp; 
            In 1959, he wrote “Creative Engineering,” the text that in ablished the four areas of design thinking.&nbsp; From there,&nbsp; design thinking began to evolve as a “way of thinking” in the fields of science and design engineering—as can be seen in Herbert &nbsp; A. Simon
            book “The Sciences of the Artificial” and in Robert McKim’s “Experiences in Visual Thinking”.&nbsp; With the rise of human-centered design in the 80s and the formation of design consultancy IDEO in the 90s, &nbsp;  design thinking became increasingly popular. &nbsp;
            By the start of the 21st century, &nbsp; design thinking was making its way into the world of business. &nbsp; In 2005 &nbsp; Stanford University’s d.school began teaching design thinking as an approach to technical and social innovation. &nbsp;
            Indeed, many of the methods and techniques used in design thinking have been borrowed from the designer’s toolkit. &nbsp; Design thinking is both an ideology and a process that seeks to solve complex problems in a user-centric way. It focuses on achieving practical results and solutions that are: &nbsp;
            Technically feasible: &nbsp; They can be developed into functional products or processes;&nbsp; Economically viable: &nbsp;The business can afford to implement them; &nbsp;
            Desirable for the user:&nbsp; They meet a real human need.&nbsp; The ideology behind design thinking states that,&nbsp; in order to come up with innovative solutions, &nbsp; one must adopt a designer’s mindset and approach the problem from the user’s perspective. &nbsp;
            At the same time, &nbsp;  design thinking is all about getting hands-on;&nbsp;  the aim is to turn your ideas into tangible,&nbsp; testable products or processes as quickly as possible.&nbsp;"/></p>
        </div>
        </div>
        
    )
}
export default Readin1