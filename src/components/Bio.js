import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Bio.css';

const Bio = ({id}) => {
	const slideImages = [
		'https://inyarwanda.com/app/webroot/img/202005/images/san-2315171588930919.jpg',
		'https://imvahonshya.co.rw/wp-content/uploads/2019/09/IMG-20180731-WA0020-1.jpg',
		'https://prd-rwanda-ge.s3.amazonaws.com/images/IMG-ARTICLE-ALINE_SANO-002.width-480.format-jpeg.jpg'
	];
	

	return (
		<div id={id}>
			<div className="head" >
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
					<div style={{ backgroundImage: `url(${slideImages[0]})` }} />
				</div>
				<div className="each-slide">
					<div style={{ backgroundImage: `url(${slideImages[1]})` }} />
				</div>
				<div className="each-slide">
					<div style={{ backgroundImage: `url(${slideImages[2]})` }} />
				</div>
			</Slide>
		</div>
	);
};

export default Bio;
