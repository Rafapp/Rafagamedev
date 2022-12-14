import React from "react";
import { Image } from "react-bootstrap";
import RafaPicture from "../Img/RafaPicture.jpg"
function About(){
    return(
        <div  bg='dark' style={{display:"flex" ,position:"relative", paddingTop:"60%", background:"linear-gradient(to bottom, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 13%, 1) 100%)"}}>
            <h1 id="about" style={{position:"absolute", textAlign:"center", top:"15%", left:"25%", transform: "translate(-50%, -50%)", background:"linear-gradient(to right, #FF5F6D 0%, #FFC371 100%)",WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",fontSize:"7vw", whiteSpace:"nowrap", clipPath:"inset(1px)"}}>About me</h1>
            <p style={{position:"absolute", textAlign:"left", top:"60%", left:"30%", right:"25%", transform: "translate(-50%, -50%)", color:"white", fontSize:"2vw"}}>
            Since I was a kid, I fell in love with computers, technology, and games. <br></br><br></br> There's nothing that brings me more joy than making games and software that brighten other people's days!<br></br><br></br> With all this passion, I'm eager to get my foot on the door as a Game Developer or Software Engineer by bringing my experience and ideas to the table while growing as a person.
            </p>
            <Image src={RafaPicture} style={{position:"absolute", top:"25%", left:"55%", width:"40vw"}}></Image>
        </div>
    );
}
export default About;