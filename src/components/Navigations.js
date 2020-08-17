import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import GoogleFontLoader from 'react-google-font-loader';
import { Link } from 'react-scroll';

import './navigation.css'

const Example = (props) => {
	const [ isOpen, setIsOpen ] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
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

			<div style={styles.navbar}>
				<Row style={{ paddingTop: 13, paddingBottom: 13 }} >
					<Col xs="8">
						<Navbar light expand="md">
							<NavbarBrand style={styles.logo} href="/">
								ALINE SANO
							</NavbarBrand>
						</Navbar>
					</Col>
					<Col>
						<Navbar light expand="md">
							<NavbarToggler style={{ backgroundColor: 'white' }} onClick={toggle} />
							<Collapse isOpen={isOpen} navbar>
								<Nav className="mr-auto" navbar>
									<NavItem>
										<NavLink className="top" style={styles.navtabs} href="#">
											Home
										</NavLink>
									</NavItem>
				
									<NavItem>
										<NavLink className="top" style={styles.navtabs} href="#">
											Bio
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className="top" style={styles.navtabs} href="#">
											Contact
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className="top" style={styles.navtabs} href="#">
											Subscribe
										</NavLink>
									</NavItem>
								</Nav>
							</Collapse>
						</Navbar>
					</Col>
				</Row>
			</div>
		</div>
	);
};

const styles = {
	navbar: {
		backgroundColor: 'black'
	},
	navtabs: {
		color: 'white',
		fontFamily: 'Roboto Mono, monospaced',
		fontSize: 16
	},
	logo: {
		color: 'white',
		fontFamily: 'Roboto Mono, monospaced',
		fontWeight: 'bold'
	}
};

export default Example;
