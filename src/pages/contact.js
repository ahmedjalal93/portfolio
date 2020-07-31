import React from "react";
import Container from "../compouneds/container";
import Figure from "../compouneds/figure";


function Contact() {
  return (
      <Container>
        <h3>Contact Ahmed Jalal</h3>
        <h4>Email: <a href="mailto:ahhmedd16@hotmail.com">ahhmedd16@hotmail.com</a></h4>
        <h4>Phone #: +1-801-462-4015</h4>
        <hr/>
        <form className="form" action="mailto:ahhmedd16@hotmail.com" method="post" enctype="text/plain">
            <div className="form-group">
                <label for="name">Name:</label>
                <input className="input" type="text" name="name"/>
            </div>
            <div className="form-group">
                <label for="mail">E-Mail:</label>
                <input className="input" type="text" name="mail"/>
            </div>
            <div className="form-group">
                <label for="message">Message:</label>
                <textarea className="input" name="message" rows="5"></textarea><br/>
            </div>
            <input className="buttons large" type="submit" value="Send"/>
            <input className="buttons large" type="reset" value="Reset"/>
        </form>
      </Container>
    );
}


export default Contact;
