import React from 'react';
import ReactDOM from 'react-dom';
import './list.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './sidebar.css';
const URL = process.env.REACT_APP_LOCAL;

class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      productList : [],
      specificationList : [],
      specification : [],
      subcategoryids:'',
      filterArr:[],
      filterResult:[],
      filterCheck:[],
    }
    this.fetchProduct = this.fetchProduct.bind(this);
    this.fetchSpecification = this.fetchSpecification.bind(this) 
    // this.hadleChangeSpecification = this.hadleChangeSpecification.bind(this);   
    // console.log('nononononoonononono',this.props.location.productList)
  }

  componentWillMount(){
    this.fetchSpecification();
    this.fetchProduct();
    // this.hadleChangeSpecification();
  }

  fetchProduct(){

    let search = window.location.search;
    let params = new URLSearchParams(search);
    let foo = params.get('subcategory');
    this.setState({
      subcategoryids : foo
    })


    console.log('specifyeeeeeeeeeeee',this.state.subcategoryids);
    axios.post(URL+'/api/user/fetchProduct',{
      subcategoryid : foo,
    }).then((response)=>{
      console.log('this.responsefdfddfdddddddddd',response.data.product);
      this.setState({
        productList : response.data.product
      })
    })
  }

  fetchSpecification(){
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let foo = params.get('subcategory');
    this.setState({
      subcategoryids : foo
    })
    let obj = {};
    obj.subCategoryId = foo 
    axios.post(URL+'/api/user/fetchSpecification',obj).then((response)=>{
      console.log('this.sidebar',response.data.doc)
      this.setState({
        specificationList : response.data.doc
      })
    })
  }

  hadleChangeSpecification(e,i){
    // this.setState({fValue : event.target.value})
    
    // current array of options
    const options = this.state.specification
    
    let index
    
    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      options.push(e.target.value)
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = options.indexOf(e.target.value)
      options.splice(index, 1)
    }
  
    console.log('optionsoptionsoptions',options)
    // update the state with the new array of options
    this.setState({ specification: options },()=>{
      //this.fetchProduct();
    })
    console.log('specificationspecification',this.state.specification)

    let search = window.location.search;
    let params = new URLSearchParams(search);
    let foo = params.get('subcategory');
    this.setState({
      subcategoryids : foo
    })
    let obj = {};
    obj.subCategoryId = foo;
    obj.specification = this.state.specification
    console.log('this.state.specificationthis.state.specificationthis.state.specification',this.state.specification)
    axios.post(URL+'/api/user/filterData',obj).then((response)=>{
      this.setState({
        filterArr : [],
        filterResult:[],
        filterCheck:[],
      })
      console.log('this.sidebar',response.data.businessData)
      if(response.data.businessData){
        response.data.businessData.forEach(element => {
          console.log('/',this.state.specification)
          if(this.state.specification){
              element.specification.forEach(async elmData=>{
                this.state.specification.forEach(elm=>{
                  if(elm==elmData.value){
                    if(element._id in this.state.filterArr){
                      this.setState({
                        filterArr : [],
                        filterResult:[],
                        filterCheck:[],
                      })
                    }else{
                      this.state.filterArr.push(element)
                    }
                  }
                })
            })
          }
        });
      }

    this.state.filterArr.map(img => {
        if (this.state.filterCheck.indexOf(img._id) == -1) {
          this.state.filterResult.push(img)
          this.state.filterCheck.push(img._id)
        }
    });
      this.setState({
        productList : this.state.filterResult
      })
      
    })


    // let obj = {};
    // obj.specification = this.state.specification;
    // obj.productName = 'kuch v'
    // console.log('@@@@@@@@@@@@@@@@@',obj);
    // axios.post(URL+ '/api/user/fetchProductSpecification',obj).then((res)=>{
    //   this.setState({
    //     productList : res.data.doc
    //   },()=>{
    //     this.fetchProduct();
    //   })
    // })

  }

	render(){
    console.log('specification',this.state.specification);
    console.log('productList',this.state.productList);
		return(
      <div className = "row">
        <section className="col-main col-sm-9 col-sm-push-3 wow bounceInUp animated productlist-fluid">
          <div className="category-title">
            <div className="breadcrumbs">
			      <div className="row">
			        <ul>
			          <li className="home"> <a href="/" title="Go to Home Page">Home</a><span>/ Product List</span></li>
			        </ul>
			    </div>
			 </div>
          </div>
          <div className="category-products">
          {
              (this.state.productList[0]) ?  <ul className="products-grid">
             
         {
          //  this.state.productList > 0 ?
           this.state.productList.map((e,i)=>{
             return(
               <React.Fragment key = {i}>

                    <li className="item col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <div className="col-item">
                  <div className="product-image-area"> <a className="product-image" title="Sample Product" href={'Productdetail?product='+e._id}> <img  src= {e.file1}
                   className="img-responsive" style = {{height : '200px',width: '200px'}} alt="a" /> </a>
                    <div className="hover_fly"> <a className="exclusive ajax_add_to_cart_button" href={'Productdetail?product='+e._id} title="Add Cart">
                      <div><i className="icon-shopping-cart"></i><span><i className="fa fa-shopping-bag"></i> Add Cart</span></div>
                      </a> <a className="quick-view" href={'Productdetail?product='+e._id}>
                      <div><i className="icon-eye-open"></i><span><i className="fa fa-heart"></i></span></div>
                      </a> </div>
                  </div>
      <div className="info">
                    <div className="info-inner">
                    <div className="row">
                    <div className="col-sm-7">
                      <div className="item-title"> 
                        {/* <Link to ={"/Productdetail?product="+e._id}  title={e.productName} >  {e.productName}  </Link>  */}
                        <a href={"/Productdetail?product="+e._id}  title={e.productName} >
                         {e.productName}
                          </a>
                          </div>
                     </div>
                    <div className="col-sm-5">
                      <div className="price-box pricepart"><p className="special-price"> <span className="price"> $ 
                      {e.productPrice}
                      </span> </p><p className="old-price"> <span className="price-sep">-</span> <span class="price"> </span> </p></div>
                     </div>
                     </div>
                      <div className="item-content">
                        <div className="price-box">
                          <p className="special-price"> <span className="price"> 
                          {e.brandName}
                           </span></p>
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
          //  :
          //  <div>
          //    <p>No Data Found</p>
          //  </div>
         }
            </ul>
            : <img src="./no-product.png"></img> 
        }
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
          {/* <div className="pricebox">
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
          </div> */}
          
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
                <input type= {e.fieldType}  value = {r.fieldValue}  onChange = {this.hadleChangeSpecification.bind(this)} />
                <span className="checkmark"></span>
              </label>
              </React.Fragment>
              )
              })}
              </div>
            </React.Fragment>
          )
        })}

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