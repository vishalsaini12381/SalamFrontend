import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './include/header.js';
import Slider from './home/slider.js';
import Categories from './home/categories.js';
import Favseller from './home/favseller.js';
import Footer from './include/footer.js';
const URL = process.env.REACT_APP_LOCAL;

class Home extends React.Component {

	

	render() {
		return (
			<div>
				<Header />
				<Slider />
				<Categories />
				<Favseller />
				<Footer />
			</div>

		);
	}
}
export default Home;
