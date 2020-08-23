import React,{Fragment} from 'react';

// import Navigation from './components/Navigations';
import Home from '../src/components/Home';
import Bio from '../src/components/Bio';
import Contact from '../src/components/contact';
import Subscribe from './components/subscribe';
import NavBar from './components/nav/navbar';

function App() {
	return (
		<Fragment>
			{/* <Navigation /> */}
			<NavBar/>
			<Home id="section1" />
			<Bio id="section2"/>
			<Contact id="section3"/>
			<Subscribe  id="section4"/>
		</Fragment>
	);
}

export default App;
