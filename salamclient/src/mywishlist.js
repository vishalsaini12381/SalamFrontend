import React from 'react';
import ReactDOM from 'react-dom';
import Header from './include/header.js';
import Footer from './include/footer.js';
import Mywishlistpage from './mywishlist/mywishlistpage.js';

class Mywishlist extends React.Component
          {
	        render()
	              {
		             return(
		             	  <div>
		                    <Header/>
		                    <Mywishlistpage/>
		                    <Footer/>
		                  </div>

			);
	}
}
export default Mywishlist;
