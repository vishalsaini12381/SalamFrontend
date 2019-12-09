import React from 'react';
import ReactDOM from 'react-dom';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import swal from 'sweetalert';
import './header.css';
const URL = process.env.REACT_APP_LOCAL;
class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			status : [],
			adminStatus : 'Verify'
		}
	}

	logout(event){
		event.preventDefault();
		axios.get(URL+'/api/vendor/logOut').then((response)=>{
			localStorage.clear();
			if(response.data.status){
				swal("Successful",
				`${response.data.message}`,
				).then((d)=>{
					if(d) return this.props.history.replace("/");
				})
			}


		});
	}

	handleClick(){
		let obj = {};
		obj.userId = this.props.userId;
		obj.adminStatus = this.state.adminStatus
		console.log('llllllllllllllllllllllll',obj);
		axios.post(URL+'/api/vendor/userStatus',obj).then((response)=>{
			console.log('response',response);
			if(response.data.status == "Verify"){
				window.location.href = '/Addnewproduct';
			}else{
				alert(response.data.message)
				// window.location = '/Dashboard'
			}
		})
	}

	render(){
		console.log('????????????????',this.state.status);	
		// var a = 
		return(
		<div className="header-salam" >
				<div className="header py-1">
					<div className="container">
						<div className="d-flex">
							<a className="header-brand" href="#">
								<img src="./images/logo/logo.png" className="header-brand-img" alt="FundMaster logo"/>
							</a>
							<div className="d-flex order-lg-2 ml-auto">
								<div className="dropdown mt-1">
									<a href="#" className="nav-link pr-0 leading-none" data-toggle="dropdown">
										<span className="userimage"> <img src ={this.props.image === null ? "images/defaultImg.png" : this.props.image}/> </span>
									</a>
									<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
										<div className="text-center">
											<a href="#" className="dropdown-item text-center font-weight-sembold user">{this.props.name}</a>
											<span className="text-center user-semi-title text-dark">{this.props.type}</span>
											<div className="dropdown-divider"></div>
										</div>
										<Link className="dropdown-item" to="/dashboard">
											<i className="dropdown-icon mdi mdi-home"></i> Dashboard
										</Link>
										<Link className="dropdown-item" to="/profile">
											<i className="dropdown-icon mdi mdi-account-outline"></i> Profile
										</Link>
										<div className="dropdown-divider"></div>
										<a className="dropdown-item" href="#" onClick= {this.logout.bind(this)}>
											<i className="dropdown-icon mdi  mdi-logout-variant" ></i> Sign out
										</a>
									</div>
								</div>
							</div>
							<a href="#" className="header-toggler d-lg-none ml-3 ml-lg-0" data-toggle="collapse" data-target="#headerMenuCollapse">
							<span className="header-toggler-icon"></span>
							</a>
						</div>
					</div>
				</div>
			<div className="admin-navbar">
					<div className="container">
						<ul className="nav">
							<li className="nav-item with-sub">
								<a className="nav-link active" href="/dashboard">
									<span> Dashboard</span>
								</a>
							</li>
							<li className="nav-item with-sub">
								<a className="nav-link" href="#">
									<span> Order Management</span>
								</a>
								<div className="sub-item">
									<ul>
										<li>
											<a href="/Orderlist">Order List </a>
										</li>
									</ul>
								</div>
							</li>
							<li className="nav-item with-sub">
								<a className="nav-link" href="#">
									<span> Product Management</span>
								</a>
								<div className="sub-item">
									<ul>
										<li>
											<a href="/Productlist">Product List</a>
										</li>
										<li> 
										<a onClick = {this.handleClick.bind(this)}>  Add New Product </a> 
										</li>
										{/* {
											this.state.status === "Verify" ?
											<a onClick = {this.handleClick.bind(this)} href="/Addnewproduct">Add New Product</a> 
											: 
											<a onClick = {this.handleClick.bind(this)} href="#">Add New Product</a>
										} */}
											{/* <a onClick = {this.handleClick.bind(this)} href="/Addnewproduct">Add New Product</a>  */}
									</ul>
								</div>
							</li>
						</ul>
					</div>
				</div>
		</div>
			)
	}
}

function mapStateToProps(state){
	console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>',state);
	return{
	authenticateState : state.inititateState.authenticateState,
	userId : state.inititateState.userId,
	name: state.inititateState.name,
	type: state.inititateState.type,
	image: state.inititateState.image,
	}
}

export default withRouter(connect(mapStateToProps)(Header));