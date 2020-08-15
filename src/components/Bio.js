import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Bio.css';

const Bio = () => {
	const slideImages = [
		'https://pbs.twimg.com/profile_images/1249775650438873091/fi7Yk90O_400x400.jpg',
		'https://imvahonshya.co.rw/wp-content/uploads/2019/09/IMG-20180731-WA0020-1.jpg'
	];

	return (
		<div>
			<div className="head">
				<h1 className="textHead" style={{ color: 'white' }}>
					ABOUT ALINE SANO
				</h1>
				<p id="text1" style={{ color: 'white' }}>
					Aline saano has always been musically gifted. Since they were young, they have loved the limelight
					and were always singing, performing and playing a variety of instruments. However, it wasn’t until
					after undergoing some major upheavals in their life that they became a professional Musician.
				</p>
				<p id="text2" style={{ color: 'white' }}>
					Throughout the course of their musical career, they have had the support of dedicated fans from all
					walks of life as they perform and record studio albums. Feel free to reach out to learn about how to
					collaborate.
				</p>
			</div>
			<Slide>
				<div className="each-slide">
					<div style={{ backgroundImage: `url(${slideImages[0]})` }}>
						<span>Slide 1</span>
					</div>
				</div>
				<div className="each-slide">
					<div style={{ backgroundImage: `url(${slideImages[1]})` }}>
						<span>Slide 2</span>
					</div>
				</div>
			</Slide>
		</div>
	);
};

export default Bio;
