import React from 'react';
import Header from './include/header.js';
import Footer from './include/footer.js';
import Orderdetailpage from './orderdetail/orderdetailpage.js';

class Orderdetail extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Orderdetailpage />
				<Footer />
			</div>

		);
	}
}
export default Orderdetail;
