import React from 'react';
import ReactDOM from 'react-dom';
import Header from './include/header.js';
import Footer from './include/footer.js';
import Listpage from './productlist/listpage.js';
import { ToastContainer } from 'react-toastify';

class Productlist extends React.Component {
	render() {
		return (
			<div>
				<ToastContainer/>
				<Header />
				<Listpage />
				<Footer />
			</div>

		);
	}
}
export default Productlist;
