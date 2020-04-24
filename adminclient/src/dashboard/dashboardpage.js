import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthService from '../Authentication/AuthService';
import { connect } from 'react-redux';
import axios from 'axios';
import { showChatBoxAction } from '../component/chat/ChatAction'
import './dashboardpage.css';
const URL = process.env.REACT_APP_SERVER_URL;

class Dashboardpage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vendorList: [],
      type: 'Vendor',
      customerList: [],
      totalCustomer: 0
    }
    this.vendorFetch = this.vendorFetch.bind(this);
    this.Auth = new AuthService();

  }

  async componentWillMount() {
    // console.log('Authorization',this.Auth.loggedIn());
    var a = await this.Auth.loggedIn();
    if (a) {
      return this.props.history.replace('/Dashboard');
    } else {
      return this.props.history.replace('/');
    }
  }

  componentDidMount() {
    this.vendorFetch();
  }

  vendorFetch() {
    let obj = {};
    obj.type = this.state.type;
    axios.post(URL + '/api/admin/vendorList', obj)
      .then((response) => {
        this.setState({
          vendorList: response.data.data.reverse()
        }, () => {
          this.fetchRecentCustomer();
        })
      })
      .catch(error => {
        this.fetchRecentCustomer();
      })
  }

  fetchRecentCustomer = () => {
    axios.get(URL + '/api/admin/recent-customer')
      .then((response) => {
        this.setState({
          customerList: response.data.customerList,
          totalCustomer: response.data.totalCustomer
        })
      })
      .catch(error => {
        console.log("---------->>", error)
      })
  }

  renderCustomerList = () => {
    return this.state.customerList
      .map(customerItem => {
        return (
          <tr>
            <td>{customerItem._id}</td>
            <td>{customerItem.firstName} {customerItem.lastName}</td>
            <td>{customerItem.email}</td>
            <td>{customerItem.mobile}</td>
            <td>{`${customerItem.streetAddress !== undefined ? customerItem.streetAddress : ''},${customerItem.streetAddress !== undefined ? customerItem.city : ''}`}</td>
            <td>
              <div className="actiontrans">
                <a href="/userdetail">View Detail</a>
              </div>
            </td>
          </tr>
        )
      })

  }

  render() {
    return (
      <div className="my-3 my-md-5">
        <div className="container">
          <div className="page-header">
            <h4 className="page-title">Dashboard</h4>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/Dashboard">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
            </ol>
          </div>

          <div className="row row-cards">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="clearfix">
                    <div className="float-right">
                      <i className="mdi mdi-account-location text-secondary icon-size"></i>
                    </div>
                    <div className="float-left">
                      <p className="mb-0 text-left">Total User</p>
                      <div className="">
                        <h3 className="font-weight-semibold text-left mb-0"></h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted mb-0">
                    <i className="mdi mdi-arrow-down-drop-circle mr-1 text-success" aria-hidden="true"></i>  User  Successful Join
                    </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="clearfix">
                    <div className="float-right">
                      <i className="mdi mdi-account-location text-secondary icon-size"></i>
                    </div>
                    <div className="float-left">
                      <p className="mb-0 text-left">Total Vendor</p>
                      <div className="">
                        <h3 className="font-weight-semibold text-left mb-0">{this.state.vendorList.length}</h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted mb-0">
                    <i className="mdi mdi-arrow-up-drop-circle mr-1 text-success" aria-hidden="true"></i> Vendor  Successful Join
                    </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="clearfix">
                    <div className="float-right">
                      <i className="mdi mdi-receipt text-success icon-size"></i>
                    </div>
                    <div className="float-left">
                      <p className="mb-0 text-left">Total Order</p>
                      <div className="">
                        <h3 className="font-weight-semibold text-left mb-0"></h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted  mb-0">
                    <i className="mdi mdi-arrow-down-drop-circle mr-1 text-success" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="clearfix">
                    <div className="float-right">
                      <i className="mdi mdi-cube text-warning icon-size"></i>
                    </div>
                    <div className="float-left">
                      <p className="mb-0 text-left">Total Revenue</p>
                      <div className="">
                        <h3 className="font-weight-semibold text-left mb-0">$</h3>
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
                  <h3 className="card-title">Recent Added User</h3>
                </div>
                <div className="table-responsive">
                  <table className="table card-table table-vcenter text-nowrap">
                    <thead>
                      <tr>
                        <th className="wd-15p">User Id</th>
                        <th className="wd-15p">User Name</th>
                        {/* <th className="wd-15p">Gender</th> */}
                        <th className="wd-20p">Email</th>
                        <th className="wd-20p">Mobile No</th>
                        <th className="wd-15p">Address</th>
                        {/* <th className="wd-25p">Status</th> */}
                        <th className="wd-25p">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.renderCustomerList()}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Recent Added Vendor</h3>
                </div>
                <div className="table-responsive">
                  <table className="table card-table table-vcenter text-nowrap">
                    <thead>
                      <tr>
                        {/* <th className="wd-15p">Vendor Id</th> */}
                        <th className="wd-15p">User Name</th>
                        <th className="wd-15p">Store Name</th>
                        {/* <th className="wd-15p">Category</th> */}
                        <th className="wd-20p">Email</th>
                        <th className="wd-20p">Mobile No</th>
                        <th className="wd-15p">Address</th>
                        <th className="wd-25p">Action</th>
                        <th className="wd-15p">Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.vendorList.map((e, i) => {
                          return (
                            <React.Fragment key={i}>
                              <tr>
                                {/* <td>{e._id}</td> */}
                                <td>{e.name}</td>
                                <td>{e.storeName}</td>
                                <td>{e.email}</td>
                                <td>{e.mobile}</td>
                                <td> {e.address} </td>
                                <td>
                                  <div className="actiontrans">
                                    <a onClick={() => this.props.history.push(`vendordetail?vendorId=${e._id}`)}>View Detail</a>
                                  </div>
                                </td>
                                <td>
                                  <div className="actiontrans" onClick={() => this.props.showChatBox({ receiverId: e._id, name: e.name })}>
                                    <img style={{ width: '30px', height: '30px' }} src="/images/comment_blue.svg" alt="image" />
                                  </div>
                                </td>
                              </tr>
                            </React.Fragment>
                          )
                        })
                      }
                    </tbody>
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
function mapStateToProps(state) {
  return {
    authenticateState: state.inititateState.authenticateState,
  }
}
function mapDispatchToProps(dispatch) {
  return ({
    showChatBox: (data) => { dispatch(showChatBoxAction(data)) }
  })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboardpage));