import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './cartdetail.css';
import './checkout.css';

import {connect} from 'react-redux';
import swal from 'sweetalert';
import axios from 'axios';
const URL = process.env.REACT_APP_LOCAL;

class Cartdetail extends React.Component{
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
        text: "First you have to login!",
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

  addToCart = (productId,userId,price,discount,action) => {
    //console.log(productId+'/'+userId+'/'+price+'/'+discount);
    axios.post(URL+'/api/user/addToCart',{
      userId : userId,
      productId:productId,
      price:price,
      discount:discount,
      quantity:1,
      action:action
    }).then((response)=>{
      //console.log('this.responsefdfddfdddddddddd',response.data.product);
      if(response.data.code==100){
        return window.location.reload()
      }else{
        swal({
          title: "OOPS",
          text: "Some error found.",
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
    })
  }


	render()
	{
		return(
      <div>
        <section className="col-main col-sm-9  wow bounceInUp animated cartdetail-fluid">
          <div className="category-title">
               <h1>My Shopping Cart</h1>
                 <div className="breadcrumbs">
			                <div className="row">
            			        <ul>
            			          <li className="home"> <a href="#" title="Go to Home Page">Home</a><span>/</span></li>
            			          <li className="category13"> My Cart</li>
            			        </ul>
			                </div>
			            </div>
                  <div className="productcart-fluid">
                        <table className="table table-striped">
                          <tbody>
                            {
                              this.state.myCart.map((e,i)=>{
                                this.state.subTotal= parseFloat(this.state.subTotal) + parseFloat(e.total);
                                this.state.totalProduct= parseInt(this.state.totalProduct) + 1;
                                return(
                            
                            <tr>
                              <td class="image"><a class="product-image" title="Sample Product" href="Productdetail?"><img width="75" alt="Sample Product" src={e.productId.file1}/></a></td>
                              <td><h3 className="product-name">{e.productId.productName}</h3>
                              <h4>Brand: <span>{e.productId.brandName}</span></h4>
                              </td>
                              <td>
                                    <div className="price">
                                      <label for="price">Price</label>
                                      <h4>${parseFloat(e.amount).toFixed(2)}</h4>
                                    </div>
                              </td>
                              <td>
                                <div className="add-to-box pro-quantity">
                                    <div className="add-to-cart">
                                    <label for="qty">Qty:</label>
                                      <div className="pull-left">
                                        <div className="custom pull-left">
                                          {
                                            e.quantity==1 ?
                                            <button  className="reduced items-count" type="button"><i className="fa fa-minus">&nbsp;</i></button>
                                            :
                                            <button  onClick={() => this.addToCart(e.productId._id,this.props.userId,e.productId.productPrice,e.productId.discount,2)} className="reduced items-count" type="button"><i className="fa fa-minus">&nbsp;</i></button>
                                          }
                                         
                                          <input type="text" className="input-text qty" title="Qty" value={e.quantity} maxlength="12" id="qty" name="qty"/>
                                          <button onClick={() => this.addToCart(e.productId._id,this.props.userId,e.productId.productPrice,e.productId.discount,1)} className="increase items-count" type="button"><i className="fa fa-plus">&nbsp;</i></button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                              </td>
                                {/* <td>
                                    <div className="form-group">
                                      <label for="size">Size</label>
                                      <select className="form-control" id="exampleFormControlSelect1">
                                        <option>M</option>
                                        <option>S</option>
                                        <option>L</option>
                                        <option>XL</option>
                                      </select>
                                    </div>
                              </td> */}
                                
                              <td>
                                    <div className="price">
                                      <label for="price">Total</label>
                                      <h4>${parseFloat(e.total).toFixed(2)}</h4>
                                    </div>
                              </td>
                                <td>
                                    <div className="delete">
                                        <a onClick={() => this.addToCart(e.productId._id,this.props.userId,e.productId.productPrice,e.productId.discount,3)}> <i className="fa fa-close"></i></a>
                                    </div>
                              </td>
                            </tr>
                            
                             )
                            })
                            
                          }
                            
                          </tbody>
                        </table>
                  </div>
                  <div className="continueshopping">
                    <div className="row">
                      <div className="col-sm-6">
                         <div className="leftpart">
                           <a href="/"><i class="fa fa-arrow-left"></i> Continue Shopping</a>
                         </div>
                      </div>
                      <div className="col-sm-6">
                         <div className="rightpart">
                           <h4><span>Subtotal: </span>${this.state.subTotal}</h4>
                         </div>
                      </div>
                    </div>
                  </div>
            </div>
            
        </section>
        <aside className="col-right sidebar col-sm-3 wow bounceInUp animated checkout-fluid">
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
          <div className="checkouts"><a href="/Deliveryaddress">Checkout</a></div>
          </div>
        </div>
      </aside>
        </div>

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

export default withRouter(connect(mapStateToProps)(Cartdetail));

// export default Cartdetail;