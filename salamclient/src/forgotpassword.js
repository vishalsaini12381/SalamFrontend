import React from 'react';
import ReactDOM from 'react-dom';
import Header from './include/header.js';
import Footer from './include/footer.js';
import Forgotpasswordpage from './forgotpassword/forgotpasswordpage.js';

class Forgotpassword extends React.Component
          {
	        render()
	              {
		             return(
		             	  <div>
		                    <Header/>
		                    <Forgotpasswordpage/>
		                    <Footer/>
		                  </div>

			);
	}
}
export default Forgotpassword;
