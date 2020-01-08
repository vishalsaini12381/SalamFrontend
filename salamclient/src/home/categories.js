import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Carousel from 'react-multi-carousel';
import { toast, ToastContainer } from 'react-toastify';
import "react-multi-carousel/lib/styles.css";
import 'react-multi-carousel/lib/styles.css';
import './newproduct.css';

import './categories.css';


const URL = process.env.REACT_APP_LOCAL;


class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      visible: false,


    }
    this.allProducts = this.allProducts.bind(this);
  }

  allProducts() {
    this.setState({ visible: true });
    axios.post(URL + '/api/user/fetchHomeProduct').then((response) => {
      this.setState({ visible: false });
      this.setState({
        productList: response.data.productData,
      })
    })
  }

  addToCart = (productId, userId, price, discount, action) => {
    if (this.props.userId !== undefined) {
      axios.post(URL + '/api/user/addToCart', {
        userId: userId,
        productId: productId,
        price: price,
        discount: discount,
        quantity: 1,
        action: 1
      }).then((response) => {
        if (response.data.success) {
          toast.success("Product added to cart !", {
            position: toast.POSITION.BOTTOM_RIGHT
          }, { autoClose: 500 });
        } else {
          toast.warn(response.data.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          }, { autoClose: 500 });
        }
      }).catch(error => {
        toast.error("Some error occured !", {
          position: toast.POSITION.BOTTOM_RIGHT
        }, { autoClose: 500 });
      })
    } else {
      toast.warn("You need to login to continue !", {
        position: toast.POSITION.BOTTOM_RIGHT
      }, { autoClose: 500 });
    }
  }

  addToWishlist(productId, userId) {
    if (this.props.userId !== undefined) {
      axios.post(URL + '/api/user/addToWishlist', {
        userId: userId,
        productId: productId,
      }).then((response) => {
        toast.success(response.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT
        }, { autoClose: 500 });

      }).catch(error => {
        toast.error("Some error occured !", {
          position: toast.POSITION.BOTTOM_RIGHT
        }, { autoClose: 500 });
      })
    } else {
      toast.warn("You need to login to continue !", {
        position: toast.POSITION.BOTTOM_RIGHT
      }, { autoClose: 500 });
    }
  }

  componentDidMount() {
    this.allProducts();
  }

  render() {

    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

    const { visible } = this.state

    if (this.state.productList.length > 0 && !visible)
      return (
        <div className="container-fluid newproduct-fluid" >
          <ToastContainer />
          <div className="container">
            <div className="headingpart">
              <h2>New  Products</h2>
            </div>
            <Carousel responsive={responsive}>
              {
                this.state.productList.map((e, i) => {
                  return (
                    <div className="mutlislider" key={`productIndex_${i}`}>
                      <div className="productimage">
                        <a href={"Productdetail?product=" + e._id}><img src={e.file1} alt="product 1" /></a>
                        <div className="viewproduct">
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <a href="javascript:void(0);" onClick={() => this.addToCart(e._id, this.props.userId)}><i className="fa fa-shopping-cart"></i> Add to Cart</a>
                            <a href="javascript:void(0);" onClick={() => this.addToWishlist(e._id, this.props.userId)}><i className="fa fa-heart"></i> Add to Wishlist</a>
                          </div>
                        </div>
                      </div>
                      <div className="Product-Info">
                        <div className="Product-Info--Name" title={e.productName}>{e.productName}</div>
                        <div className="Product-Info--Price">
                          <div className="Product-Info--CurrentPrice">${e.productPrice}</div>
                          <div className="Product-Info--PreviousPrice">${((e.productPrice) - (e.productPrice) * (e.discount) / 100)}</div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </Carousel>
          </div>
        </div>)
    else if (this.state.productList.length === 0 && visible)
      return (
        <div className="container-fluid newproduct-fluid" ><div class="container">
          <div class="headingpart">
            <h2>New  Products</h2>
          </div>
          <div class="react-multi-carousel-list  undefined">
            <ul class="react-multi-carousel-track " style={{ transition: "none 0s ease 0s", overflow: "unset", transform: "translate3d(0px, 0px, 0px)" }}>
              <li data-index="0" aria-hidden="false" class="react-multi-carousel-item react-multi-carousel-item--active " style={{ flex: "1 1 auto", position: "relative", width: "228px" }}>
                <div class="mutlislider">
                  <div class="productimage">
                    <a>
                      <img style={{ border: "1px solid" }} src="https://i.stack.imgur.com/h6viz.gif" />
                      <div class="viewproduct">
                        <i class="fa fa-shopping-cart"></i> Add to Cart
                                          </div>
                    </a>
                  </div>
                  <h3>----</h3>
                </div>
              </li>
              <li data-index="0" aria-hidden="false" class="react-multi-carousel-item react-multi-carousel-item--active " style={{ flex: "1 1 auto", position: "relative", width: "228px" }}>
                <div class="mutlislider">
                  <div class="productimage">
                    <a>
                      <img style={{ border: "1px solid" }} src="https://i.stack.imgur.com/h6viz.gif" />
                      <div class="viewproduct">
                        <i class="fa fa-shopping-cart"></i> Add to Cart
                                          </div>
                    </a>
                  </div>
                  <h3>----</h3>
                </div>
              </li>
              <li data-index="0" aria-hidden="false" class="react-multi-carousel-item react-multi-carousel-item--active " style={{ flex: "1 1 auto", position: "relative", width: "228px" }}>
                <div class="mutlislider">
                  <div class="productimage">
                    <a>
                      <img style={{ border: "1px solid" }} src="https://i.stack.imgur.com/h6viz.gif" />
                      <div class="viewproduct">
                        <i class="fa fa-shopping-cart"></i> Add to Cart
                                          </div>
                    </a>
                  </div>
                  <h3>----</h3>
                </div>
              </li>
              <li data-index="0" aria-hidden="false" class="react-multi-carousel-item react-multi-carousel-item--active " style={{ flex: "1 1 auto", position: "relative", width: "228px" }}>
                <div class="mutlislider">
                  <div class="productimage">
                    <a>
                      <img style={{ border: "1px solid" }} src="https://i.stack.imgur.com/h6viz.gif" />
                      <div class="viewproduct">
                        <i class="fa fa-shopping-cart"></i> Add to Cart
                                          </div>
                    </a>
                  </div>
                  <h3>----</h3>
                </div>
              </li>
              <li data-index="0" aria-hidden="false" class="react-multi-carousel-item react-multi-carousel-item--active " style={{ flex: "1 1 auto", position: "relative", width: "228px" }}>
                <div class="mutlislider">
                  <div class="productimage">
                    <a>
                      <img style={{ border: "1px solid" }} src="https://i.stack.imgur.com/h6viz.gif" />
                      <div class="viewproduct">
                        <i class="fa fa-shopping-cart"></i> Add to Cart
                                          </div>
                    </a>
                  </div>
                  <h3>----</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
        </div>
      )
    return null;
  }
}


function mapStateToProps(state) {
  return {
    authenticateState: state.inititateState.authenticateState,
    email: state.inititateState.email,
    userId: state.inititateState.userId
  }
}

export default withRouter(connect(mapStateToProps)(Categories));