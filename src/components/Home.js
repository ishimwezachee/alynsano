import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
const Home = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<div className="backround">
			<div className="image"  data-aos="fade-right">
				<img src="https://www.ktpress.rw/wp-content/uploads/2020/03/Alyn-Sano.jpg" />
			</div>
			<div className="imageText" data-aos="fade-left">
				<h1 className="headName">ALINE</h1>
				<h1 className="headName">SANO</h1>
				<p id="music">A Talented Musician</p>
			</div>
		</div>
	);
};

export default Home;
