import React from 'react';
import Header from './include/header.js';
import Footer from './include/footer.js';
import Listpage from './productlist/listpage.js';

class Productlist extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Listpage />
				<Footer />
			</div>

		);
	}
}
export default Productlist;
