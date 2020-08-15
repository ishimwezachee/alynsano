import React from 'react';
import { Slide } from 'react-slideshow-image';
import './test.css'

const slideImages = [ 
  'https://pbs.twimg.com/profile_images/1249775650438873091/fi7Yk90O_400x400.jpg',
   'https://imvahonshya.co.rw/wp-content/uploads/2019/09/IMG-20180731-WA0020-1.jpg' ];

const Slideshow = () => {
	return (
		<div>
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

export default Slideshow;
