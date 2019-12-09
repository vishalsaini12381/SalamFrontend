import React from 'react';
import ReactDOM from 'react-dom';
import './orderdetailpage.css';

import action from '../action/action';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import $ from 'jquery';
import swal from 'sweetalert';
import AuthService from '../Authentication/AuthService';
const URL = process.env.REACT_APP_LOCAL;



class Orderdetailpage extends React.Component{

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
    this.Auth = new AuthService();
  }

  async componentWillMount(){
    var a = await this.Auth.loggedIn()
    if(a){
      // return this.props.history.replace('/Profile');
    }else{
      return this.props.history.replace('/');
    };
    this.fetchMyOrder();
  }

  fetchMyOrder(){

    let search = window.location.search;
    let params = new URLSearchParams(search);
    let foo = params.get('orderId');
    
    axios.post(URL+'/api/vendor/getOrderDetail',{
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

    console.log('orderDetailorderDetailorderDetailorderDetailorderDetail',this.state.addressDetail)

  }


	render()
	{
		return(
        <div className="my-3 my-md-5">
          <div className="container">
            <div className="page-header">
              <h4 className="page-title">Order Detail</h4>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Order Detail</li>
              </ol>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className=" " id="profile-log-switch">
                      <div className="fade show active " >
                        <div className="table-responsive border userdetail ">
                          <table className="table row table-borderless w-100 m-0 ">
                            <tbody className="col-lg-4 p-0">
                              <tr>
                                <td><strong>Order Id:</strong> #{this.state.orderDetail._id}</td>
                              </tr>
                              <tr>
                                <td><strong>Order Date :</strong> {this.state.orderDetail.createdAt}</td>
                              </tr>
                              <tr>
                                <td><strong>Order Amount :</strong> ${this.state.ordrAmount}</td>
                              </tr>
                              <tr>
                                <td><strong>Order Status :</strong> {(this.state.orderDetail.orderType==1) ? 'Pending':(this.state.orderDetail.orderType==2)?'Completed':'Cancel'}</td>
                              </tr>
                            </tbody>
                            <tbody className="col-lg-4 p-0">
                              <tr>
                                <td><strong>User Id :</strong> #{this.state.userDetail._id}</td>
                              </tr>
                              <tr>
                                <td><strong>User Name :</strong> {this.state.userDetail.firstName+' '+this.state.userDetail.lastName}</td>
                              </tr>
                              <tr>
                                <td><strong>Email Id :</strong> {this.state.userDetail.email}</td>
                              </tr>
                              <tr>
                                <td><strong>Mobile No :</strong> {this.state.userDetail.mobile}</td>
                              </tr>
                            </tbody>
                            <tbody className="col-lg-4 p-0">
                              <tr>
                                <td><strong>Address :</strong> {this.state.addressDetail.address}</td>
                              </tr>
                              <tr>
                                <td><strong>Full Name :</strong> {this.state.addressDetail.fullName}</td>
                              </tr>
                              <tr>
                                <td><strong>Pincode :</strong>  {this.state.addressDetail.pincode} </td>
                              </tr>
                              <tr>
                                <td><strong>Mobile No :</strong>  {this.state.addressDetail.mobile}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        </div>
                      </div>
                    </div>
                  </div>


              </div>
            </div>
            <div className="row row-cards order-detailpage">
              <div className="col-lg-12">
                <div className="card mt-5 store">
                  <div className="table-responsive">
                    <table className="table card-table table-vcenter">
                      <tr>
                        <th className="wd-15p">Images</th>
                        <th className="wd-15p">Category</th>
                        <th className="wd-15p">Product Name</th>
                        <th className="wd-15p">Price</th>
                        <th className="wd-15p">Quantity</th>
                        <th className="wd-20p">Discount</th>
                        <th className="wd-20p">Total Price</th>
                      </tr>
                      {
                         this.state.productDetail.map((e,i)=>{
                           if(e.vendorId==this.props.userId){
                          return(
                      <tr>
                        <td><img src={e.file1} alt="" className="h-8 w-8 bg-white" /></td>
                        <td>{e.productName}</td>
                        <td>{e.productName}</td>
                        <td >
                          <strong>${e.orderProductData.price}</strong>
                        </td>
                        <td>{e.orderProductData.quantity}</td>
                        <td>${e.orderProductData.discount}</td>
                        <td>
                          <strong>${e.orderProductData.total}</strong>
                        </td>
                      </tr>
                          )
                           }
                         })
                        }
                    </table>
                  </div>
                </div>
                <div className="card ">
                  <div className="card-header "><div className="card-title">Order Summery</div></div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <tbody>
                          {/* <tr>
                            <td>Cart Total</td>
                            <td className="text-right">${this.state.orderDetail.price}</td>
                          </tr>
                          <tr>
                            <td><span>Shipping Charges</span></td>
                            <td className="text-right price"><span>${this.state.orderDetail.shippingCharges}</span></td>
                          </tr> */}
                          <tr>
                            <td><span>Order Total</span></td>
                            <td><h2 className="price text-right">${this.state.ordrAmount}</h2></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


			)
	}
}



function mapStateToProps(state){
  console.log('pppppppppppppppppppppp',state.inititateState);
  return{
    authenticateState : state.inititateState.authenticateState,
    userId : state.inititateState.userId,
    name : state.inititateState.name,
    storeName : state.inititateState.storeName,
    email : state.inititateState.email,
    type : state.inititateState.type,
    image: state.inititateState.image,
    mobile : state.inititateState.mobile,
    streetName : state.inititateState.streetName,
    city : state.inititateState.city,
    address : state.inititateState.address,
    storeEmail : state.inititateState.storeEmail,
    zipCode : state.inititateState.zipCode,
  }
}

function mapDispatchToProps(dispatch){
  return {
    authenticate: bindActionCreators(action.authenticate, dispatch)
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Orderdetailpage));


// export default Orderdetailpage;