import React from 'react';
import Header from './include/header.js';
import Footer from './include/footer.js';
import Loginpage from './login/loginpage.js';
import { ToastContainer } from 'react-toastify';

class Login extends React.Component {
	render() {
		return (
			<div>
				<ToastContainer />
				<Header />
				<Loginpage />
				<Footer />
			</div>
		);
	}
}
export default Login;
