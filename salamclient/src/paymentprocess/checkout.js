import React from 'react';

import './checkout.css';

import { Link, withRouter } from 'react-router-dom'

import { connect } from 'react-redux';
import swal from 'sweetalert';
import axios from 'axios';
import $ from 'jquery';
const URL = process.env.REACT_APP_LOCAL;

var divStyle = {
  cursor: 'pointer',
};

function Checkout({ totalProduct, payableAmount, cartAmount }) {
  return (
    <aside className="col-right sidebar col-sm-4 wow bounceInUp animated checkout-fluid">
      <div className="block block-account">
        <div className="block-title">Price Detail</div>
        <div className="block-content">
          <ul>
            <li><a >Price({totalProduct} Item)</a><span>${cartAmount}</span></li>
            <li><a >Delivery Charge</a><span>$15</span></li>

            <li><a >Subtotal</a><span id="spanAmountDataId">${payableAmount}
            </span></li>
          </ul>
          {/* <div className="checkouts"><a style={divStyle}  onClick={() => this.goToPayment()}>Checkout</a></div> */}
        </div>
      </div>
    </aside>

  )
}


export default Checkout;
// export default Checkout;