import React from 'react';
import ReactDOM from 'react-dom';
import './loginpage.css';
import validator from 'validator';
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';
import Bootstrap from 'bootstrap';
import {bindActionCreators} from 'redux';
import action from '../action/action';
import {connect} from 'react-redux';
import $ from 'jquery';
const URL = process.env.REACT_APP_LOCAL;

class Loginpage extends React.Component{
   constructor(props){
      super(props);
      this.state = {
        mail : {value : '', isValidate : true, message: ''},
        pass : {value : '', isValidate : true, message: ''},
        type 	 : "User",
        userId  :'',
      }
      this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
      this.loginUser = this.loginUser.bind(this);
   }

   handleChangeFirstName(event){
      const {name,value} = event.target;
      let state = this.state;
      state[name].message = '';
      state[name].value = value;
      this.setState(state);
    }

    valid(){
      let state = this.state;

      if(validator.isEmpty(state.mail.value)){
       state.mail.isValidate = false;
       state.mail.message = 'Please Fill The E-mail';
       this.setState(state);
       return false;
     }
     if(validator.isEmpty(state.pass.value)){
       state.pass.isValidate = false;
       state.pass.message = 'Please Fill The Password';
       this.setState(state);
       return false;
     }
     return true;
    }

    loginUser(event){
      event.preventDefault();
      const isValidate = this.valid();
      if(isValidate){
        let obj = {}
        obj.type = this.state.type;
        //obj.userId = this.state.userId;
        obj.email = this.state['mail'].value;
        obj.password = this.state['pass'].value;
        console.log(';l;llllllljjjjjjjjjj',obj.type);
         axios.post(URL+'/api/user/Login',obj).then((response)=>{
           console.log('#########################',response);
           if(response.data.status === true){
             swal({
              title: "Success!",
              text: response.data.message,
              icon: "success",
              dangerMode: false,
              closeOnClickOutside: false,
            }).then((d)=>{
               console.log('ddddddddddddddddddd',d)
                if(d){
                return window.location = "/"
              }
             })
             if(response){
               //console.log('response.dataresponse.dataresponse.dataresponse.data',response.data)
               this.props.authenticate({
                 type: 'authenticate',
                 payload : response.data
               })
             }
           }else{
             swal("Error",
             `${response.data.message}`,
             "error",
             ).then((d)=>{
               console.log('elselslelelslslslle',d);
             })
           }
         })
       }
     }

	render()	{
    const state = this.state;
		return(
  <div className="main-container col2-right-layout myorder-fluid">
     <div className="container">
         <div className="loginformdesign">
                    <div className="loginsignup">
                          <div className="signupform">
                            <div className="heafingpoint">
                               <h3>Please Login Here!</h3>
                               <div className="formdesign">
                                    <form className="form-inline" onSubmit = {this.loginUser} >
                                      <div className="row">
                                         <div className="col-sm-12">
                                            <div className="form-group">
                                            <input type="email" name = "mail" value = {state.mail.value} onChange = {this.handleChangeFirstName} className="form-control" placeholder="Email Address"/>
                                              <div style={{ fontSize: 13, color: "red" }}>
                                                 {state.mail.message}
                                              </div>
                                            </div>
                                         </div>
                                         <div className="col-sm-12">
                                            <div className="form-group">
                                            <input type="password" className="form-control" name = "pass" value = {state.pass.value} onChange = {this.handleChangeFirstName} placeholder="Password"/>
                                              <div style={{ fontSize: 13, color: "red" }}>
                                                 {state.pass.message}
                                              </div>
                                            </div>
                                         </div>
                                         <div className="col-sm-12">
                                            <div className="form-group">
                                               <button type="submit" className="btn btn-default">Sign In</button>
                                            </div>
                                         </div>
                                         <div className="col-sm-12">
                                            <div className="form-group">
                                               <button type="submit" className="btn btn-default">Forgot Password</button>
                                            </div>
                                         </div>
                                      </div>
                                    </form>
                                    <div className="anotherlink">
                                    <p style={{color:'#1b1111'}}>Don't Have an Account <a href="/Signup" style={{color:'#2480fe'}}>Signup Here</a></p>
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
   console.log('555555555555555555546456563564565646456',state);
    return{
       authenticateState : state.inititateState.authenticateState,
       // type: state.inititateState.type
    }
 }
 
 function mapDispatchToProps(dispatch){
    return {
       authenticate : bindActionCreators(action.authenticate, dispatch)
    }
 }

 export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Loginpage));