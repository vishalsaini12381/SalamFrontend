import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import vendorSlid from './vendorSlid';
import Carousel from "react-multi-carousel";
import './vendorSlid.css';
import './favseller.css';
const URL = process.env.REACT_APP_LOCAL;

class Favseller extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      vendorList : [],
      featured : true,
    }
    this.fetchVendor = this.fetchVendor.bind(this);
  }

  componentDidMount(){
    this.fetchVendor();
  }

  fetchVendor(){
    axios.post(URL+'/api/user/fetchVendorList',{
      featured : this.state.featured,
    }).then((response)=>{
      console.log('response',response.data.vendor);
      this.setState({
        vendorList : response.data.vendor
      })
    })
  }

	render(){
    console.log('shivendra',this.state.vendorList);
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
  <section className="main-container col1-layout home-content-container seller-fluid">
    <div className="container">
      <div className="std">
        <div className="best-seller-pro wow bounceInUp animated">
          <div className="slider-items-products">
            <div className="new_title center">
              <h2>Favourite Seller</h2>
            </div>
            {/* <vendorSlid /> */}

            {/* <div> 
   <section className="main-container col1-layout home-content-container categories-fluid">
    <div className="container">
      <div className="std">
        <div className="best-seller-pro wow bounceInUp animated">
          <div className="slider-items-products"> */}
            {/* <div className="new_title center">

            </div> */}
            <br/>
            <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
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
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
             {
    this.state.vendorList.map((e,i)=>{
      return(
        <React.Fragment key = {i}>
      <div className="categoryslider">
         <div className="sliderimage">
            <img style = {{width : '198px',height:'249px'}} src =  {e.image} />
         </div>
      </div>
      </React.Fragment>
      )
    })
  }
      <div className="categoryslider">
         <div className="sliderimage">
            <img style = {{width : '198px',height:'249px'}} src = "./images/categories/2.png"/>
         </div>
         <div className="categoryname">
            <a title=" Sample Product" href="#"> </a>
          </div>
      </div>
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
      
          {/* </div>
        </div>
      </div>
    </div>
  </section>
  </div> */}

            {/* <div id="best-seller-slider" className="product-flexslider hidden-buttons">
              <div className="slider-items slider-width-col4"> 
                <div className="item">
                  <div className="col-item">
                    
                    <div className="product-image-area"> <a className="product-image" title="Sample Product" href="#"> <img src="./images/seller/1.png" className="img-responsive" alt="product-image" /> </a>
                    </div>
                    <div className="info">
                      <div className="info-inner">
                        <div className="item-title"> <a title=" Sample Product" href="#">Mo Rashid </a> </div>
                      </div>
                      
                      <div className="clearfix"> </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="col-item">
                    
                    <div className="product-image-area"> <a className="product-image" title="Sample Product" href="#"> <img src="./images/seller/2.png" className="img-responsive" alt="product-image" /> </a>
                    </div>
                    <div className="info">
                      <div className="info-inner">
                        <div className="item-title"> <a title=" Sample Product" href="#"> Neha Sharma </a> </div>
                      </div>
                      
                      <div className="clearfix"> </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="col-item">
                    
                    <div className="product-image-area"> <a className="product-image" title="Sample Product" href="#"> <img src="./images/seller/3.png" className="img-responsive" alt="product-image" /> </a>
                    </div>
                    <div className="info">
                      <div className="info-inner">
                        <div className="item-title"> <a title=" Sample Product" href="#"> Kamal Gupta </a> </div>
                      </div>
                      
                      <div className="clearfix"> </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="col-item">
                    
                    <div className="product-image-area"> <a className="product-image" title="Sample Product" href="#"> <img src="./images/seller/4.png" className="img-responsive" alt="product-image" /> </a>
                    </div>
                    <div className="info">
                      <div className="info-inner">
                        <div className="item-title"> <a title=" Sample Product" href="#">Imran Khan </a> </div>
                      </div>
                      
                      <div className="clearfix"> </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="col-item">
                    
                    <div className="product-image-area"> <a className="product-image" title="Sample Product" href="#"> <img src="./images/seller/5.png" className="img-responsive" alt="product-image" /> </a>
                    </div>
                    <div className="info">
                      <div className="info-inner">
                        <div className="item-title"> <a title=" Sample Product" href="#"> Heltan Mittal </a> </div>
                      </div>
                      
                      <div className="clearfix"> </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="col-item">
                    
                    <div className="product-image-area"> <a className="product-image" title="Sample Product" href="#"> <img src="./images/seller/6.png" className="img-responsive" alt="product-image" /> </a>
                    </div>
                    <div className="info">
                      <div className="info-inner">
                        <div className="item-title"> <a title=" Sample Product" href="#"> Danish Khan </a> </div>
                      </div>
                      
                      <div className="clearfix"> </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="col-item">
                    
                    <div className="product-image-area"> <a className="product-image" title="Sample Product" href="#"> <img src="./images/seller/7.png" className="img-responsive" alt="product-image" /> </a>
                    </div>
                    <div className="info">
                      <div className="info-inner">
                        <div className="item-title"> <a title=" Sample Product" href="#"> John Mark </a> </div>
                      </div>
                      
                      <div className="clearfix"> </div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
         
          */}
         
          </div>
        </div>
      </div>
    </div>
  </section>

			)
	}
}

export default Favseller;