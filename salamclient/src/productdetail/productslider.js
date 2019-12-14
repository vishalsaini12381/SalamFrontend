import React from 'react';
import ReactDOM from 'react-dom';
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

    // this.fetchProductDetail = this.fetchProductDetail.bind(this);
  }

  // componentWillMount() {
  //   this.fetchProductDetail();
  // }

  componentDidMount() {
    if (this.props.productData[0] !== undefined) {
      this.setState({
        productDetail: this.props.productData[0].product,
        productDetailFile: this.props.productData[0].product['file1']
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.productData[0] !== undefined) {
      this.setState({
        productDetail: nextProps.productData[0].product,
        productDetailFile: nextProps.productData[0].product['file1']
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
  //     console.log('this.12112122122122122', response.data.productData[0].product);
  //     this.setState({
  //       productDetail: response.data.productData[0].product,
  //       productDetailFile: response.data.productData[0].product['file1']
  //     })
  //   })
  // }

  shoeImgs(e) {
    console.log(e.target.value)
    var navOpened = document.getElementById("imgsIs");
    // navOpened.setState({
    //   productDetailFile : e.target.value
    // })
    console.log(navOpened.src = e.target.src)
    //this.props.offline()    
  }

  render() {
    return (
      <div className="product-img-box col-lg-5 col-sm-5 col-xs-12">
        <div className="mainimage">
          <img id='imgsIs' src={this.state.productDetailFile} alt="thumbnail" />
        </div>
        <div className="moreimage">
          <ul className="">
            {
              this.state.productDetail['file1'] !== null ?
                <li key="product_image1"><img src={this.state.productDetail['file1']} onClick={this.shoeImgs} alt="thumbnail" /></li> :
                null
            }
            {
              this.state.productDetail['file2'] !== null ?
                <li key="product_image2"><img src={this.state.productDetail['file1']} onClick={this.shoeImgs} alt="thumbnail" /></li> :
                null
            }
            {
              this.state.productDetail['file3'] !== null ?
                <li key="product_image3"><img src={this.state.productDetail['file1']} onClick={this.shoeImgs} alt="thumbnail" /></li> :
                null
            }
            {
              this.state.productDetail['file4'] !== null ?
                <li key="product_image4"><img src={this.state.productDetail['file1']} onClick={this.shoeImgs} alt="thumbnail" /></li> :
                null
            }
          </ul>
        </div>
      </div>
    )
  }

}

export default Productslider;