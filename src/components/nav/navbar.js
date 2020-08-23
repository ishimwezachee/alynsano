import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
	width: 100%;
	height: 90px;
	border-bottom: 2px solid #f1f1f1;
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	background-color: #000;
	position:fixed;
	z-index:200;
	.logo {
		padding: 15px 0;
		color: #fff;
		font-weight: bold;
		font-size:25px;
	}
`;

const Navbar = () => {
	return (
		<Nav>
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
			<div className="logo" style={{ fontFamily: 'Roboto Mono, monospaced' }}>
				ALYN SANO
			</div>
			<Burger />
		</Nav>
	);
};

export default Navbar;
