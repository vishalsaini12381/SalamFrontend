import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom'
import './checkout.css';
import './addressdetail.css';

import {connect} from 'react-redux';
import swal from 'sweetalert';
import axios from 'axios';
import $ from 'jquery';
const URL = process.env.REACT_APP_LOCAL;

var divStyle = {
  cursor:'pointer',
};

class Checkout extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      myCart : [],
      subTotal : 0,
      total:0,
      totalProduct:0,
    }
  }

  componentWillMount(){
    this.fetchMyCart();
  }

  fetchMyCart(){
    // console.log('this.props.userId',this.props.userId)
    if(this.props.userId){
      axios.post(URL+'/api/user/myCart',{
        userId:this.props.userId
      }).then((response)=>{
        if(response.data.code==100){
            console.log('this.responsefdfddfdddddddddd',response.data.product);
            this.setState({
              myCart : response.data.product,
            })
          }else{
            swal({
              title: "OOPS",
              text: "Your cart is empty.",
              icon: "warning",
              dangerMode: true,
              closeOnClickOutside: false,
            }).then((d)=>{
               //console.log('ddddddddddddddddddd',d)
                if(d){
                return window.location = "/"
              }
             })
          }
      })
    }else{
      swal({
        title: "OOPS",
        text: "Session expired.Please Login!",
        icon: "warning",
        dangerMode: true,
        closeOnClickOutside: false,
      }).then((d)=>{
         //console.log('ddddddddddddddddddd',d)
          if(d){
          return window.location = "/Login"
        }
       })
    }
    
  }

  goToPayment = () => {
    var addressData=$('.selectedAddress').attr('id');
    console.log('addressData',addressData)
    if(addressData){
      window.location.href='/Paymentprocess?data='+addressData;
    }else{
      alert('Please select address...')
    }
  }

	render()
	{
    this.state.myCart.map((e,i)=>{
      this.state.subTotal= parseFloat(this.state.subTotal) + parseFloat(e.total);
      this.state.totalProduct= parseInt(this.state.totalProduct) + 1;
    })
		return(
      
        <aside className="col-right sidebar col-sm-4 wow bounceInUp animated checkout-fluid">
          <div className="block block-account">
          <div className="block-title">Price Detail</div>
          <div className="block-content">
            <ul>
              <li><a >Price({this.state.totalProduct} Item)</a><span>${this.state.subTotal}</span></li>
              <li><a >Delivery Charge</a><span>$15</span></li>
              
              <li><a >Subtotal</a><span>$
              {
                this.state.total= parseFloat(15) + parseFloat(this.state.subTotal)
              }
              </span></li>
            </ul>
          <div className="checkouts"><a style={divStyle}  onClick={() => this.goToPayment()}>Checkout</a></div>
          </div>
        </div>
        </aside>


			)
	}
}

function mapStateToProps(state){
  console.log('555555555555555555',state.inititateState.email);
   return{
      authenticateState : state.inititateState.authenticateState,
      email: state.inititateState.email,
      userId: state.inititateState.userId
   }
}

export default withRouter(connect(mapStateToProps)(Checkout));

// export default Checkout;