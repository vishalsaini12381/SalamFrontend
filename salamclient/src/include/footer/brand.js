import React from 'react';
import ReactDOM from 'react-dom';
import './brand.css';
class Brand extends React.Component{
	render()
	{
		return(
    <div className="brand-logo ">
      <div className="container">
        <div className="slider-items-products">
          <div id="brand-logo-slider" className="product-flexslider hidden-buttons">
            <div className="slider-items slider-width-col6"> 
              <div className="item"> <a href="#x"><img src="./images/brand/1.png" alt="Image"/></a> </div>
              <div className="item"> <a href="#x"><img src="./images/brand/2.png" alt="Image"/></a> </div>
              <div className="item"> <a href="#x"><img src="./images/brand/3.png" alt="Image"/></a> </div>
              <div className="item"> <a href="#x"><img src="./images/brand/4.png" alt="Image"/></a> </div>
              <div className="item"> <a href="#x"><img src="./images/brand/5.png" alt="Image"/></a> </div>
              <div className="item"> <a href="#x"><img src="./images/brand/6.png" alt="Image"/></a> </div>
              <div className="item"> <a href="#x"><img src="./images/brand/1.png" alt="Image"/></a> </div>
              <div className="item"> <a href="#x"><img src="./images/brand/4.png" alt="Image"/></a> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
			)

	}
}

export default Brand;