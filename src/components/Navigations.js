import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import GoogleFontLoader from 'react-google-font-loader';
import { Link } from 'react-scroll';

import './navigation.css';

const Example = ({ id }) => {
	const [ isOpen, setIsOpen ] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className="navPositioning">
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

			<div style={styles.navbar} id={id}>
				<Row style={{ paddingTop: 13, paddingBottom: 13 }}>
					<Col xs="8">
						<Navbar light expand="md">
							<NavbarBrand style={styles.logo} href="/">
								ALYN SANO
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
											<Link
												activeClass="active"
												to="section1"
												spy={true}
												smooth={true}
												offset={0}
												duration={500}
											>
												Home
											</Link>
										</NavLink>
									</NavItem>

									<NavItem>
										<NavLink className="top" style={styles.navtabs} href="#">
											<Link
												activeClass="active"
												to="section2"
												spy={true}
												smooth={true}
												offset={0}
												duration={500}
											>
												Bio
											</Link>
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className="top" style={styles.navtabs} href="#">
											<Link
												activeClass="active"
												to="section3"
												spy={true}
												smooth={true}
												offset={0}
												duration={500}
											>
												Contact
											</Link>
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className="top" style={styles.navtabs} href="#">
											<Link
												activeClass="active"
												to="section4"
												spy={true}
												smooth={true}
												offset={0}
												duration={500}
											>
												Subscribe
											</Link>
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
		backgroundColor: 'black',
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
