import React from 'react';
import Search from './header/search.js';
import Menu from './header/menu.js';
import axios from 'axios';
const URL = process.env.REACT_APP_SERVER_URL;

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
					businesscategoryList: response.data.data
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