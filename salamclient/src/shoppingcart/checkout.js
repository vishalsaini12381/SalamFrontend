import React from 'react';
import ReactDOM from 'react-dom';
import './checkout.css';
class Checkout extends React.Component{
	render()
	{
		return(
        <aside className="col-right sidebar col-sm-3 wow bounceInUp animated checkout-fluid">
          <div className="block block-account">
            <div className="block-title">Price Detail</div>
            <div className="block-content">
              <ul>
                <li><a href="#">Price(3 Item)</a><span>$550</span></li>
                <li><a href="#">Delivery Charge</a><span>$15</span></li>
                <li><a href="#">Subtotal</a><span>$565</span></li>
              </ul>
            <div className="checkouts"><a href="/Deliveryaddress">Checkout</a></div>
            </div>
          </div>
        </aside>


			)
	}
}

export default Checkout;