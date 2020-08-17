import React,{Fragment} from 'react';

import Navigation from './components/Navigations';
import Home from '../src/components/Home';
import Bio from '../src/components/Bio';
import Contact from '../src/components/contact';
import Subscribe from './components/subscribe';

function App() {
	return (
		<Fragment>
			<Navigation />
			<Home id="section1" />
			<Bio id="section2"/>
			<Contact id="section3"/>
			<Subscribe  id="section4"/>
		</Fragment>
	);
}

export default App;
