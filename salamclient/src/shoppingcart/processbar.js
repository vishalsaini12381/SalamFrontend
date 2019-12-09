import React from 'react';
import ReactDOM from 'react-dom';
import './processbar.css';
class Processbar extends React.Component{
	render()
	{
		return(

          <div className="processbar-fluid">
              <ul>
                <li className="active"><a href="#">My Shopping Cart</a></li>
                <li><a >Delivery Address</a></li>
                <li><a >Payment</a></li>
              </ul>
          </div>


			)
	}
}

export default Processbar;