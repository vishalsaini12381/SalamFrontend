import React from 'react';
import ReactDOM from 'react-dom';
import Header from './include/header.js';
import Footer from './include/footer.js';
import Detail from './productdetail/detail.js';
import Similarproduct from './productdetail/similarproduct.js';
import Customerreview from './productdetail/customerreview.js';

class Productdetail extends React.Component
          {
	        render()
	              {
		             return(
		             	  <div>
		                    <Header/>
		                    <Detail/>
		                    <Similarproduct/>
		                    <Customerreview/>
		                    <Footer/>
		                  </div>

			);
	}
}
export default Productdetail;
