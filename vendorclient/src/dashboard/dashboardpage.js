import React from 'react';
import ReactDOM from 'react-dom';
import{Link,withRouter} from 'react-router-dom';
import validator from 'validator';
import axios from 'axios';
import swal from 'sweetalert';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './dashboardpage.css';
import AuthService from '../Authentication/AuthService';
const URL = process.env.REACT_APP_LOCAL;
class Dashboardpage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      contList : []
    }
    this.productFetch = this.productFetch.bind(this);
    this.Auth = new AuthService();
  }

 async componentWillMount(){
    console.log('Authorization',this.Auth.loggedIn());
    var a = await this.Auth.loggedIn();
    if(a){
     return this.props.history.replace('/Dashboard');
    }else{
      return this.props.history.replace('/');
    }
  }

  productFetch(){
    axios.post(URL+'/api/vendor/fetchProduct',{
      userId: this.props.userId,
      // email: this.props.email,
    }).then((resp)=>{
      console.log('##################',resp.data.user.length);
      this.setState({
       contList: resp.data.user,
      })
    })
  }

  componentDidMount (){
    this.productFetch();
  }

	render()	{
    console.log('**************************',this.state.contList.length);
		return(
        <div className="my-3 my-md-5">
          <div className="container">
            <div className="page-header">
              <h4 className="page-title">Dashboard</h4>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
              </ol>
            </div>

            <div className="row row-cards">
              {/* <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="clearfix">
                      <div className="float-right">
                        <i className="mdi mdi-account-location text-secondary icon-size"></i>
                      </div>
                      <div className="float-left">
                        <p className="mb-0 text-left">Total Members</p>
                        <div className="">
                          <h3 className="font-weight-semibold text-left mb-0">897</h3>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted mb-0">
                      <i className="mdi mdi-arrow-down-drop-circle mr-1 text-success" aria-hidden="true"></i>  Members  Successful Join
                    </p>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="clearfix">
                      <div className="float-right">
                        <i className="mdi mdi-poll-box text-danger icon-size"></i>
                      </div>
                      <div className="float-left">
                        <p className="mb-0 text-left">No of Products</p>
                        <div className="">
                          <h3 className="font-weight-semibold text-left mb-0">{this.state.contList.length}</h3>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted mb-0">
                      <i className="mdi mdi-arrow-up-drop-circle mr-1 text-success" aria-hidden="true"></i> Products Successful Add
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="clearfix">
                      <div className="float-right">
                        <i className="mdi mdi-receipt text-success icon-size"></i>
                      </div>
                      <div className="float-left">
                        <p className="mb-0 text-left">Total Order</p>
                        <div className="">
                          <h3 className="font-weight-semibold text-left mb-0">0</h3>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted  mb-0">
                      <i className="mdi mdi-arrow-down-drop-circle mr-1 text-success" aria-hidden="true"></i>20% higher growth
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="clearfix">
                      <div className="float-right">
                        <i className="mdi mdi-cube text-warning icon-size"></i>
                      </div>
                      <div className="float-left">
                        <p className="mb-0 text-left">Total Revenue</p>
                        <div className="">
                          <h3 className="font-weight-semibold text-left mb-0">0</h3>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted mb-0">
                      <i className="mdi mdi-arrow-up-drop-circle text-success mr-1" aria-hidden="true"></i> 80% higher growth
                    </p>
                  </div>
                </div>
              </div>
            </div>

<div className="row">
    <div className="col-md-12 col-lg-12">
        <div className="card">
                <div className="card-header"> 
                   <h3 className="card-title">Recent Order List</h3> 
                 </div>
            <div className="table-responsive">
                <table className="table card-table table-vcenter text-nowrap">
                    <thead>
                      <tr>
                        <th className="wd-15p">Order Id</th>
                        <th className="wd-15p">User Name</th>
                        <th className="wd-20p">Date/Time</th>
                        <th className="wd-20p">Price</th>
                        <th className="wd-15p">Deliver Address</th>
                        <th className="wd-25p">Payment Status</th>
                        <th className="wd-25p">Action</th>
                      </tr>
                    </thead>
                    {/* <tbody>
                      <tr>
                        <td>#O1001</td>
                        <td>Jamil Khan</td>
                        <td>20-07-2019/02:30 PM</td>
                        <td>$200</td>
                        <td>MBV 1014 Dubai</td>
                        <td>Online Payment</td>
                        <td>
                          <div className="actiontrans">
                            <a href="/orderdetail">View Detail</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#O1002</td>
                        <td>Jamil Khan</td>
                        <td>20-07-2019/02:30 PM</td>
                        <td>$200</td>
                        <td>MBV 1014 Dubai</td>
                        <td>Online Payment</td>
                        <td>
                          <div className="actiontrans">
                            <a href="/orderdetail">View Detail</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#O1003</td>
                        <td>Jamil Khan</td>
                        <td>20-07-2019/02:30 PM</td>
                        <td>$200</td>
                        <td>MBV 1014 Dubai</td>
                        <td>Online Payment</td>
                        <td>
                          <div className="actiontrans">
                            <a href="/orderdetail">View Detail</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#O1004</td>
                        <td>Jamil Khan</td>
                        <td>20-07-2019/02:30 PM</td>
                        <td>$200</td>
                        <td>MBV 1014 Dubai</td>
                        <td>Online Payment</td>
                        <td>
                          <div className="actiontrans">
                            <a href="/orderdetail">View Detail</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#O1005</td>
                        <td>Jamil Khan</td>
                        <td>20-07-2019/02:30 PM</td>
                        <td>$200</td>
                        <td>MBV 1014 Dubai</td>
                        <td>Online Payment</td>
                        <td>
                          <div className="actiontrans">
                            <a href="/orderdetail">View Detail</a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                
                 */}
                </table>
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
	// console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>',state);
	return{
	authenticateState : state.inititateState.authenticateState,
	name: state.inititateState.name,
  type: state.inititateState.type,
  userId: state.inititateState.userId,  
	}
}

export default withRouter(connect(mapStateToProps)(Dashboardpage));