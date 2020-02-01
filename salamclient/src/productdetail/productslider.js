import React from 'react';

import './productslider.css';

import axios from 'axios';
const URL = process.env.REACT_APP_LOCAL;

class Productslider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productDetail: [],
      productDetailFile: ''
    }
  }


  componentDidMount() {
    if (this.props.productData !== undefined) {
      this.setState({
        productDetail: this.props.productData.product,
        // productDetailFile: this.props.productData.product['file1']
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.productData !== undefined) {
      this.setState({
        productDetail: nextProps.productData.product,
        productDetailFile: nextProps.productData.product['file1']
      })
    }
  }
  // fetchProductDetail() {

  //   let search = window.location.search;
  //   let params = new URLSearchParams(search);
  //   let foo = params.get('product');
  //   this.setState({
  //     productId: foo,
  //   })

  //   axios.post(URL + '/api/user/productDetail', {
  //     productId: foo,
  //   }).then((response) => {
  //     this.setState({
  //       productDetail: response.data.productData[0].product,
  //       productDetailFile: response.data.productData[0].product['file1']
  //     })
  //   })
  // }

  shoeImgs = (selectedFile) => {
    var navOpened = document.getElementById("imgsIs");
    this.setState({
      productDetailFile: selectedFile
    })
  }

  render() {
    return (
      <div className="product-img-box col-lg-5 col-sm-5 col-xs-12">
        <div className="mainimage">
          <img id='imgsIs' src={this.state.productDetailFile} alt="thumbnail" />
        </div>
        <div className="moreimage">
          {
            this.state.productDetail['file1'] !== null ?
              <a onClick={() => this.shoeImgs(this.state.productDetail['file1'])}>
                <img src={this.state.productDetail['file1']} alt="thumbnail" />
              </a>
              :
              null
          }
          {
            this.state.productDetail['file2'] !== null ?
              <a onClick={() => this.shoeImgs(this.state.productDetail['file2'])}>
                <img src={this.state.productDetail['file2']} alt="thumbnail" />
              </a>
              : null
          }
          {
            this.state.productDetail['file3'] !== null ?
              <a onClick={() => this.shoeImgs(this.state.productDetail['file3'])}>
                <img src={this.state.productDetail['file3']} alt="thumbnail" />
              </a>
              : null
          }
          {
            this.state.productDetail['file4'] !== null ?
              <li key="product_image4"><img src={this.state.productDetail['file4']} onClick={this.shoeImgs} alt="thumbnail" /></li> :
              null
          }
      </div>
      </div >
    )
  }

}

export default Productslider;