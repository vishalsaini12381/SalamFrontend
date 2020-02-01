import React from 'react';

import './processbar.css';
class Processbar extends React.Component{
	render()
	{
		return(

          <div className="processbar-fluid">
              <ul>
                <li className="success"><a >My Shopping Cart</a></li>
                <li className="active"><a >Delivery Address</a></li>
                <li><a >Payment</a></li>
              </ul>
          </div>


			)
	}
}

export default Processbar;