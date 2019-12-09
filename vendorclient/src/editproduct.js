import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './include/header.js';
import Editproductpage from './editProduct.js/editproductpage';
import Footer from './include/footer.js';
class Editproduct extends Component
          {
	        render()
	              {
		             return(
                 <div className="page" >
                     <div className="page-main" >
                           <Header/>
                           <Editproductpage/>
                      </div>
                     <Footer/>
                  </div>



			);
	}
}
export default Editproduct;
