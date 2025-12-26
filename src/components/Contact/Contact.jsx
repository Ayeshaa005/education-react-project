

import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import  location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';
const Contact = () => {


const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "39921034-628a-4133-9d2a-fec7857db84c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  


  return (
    <div className='contact'>

        <div className='contact-col'>
        <h3>Send us a message <img src={msg_icon} alt=""/></h3>
        <p>Feel free to reach out through contact form or find our contact information below.Your feedback,questions aad suggestions
            are important to us as we strive to provide exceptional service to our university community.
        </p>
        

        <ul>
            <li><img src={mail_icon} alt="image of mail icon"/>Contact@GreatStack.dev</li>
            <li><img src={phone_icon} alt="image of phone icon"/>+1 123 456 789</li>
            <li><img src={location_icon} alt="image of location icon"/>77 Muschittye Ave,Cambrdge <br/>MA 01234,United States</li>
        </ul>



        </div>


        <div className='contact-col'>

<form onSubmit={onSubmit}>
    <label>Your Name</label>
    <input type="text" name="name" placeholder='Enter Your Name' required></input>

    <label>Phone Number</label>
    <input type="tel" name="phone" placeholder='Enter Your Mobile Number' required></input>


    <label>Write Your messages here</label>
    <textarea name="message"  rows="6" placeholder='Enter Your Message' required></textarea>

     <button type="submit" className='btn dark-btn'>Submit now<img src={white_arrow} alt="image of white arrow"/></button>



</form>

<span>{result}</span>

        </div>


      
    </div>
  )
}

export default Contact
