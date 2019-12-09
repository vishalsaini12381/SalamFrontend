import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import swal from 'sweetalert';
import validator from 'validator';
import $ from 'jquery';
import action from '../action/action';
import './profiledetail.css';
const URL = process.env.REACT_APP_LOCAL;

class Profiledetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstName : {value : this.props.firstName, isValidate : true, message : ''},
      lastName :  {value: this.props.lastName, isValidate : true,message : ''},
      mobile : {value : this.props.mobile, isValidate : true, message : ''},
      gender :  {value: this.props.gender, isValidate: true, message : ''},
      dob :  {value: this.props.dob, isValidate: true, message: ''},
      streetAddress : {value: this.props.streetAddress, isValidate: true, message: ''},
      zipcode  :  {value: this.props.zipcode, isValidate: true, message: ''},
      city :  {value: this.props.city, isValidate: true, message: ''},
      state :  {value: this.props.state, isValidate: true, message: ''},
      country :  {value: this.props.country, isValidate: true, message: ''}
    }
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.handleChangeMobile = this.handleChangeMobile.bind(this);
  }

  handleChange (event){
    const{name,value} = event.target;
    let state = this.state;
    state[name].message = '';
    state[name].value = value;
    this.setState(state);
  }

  handleChangeMobile (event){
    const{name,value} = event.target;
    let state = this.state;
    state[name].message = '';
    state[name].value = value;
    this.setState(state);
  }

  // validate (){
  //   let state = this.state;
    // if (validator.isEmpty(state.firstName.value)){
    //   state.firstName.isValidate = false;
    //   state.firstName.message = 'First Name Required';
    //   this.setState(state);
    //   return false;
    // }

    // if (validator.isEmpty(state.lastName.value)){
    //   state.lastName.isValidate = false;
    //   state.lastName.message = 'Please Fill The Last Name';
    //   this.setState(state);
    //   return false;
    // }
    // if(validator.isEmpty(state.mobile.value)){
    //   state.mobile.isValidate = false;
    //   state.mobile.message = 'Please Fill The Mobile';
    //   this.setState(state);
    //   return false;
    // }
    // if(!validator.isNumeric(state.mobile.value)){
    //   state.mobile.isValidate = false;
    //   state.mobile.message = 'Must be Number';
    //   this.setState(state);
    //   return false;
    // }
    // if(validator.isEmpty(state.dob.value)){
    //   state.dob.isValidate = false;
    //   state.dob.message = 'Please Fill The Date of birth';
    //   this.setState(state);
    //   return false;
    // }
    // if(validator.isEmpty(state.gender.value)){
    //   state.gender.isValidate = false;
    //   state.gender.message = 'Please Select Your gender';
    //   this.setState(state);
    //   return false;
    // }   
    //  if(validator.isEmpty(state.streetAddress.value)){
    //   state.streetAddress.isValidate = false;
    //   state.streetAddress.message = 'Please Fill The StreetAddress';
    //   this.setState(state);
    //   return false;
    // }   
    //  if(validator.isEmpty(state.city.value)){
    //   state.city.isValidate = false;
    //   state.city.message = 'Please Fill The City';
    //   this.setState(state);
    //   return false;
    // }  
    //   if(validator.isEmpty(state.zipcode.value)){
    //   state.zipcode.isValidate = false;
    //   state.zipcode.message = 'Please Fill The Zip Code';
    //   this.setState(state);
    //   return false;
    // }
    // if(validator.isEmpty(state.state.value)){
    //   state.state.isValidate = false;
    //   state.state.message = 'Please Fill The State';
    //   this.setState(state);
    //   return false;
    // }
    // if(validator.isEmpty(state.country.value)){
    //   state.country.isValidate = false;
    //   state.country.message = 'Please Fill The Country';
    //   this.setState(state);
    //   return false;
    // }
  // }

  submit(event){
    event.preventDefault();
    // let isValid = this.validate();
    // if(isValid){
    let obj = {};
    obj.type = this.props.Type;
    obj.email = this.props.email;
    obj.firstName = this.state['firstName'].value;
    obj.lastName = this.state['lastName'].value;
    obj.mobile = this.state['mobile'].value;
    obj.gender = this.state['gender'].value;
    obj.dob = this.state['dob'].value;
    obj.streetAddress =this.state['streetAddress'].value;
    obj.zipcode  = this.state['zipcode'].value;
    obj.city =  this.state['city'].value;
    obj.state = this.state['state'].value;
    obj.country  = this.state['country'].value;
    console.log('88888888888888888888888',obj);

    axios.post(URL+'/api/user/userProfile',obj).then((response)=>{
      console.log('33333333333333333',response);
      if(response.data.status === true){
        // axios.post('http://3.92.136.66:4000/api/fetchUser').then((doc)=>{
      // console.log('22222222222222222',doc);
          if(response){
            this.props.authenticate({
              type : 'authenticate',
              payload : response.data
            })
          }
        // })
        swal("Successful",
        `${response.data.message}`,)
        .then((d)=>{
          return window.location = '/Myprofile'
        })
      }else{
        swal("Error",
        `${response.data.message}`,
        ).then((d)=>{
          return this.props.history.replace('/Myprofile')
        })
      }
    })
  // }
  }


	render(){
     const state = this.state;
     console.log('mobile',this.state)
		return(
        <section className="col-main col-sm-9  wow bounceInUp animated profile-fluid">
          <div className="category-title">
               {/* <h1>My Profile<span className="editprofile"><a href="#">Edit Profile</a></span></h1> */}
                 <div className="breadcrumbs">
			                <div className="row">
            			        <ul>
            			          <li className="home"> <a href="/" title="Go to Home Page">Home</a><span>/</span></li>
            			          <li className=""> <a href="#" title="Go to Home Page">My Account</a><span>/</span></li>
            			          <li className="category13"> My Profile</li>
            			        </ul>
			                </div>
			            </div>
                  <div className="profileform">
                    <form onSubmit = {this.submit}>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label for="from">First Name</label>
                              <input type="text" className="form-control" name = "firstName" value ={state.firstName.value} onChange = {this.handleChange} placeholder="Akram"  />
                              {/* <div style={{ fontSize: 13, color: "red" }}>
                                                 {state.firstName.message}
                                              </div> */}
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label for="from">Last Name</label>
                              <input type="text" className="form-control" name = "lastName" value = {state.lastName.value} onChange = {this.handleChange} placeholder="Khan"  />
                              {/* <div style={{ fontSize: 13, color: "red" }}>
                               {state.lastName.message}
                              </div> */}
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label for="from">Email Id</label>
                              <input type="text" className="form-control" value = {this.props.email} disabled />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label for="from">Mobile No.</label>
                              <input type="text" className="form-control" name = "mobile" value = {state.mobile.value} onChange = {this.handleChange} placeholder="Khan"  />
                              {/* <div style={{ fontSize: 13, color: "red" }}>
                               {state.mobile.message}
                              </div> */}
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label for="to">Date of Birth</label>
                              <input type="date" className="form-control" id="dateofbirth" name = 'dob' value = {state.dob.value} onChange = {this.handleChange} />
                              {/* <div style={{ fontSize: 13, color: "red" }}>
                               {state.dob.message}
                              </div> */}
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                                <label for="status">Gender</label>
                                      <select className="form-control" name = "gender" value = {state.gender.value} onChange = {this.handleChange} >
                                      <option value ="" hidden selected>Select</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                     </select>
                                     {/* <div style={{ fontSize: 13, color: "red" }}>
                               {state.gender.message}
                              </div> */}
                            </div>
                          </div>
                        </div>
                          
                    </form>

                  </div>

          </div>
          <div className="category-title">
               <h1>Address Information</h1>
                  <div className="profileform">
                    <form onSubmit = {this.submit} >
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label for="from">Street Address</label>
                              <input type="text" className="form-control" name = "streetAddress" value = {state.streetAddress.value} onChange = {this.handleChange} placeholder="101 HMK Road"  />
                              {/* <div style={{ fontSize: 13, color: "red" }}>
                               {state.streetAddress.message}
                              </div> */}
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label for="from">City</label>
                              <input type="text" className="form-control" placeholder="Dubai" name = "city" value =  {state.city.value}  onChange = {this.handleChange} />
                              {/* <div style={{ fontSize: 13, color: "red" }}>
                               {state.city.message}
                              </div> */}
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label for="from">State</label>
                              <input type="text" className="form-control" placeholder="Dubai" name = "state" value =  {state.state.value}  onChange = {this.handleChange} />
                              {/* <div style={{ fontSize: 13, color: "red" }}>
                               {state.state.message}
                              </div> */}
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label for="from">Zip Code</label>
                              <input type="text" className="form-control" placeholder="321014" name = "zipcode"  value =  {state.zipcode.value}  onChange = {this.handleChange} />
                              {/* <div style={{ fontSize: 13, color: "red" }}>
                               {state.zipcode.message}
                              </div> */}
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                                <label for="status">Country</label>
                              <input type="text" className="form-control" placeholder="country" name = "country"  value =  {state.country.value}  onChange = {this.handleChange} />
                              {/* <div style={{ fontSize: 13, color: "red" }}>
                               {state.country.message}
                              </div>      */}
                                      {/* <select className="form-control"  >
                                        <option>1</option>
                                        <option>2</option>
                                     </select> */}
                            </div>
                          <button type = 'submit' className = "btn btn-primary" style = {{marginLeft : 310 }} onClick = {this.submit}  >submit</button>
                          </div>
                        </div>
                    </form>

                  </div>

          </div>
        </section>


			)
	}
}

function mapStateToProps(state){
  console.log('jdgfdshfdsjhgvfdscvsdvch',state.inititateState)
  return {
    authenticateState : state.inititateState.authenticateState,
    email : state.inititateState.email,
    Type  : state.inititateState.Type,
    firstName : state.inititateState.firstName,
    lastName : state.inititateState.lastName,
    gender  : state.inititateState.gender,
    dob : state.inititateState.dob,
    mobile : state.inititateState.mobile,
    streetAddress : state.inititateState.streetAddress,
    zipcode  : state.inititateState.zipcode,
    city : state.inititateState.city,
    state : state.inititateState.state,
    country : state.inititateState.country
  }
}

function mapDispatchToProps(dispatch){
  return {
    authenticate :  bindActionCreators(action.authenticate , dispatch)
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Profiledetail));