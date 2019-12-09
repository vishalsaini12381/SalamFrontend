import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import '../src/home/categories.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Slid.css';
const URL = process.env.REACT_APP_LOCAL;

class Slid extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      productList : [],

    }
    this.allProducts = this.allProducts.bind(this);
  }

  allProducts(){
    axios.post(URL+'/api/user/fetchProduct').then((resp)=>{
      console.log('ProductListData',resp.data.doc);
      this.setState({
        productList : resp.data.doc,
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
   
  //  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',this.state.productList);
		return(
<div> 
   <section className="main-container col1-layout home-content-container categories-fluid">
    <div className="container">
      <div className="std">
        <div className="best-seller-pro wow bounceInUp animated">
          <div className="slider-items-products">
            <div className="new_title center">
              <h2>Categories</h2>
            </div>
            <br/>
            <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={this.props.deviceType}
            // dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
             {
    // this.state.productList.map((e,i)=>{
    //   return(
    //     <React.Fragment key = {i}>
    //   <div className="categoryslider">
    //      <div className="sliderimage">
    //         <img style = {{width : '198px',height:'249px'}} src =  {e.file} />
    //      </div>
    //      <div className="categoryname">
    //         <a title=" Sample Product" href="#"></a>
    //       </div>
    //   </div>
    //   </React.Fragment>
    //   )
    // })
  }
      <div className="categoryslider">
         <div className="sliderimage">
            <img style = {{width : '198px',height:'249px'}} src = "./images/categories/2.png"/>
         </div>
         <div className="categoryname">
            <a title=" Sample Product" href="#"></a>
          </div>
      </div>
      {/* <div className="categoryslider">
         <div className="sliderimage">
            <img style = {{width : '198px',height:'249px'}} src = "./images/categories/3.png"/>
         </div>
         <div className="categoryname">
            <a title=" Sample Product" href="#">Men Fashion </a>
          </div>
</div> */}
     
 

 

  {/* {
    this.state.productList.map((e,i)=>{
      return(
        <React.Fragment key = {i}>
          <div className="categoryslider">
            <div className="sliderimage">
                <img style = {{width : '198px',height:'249px'}} src = {e.file}/>
            </div>
            <div className="categoryname">
                  {e.category}
            </div>
          </div>
        </React.Fragment>
      )
    })
  } */}
</Carousel>
      
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
			)
	}
}

export default Slid;