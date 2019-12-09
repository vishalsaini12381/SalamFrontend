import React from 'react';
import ReactDOM from 'react-dom';
import Header from './include/header.js';
import Footer from './include/footer.js';
import Cartpage from './shoppingcart/cartpage.js';

class Shoppingcart extends React.Component
          {
	        render()
	              {
		             return(
		             	  <div>
		                    <Header/>
		                    <Cartpage/>
		                    <Footer/>
		                  </div>

			);
	}
}
export default Shoppingcart;
