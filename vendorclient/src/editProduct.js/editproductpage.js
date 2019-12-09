import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import action from '../action/action';
import validator from 'validator';
import axios from 'axios';
import swal from 'sweetalert';
import './editproductpage.css';
import { access } from 'fs';
import action from '../action/action';
const URL = process.env.REACT_APP_LOCAL;
class Editproductpage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
          businesscategory : {value: this.props.businesscategory, isValidate: true, message:''},
          category     : {value: this.props.category, isValidate: true, message:''},
          subCategory  : {value: this.props.subCategory, isValidate: true, message: ''},
          productName  : {value: this.props.productName, isValidate: true, message: ''},
          brandName    : {value: this.props.brandName, isValidate: true, message: ''},
          productPrice : {value: this.props.productPrice, isValidate: true, message: ''},
          quantity     : {value: this.props.quantity, isValidate: true, message: ''},
          discount     : {value: this.props.discount, isValidate: true, message: ''},
          aboutProduct : {value: this.props.aboutProduct, isValidate: true, message: ''},
          // file         : '',
          file1 : this.props.file1,
          file2 : this.props.file2,
          file3 : this.props.file3,
          file4 : this.props.file4,

    }
    this.handleChange = this.handleChange.bind(this);
    this.submit       = this.submit.bind(this);
    this.handleChageImage1 = this.handleChageImage1.bind(this);
    this.handleChageImage2 = this.handleChageImage2.bind(this);
    this.handleChageImage3 = this.handleChageImage3.bind(this);
    this.handleChageImage4 = this.handleChageImage4.bind(this);
  }

  handleChange(event){
    const{name,value} = event.target;
    let state = this.state;
    state[name].message = '';
    state[name].value = value;
    this.setState(state);
  }

  handleChageImage1(e){
    e.preventDefault();
    var aa = '';
    let reader = new FileReader();
    let data = e.target.files[0];
    reader.readAsDataURL(data);
    reader.onloadend = ()=>{
      aa = reader.result;
      this.setState({file1: aa})
    }
  }  

  handleChageImage2(e){
    e.preventDefault();
    var aa = '';
    let reader = new FileReader();
    let data = e.target.files[0];
    reader.readAsDataURL(data);
    reader.onloadend = ()=>{
      aa = reader.result;
      this.setState({file2: aa})
    }
  }  

  handleChageImage3(e){
    e.preventDefault();
    var aa = '';
    let reader = new FileReader();
    let data = e.target.files[0];
    reader.readAsDataURL(data);
    reader.onloadend = ()=>{
      aa = reader.result;
      this.setState({file3: aa})
    }
  }  

  handleChageImage4(e){
    e.preventDefault();
    var aa = '';
    let reader = new FileReader();
    let data = e.target.files[0];
    reader.readAsDataURL(data);
    reader.onloadend = ()=>{
      aa = reader.result;
      this.setState({file4: aa})
    }
  }  

  validate(){
    let state = this.state;

    if(validator.isEmpty(state.category.value)){
      state.category.isValidate = false;
      state.category.message = 'Please Select The Category';
      this.setState(state);
      return false;
    }
    if(validator.isEmpty(state.subCategory.value)){
      state.subCategory.isValidate = false;
      state.subCategory.message = 'Please Select The SUB-Category';
      this.setState(state);
      return false;
    }
    if(validator.isEmpty(state.productName.value)){
      state.productName.isValidate = false;
      state.productName.message = 'Please Fill The Product Name';
      this.setState(state);
      return false;
    }
    if(validator.isEmpty(state.brandName.value)){
      state.brandName.isValidate = false;
      state.brandName.message = "Please Fill The Brand Name";
      this.setState(state);
      return false;
    }
    if(validator.isEmpty(state.productPrice.value)){
      state.productPrice.isValidate = false;
      state.productPrice.message = "Please Fill The Price";
      this.setState(state);
      return false;
    }
    if(validator.isEmpty(state.quantity.value)){
      state.quantity.isValidate = false;
      state.quantity.message = "Please Fill The Quantity Of Product";
      this.setState(state);
      return false;
    }
    if(validator.isEmpty(state.discount.value)){
      state.discount.isValidate = false;
      state.discount.message = "Please Fill The Discount Rate";
      this.setState(state);
      return false;
    }
    if(!validator.isEmpty(state.aboutProduct.value)) {
      if(!validator.isLength(state.aboutProduct.value, 100, 1000)){
      state.aboutProduct.isValidate = false;
      state.aboutProduct.message = 'Description must be of 100- 1000 characters'
      this.setState(state);
       return false;
      }
      // return false;

   }else{
      state.aboutProduct.isValidate = false;
      state.aboutProduct.message = 'Job Description cannot be blank'
      this.setState(state);
      return false;
   }
    return true;
  }

  submit(event){
    event.preventDefault();
    let isValid = this.validate();
    if(isValid){
      let obj = {};
      obj.productId = this.props.productId;
      obj.businesscategory = this.state['businesscategory'].value;
      obj.category = this.state['category'].value;
      obj.subCategory = this.state['subCategory'].value;
      obj.productName = this.state['productName'].value;
      obj.brandName = this.state['brandName'].value;
      obj.productPrice = this.state['productPrice'].value;
      obj.quantity = this.state['quantity'].value;
      obj.discount = this.state['discount'].value;
      obj.aboutProduct = this.state['aboutProduct'].value;
      obj.file1 = this.state.file1;
      obj.file2 = this.state.file2;
      obj.file3 = this.state.file3;
      obj.file4 = this.state.file4;

      console.log('objjjjjjjjjjjjjjjjj',obj);
      axios.post(URL+'/api/vendor/editProduct',obj).then((response)=>{
        console.log('++++++++++++++++++++++++++++++',response);
        if(response.data.status === true){
          swal("Successful",
          `${response.data.message}`,
          "success",).then((d)=>{
            if(d) {
              return this.props.history.replace('/Productlist');
            }
          })
          if(response){
            console.log('this.props.product',this.props.product);
            this.props.product({
              type: 'product',
              payload: response.data
            })
          }
        }else{
          swal("Error",
         `${response.data.message}`,
         "error", ).then((d)=>{
           if(d){
             return window.location = "/Editproductpage"
           }
         })
        }
      })
    }
  }


	render(){
    // console.log('XXXXXXXXXXXXXXXXXXXXXXX',this.props.productId);
    const state = this.state;
		return(
        <div className="my-3 my-md-5">
          <div className="container">
            <div className="page-header">
              <h4 className="page-title">Edit New Product</h4>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/Dashboard">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Edit Product</li>
              </ol>
            </div>
            <div className="row">
              <div className="col-12">
                <form  method="post" className="card" onSubmit = {this.submit}>
                  <div className="card-header">
                    <h3 className="card-title">Hi ! Vendor Update Your  Product</h3>
                  </div>
                  <div className="card-body">
                    <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <div className="form-group">
                          <label className="form-label">Business Category</label>
                          <select name="Category"  className="form-control custom-select" name = "businesscategory" value = {state.businesscategory.value} onChange = {this.handleChange}>
                           <option>{this.props.businesscategory}</option>
                          </select>
                        </div>
                    </div>
                      <div className="col-md-6 col-lg-6">
                        <div className="form-group">
                          <label className="form-label">Category</label>
                          <select name="Category"  className="form-control custom-select" name = "category" value = {state.category.value} onChange = {this.handleChange}>
                           <option>{this.props.category}</option>
                          </select>
                        </div>
                    </div>
                      <div className="col-md-6 col-lg-6">
                        <div className="form-group">
                          <label className="form-label">Select Sub Category</label>
                          <select name="Category"  className="form-control custom-select" name = "subCategory" value={state.subCategory.value} onChange = {this.handleChange}>
                            {/* <option value= "" hidden selected>Select</option> */}
                            <option >{this.props.subCategory}</option>
                            
                          </select>
                          
                        </div>
                    </div>
                      <div className="col-md-6 col-lg-6">
                        <div className="form-group">
                          <label className="form-label">Product Name </label>
                          <input type="text" className="form-control" name="productName" value = {state.productName.value} onChange = {this.handleChange}/>
                          
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-6">
                        <div className="form-group">
                          <label className="form-label">Brand Name </label>
                          <input type="text" className="form-control" name="brandName" value={state.brandName.value} onChange = {this.handleChange} />
                          {/* <div style = {{fontSize:13, color:"red"}}>
                            {state.brandName.message} 
                          </div> */}
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4">
                        <div className="form-group">
                          <label className="form-label">Product Price ($) </label>
                          <input type="text" className="form-control" name="productPrice" value={state.productPrice.value} onChange = {this.handleChange} />
                          {/* <div style = {{fontSize:13, color:"red"}}>
                            {state.productPrice.message} 
                          </div> */}
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6">
                        <div className="form-group">
                          <label className="form-label">Total Quantity </label>
                          <input type="text" className="form-control" name="quantity" value = {state.quantity.value} onChange= {this.handleChange} />
                          {/* <div style = {{fontSize:13, color:"red"}}>
                            {state.quantity.message} 
                          </div> */}
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6">
                        <div className="form-group">
                          <label className="form-label">Total Discount (%) </label>
                          <input type="text" className="form-control" name="discount" value = {state.discount.value} onChange = {this.handleChange} />
                          {/* <div style = {{fontSize:13, color:"red"}}>
                            {state.discount.message} 
                          </div> */}
                        </div>
                      </div>

                      {/* <div className="col-md-4 col-lg-4">
                      <div className="form-group">
                         <label className="form-label">Upload Product Image </label>
                          <div className="custom-file">
                           <input type="file"  name = "myImage" id = "file" onChange = {this.handleChageImage}   className="custom-file-input"  />
                            <label className="custom-file-label">Choose file</label>
                           </div>
                        </div>
                      </div> */}
                      <div className="col-md-3 col-lg-3">
                      <div className="form-group">
                         <label className="form-label">Upload Product Image </label>
                          <div className="custom-file">
                           <input type="file"  name = "myImage" id = "file" accept="image/*" onChange = {this.handleChageImage1}   className="custom-file-input"  />
                           <img src={this.state.file1} style = {{height : '270px', width : '220px'}} />
                            <label className="custom-file-label">Choose file</label>
                           </div>
                        </div>
                      
                      </div>
                      <div className="col-md-3 col-lg-3">
                      <div className="form-group">
                         <label className="form-label">Upload Product Image </label>
                          <div className="custom-file">
                           <input type="file"  name = "myImage" id = "file" accept="image/*" onChange = {this.handleChageImage2}   className="custom-file-input"  />
                           <img src={this.state.file2} style = {{height : '270px', width : '220px'}}  />
                            <label className="custom-file-label">Choose file</label>
                           </div>
                        </div>
                      
                      </div>
                      <div className="col-md-3 col-lg-3">
                      <div className="form-group">
                         <label className="form-label">Upload Product Image </label>
                          <div className="custom-file">
                           <input type="file"  name = "myImage" id = "file" accept="image/*" onChange = {this.handleChageImage3}   className="custom-file-input"  />
                           <img src={this.state.file3} style = {{height : '270px', width : '220px'}} />
                            <label className="custom-file-label">Choose file</label>
                           </div>
                        </div>
                      
                      </div>
                      <div className="col-md-3 col-lg-3">
                      <div className="form-group">
                         <label className="form-label">Upload Product Image </label>
                          <div className="custom-file">
                           <input type="file"  name = "myImage" id = "file" accept="image/*"  onChange = {this.handleChageImage4}   className="custom-file-input"  />
                           <img src={this.state.file4} style = {{height : '270px', width : '220px'}}  />                            
                            <label className="custom-file-label">Choose file</label>
                           </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12"  style = {{paddingTop : '120px' }}>
                        <div className="form-group">
                          <label className="form-label">About Product </label>
                          <textarea className="form-control" name="aboutProduct" value = {state.aboutProduct.value} onChange = {this.handleChange} rows="6" placeholder="text here.."></textarea>
                          {/* <div style = {{fontSize:13, color:"red"}}>
                            {state.aboutProduct.message} 
                          </div> */}
                        </div>
                      </div>

                      <div className="col-md-12 col-lg-12">
                      <button type="submit" class="btn btn-primary pull-right">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
			)
	}
}

function mapstateToProps(state){
  console.log('CCCCCCCCCCCCCC',state.productReduce.productId);
  return{
    // productId : state.productReduce.productId,
    authenticateState : state.inititateState.authenticateState,
    userId : state.inititateState.userId,
    file1  : state.productReduce.file1,
    file2  : state.productReduce.file2,
    file3  : state.productReduce.file3,
    file4 : state.productReduce.file4,
    productId : state.productReduce.productId,
    productName : state.productReduce.productName,
    productPrice  : state.productReduce.productPrice,
    discount  :  state.productReduce.discount,
    businesscategory : state.productReduce.businesscategory,
    category : state.productReduce.category,
    subCategory : state.productReduce.subCategory,
    brandName : state.productReduce.brandName,
    quantity : state.productReduce.quantity,
    aboutProduct : state.productReduce.aboutProduct
  }
}

function mapDispatchToProps(dispatch){
	return {
		product : bindActionCreators(action.product, dispatch)
	}
}

export default withRouter(connect(mapstateToProps,mapDispatchToProps)(Editproductpage));