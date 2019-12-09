import React from 'react';
import ReactDOM from 'react-dom';
import './header.css';
import axios from 'axios';
import swal from 'sweetalert';
const URL = process.env.REACT_APP_LOCAL;

class Header extends React.Component{

	logout(event){
		event.preventDefault();
		axios.get(URL+'/api/admin/adminLogout').then((response)=>{
			console.log('response',response);
			localStorage.clear();
			if(response.data.status){
				swal("Success",
				`${response.data.message}`)
				.then((d)=>{
					if(d) return window.location = "/"
				})
			}
		});
	}

	render(){
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
										<span className="avatar avatar-md brround"></span>
									</a>
									<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
										<div className="text-center">
											<a href="#" className="dropdown-item text-center font-weight-sembold user">Audu Maikori</a>
											<span className="text-center user-semi-title text-dark">Admin</span>
											<div className="dropdown-divider"></div>
										</div>
										<a className="dropdown-item" href="/dashboard">
											<i className="dropdown-icon mdi mdi-home"></i> Dashboard
										</a>
										<div className="dropdown-divider"></div>
										<a className="dropdown-item" href="#" onClick = {this.logout.bind(this)}>
											<i className="dropdown-icon mdi  mdi-logout-variant"></i> Sign out
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
									<span> User Management</span>
								</a>
								<div className="sub-item">
									<ul>
										<li>
											<a href="/userlist"> User List </a>
										</li>
									</ul>
								</div>
							</li>
							<li className="nav-item with-sub">
								<a className="nav-link" href="#">
									<span> Vendor Management</span>
								</a>
								<div className="sub-item">
									<ul>
										<li>
											<a href="/vendorlist">Vendor List </a>
										</li>
										<li>
											{/* <a href="/addnewvendor">Add New Vendor </a> */}
										</li>
									</ul>
								</div>
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
										{/* <li>
											<a href="/Addnewproduct">Add New Product</a>
										</li> */}
									</ul>
								</div>
							</li>
							<li className="nav-item with-sub">
								<a className="nav-link" href="#">
									<span> Admin setting</span>
								</a>
								<div className="sub-item">
									<ul>
										<li>
											<a href="/businesscategory">Create Business Category</a>
										</li>
										<li>
											<a href="/category">Create Category</a>
										</li>
										<li>
											<a href="/subcategory">Create Sub Category</a>
										</li>
										<li>
											<a href="/createBrand">Add Brands</a>
										</li>
										<li>
											<a href="/CreateSpecificationpage">Specification</a>
										</li>
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

export default Header;