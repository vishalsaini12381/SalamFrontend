import React from 'react';
import ReactDOM from 'react-dom';
import Header from './include/header.js';
import Footer from './include/footer.js';
import Paymentpage from './paymentprocess/paymentpage.js';

class Paymentprocess extends React.Component
          {
	        render()
	              {
		             return(
		             	  <div>
		                    <Header/>
		                    <Paymentpage/>
		                    <Footer/>
		                  </div>

			);
	}
}
export default Paymentprocess;
