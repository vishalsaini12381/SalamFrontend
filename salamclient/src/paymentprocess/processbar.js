import React from 'react';

import './processbar.css';
class Processbar extends React.Component{
	render()
	{
		return(

          <div className="processbar-fluid">
              <ul>
                <li className="success"><a href='/#' >My Shopping Cart</a></li>
                <li className="success"><a href='/#' >Delivery Address</a></li>
                <li className="active"><a href='/#'>Payment</a></li>
              </ul>
          </div>


			)
	}
}

export default Processbar;