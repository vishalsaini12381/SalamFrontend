import React from 'react';
import ReactDOM from 'react-dom';
import Header from './include/header.js';
import Footer from './include/footer.js';
import Deliverypage from './deliveryaddress/deliverypage.js';

class Deliveryaddress extends React.Component
          {
	        render()
	              {
		             return(
		             	  <div>
		                    <Header/>
		                    <Deliverypage/>
		                    <Footer/>
		                  </div>

			);
	}
}
export default Deliveryaddress;
