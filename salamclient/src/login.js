import React from 'react';
import ReactDOM from 'react-dom';
import Header from './include/header.js';
import Footer from './include/footer.js';
import Loginpage from './login/loginpage.js';

class Login extends React.Component
          {
	        render()
	              {
		             return(
		             	  <div>
		                    <Header/>
		                    <Loginpage/>
		                    <Footer/>
		                  </div>

			);
	}
}
export default Login;
