import React from 'react';
import ReactDOM from 'react-dom';
import Search from './header/search.js';
import Menu from './header/menu.js';
import axios from 'axios';
const URL = process.env.REACT_APP_LOCAL;

class Header extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			businesscategoryList: []
		}
	}
	componentDidMount() {
		axios.post(URL + '/api/user/fetchBusinesscategory').then((response) => {
			if (response) {
				this.setState({
					businesscategoryList: response.data.data,
					// businessCatData : response.data.business
				})
			}
		})

	}
	render() {
		return (
			<div>
				<Search businesscategoryList={this.state.businesscategoryList}/>
				<Menu businesscategoryList={this.state.businesscategoryList}/>
			</div>
		)

	}
}

export default Header;