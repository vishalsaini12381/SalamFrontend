import React from 'react';
import ReactDOM from 'react-dom';
import Header from './include/header.js';
import Footer from './include/footer.js';
import Orderpage from './myorder/orderpage.js';

class Myorders extends React.Component
          {
	        render()
	              {
		             return(
		             	  <div>
		                    <Header/>
		                    <Orderpage/>
		                    <Footer/>
		                  </div>

			);
	}
}
export default Myorders;
