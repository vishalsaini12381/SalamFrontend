import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './categories.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slid from '../Slid';
import Loader from 'react-loader-spinner'
const URL = process.env.REACT_APP_LOCAL;


class Categories extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      productList : [],
      visible  : false,


    }
    this.allProducts = this.allProducts.bind(this);
  }

  allProducts(){
    this.setState({visible : true});
    axios.post(URL+'/api/user/fetchHomeProduct').then((response)=>{
      console.log('OOOOOOOOOOOOOOOOOOO',response.data.product);
      this.setState({visible : false});
      this.setState({
        productList : response.data.product,
      })
    })
  }

  componentDidMount(){
    this.allProducts();
  }
 
 	render(){
    console.log('44444444444444444444444444',this.state.productList)
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 1, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
		return(
<div> 
   <section className="main-container col1-layout home-content-container categories-fluid">
    <div className="container">
    <Loader visible = {this.state.visible} type="Puff" className="signuploader" />
      <div className="std">
        <div className="best-seller-pro wow bounceInUp animated">
          <div className="slider-items-products">
            <div className="new_title center">
            <div className="new_title center">
              <h2>Product's</h2>
            </div>
            <br/>
            <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
             {
          this.state.productList.map((e,i)=>{
            return(
              <React.Fragment key = {i}>
            <div className="categoryslider">
              <div className="sliderimage">
                  <a href={"Productdetail?product="+e._id}><img style = {{width : '198px',height:'249px'}} src =  {e.file1} /></a>
              </div>
              <div className="categoryname">
                  <a title=" Sample Product" href="#"></a>
                </div>
            </div>
            </React.Fragment>
      )
    })
  }
      {/* <div className="categoryslider">
         <div className="sliderimage">
            <img style = {{width : '198px',height:'249px'}} src = "./images/categories/2.png"/>
         </div>
         <div className="categoryname">
            <a title=" Sample Product" href="#"></a>
          </div>
      </div> */}
</Carousel>
</div>
          </div>
        </div>
      </div>
    </div>
  </section>


  </div>

			)
	}
}

export default Categories;