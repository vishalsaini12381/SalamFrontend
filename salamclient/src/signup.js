import React from 'react';
import ReactDOM from 'react-dom';
import Header from './include/header.js';
import Footer from './include/footer.js';
import Signuppage from './signup/signuppage.js';

class Signup extends React.Component
          {
	        render()
	              {
		             return(
		             	  <div>
		                    <Header/>
		                    <Signuppage/>
		                    <Footer/>
		                  </div>

			);
	}
}
export default Signup;
