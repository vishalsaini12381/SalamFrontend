import React from 'react';
import ReactDOM from 'react-dom';
import './orderdetail.css';



import { Link, withRouter } from 'react-router-dom'
import {connect} from 'react-redux';
import swal from 'sweetalert';
import axios from 'axios';
const URL = process.env.REACT_APP_LOCAL;

class Orderdetail extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      orderId:'',
      orderDetail:[],
      productDetail:[],
      userDetail:[],
      addressDetail:[],
      ordrAmount:0,
    }
    
  }


  async componentWillMount(){
    this.fetchMyOrder();
  }

  fetchMyOrder(){

    let search = window.location.search;
    let params = new URLSearchParams(search);
    let foo = params.get('orderId');
    console.log('foooooooooo',foo)
    axios.post(URL+'/api/admin/getOrderDetailAdmin',{
      orderId : foo
    }).then((response)=>{
      console.log('this.responsefdfddfdddddddddd',response.data.resultData);


       response.data.resultData[0].orderDetail.product.forEach(element => {
        if(element.vendorId==this.props.userId){
          this.setState({
            ordrAmount:parseFloat(this.state.ordrAmount)+parseFloat(element.total)
          })
          // amount=parseFloat(amount)+parseFloat(element.total)
        }
      });


      this.setState({
        orderDetail : response.data.resultData[0].orderDetail,
        userDetail : response.data.resultData[0].orderDetail.userId,
        productDetail : response.data.resultData[0].productDetail,
        addressDetail:response.data.resultData[0].addressData[0],
      })
    })

  }


	render()
	{
		return(
      <div className="row">
        <section className="col-main col-sm-9  wow bounceInUp animated cartdetail-fluid">
          <div className="category-title">
               <h1>Order Detail</h1>
                 <div className="breadcrumbs">
			                <div className="row">
            			        <ul>
            			          <li className="home"> <a href="#" title="Go to Home Page">Home</a><span>/</span></li>
            			          <li className="category13"> Order Detail</li>
            			        </ul>
			                </div>
			            </div>
                  <div className="productcart-fluid">
                        <table className="table table-striped">
                          <tbody>
                          {
                         this.state.productDetail.map((e,i)=>{
                          return(
                            <tr>
                              <td class="image"><a class="product-image" title="Sample Product" href="#"><img width="75" alt="Sample Product" src={e.file1}/></a></td>
                              <td><h3 className="product-name">{e.productName}</h3>
                              <h4>Brand: <span>{e.brandName}</span></h4></td>
                              <td>
                                    <div className="price">
                                      <label for="price">Price</label>
                                      <h4>${e.orderProductData.price}</h4>
                                    </div>
                              </td>
                              <td>
                                <div className="add-to-box pro-quantity">
                                    <div className="add-to-cart">
                                    <label for="qty">Qty:</label>
                                      <div className="pull-left">
                                        <div className="custom pull-left">
                                          <input type="text" className="input-text qty" style={{background: '#e9edf2',color:'black',cursor:'no-drop'}} title="Qty" value={e.orderProductData.quantity} readOnly maxlength="12" id="qty" name="qty"/>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                              </td>
                              <td>
                                    <div className="price">
                                      <label for="price">Discount</label>
                                      <h4>${e.orderProductData.discount*e.orderProductData.quantity}</h4>
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
                                      <label for="price">Total Price</label>
                                      <h4>${e.orderProductData.total}</h4>
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
                           <h4><span>Order Status: </span>{(this.state.orderDetail.status==1) ? 'Pending':(this.state.orderDetail.status==2)?'Completed':'Cancel'}</h4>
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
              <li><a href="#">Price({this.state.productDetail.length} Item)</a><span>${this.state.orderDetail.price}</span></li>
              <li><a href="#">Delivery Charge</a><span>${this.state.orderDetail.shippingCharges}</span></li>
              <li><a href="#">Subtotal</a><span>${this.state.orderDetail.amount}</span></li>
            </ul>
          </div>
        </div>
        {/* <div className="block block-account">
          <div className="block-title">Payment Detail</div>
          <div className="block-content">
            <ul>
              <li><a href="#">Paument Mehood</a><span>Online</span></li>
            </ul>
          </div>
        </div> */}
        <div className="block block-account">
          <div className="block-title">Shipping Detail</div>
          <div className="block-content">
            <ul>
              <li style={{marginTop: '-10px'}}>{this.state.addressDetail.fullName},</li>
              <li style={{marginTop: '-10px'}}>{this.state.addressDetail.mobile},</li>
              <li style={{marginTop: '-10px'}}>{this.state.addressDetail.address},</li>
              <li style={{marginTop: '-10px'}}>{this.state.addressDetail.pincode}</li>
            </ul>
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

export default withRouter(connect(mapStateToProps)(Orderdetail));

// export default Orderdetail;