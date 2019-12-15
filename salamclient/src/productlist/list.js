import React from 'react';
import ReactDOM from 'react-dom';
import './list.css';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import './sidebar.css';
import swal from 'sweetalert';

const URL = process.env.REACT_APP_LOCAL;

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      specificationList: [],
      specification: [],
      subcategoryids: '',
      filterArr: [],
      filterResult: [],
      filterCheck: [],
    }
    this.fetchProduct = this.fetchProduct.bind(this);
    this.fetchSpecification = this.fetchSpecification.bind(this)
  }

  componentWillMount() {
    this.fetchSpecification();
    this.fetchProduct();
    // this.hadleChangeSpecification();
  }

  fetchProduct() {

    let search = window.location.search;
    let params = new URLSearchParams(search);
    let foo = params.get('subcategory');
    this.setState({
      subcategoryids: foo
    })

    axios.post(URL + '/api/user/fetchProduct', {
      subcategoryid: foo,
    }).then((response) => {
      console.log('this.responsefdfddfdddddddddd', response.data.product);
      this.setState({
        productList: response.data.product
      })
    })
  }

  fetchSpecification() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let foo = params.get('subcategory');
    this.setState({
      subcategoryids: foo
    })
    let obj = {};
    obj.subCategoryId = foo
    axios.post(URL + '/api/user/fetchSpecification', obj).then((response) => {
      this.setState({
        specificationList: response.data.doc
      })
    })
  }

  hadleChangeSpecification(e, i) {
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

    console.log('optionsoptionsoptions', options)
    // update the state with the new array of options
    this.setState({ specification: options }, () => {
      //this.fetchProduct();
    })

    let search = window.location.search;
    let params = new URLSearchParams(search);
    let foo = params.get('subcategory');
    this.setState({
      subcategoryids: foo
    })
    let obj = {};
    obj.subCategoryId = foo;
    obj.specification = this.state.specification
    console.log('this.state.specificationthis.state.specificationthis.state.specification', this.state.specification)
    axios.post(URL + '/api/user/filterData', obj).then((response) => {
      this.setState({
        filterArr: [],
        filterResult: [],
        filterCheck: [],
      })
      console.log('this.sidebar', response.data.businessData)
      if (response.data.businessData) {
        response.data.businessData.forEach(element => {
          console.log('/', this.state.specification)
          if (this.state.specification) {
            element.specification.forEach(async elmData => {
              this.state.specification.forEach(elm => {
                if (elm == elmData.value) {
                  if (element._id in this.state.filterArr) {
                    this.setState({
                      filterArr: [],
                      filterResult: [],
                      filterCheck: [],
                    })
                  } else {
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
        productList: this.state.filterResult
      })
    })
  }

  addItemToCart = (event, product) => {
    event.preventDefault();
    if (this.isUserLoggedIn()) {
      const data = {
        userId: this.props.userId,
        productId: product._id,
        price: product.productPrice,
        discount: product.discount,
        quantity: 1,
        action: 2
      }
      axios.post(URL + '/api/user/addToCart', data)
        .then((response) => {
          console.log('this.responsefdfddfdddddddddd', response.data.product);
          if (response.data.code == 100) {
            // return window.location.reload()
          } else {
            swal({
              title: "OOPS",
              text: response.data.message,
              icon: "warning",
              dangerMode: true,
              closeOnClickOutside: false,
            }).then((d) => {
              //console.log('ddddddddddddddddddd',d)
              if (d) {
                //return window.location = "/Login"
              }
            })
          }
        })
    } else {
      this.messageToLogin()
    }
  }

  addItemToWishList = (event, product) => {
    event.preventDefault();
    if (this.isUserLoggedIn()) {
      axios.post(URL + '/api/user/addToWishlist', {
        userId: this.props.userId,
        productId: product._id,
      }).then((response) => {
        //console.log('this.responsefdfddfdddddddddd',response.data.product);
        if (response.data.code == 100) {
          // return window.location.reload()
        } else {
          swal({
            title: "OOPS",
            text: "Some error found.",
            icon: "warning",
            dangerMode: true,
            closeOnClickOutside: false,
          }).then((d) => {
            //console.log('ddddddddddddddddddd',d)
            if (d) {
              // return window.location.reload();
            }
          })
        }
      })
    } else {
      this.messageToLogin()
    }
  }

  isUserLoggedIn = () => {
    if (this.props.userId !== undefined)
      return true
    return false
  }

  messageToLogin = () => {
    swal({
      title: "OOPS",
      text: "You need login to add item.",
      icon: "warning",
      dangerMode: true,
      closeOnClickOutside: false,
    }).then((d) => {
    })
}

  render() {
    return (
      <div className="row">
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
              (this.state.productList[0]) ? <ul className="products-grid">

                {
                  //  this.state.productList > 0 ?
                  this.state.productList.map((e, i) => {
                    return (
                      <React.Fragment key={i}>

                        <li className="item col-lg-4 col-md-4 col-sm-6 col-xs-6">
                          <div className="col-item">
                            <div className="product-image-area"> <a className="product-image" title="Sample Product" href={'Productdetail?product=' + e._id}> <img src={e.file1}
                              className="img-responsive" style={{ height: '200px', width: '100%' }} alt="a" /> </a>
                              <div className="hover_fly">
                                <a className="exclusive ajax_add_to_cart_button" href="#" onClick={(event) => this.addItemToCart(event, e)} title="Add Cart">
                                  <div>
                                    <i className="icon-shopping-cart"></i>
                                    <span><i className="fa fa-shopping-bag"></i> Add Cart</span>
                                  </div>
                                  {/* href={'Productdetail?product=' + e._id} */}
                                </a>
                                <a className="quick-view" href="#" onClick={(event) => this.addItemToWishList(event, e)}>
                                  <div><i className="icon-eye-open"></i><span><i className="fa fa-heart"></i></span></div>
                                </a> </div>
                            </div>
                            <div className="info">
                              <div className="info-inner">
                                <div className="row">
                                  <div className="col-sm-7">
                                    <div className="item-title">
                                      {/* <Link to ={"/Productdetail?product="+e._id}  title={e.productName} >  {e.productName}  </Link>  */}
                                      <a href={"/Productdetail?product=" + e._id} title={e.productName} >
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
                }
              </ul>
                : <img src="./no-product.png"></img>
            }
          </div>
        </section>{
          this.state.specificationList.length > 0 ?
            <aside className="col-left sidebar col-sm-3 col-xs-12 col-sm-pull-9 wow bounceInUp animated">
              <div className="block block-layered-nav">
                {
                  this.state.specificationList.map((e, i) => {
                    return (
                      <React.Fragment key={i}>
                        <div className="pricebox">
                          <h3>{e.fieldName}</h3>
                          {e.fieldValue.map((r, s) => {
                            return (
                              <React.Fragment key={s} >
                                <label className="price-cart">{r.fieldValue}
                                  <input type={e.fieldType} value={r.fieldValue} onChange={this.hadleChangeSpecification.bind(this)} />
                                  <span className="checkmark"></span>
                                </label>
                              </React.Fragment>
                            )
                          })}
                        </div>
                      </React.Fragment>
                    )
                  })}
              </div>
            </aside> : null}
      </div>
    )
  }
}


function mapStateToProps(state) {
  console.log('mapStateToProps List page', state.inititateState.userId);
  return {
    userId: state.inititateState.userId
  }
}

export default connect(mapStateToProps)(List);