import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './categories.css';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './newproduct.css';


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
      console.log('OOOOOOOOOOOOOOOOOOO', response.data.product);
      this.setState({ visible: false });
      this.setState({
        productList: response.data.productData,
      })
    })
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
                        <a href={'Productdetail?product=' + e._id}><div className="viewproduct"><i className="fa fa-shopping-cart"></i> Add to Cart </div></a>
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

export default Categories;