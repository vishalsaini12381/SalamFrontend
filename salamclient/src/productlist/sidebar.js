import React from 'react';
import ReactDOM from 'react-dom';
import './list.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
// import Sidebar from './sidebar';
const URL = process.env.REACT_APP_LOCAL;

class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      productList : [],
      specificationList : [],
    }
    this.fetchProduct = this.fetchProduct.bind(this);
    this.fetchSpecification = this.fetchSpecification.bind(this)    
  }

  componentWillMount(){
    this.fetchSpecification();
    this.fetchProduct();
  }

  fetchProduct(){
    axios.post(URL+'/api/user/fetchProduct').then((response)=>{
      console.log('this.response',response.data.product);
      this.setState({
        productList : response.data.product
      })
    })
  }

  fetchSpecification(){
    let obj = {};
    obj.subCategoryId = "5d7215b1c86f411656184ccd"
    axios.post(URL+'/api/user/fetchSpecification',obj).then((response)=>{
      console.log('this.sidebar',response.data.doc)
      this.setState({
        specificationList : response.data.doc
      })
    })
  }

	render(){
    console.log('this.productList',this.state.productList);
		return(
      <div className = "row">
        <section className="col-main col-sm-9 col-sm-push-3 wow bounceInUp animated productlist-fluid">
          <div className="category-title">
            {/* <h1>Men T-Shirt</h1> */}
            <div className="breadcrumbs">
			      <div className="row">
			        <ul>
			          <li className="home"> <a href="/" title="Go to Home Page">Home</a><span>/</span></li>
			          {/* <li className=""> <a href="#" title="Go to Home Page">Men Fashion</a><span>/</span></li> */}
			          {/* <li className="category13"> Men T-Shirt</li> */}
			        </ul>
			    </div>
			 </div>
          </div>
          <div className="category-products">
            <ul className="products-grid">
                  { 
                    // this.state.productList > 0 ?
                    this.state.productList.map((e,i)=>{
                      return(
                        <React.Fragment key = {i}>
                    
                  
                    <li className="item col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <div className="col-item">
                  <div className="product-image-area"> <a className="product-image" title="Sample Product" href="#"> <img src= {e.file1} className="img-responsive" style = {{height : '200px',width: '200px'}} alt="a" /> </a>
                    <div className="hover_fly"> <a className="exclusive ajax_add_to_cart_button" href="/Shoppingcart" title="Add Cart">
                      <div><i className="icon-shopping-cart"></i><span><i className="fa fa-shopping-bag"></i> Add Cart</span></div>
                      </a> <a className="quick-view" href="/Shoppingcart">
                      <div><i className="icon-eye-open"></i><span><i className="fa fa-heart"></i></span></div>
                      </a> </div>
                  </div>
      <div className="info">
                    <div className="info-inner">
                    <div className="row">
                    <div className="col-sm-7">
                      <div className="item-title"> <Link to = "/Productdetail" title=" Sample Product" > {e.productName} </Link> </div>
                     </div>
                    <div className="col-sm-5">
                      <div className="price-box pricepart"><p className="special-price"> <span className="price"> $ {e.productPrice} </span> </p><p className="old-price"> <span className="price-sep">-</span> <span class="price"> </span> </p></div>
                     </div>
                     </div>
                      <div className="item-content">
                        <div className="price-box">
                          <p className="special-price"> <span className="price"> {e.brandName} </span></p>
                          {/* <p className="special-price"> <span className="price"> Size: </span><a href="#">M</a>,<a href="#">X</a>,<a href="#">L</a>,<a href="#">XL</a> </p> */}
                        </div>
                      </div>
                    </div>
                    
                    <div className="clearfix"> </div>
                  </div>
                  </div>
                  </li>
                  </React.Fragment>
                      )
                    })
                  // :<div> No Products Founnd </div>

                  } 
             
              {/* <li className="item col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <div className="col-item">
                  
                  <div className="product-image-area"> <a className="product-image" title="Sample Product" href="#"> <img src="./images/tshirt/2.png" className="img-responsive" alt="a" /> </a>
                    <div className="hover_fly"> <a className="exclusive ajax_add_to_cart_button" href="/Shoppingcart" title="Add Cart">
                      <div><i className="icon-shopping-cart"></i><span><i className="fa fa-shopping-bag"></i> Add Cart</span></div>
                      </a> <a className="quick-view" href="#">
                      <div><i className="icon-eye-open"></i><span><i className="fa fa-heart"></i></span></div>
                      </a> </div>
                  </div>
      <div className="info">
                    <div className="info-inner">
                    <div className="row">
                    <div className="col-sm-7">
                      <div className="item-title"> <Link to  = '/Productdetail' title=" Sample Product" > Sample Product </Link> </div>
                     </div>
                    <div className="col-sm-5">
                      <div className="price-box pricepart"><p className="special-price"> <span className="price"> $45.00 </span> </p><p className="old-price"> <span className="price-sep">-</span> <span class="price"> $50.00 </span> </p></div>
                     </div>
                     </div>
                      <div className="item-content">
                        <div className="price-box">
                          <p className="special-price"> <span className="price"> Addidas </span></p>
                          <p className="special-price"> <span className="price"> Size: </span><a href="#">M</a>,<a href="#">X</a>,<a href="#">L</a>,<a href="#">XL</a> </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="clearfix"> </div>
                  </div>
                </div>
              </li> */}
              {/* <li className="item col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <div className="col-item">
                  
                  <div className="product-image-area"> <a className="product-image" title="Sample Product" href="#"> <img alt="a" className="img-responsive" src="./images/tshirt/3.png" /> </a>
                    <div className="hover_fly"> <a className="exclusive ajax_add_to_cart_button" href="/Shoppingcart" title="Add Cart">
                      <div><i className="icon-shopping-cart"></i><span><i className="fa fa-shopping-bag"></i> Add Cart</span></div>
                      </a> <a className="quick-view" href="#">
                      <div><i className="icon-eye-open"></i><span><i className="fa fa-heart"></i></span></div>
                      </a> </div>
                  </div>
      <div className="info">
                    <div className="info-inner">
                    <div className="row">
                    <div className="col-sm-7">
                      <div className="item-title"> <a title=" Sample Product" href="#"> Sample Product </a> </div>
                     </div>
                    <div className="col-sm-5">
                      <div className="price-box pricepart"><p className="special-price"> <span className="price"> $45.00 </span> </p><p className="old-price"> <span className="price-sep">-</span> <span class="price"> $50.00 </span> </p></div>
                     </div>
                     </div>
                      <div className="item-content">
                        <div className="price-box">
                          <p className="special-price"> <span className="price"> Addidas </span></p>
                          <p className="special-price"> <span className="price"> Size: </span><a href="#">M</a>,<a href="#">X</a>,<a href="#">L</a>,<a href="#">XL</a> </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="clearfix"> </div>
                  </div>
                </div>
              </li> */}
              {/* <li className="item col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <div className="col-item">
                  
                  <div className="product-image-area"> <a className="product-image" title="Sample Product" href="#"> <img alt="a" className="img-responsive" src="./images/tshirt/4.png" /> </a>
                    <div className="hover_fly"> <a className="exclusive ajax_add_to_cart_button" href="/Shoppingcart" title="Add Cart">
                      <div><i className="icon-shopping-cart"></i><span><i className="fa fa-shopping-bag"></i> Add Cart</span></div>
                      </a> <a className="quick-view" href="#">
                      <div><i className="icon-eye-open"></i><span><i className="fa fa-heart"></i></span></div>
                      </a> </div>
                  </div>
      <div className="info">
                    <div className="info-inner">
                    <div className="row">
                    <div className="col-sm-7">
                      <div className="item-title"> <a title=" Sample Product" href="#"> Sample Product </a> </div>
                     </div>
                    <div className="col-sm-5">
                      <div className="price-box pricepart"><p className="special-price"> <span className="price"> $45.00 </span> </p><p className="old-price"> <span className="price-sep">-</span> <span class="price"> $50.00 </span> </p></div>
                     </div>
                     </div>
                      <div className="item-content">
                        <div className="price-box">
                          <p className="special-price"> <span className="price"> Addidas </span></p>
                          <p className="special-price"> <span className="price"> Size: </span><a href="#">M</a>,<a href="#">X</a>,<a href="#">L</a>,<a href="#">XL</a> </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="clearfix"> </div>
                  </div>
                </div>
              </li> */}
              {/* <li className="item col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <div className="col-item">
                  
                  <div className="product-image-area"> <a className="product-image" title="Sample Product" href="#"> <img alt="a" className="img-responsive" src="./images/tshirt/5.png" /> </a>
                    <div className="hover_fly"> <a className="exclusive ajax_add_to_cart_button" href="/Shoppingcart" title="Add Cart">
                      <div><i className="icon-shopping-cart"></i><span><i className="fa fa-shopping-bag"></i> Add Cart</span></div>
                      </a> <a className="quick-view" href="#">
                      <div><i className="icon-eye-open"></i><span><i className="fa fa-heart"></i></span></div>
                      </a> </div>
                  </div>
      <div className="info">
                    <div className="info-inner">
                    <div className="row">
                    <div className="col-sm-7">
                      <div className="item-title"> <a title=" Sample Product" href="#"> Sample Product </a> </div>
                     </div>
                    <div className="col-sm-5">
                      <div className="price-box pricepart"><p className="special-price"> <span className="price"> $45.00 </span> </p><p className="old-price"> <span className="price-sep">-</span> <span class="price"> $50.00 </span> </p></div>
                     </div>
                     </div>
                      <div className="item-content">
                        <div className="price-box">
                          <p className="special-price"> <span className="price"> Addidas </span></p>
                          <p className="special-price"> <span className="price"> Size: </span><a href="#">M</a>,<a href="#">X</a>,<a href="#">L</a>,<a href="#">XL</a> </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="clearfix"> </div>
                  </div>
                </div>
              </li> */}
              {/* <li className="item col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <div className="col-item">
                  <div className="new-label new-top-right">New</div>
                  <div className="product-image-area"> <a className="product-image" title="Sample Product" href="#"> <img alt="a" className="img-responsive" src="./images/tshirt/6.png" /> </a>
                    <div className="hover_fly"> <a className="exclusive ajax_add_to_cart_button" href="/Shoppingcart" title="Add Cart">
                      <div><i className="icon-shopping-cart"></i><span><i className="fa fa-shopping-bag"></i> Add Cart</span></div>
                      </a> <a className="quick-view" href="#">
                      <div><i className="icon-eye-open"></i><span><i className="fa fa-heart"></i></span></div>
                      </a> </div>
                  </div>
      <div className="info">
                    <div className="info-inner">
                    <div className="row">
                    <div className="col-sm-7">
                      <div className="item-title"> <a title=" Sample Product" href="#"> Sample Product </a> </div>
                     </div>
                    <div className="col-sm-5">
                      <div className="price-box pricepart"><p className="special-price"> <span className="price"> $45.00 </span> </p><p className="old-price"> <span className="price-sep">-</span> <span class="price"> $50.00 </span> </p></div>
                     </div>
                     </div>
                      <div className="item-content">
                        <div className="price-box">
                          <p className="special-price"> <span className="price"> Addidas </span></p>
                          <p className="special-price"> <span className="price"> Size: </span><a href="#">M</a>,<a href="#">X</a>,<a href="#">L</a>,<a href="#">XL</a> </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="clearfix"> </div>
                  </div>
                </div>
              </li>
              <li className="item col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <div className="col-item">
                  
                  <div className="product-image-area"> <a className="product-image" title="Sample Product" href="#"> <img alt="a" className="img-responsive" src="./images/tshirt/7.png" /> </a>
                    <div className="hover_fly"> <a className="exclusive ajax_add_to_cart_button" href="/Shoppingcart" title="Add Cart">
                      <div><i className="icon-shopping-cart"></i><span><i className="fa fa-shopping-bag"></i> Add Cart</span></div>
                      </a> <a className="quick-view" href="#">
                      <div><i className="icon-eye-open"></i><span><i className="fa fa-heart"></i></span></div>
                      </a> </div>
                  </div>
      <div className="info">
                    <div className="info-inner">
                    <div className="row">
                    <div className="col-sm-7">
                      <div className="item-title"> <Link to title=" Sample Product" href="/Productdetail"> Sample Product </Link> </div>
                     </div>
                    <div className="col-sm-5">
                      <div className="price-box pricepart"><p className="special-price"> <span className="price"> $45.00 </span> </p><p className="old-price"> <span className="price-sep">-</span> <span class="price"> $50.00 </span> </p></div>
                     </div>
                     </div>
                      <div className="item-content">
                        <div className="price-box">
                          <p className="special-price"> <span className="price"> Addidas </span></p>
                          <p className="special-price"> <span className="price"> Size: </span><a href="#">M</a>,<a href="#">X</a>,<a href="#">L</a>,<a href="#">XL</a> </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="clearfix"> </div>
                  </div>
                </div>
              </li>
              <li className="item col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <div className="col-item">
                  
                  <div className="product-image-area"> <a className="product-image" title="Sample Product" href="#"> <img alt="a" className="img-responsive" src="./images/tshirt/8.png" /> </a>
                    <div className="hover_fly"> <a className="exclusive ajax_add_to_cart_button" href="/Shoppingcart" title="Add Cart">
                      <div><i className="icon-shopping-cart"></i><span><i className="fa fa-shopping-bag"></i> Add Cart</span></div>
                      </a> <a className="quick-view" href="#">
                      <div><i className="icon-eye-open"></i><span><i className="fa fa-heart"></i></span></div>
                      </a> </div>
                  </div>
      <div className="info">
                    <div className="info-inner">
                    <div className="row">
                    <div className="col-sm-7">
                      <div className="item-title"> <a title=" Sample Product" href="#"> Sample Product </a> </div>
                     </div>
                    <div className="col-sm-5">
                      <div className="price-box pricepart"><p className="special-price"> <span className="price"> $45.00 </span> </p><p className="old-price"> <span className="price-sep">-</span> <span class="price"> $50.00 </span> </p></div>
                     </div>
                     </div>
                      <div className="item-content">
                        <div className="price-box">
                          <p className="special-price"> <span className="price"> Addidas </span></p>
                          <p className="special-price"> <span className="price"> Size: </span><a href="#">M</a>,<a href="#">X</a>,<a href="#">L</a>,<a href="#">XL</a> </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="clearfix"> </div>
                  </div>
                </div>
              </li>
              <li className="item col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <div className="col-item">
                  
                  <div className="product-image-area"> <a className="product-image" title="Sample Product" href="#"> <img src="./images/tshirt/9.png" className="img-responsive" alt="a" /> </a>
                    <div className="hover_fly"> <a className="exclusive ajax_add_to_cart_button" href="/Shoppingcart" title="Add Cart">
                      <div><i className="icon-shopping-cart"></i><span><i className="fa fa-shopping-bag"></i> Add Cart</span></div>
                      </a> <a className="quick-view" href="#"><div><i className="icon-eye-open"></i><span><i className="fa fa-heart"></i></span></div></a>
                    </div>
                  </div>
                  <div className="info">
                    <div className="info-inner">
                    <div className="row">
                    <div className="col-sm-7">
                      <div className="item-title"> <a title=" Sample Product" href="#"> Sample Product </a> </div>
                     </div>
                    <div className="col-sm-5">
                      <div className="price-box pricepart"><p className="special-price"> <span className="price"> $45.00 </span> </p><p className="old-price"> <span className="price-sep">-</span> <span class="price"> $50.00 </span> </p></div>
                     </div>
                     </div>
                      <div className="item-content">
                        <div className="price-box">
                          <p className="special-price"> <span className="price"> Addidas </span></p>
                          <p className="special-price"> <span className="price"> Size: </span><a href="#">M</a>,<a href="#">X</a>,<a href="#">L</a>,<a href="#">XL</a> </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="clearfix"> </div>
                  </div>
                </div>
              </li>
           
           
            */}
            </ul>
          </div>
              
              
              
              {/* <div className="pages">
                  <ul className="pagination">
                    <li><a href="#">Prev</a></li>
                    <li className="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">6</a></li>
                    <li><a href="#">7</a></li>
                    <li><a href="#">8</a></li>
                    <li><a href="#">9</a></li>
                    <li><a href="#">Next</a></li>
                  </ul>
                </div> */}
        </section>
        <aside className="col-left sidebar col-sm-3 col-xs-12 col-sm-pull-9 wow bounceInUp animated">
          <div className="block block-layered-nav">
          <div className="pricebox">
              <h3>Price</h3>
              <label className="price-cart">$10 - $99 
                <input type="radio" name = "price"
                // checked="checked"
                />
                <span className="checkmark"></span>
              </label>
              <label className="price-cart">$100 - $499
                <input type="radio" name = "price"/>
                <span className="checkmark"></span>
              </label>
              <label className="price-cart">$500 - $999
                <input type="radio" name = "price"/>
                <span className="checkmark"></span>
              </label>
          </div>
          <div className="pricebox">
              <h3>Brand</h3>
              <label className="price-cart">Puma 
                <input type="checkbox"
                //  checked="checked"
                />
                <span className="checkmark"></span>
              </label>
              <label className="price-cart">Addidas
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
              <label className="price-cart">Nike
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
              <label className="price-cart">Reebok
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
          </div>
          
          { 
            this.state.specificationList.map((e,i)=>{
            return(
            <React.Fragment key = {i}>
              <div className="pricebox">
              <h3>{e.fieldName}</h3>
              {e.fieldValue.map((r,s)=>{
               return(
              <React.Fragment key = {s} >
                <label className="price-cart">{r.fieldValue}
                <input type= {e.fieldType} />
                <span className="checkmark"></span>
              </label>
              </React.Fragment>
              )
              })}
              </div>
            </React.Fragment>
          )
        })}
          {/* <h3>Size</h3>
              <label className="price-cart">s
                <input type="checkbox"
                //  checked="checked"
                 />
                <span className="checkmark"></span>
              </label>
              <label className="price-cart">M
                <input type="checkbox"
                //  checked="checked"
                 />
                <span className="checkmark"></span>
              </label>
              <label className="price-cart">l
                <input type="checkbox"
                //  checked="checked"
                 />
                <span className="checkmark"></span>
              </label>
              <label className="price-cart">xl
                <input type="checkbox"
                //  checked="checked"
                 />
                <span className="checkmark"></span>
              </label> */}
           {/* </div> */}


              {/* <h3>Size</h3>
              <label className="price-cart">M
                <input type="checkbox"
                //  checked="checked"
                 />
                <span className="checkmark"></span>
              </label> */}
           {/* <div className="pricebox productsize ratingbox">
              <h3>Rating</h3>
              <label className="price-cart">1+ 
                <input type="checkbox" 
                // checked="checked"
                />
                <span className="checkmark"></span>
              </label>
              <label className="price-cart">2+
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
              <label className="price-cart">3+
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
              <label className="price-cart">4+
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
          </div>  */}
          
          
          
          </div> 
          {/* <div className="block block-layered-nav">
          <div className="pricebox">
              <h3>Subcategory</h3>
                     <ul className="level1">
                        <li> <a href="#"> T-Shirts </a> </li>
                        <li> <a href="#"> Casual Shirts </a> </li>
                        <li> <a href="#"> Formal Shirts </a> </li>
                        <li> <a href="#"> Sweetshirts </a> </li>
                        <li> <a href="#"> Sweaters </a> </li>
                        <li> <a href="#"> Jackets </a> </li>
                        <li> <a href="#"> Sport Shoes </a> </li>
                        <li> <a href="#"> Sports Shandals </a> </li>
                        <li> <a href="#"> Wallets </a> </li>
                        <li> <a href="#"> Belts </a> </li>
                        <li> <a href="#"> Perfumes & Body Mists  </a> </li>
                      </ul>
          </div>
          </div> */}
      
      
        </aside>
</div>
			)
	}
}

export default List;