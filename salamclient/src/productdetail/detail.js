import React from 'react';
import ReactDOM from 'react-dom';
import './detail.css';
import Productslider from './productslider.js';
import Description from './description.js';


import axios from 'axios';
const URL = process.env.REACT_APP_LOCAL;

class Detail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      // businessCategory : '',
      // category:'',
      subcategory:''
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
      productId : foo,
    })

    axios.post(URL+'/api/user/productDetail',{
      productId : foo,
    }).then((response)=>{
      // console.log('this.88888888888788888888888888887',response.data.productData[0]['product']['businesscategoryId'].businesscategory);
      this.setState({
        // businessCategory : response.data.productData[0]['product']['businesscategoryId'].businesscategory,
        // category:response.data.productData[0]['product']['categoryId'].category,
        subcategory:response.data.productData[0]['product']['subCategoryId'].subcategory,
      })
    })
  }

	render()
	{
		return(
  <section class="main-container col1-layout">
    <div class=" container">
      <div class="col-main">
           <div className="breadcrumbs">
            <div className="row">
              <ul>
                <li className="home"> <a href="#" title="Go to Home Page">Home</a><span>/</span></li>
                {/* <li className=""> <a href="#" title="Go to Home Page">{this.state.businessCategory}</a><span>/</span></li>
                <li className="category13">{this.state.category}<span>/</span></li> */}
                <li className="category13">{this.state.subcategory}</li>
              </ul>
          </div>
       </div>
        <div class="row">
          <div class="product-view productdetail-fluid">
            <div class="product-essential">
                 <Productslider/>
                 <Description/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


			)
	}
}

export default Detail;