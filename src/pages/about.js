import React from "react";
import Container from "../compouneds/container";


function About() {
  return (
      <Container>
          <div>
        <h1 align="center">ABOUT ME</h1>
        <img  src={`${process.env.PUBLIC_URL}/img/profile.png`} width="250" alt="profile"/>
        <marquee align="center" behavior="scroll" direction="up" scrollamount="1" className="marquee">
            Hello everyone! This is Ahmed Jalal from Iraq. <br/>
            This is my offical wepage.<br/>
            I'm inspired by the technology world.<br/>
            I spend time learning about computers.<br/>
            I like to invent things and work on difficult tasks.<br/>
            I've been a friend of computers since I was a kid.<br/>
            I built my first webpage when I was 14 and built a search engine when I was 16.<br/>
            I never finish my projects :(<br/>
                Away from computers I like swimming and traveling. <br/>
            I also like coffee shops and I talk to much, but good talk.<br/>
            I like funny people and I hate serious never-simily people.<br/>
            I pay attention to facial expressions and I can determine what kind of a person you are from that.
        </marquee>
      </div>  
      </Container>
    );
}


export default About;
