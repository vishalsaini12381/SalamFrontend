import React from 'react';
import ReactDOM from 'react-dom';
import Header from './include/header.js';
import Footer from './include/footer.js';
import Profilepage from './myprofile/profilepage.js';

class Myprofile extends React.Component
          {
	        render()
	              {
		             return(
		             	  <div>
		                    <Header/>
		                    <Profilepage/>
		                    <Footer/>
		                  </div>

			);
	}
}
export default Myprofile;
