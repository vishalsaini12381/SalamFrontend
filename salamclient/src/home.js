import React from 'react';
import Header from './include/header.js';
import Categories from './home/categories.js';
import Favseller from './home/favseller.js';
import Footer from './include/footer.js';

class Home extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Categories />
				<Favseller />
				<Footer />
			</div>

		);
	}
}
export default Home;
