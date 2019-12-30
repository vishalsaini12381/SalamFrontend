import React from 'react';
import ReactDOM from 'react-dom';
import './detail.css';
import Productslider from './productslider.js';
import Description from './description.js';


import axios from 'axios';
const URL = process.env.REACT_APP_LOCAL;

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategory: '',
      productData: []
    }
  }

  componentDidMount() {
    this.setState({
      subcategory: this.props.subcategory,
      productData: this.props.productData
    })
  }


  render() {
    return (
      <section class="main-container col1-layout">
        <div class=" container">
          <div class="col-main">
            <div className="breadcrumbs">
              <div className="row">
                <ul>
                  <li className="home"> <a href="#" title="Go to Home Page">Home</a><span>/</span></li>
                  <li className="category13">{this.state.subcategory}</li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="product-view productdetail-fluid">
                {this.state.productData !== undefined ?
                  <div class="product-essential">
                    <Productslider productData={this.state.productData} />
                    <Description productData={this.state.productData} />
                  </div> : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Detail;