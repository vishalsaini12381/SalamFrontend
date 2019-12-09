import React from 'react';
import validator from 'validator';
import swal from 'sweetalert';
import axios from 'axios';
import './forgotpasswordpage.css';
const URL = process.env.REACT_APP_LOCAL;
class Forgotpasswordpage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      otp :{value : "", isValidate: true, message : ""},
      password : {value : "", isValidate : true, message :''},
      cpassword : {value: "", isValidate : true , message: ''},
    }

    this.handleChangeOtp               =   this.handleChangeOtp.bind(this);
    this.handleChangePassword          =   this.handleChangePassword.bind(this);
    this.handleChangeConfirmPassword   =   this.handleChangeConfirmPassword.bind(this);
    this.savePassword                  =   this.savePassword.bind(this);
  }

  handleChangePassword(event){
    const {name, value} = event.target;
    let state = this.state;
    state[name].message = "";
    state[name].value = value;
    this.setState(state);
  }

  handleChangeConfirmPassword(event){
    const{name, value} = event.target;
    let state = this.state;
    state[name].message = "";
    state[name].value = value;
    this.setState(state);
  }

  handleChangeOtp(event){
    const{name,value} = event.target;
    let state = this.state;
    state[name].message = "";
    state[name].value = value;
    this.setState(state);
  }
  
  validate(){
    let state = this.state;

    if(validator.isEmpty(state.otp.value)){
      state.password.isValidate = false;
      state.password.message = "Please Fill The Otp";
      this.setState(state);
      return false;
    }

    if(validator.isEmpty(state.password.value)){
      state.password.isValidate = false;
      state.password.message = "Password Can Not Be Blank";
      this.setState(state);
      return false;
    }

    if(validator.isEmpty(state.cpassword.value)){
      state.cpassword.isValidate = false;
      state.cpassword.message = "Confirm Password Can not be Blank";
      this.setState(state);
      return false;
    }
    if(!validator.equals(state.password.value, state.cpassword.value)){
      state.cpassword.value = false;
      state.cpassword.message = "Password and ConfirmPassword Not Match";
      this.setState(state);
      return false;
    }
    return true;
  }

  savePassword(event){
    event.preventDefault();
    let isValid = this.validate();
    if(isValid){
    var obj = {};
    obj.otp       = this.state['otp'].value;
    obj.password  = this.state['password'].value;
    obj.cpassword = this.state['cpassword'].value;
    console.log('object',obj);

    axios.post(URL+'/api/user/resetPassword',obj).then((response)=>{
      console.log('response',response);
      if(response.data.status === true){
        swal("Successful",
        `${response.data.message}`,
        "success",
        ).then((d)=>{
          console.log('dddddddd',d);
          if(d) return window.location = "/";
        })
      }else{
        swal("Error",
        `${response.data.message}`,
        "error",
        ).then((d)=>{
          console.log('fffffffffffff',d);
          if(d) return window.location = "/Forgotpassword";
        })
      }
    })
  }
  }

	render()
	{
    const state = this.state;
		return(
      <div className="Container-fluid forgot-fluid">
        <div className="container">
         <div className="forgotpassword">
           <h3>Choose a New Password</h3>
            <form onSubmit={this.savePassword}>
            <div className="form-group">
                <label for="pwd">Enter Otp</label>
                <input type="password" className="form-control" name = "otp" value = {state.otp.value} onChange = {this.handleChangeOtp} placeholder="Enter Otp" />
                <div style={{ fontSize: 13, color: "red" }}>
                  {state.otp.message}
                </div>
              </div>
              <div className="form-group">
                <label for="pwd">New Password</label>
                <input type="password" className="form-control" name = "password" value = {state.password.value} onChange = {this.handleChangePassword} placeholder="Enter password" />
                <div style={{ fontSize: 13, color: "red" }}>
                  {state.password.message}
                </div>
              </div>
              <div className="form-group">
                <label for="pwd">Confirm New Password</label>
                <input type="password" className="form-control" name = "cpassword" value = {state.cpassword.value} onChange = {this.handleChangePassword}  placeholder="Enter Confirm password" />
                <div style={{ fontSize: 13, color: "red" }}>
                  {state.cpassword.message}
                </div>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
         </div>
        </div>
      </div>

			)
	}
}

export default Forgotpasswordpage;