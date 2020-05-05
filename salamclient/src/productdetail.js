import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './include/header.js';
import Footer from './include/footer.js';
import Detail from './productdetail/detail.js';
import Similarproduct from './productdetail/similarproduct.js';
import { fetchProductDetailAction } from './action/product.action'
const URL = process.env.REACT_APP_SERVER_URL;

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
		const data = {
			productId: foo,
			userId: this.props.userId
		}
		this.props.fetchProductDetailAction(data);
	}


	render() {
		return (
			<div>
				<Header />
				<Detail/>
				<Similarproduct />
				<Footer />
			</div>

		);
	}
}

function mapStateToProps(state) {
	return {
		authenticateState: state.inititateState.authenticateState,
		email: state.inititateState.email,
		userId: state.inititateState.userId
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchProductDetailAction
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Productdetail));

