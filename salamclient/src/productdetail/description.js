import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import swal from 'sweetalert';
import './description.css';

// import {Link} from 'react-router-dom';
import axios from 'axios';
const URL = process.env.REACT_APP_LOCAL;

var divStyle = {
  cursor:'pointer',
};
var divStyleDisabled={
  cursor:'no-drop',
}


class Description extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      productDetail : [],
      isCart:0,
      isWishlist:0,
    }
    this.fetchProductDetail = this.fetchProductDetail.bind(this);
  }

  componentWillMount(){
    this.fetchProductDetail();
  }

  fetchProductDetail(){

    let search = window.location.search;
    let params = new URLSearchParams(search);
    let foo = params.get('product');
    this.setState({
      productId : foo
    })

    axios.post(URL+'/api/user/productDetail',{
      productId : foo,
      userId:this.props.userId
    }).then((response)=>{
      console.log('this.responsefdfddfdddddddddd',response.data.productData[0].product);
      this.setState({
        productDetail : response.data.productData[0].product,
        isCart:response.data.productData[0].isCart,
        isWishlist:response.data.productData[0].isWishlist,
      })
    })
  }

  addToCart = (productId,userId,price,discount,action) => {
  //console.log(productId+'/'+userId+'/'+price+'/'+discount);
  axios.post(URL+'/api/user/addToCart',{
    userId : userId,
    productId:productId,
    price:price,
    discount:discount,
    quantity:1,
    action:action
  }).then((response)=>{
    //console.log('this.responsefdfddfdddddddddd',response.data.product);
    if(response.data.code==100){
      return window.location.reload()
    }else{
      swal({
        title: "OOPS",
        text: response.data.message,
        icon: "warning",
        dangerMode: true,
        closeOnClickOutside: false,
      }).then((d)=>{
         //console.log('ddddddddddddddddddd',d)
          if(d){
          //return window.location = "/Login"
        }
       })
    }
  })
}

addToWishlist(productId,userId){
  axios.post(URL+'/api/user/addToWishlist',{
    userId : userId,
    productId:productId,
  }).then((response)=>{
    //console.log('this.responsefdfddfdddddddddd',response.data.product);
    if(response.data.code==100){
      return window.location.reload()
    }else{
      swal({
        title: "OOPS",
        text: "Some error found.",
        icon: "warning",
        dangerMode: true,
        closeOnClickOutside: false,
      }).then((d)=>{
         //console.log('ddddddddddddddddddd',d)
          if(d){
          return window.location.reload();
        }
       })
    }
  })
}

onClickDiv = (column) => {
  swal({
    title: "OOPS",
    text: "You need to login first!!!",
    icon: "warning",
    dangerMode: true,
    closeOnClickOutside: false,
  }).then((d)=>{
     console.log('ddddddddddddddddddd',d)
      if(d){
      return window.location = "/Login"
    }
   })
}

	render()
	{
    console.log('productList',this.state.productDetail['aboutProduct']);
		return(
                <div className="product-shop col-lg-7 col-sm-7 col-xs-12">
                <div className="product-heading">
                  <div className="row">
                     <div className="col-lg-6 col-sm-6 col-xs-12">
                        <div className="product-name">
                          <h1>{this.state.productDetail['productName']}</h1>
                          <p>{this.state.productDetail['brandName']}</p>
                        </div>
                        <div className="ratings">
                            <div className="rating-box">
                               <div className="rating"></div>
                            </div>
                        </div>
                      </div>
                  {/* <div className="col-lg-6 col-sm-6 col-xs-12">
                    <div className="vendordetail">
                       <div className="details">
                          <h3>John Smith <span><i class="fa fa-star"></i> 4.5</span></h3>
                          <p><i class="fa fa-map-marker"></i> 101 W 8th Ave Spokne WA 987547</p>
                       </div>
                       <div className="vendorpic">
                         <img src="./images/vendor/1.jpg" alt="vendor photo" />
                       </div>
                    </div>
                  </div> */}
                  </div>
                  </div>
                  <div className="price-block">
                    <div className="price-box">
                    <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> ${(this.state.productDetail['productPrice']-(this.state.productDetail['productPrice']*this.state.productDetail['discount']/100))} </span> </p>
                      <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> ${this.state.productDetail['productPrice']} </span> </p>
                      
                    </div>
                  </div>
                  {/* <div className="productsize">
                     <div className="titles">
                        <h3>Size :</h3>
                     </div>
                     <div className="sizes">
                     <ul>
                       <li><a href="#"> S </a></li>
                       <li className="active"><a href="#"> M </a></li>
                       <li><a href="#"> L </a></li>
                       <li><a href="#"> XL </a></li>
                     </ul>
                     </div>
                  </div> */}
                  <div className="short-description overview-product">
                    <h2>Quick Overview</h2>
                    <p>{this.state.productDetail['aboutProduct']}</p>
                  </div>
                  <div className="add-to-box pro-quantity">
                    <div className="add-to-cart">
                      <div className="pull-left">
                        {/* <div className="custom pull-left">
                          <button onClick="" className="reduced items-count" type="button"><i className="fa fa-minus">&nbsp;</i></button>
                          <input type="text" className="input-text qty" title="Qty" value="1" maxlength="12" id="qty" name="qty"/>
                          <button onClick="" className="increase items-count" type="button"><i className="fa fa-plus">&nbsp;</i></button>
                        </div> */}
                      </div>
                      <div className="email-addto-box adtocart">
                        <ul className="add-to-links">
                        {
                          this.props.userId ? 
                          this.state.isCart ? 
                            <div className="custom pull-left">
                              {
                                this.state.isCart==1 ?
                                <button style={divStyleDisabled} className="reduced items-count" type="button"><i className="fa fa-minus">&nbsp;</i></button>
                                 :
                                <button style={divStyle}  onClick={() => this.addToCart(this.state.productDetail['_id'],this.props.userId,this.state.productDetail['productPrice'],this.state.productDetail['discount'],2)} className="reduced items-count" type="button"><i className="fa fa-minus">&nbsp;</i></button>
                              }
                            
                            <input type="text" className="input-text qty" title="Qty" value={this.state.isCart} maxlength="12" id="qty" name="qty"/>
                            <button style={divStyle}  onClick={() => this.addToCart(this.state.productDetail['_id'],this.props.userId,this.state.productDetail['productPrice'],this.state.productDetail['discount'],1)} className="increase items-count" type="button"><i className="fa fa-plus">&nbsp;</i></button>
                          </div>
                           :
                            <li> <a className="link-wishlist" style={divStyle}  onClick={() => this.addToCart(this.state.productDetail['_id'],this.props.userId,this.state.productDetail['productPrice'],this.state.productDetail['discount'],1)}><span>Add to Cart</span></a></li>
                          :
                            <li> <a className="link-wishlist" style={divStyle} onClick={() => this.onClickDiv(this.state.productDetail['_id'])}><span>Add to Cart</span></a></li>
                        }
                        {
                          this.props.userId ? 
                          this.state.isWishlist ?
                          <li><span className="separator">|</span> <a className="link-compare" style={divStyle}  onClick={() => this.addToWishlist(this.state.productDetail['_id'],this.props.userId)}><span>Remove From Wishlist</span></a></li>
                          :
                          <li><span className="separator">|</span> <a className="link-compare" style={divStyle}  onClick={() => this.addToWishlist(this.state.productDetail['_id'],this.props.userId)}><span>Add to Wishlist</span></a></li>
                        :
                          <li><span className="separator">|</span> <a className="link-compare" style={divStyle} onClick={() => this.onClickDiv(this.state.productDetail['_id'])}><span>Add to Wishlist</span></a></li>
                        }
                          </ul>
                      </div>
                    </div>
                  </div>
                    {/* <div className="product-detail-fluid">
                      <h3>Product Detail</h3>
                      <div className="product-list">
                        <ul>
                        <li><span>color:</span>White</li>
                        <li><span>Type:</span>Round Neck</li>
                        <li><span>Combos:</span>Single</li>
                        <li><span>Fabric:</span>Ployester</li>
                        <li><span>SUPC:</span>SDLS25454556555</li>
                        </ul>
                      </div>
                    </div> */}
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

export default withRouter(connect(mapStateToProps)(Description));
// export default Description;