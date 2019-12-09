import React from 'react';
import ReactDOM from 'react-dom';
import './processbar.css';
class Processbar extends React.Component{
	render()
	{
		return(

          <div className="processbar-fluid">
              <ul>
                <li className="success"><a >My Shopping Cart</a></li>
                <li className="success"><a >Delivery Address</a></li>
                <li className="active"><a >Payment</a></li>
              </ul>
          </div>


			)
	}
}

export default Processbar;