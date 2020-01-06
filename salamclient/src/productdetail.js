import React from 'react';
import ReactDOM from 'react-dom';
import Header from './include/header.js';
import Footer from './include/footer.js';
import Detail from './productdetail/detail.js';
import Similarproduct from './productdetail/similarproduct.js';
import Customerreview from './productdetail/customerreview.js';
import axios from "axios";
const URL = process.env.REACT_APP_LOCAL;
class Productdetail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			productData: {}
		}
	}
	componentWillMount() {
		this.fetchProductDetail();
	}

	fetchProductDetail() {

		let search = window.location.search;
		let params = new URLSearchParams(search);
		let foo = params.get('product');
		this.setState({
			productId: foo,
		})

		axios.post(URL + '/api/user/productDetail', {
			productId: foo,
		}).then((response) => {
			if (response.data.productData) {
				this.setState({
					subcategory: response.data.productData['product']['subCategoryId'].subcategory,
					productData: response.data.productData,
					similarProduct: response.data.similarProduct
				})
			}
		})
	}


	render() {
		return (
			<div>
				<Header />
				{Object.keys(this.state.productData).length > 0 ? <Detail productData={this.state.productData} subcategory={this.state.subcategory} /> : null}
				{Object.keys(this.state.productData).length > 0 ? <Similarproduct similarProduct={this.state.similarProduct} /> : null}
				{/* {Object.keys(this.state.productData).length > 0 ? <Customerreview /> : null} */}
				<Footer />
			</div>

		);
	}
}
export default Productdetail;
