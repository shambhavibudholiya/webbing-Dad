import React from 'react';
import './Contact.css';

const Contact = () =>{
    return(    
      <div className="body">
        <h3>Contact Form</h3>
      <div className="container1">
        <form>
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />
      
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
      
          <label for="number">Contact Number </label>
          <input type="text" id="num" name="number" placeholder="Your Contact Number" />

          <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

      
          <input type="submit" value="Submit" />
        </form>
      </div>
      </div>
    );
} 
export default Contact;