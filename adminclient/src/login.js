import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import validator from 'validator';
import axios from 'axios';
import swal from 'sweetalert';
import './login.css';
import AuthService from './Authentication/AuthService';
const URL = process.env.REACT_APP_LOCAL;

class Login extends Component{

	constructor(props){
		super(props);
		this.state = {
			email :  {value :'', isValidate:true, message:''},
			password : {value: '', isValidate: true, message: ''}
		}
		this.Auth = new AuthService();
		this.handleChange = this.handleChange.bind(this);
		this.submit = this.submit.bind(this);
	}

	async componentWillMount(){
		var a = await this.Auth.loggedIn()
		 console.log('MMMMMMMMMMMMMMMMm',this.Auth.loggedIn())
		 if(a === true){
			 this.props.history.replace('/Dashboard')
		 }
	 }

	handleChange(event){
		const {name,value} = event.target;
		let state = this.state;
		state[name].message = '';
		state[name].value = value;
		this.setState(state);
	}

	validate(){
		let state = this.state;
		if(validator.isEmpty(state.email.value)){
			state.email.isValidate = false;
			state.email.message = 'Email Can Not Be Blank';
			this.setState(state);
			return false;
		}
		if(validator.isEmpty(state.password.value)){
			state.password.isValidate = false;
			state.password.message = 'Password Can Not Be Blank';
			this.setState(state);
			return false;
		}
		return true;
	}

	submit(event){
		event.preventDefault();
		let isValid = this.validate();
		if(isValid){
			let obj = {};
			obj.email = this.state['email'].value;
			obj.password = this.state['password'].value;
			console.log('RRRRRRRRRRRR',obj);
			axios.post(URL+'/api/admin/adminLogin',obj).then((response)=>{
				console.log('5555555555555',response);
				if(response.data.status === true){
					if(typeof (Storage) !== "undefined") {
						localStorage.setItem("jwtToken", response.data.token);
						// localStorage.setItem("type",response.data.accountType);
					}
					swal("Successful",
					`${response.data.message}`,
					"success",
					).then((d)=>{
						if(d){
							return this.props.history.replace('/Dashboard');							
						}
					})
				}else{
					swal("Error",
					`${response.data.message}`,
					"error",
					).then((d)=>{
						if(d){
							return this.props.history.replace('/');
						}
					})
				}
			})
		}
	}

	  render(){
		  const state = this.state;
	    return(
		<div className="page loginpage">
			<div className="page-single">
				<div className="container">
					<div className="row">
						<div className="col col-login mx-auto">
							<div className="text-center mb-6">
								<a href="#"><img src="./images/logo/logo.png" className="header-brand-img" alt="Salam Trades Logo"/></a>
							</div>
							<form className="card" onSubmit = {this.submit}>
								<div className="card-body p-6">
									<div className="card-title text-center">Admin Login</div>
									<div className="form-group">
										<label className="form-label">Email address</label>
										<input type="email" className="form-control" id="exampleInputEmail1" name = "email" value = {state.email.value} onChange = {this.handleChange}  placeholder="Enter email"/>
										<div style = {{fontSize: 13, color: 'red'}}>
											{state.email.message}
										</div>
									</div>
									<div className="form-group signuptext">
										<label className="form-label">Password
										</label>
										<input type="password" className="form-control" id="exampleInputPassword1" name = "password" value = {state.password.value} onChange = {this.handleChange} placeholder="Password"/>
										<div style = {{fontSize: 13, color: 'red'}}>
											{state.password.message}
										</div>
									</div>
									<div className="form-footer">
										<button type="submit" className="btn btn-primary btn-block loginbutton">Sign in</button>
									</div>
									
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>



			);
	}
}
export default Login;
