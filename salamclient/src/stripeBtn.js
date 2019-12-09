import React, { Fragment } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import swal from 'sweetalert';
import $ from 'jquery';
const URL = process.env.REACT_APP_LOCAL;

const stripeBtn = ({payableAmount,shippingCharges,cartAmount,userId}) => {
  console.log("88888888887777777777788888888", payableAmount+'/'+shippingCharges+'/'+cartAmount+'/'+userId)
  const publishableKey = "pk_test_ndY3VSaj13uVmOszfc4dUyB500lSM6buEd";
   
  const onToken = token => {
    const body = {
      amount: payableAmount*100,
      token: token
  };  axios
      .post("http://localhost:4100/api/user/payment", body)
      .then(response => {

        let search = window.location.search;
        let params = new URLSearchParams(search);
        let foo = params.get('data');
        /////////////////////////////////MONGO//////////////////////////////////
        axios.post(URL+'/api/user/codOrder',{
          addressId:foo,
          userId:userId,
          orderType:2,
          price   :cartAmount,
          shippingCharges:shippingCharges,
          amount  : payableAmount
        }).then((orderResponse)=>{
            if(orderResponse.data.code==100){
              swal({
                title: "Success",
                text: "Order placed successfully.",
                icon: "success",
                dangerMode: false,
                closeOnClickOutside: false,
              }).then((d)=>{
                 //console.log('ddddddddddddddddddd',d)
                  if(d){
                  return window.location = "/myOrders"
                }
               })
            }else{
              swal({
                title: "OOPS",
                text: response.data.message,
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
        /////////////////////////////////MONGO//////////////////////////////////
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };  return (
    <StripeCheckout
      label="Online Payment" //Component button text
      name="SalamTrade" //Modal Header
      description="Secure Payment"
      panelLabel="Pay Now" //Submit button in modal
      amount={payableAmount*100} //Amount in cents $9.99
      token={onToken}
      stripeKey={publishableKey}
      image="./images/logo/logo.png" //Pop-in header image
      billingAddress={false}
    />
  );
};

export default stripeBtn;
