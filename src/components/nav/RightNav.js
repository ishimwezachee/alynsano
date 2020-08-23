import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import GoogleFontLoader from 'react-google-font-loader';

const Ul = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: row nowrap;

	li {
		padding: 18px 10px;
		color: #fff;
		font-size: 16px;
		cursor: pointer;
	}

	li:active{
		color:#d9801a;
	}

	a{
		text-decoration:none;
		color:#fff;
	}

	@media (max-width: 786px) {
		flex-flow: column nowrap;
		background-color: #0d2538;
		position: fixed;
		transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
		top: 0;
		right: 0;
		height: 100vh;
		width: 300px;
		padding-top: 3.5rem;
		transition: transform 0.3s ease-in-out;

		li {
			color: #fff;
		}
	}
`;

const RightNav = ({ open }) => {
	return (
		<Ul open={open}>
			<GoogleFontLoader
				fonts={[
					{
						font: 'Roboto',
						weights: [ 400, '400i' ]
					},
					{
						font: 'Roboto Mono',
						weights: [ 400, 700 ]
					}
				]}
				subsets={[ 'cyrillic-ext', 'greek' ]}
			/>
			<li style={{ fontFamily: 'Roboto Mono, monospaced' }}>
				<Link activeClass="active" to="section1" spy={true} smooth={true} offset={0} duration={500}>
					Home
				</Link>
			</li>
			<li style={{ fontFamily: 'Roboto Mono, monospaced' }}>
				<Link activeClass="active" to="section2" spy={true} smooth={true} offset={0} duration={500}>
					Bio
				</Link>
			</li>
			<li style={{ fontFamily: 'Roboto Mono, monospaced' }}>
				<Link activeClass="active" to="section3" spy={true} smooth={true} offset={0} duration={500}>
					Contact
				</Link>
			</li>
			<li style={{ fontFamily: 'Roboto Mono, monospaced' }}>
				<Link activeClass="active" to="section4" spy={true} smooth={true} offset={0} duration={500}>
					Subscribe
				</Link>
			</li>
		</Ul>
	);
};

export default RightNav;
