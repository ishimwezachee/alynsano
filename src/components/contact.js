import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './contact.css';

const Contact = ({id}) => {
	useEffect(() => {
		Aos.init({ duration: 2000 })
	  }, [])
	return (
		<div className="mainContainer" id={id}>
			<div className="contactRight" data-aos="fade-right">
				<h1 id="contact">CONTACT</h1>
				<p id="street">500 Terry Francois Street San Francisco,CA9988</p>
				<p id="emailText">Alinesano@gmail.com</p>
				<p id="numberText">+25078064447</p>
			</div>
			<div className="contactLeft" data-aos="fade-left">
				<form action="">
					<input type="text" className="inputOne" name="Name" placeholder="Name" />
					<br />
					<input type="text" name="address" placeholder="Address" className="inputTwo" />
					<br />
					<input type="text" name="email" placeholder="Email" className="input3" />
					<input type="text" name="phone" placeholder="Phone" className="input4" />
					<br />
					<input type="text" name="subject" placeholder="Subject" className="input5" />
					<br />
					<textarea type="text" name="message" placeholder="Type your message here..." id="areaInput" />
					<input type="submit" className="button" />
				</form>
			</div>
		</div>
	);
};

export default Contact;
