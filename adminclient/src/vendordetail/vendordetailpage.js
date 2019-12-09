import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import validator from 'validator';
import './vendordetailpage.css';
import axios from 'axios';
import action from '../action/action';
import swal  from 'sweetalert';
import Switch from "react-switch";
import Loader from 'react-loader-spinner'
const URL = process.env.REACT_APP_LOCAL;

class Vendordetailpage extends React.Component{
  constructor(props){
    super(props); 
     this.state = {
       status : {value : this.props.adminStatus , isValidate : true , message : ''},
        visible  : false,
        featured: false,

     }
     this.handleChangeStatus = this.handleChangeStatus.bind(this);
     this.submit = this.submit.bind(this);
     this.handleChangeButton = this.handleChangeButton.bind(this);
     this.fetchFeatured = this.fetchFeatured.bind(this);
  }

  handleChangeStatus(event){
    const {name,value} = event.target;
    let state = this.state;
    state[name].message = '';
    state[name].value = value;
    this.setState(state);
  }

  componentWillMount(){
    this.fetchFeatured();
  }

  fetchFeatured(){
    let obj = {};
    this.setState({visible : true});
    obj.vendorId = this.props.vendorId;
    axios.post(URL+'/api/admin/fetchVendorList',obj).then((doc)=>{
      console.log('document',doc.data.featured);
     
      this.setState({visible: false});
      this.setState({featured : doc.data.featured})
    })
  }

  handleChangeButton(featured) {
    var that = this;
    this.setState({ featured });
    let obj = {};
    obj.vendorId = this.props.vendorId;
    console.log('this.state.featured',this.state.featured);
    obj.featured = (this.state.featured===false || this.state.featured==="false") ? true : false;
    console.log('handlechange',obj);

    axios.post(URL+'/api/admin/editVendorList',obj,featured).then((response)=>{
      console.log('responseeeeeeeeeee',response);
      if(response.data.status === true){
        // axios.post(URL+'/api/admin/fetchVendorList',obj).then((doc)=>{
        //   console.log('document',doc);
        // })
        swal("Successful",
        `${response.data.message}`,
        ).then((d)=>{
          return this.props.history.push("/Vendordetail");
        })
      }else{
        swal("Error",
        `${response.data.message}`,
        ).then((d)=>{
          return this.props.history.replace("/Vendordetail")
        })
      }
    })

  }


  submit(event){
    var that = this;
    event.preventDefault();
    let obj = {};
    obj.vendorId = this.props.vendorId;
    obj.status = this.state['status'].value;
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',obj);

    axios.post(URL+'/api/admin/editVendorList',obj).then((response)=>{
      console.log('responseeeeeeeeeee',response);
      if(response.data.status === true){
        axios.post(URL+'/api/admin/fetchVendorList',obj).then((doc)=>{
          console.log('document',doc);
          if(doc){
            that.props.authenticate({
              type: 'authenticate',
              payload: doc.data
            })
          }
        })
        swal("Successful",
        `${response.data.message}`,
        ).then((d)=>{
          return window.location = "/Vendordetail"
        })
      }else{
        swal("Error",
        `${response.data.message}`,
        ).then((d)=>{
          return this.props.history.replace("/Vendordetail")
        })
      }
    })
    // window.location = '/Vendordetail';
  }

	render(){
    const state = this.state;
    console.log('this.state',this.state.featured === false ? false : this.state.featured);
		return(
        <div className="my-3 my-md-5">
          <Loader visible = {this.state.visible} type="Puff" className="signuploader" />
          <div className="container">
            <div className="page-header">
              <h4 className="page-title">Vendor Detail</h4>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/Dashboard">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Vendor Detail</li>
              </ol>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card card-profile vendorprofile">
                  <div className="card-body text-center">
                    <img className="card-profile-img" src={this.props.image === null ? "images/defaultImg.png" : this.props.image} alt="img"/>
                    <h3 className="mb-3 text-white">{this.props.name}</h3>
                    <p className="mb-4 text-white">{this.props.accountType}</p>
                    {/* <a href="/createprofile" className="btn btn-warning btn-sm"><i className="fa fa-pencil"></i> Edit profile</a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card p-5 ">
                  <div className="card-title">
                    Vendor Detail
                  </div>
                  <div className="media-list">
                    <div className="media mt-1 pb-2">
                      <div className="mediaicon">
                        <i className="fa fa-home" aria-hidden="true"></i>
                      </div>
                      <div className="media-body ml-5 mt-1">
                        <h6 className="mediafont text-dark">Address</h6> {this.props.streetName} {this.props.city} {this.props.address}
                      </div>
                    </div>
                    <div className="media mt-1 pb-2">
                      <div className="mediaicon">
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                      </div>
                      <div className="media-body ml-5 mt-1">
                        <h6 className="mediafont text-dark">Email Address</h6><span className="d-block">{this.props.email}</span>
                      </div>
                    </div>
                    <div className="media mt-1 pb-2">
                      <div className="mediaicon">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                      </div>
                      <div className="media-body ml-5 mt-1">
                         <h6 className="mediafont text-dark">Mobile No</h6><span className="d-block">{this.props.mobile}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card">
                  <div className="card-body">
                    <div className=" " id="profile-log-switch">
                      <div className="fade show active " >
                        <div className="table-responsive border ">

                        <label>
                        <span>{this.state.featured ? 'Favourite' : 'UnFavourite'}</span>
                        <Switch checked={this.state.featured === false ? false : this.state.featured } onChange={this.handleChangeButton}  />
                      </label>         
                              {/* <div className="card-options">
                                  <label className="custom-switch m-0">
                                    <input type="checkbox" value = {this.state.checked} onChange = {this.handleChangeButton} className="custom-switch-input" />
                                    <span className="custom-switch-indicator"></span>
                                  </label>
                                </div> */}
                          <table className="table row table-borderless w-100 m-0 ">
                            <tbody className="col-lg-6 p-0">
                              <tr>
                                <td><strong>Full Name :</strong> {this.props.name} </td>
                              </tr>
                              <tr>
                                <td><strong>StoreName :</strong> {this.props.storeName}</td>
                              </tr>
                              <tr>
                                <td><strong>Address :</strong> {this.props.streetName} {this.props.city} {this.props.address}</td>
                              </tr>
                              <tr>
                                <td>
                               <select className="form-control custom-select" name = "status" value = {this.props.adminStatus} onChange = {this.handleChangeStatus}>
                               {/* <option value = '' ></option> */}
                                  <option>Unverify</option>
                                  <option>Verify</option>
                                  <option>Block</option>
                                  {/* <option>UnBlock</option> */}
                                  </select>
                                 </td>
                              </tr>
                            </tbody>
                            <tbody className="col-lg-6 p-0">
                              <tr>
                                <td><strong> Store Email-id :</strong> {this.props.storeEmail}</td>
                              </tr>
                              <tr>
                                <td><strong>Email Id :</strong> {this.props.email} </td>
                              </tr>
                              <tr>
                                <td><strong>Phone Number :</strong> {this.props.mobile} </td>
                              </tr>
                              <tr> 
                                <td><button type="button" className="btn btn-primary" style = {{marginTop : '15Px'}} onClick = {this.submit}>Submit</button> </td>
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
          </div>
        </div>


			)
	}
}



function mapStateToProps(state){
  console.log('state',state.inititateState);
  return {
    authenticateState :  state.inititateState.authenticateState,
    email : state.inititateState.email,
    accountType : state.inititateState.accountType,
    vendorId : state.inititateState.vendorId,
    name : state.inititateState.name,
    mobile : state.inititateState.mobile,
    image : state.inititateState.image,
    vendorId : state.inititateState.vendorId,
    adminStatus : state.inititateState.adminStatus,
    address : state.inititateState.address,
    city : state.inititateState.city,
    streetName : state.inititateState.streetName,
    storeEmail : state.inititateState.storeEmail,
    storeName : state.inititateState.storeName,
    // featured :  state.inititateState.featured,
  }
}

function mapDispatchToProps(dispatch){
  return {
    authenticate : bindActionCreators(action.authenticate , dispatch)
  }
}

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(Vendordetailpage));