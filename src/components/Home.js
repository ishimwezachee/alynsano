import React,{useEffect} from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
const Home = ({id}) => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<div className="backround" id={id}>
			<div className="image"  data-aos="fade-right">
				<img src="https://www.ktpress.rw/wp-content/uploads/2020/03/Alyn-Sano.jpg" alt="sano"/>
			</div>
			<div id="iconYoutbe">
							<SocialMediaIconsReact icon="youtube-play" iconColor="#fff" url="https://www.youtube.com/channel/UCXLjm0fpBTA71gjdUU6D3jw" iconSize={10} backgroundColor="#000" />
						</div>
			<div className="imageText" data-aos="fade-left">
				<h1 className="headName">ALYN</h1>
				<h1 className="headName">SANO</h1>
				<p id="music">A Talented Musician</p>
			</div>
		</div>
	);
};

export default Home;
