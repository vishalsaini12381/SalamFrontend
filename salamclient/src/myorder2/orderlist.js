import React from 'react';
import ReactDOM from 'react-dom';
import './orderlist.css';

import { Link, withRouter } from 'react-router-dom'
import {connect} from 'react-redux';
import swal from 'sweetalert';
import axios from 'axios';
const URL = process.env.REACT_APP_LOCAL;
class Orderlist extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      myOrders : [],
      subTotal : 0,
      total:0,
      totalProduct:0,
    }
  }

  componentWillMount(){
    this.fetchMyOrder();
  }

  fetchMyOrder(){
    // console.log('this.props.userId',this.props.userId)
    if(this.props.userId){
      axios.post(URL+'/api/user/myOrders',{
        userId:this.props.userId
      }).then((response)=>{
        
          console.log('this.responsefdfddfdddddddddd',response.data.product);
          this.setState({
            myOrders : response.data.product,
          })
        
        
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

	render()
	{
		return(
        <section className="col-main col-sm-9  wow bounceInUp animated orderist-fluid">
          <div className="category-title">
               <h1>My Order</h1>
                 <div className="breadcrumbs">
			                <div className="row">
            			        <ul>
            			          <li className="home"> <a href="#" title="Go to Home Page">Home</a><span>/</span></li>
            			          <li className=""> <a href="#" title="Go to Home Page">My Account</a><span>/</span></li>
            			          <li className="category13"> My Order</li>
            			        </ul>
			                </div>
			            </div>
                  <div className="filterform">
                    {/* <form>
                        <div className="row">
                          <div className="col-sm-3">
                            <div className="form-group">
                              <label for="from">From</label>
                              <input type="date" className="form-control" id="dateofbirth"/>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="form-group">
                              <label for="to">To</label>
                              <input type="date" className="form-control" id="dateofbirth"/>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="form-group">
                                <label for="status">Status</label>
                                      <select className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                     </select>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="form-group">
                                 <button type="button" className="btn btn-primary btn-lg btn-block submitbutto">Submit</button>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="form-group">
                                 <button type="button" className="btn btn-primary btn-lg btn-block clearbutto">Clear</button>
                            </div>
                          </div>
                        </div>
                    </form> */}

                    <div className="productcart-fluid">
                        <table className="table table-striped">
                          <tbody>
                          {
                              this.state.myOrders.map((e,i)=>{
                                return(
                           <tr>
                              <td>
                                    <div className="price">
                                      <label for="price">Order-Id</label>
                                      <h4>{e._id}</h4>
                                    </div>
                              </td>
                              
                              <td>
                                    <div className="price">
                                      <label for="price">Email</label>
                                      <h4>{e.userId.email}</h4>
                                    </div>
                              </td>
                              <td>
                                    <div className="price">
                                      <label for="price">Amount</label>
                                      <h4>${e.price}</h4>
                                    </div>
                              </td>
                              <td>
                                    <div className="price">
                                      <label for="price">Shipping Amount</label>
                                      <h4>${e.shippingCharges}</h4>
                                    </div>
                              </td>
                              <td>
                                    <div className="price">
                                      <label for="price">Total</label>
                                      <h4>${e.amount}</h4>
                                    </div>
                              </td>
                                <td>
                                    <div className="delete">
                                        <a href="#"> <i className="fa fa-eye"></i></a>
                                    </div>
                              </td>
                            </tr>
                             )
                            })
                            
                          }
                            
                          </tbody>
                        </table>
                  </div>



                  </div>

          </div>
        </section>


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

export default withRouter(connect(mapStateToProps)(Orderlist));

// export default Orderlist;