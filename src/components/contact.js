import React from 'react';
import "./contact.css"

const Contact = ()=>{
    return (
        <div className="mainContainer">
           <div className="contactRight">
               <h1 id="contact">CONTACT</h1>
               <p id="street">500 Terry Francois Street San Francisco,CA9988</p>
               <p id="emailText">Alinesano@gmail.com</p>
               <p id="numberText">+25078064447</p>
           </div>
           <div className="contactLeft">
               <form action="">
              <input type="text" name="Name" placeholder="Name" className="input1"/>
              <br/>
              <input type="text" name="address" placeholder="Address" className="input2"/>
              <br/>
              <input type="text" name="email" placeholder="Email"  className="input3"/>
              <input type="text" name="phone" placeholder="Phone"  className="input4"/>
              <br/>
              <input type="text" name="subject" placeholder="Subject"  className="input5"/>
              <br/>
              <textarea type="text" name="message" placeholder="Type your message here..." id="areaInput"/>
              <input type="submit" className="button"/>
               </form>
           </div>
        </div>
    )
}


export default Contact;