import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import vendorSlid from './vendorSlid';
import Carousel from "react-multi-carousel";
import './vendorSlid.css';
import './favseller.css';
const URL = process.env.REACT_APP_LOCAL;

class Favseller extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      vendorList: [],
      featured: true,
    }
    this.fetchVendor = this.fetchVendor.bind(this);
  }

  componentDidMount() {
    this.fetchVendor();
  }
  fetchVendor() {
    return axios.post(URL + '/api/user/fetchVendorList', {
      featured: this.state.featured,
    })
      .then((response) => {
        console.log('response', response.data.vendor);
        this.setState({
          vendorList: response.data.vendor
        })
      })
  }

  render() {
    console.log('shivendra', this.state.vendorList);
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
    if (this.state.vendorList.length > 0)
      return (
        <section className="main-container col1-layout home-content-container seller-fluid">
          <div className="container">
            <div className="std">
              <div className="best-seller-pro wow bounceInUp animated">
                <div className="slider-items-products">
                  <div className="new_title center">
                    <h2>Favourite Seller</h2>
                  </div>
                  <br />
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
                      this.state.vendorList.map((e, i) => {
                        return (
                          <React.Fragment key={i}>
                            <div className="categoryslider">
                              <div className="sliderimage">
                                <img style={{ width: '198px', height: '249px' }} src={e.image} />
                              </div>
                            </div>
                          </React.Fragment>
                        )
                      })
                    }
                    <div className="categoryslider">
                      <div className="sliderimage">
                        <img style={{ width: '198px', height: '249px' }} src="./images/categories/2.png" />
                      </div>
                      <div className="categoryname">
                        <a title=" Sample Product" href="#"> </a>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    return null
  }
}

export default Favseller;