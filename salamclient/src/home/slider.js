import React from 'react';
import ReactDOM from 'react-dom';
import './slider.css';
class Slider extends React.Component{
	render()
	{
		return(
      <div className="Container-fluid slider-fluid">
          <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
              <li data-target="#carousel-example-generic" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img src="./images/banner1.png" alt="Banner1"/>
                <div className="carousel-caption">
                  <h3>30% <span>Off</span></h3>
                  <p>Men's Clothing and Accessories </p>
                  <a href="#">Buy Now</a>
                </div>
              </div>
              <div className="item">
                <img src="./images/banner1.png" alt="Banner1"/>
                <div className="carousel-caption">
                  <h3>30% <span>Off</span></h3>
                  <p>Men's Clothing and Accessories </p>
                  <a href="#">Buy Now</a>
                </div>
              </div>
              <div className="item">
                <img src="./images/banner1.png" alt="Banner1"/>
                <div className="carousel-caption">
                  <h3>30% <span>Off</span></h3>
                  <p>Men's Clothing and Accessories </p>
                  <a href="#">Buy Now</a>
                </div>
              </div>
              <div className="item">
                <img src="./images/banner1.png" alt="Banner1"/>
                <div className="carousel-caption">
                  <h3>30% <span>Off</span></h3>
                  <p>Men's Clothing and Accessories </p>
                  <a href="#">Buy Now</a>
                </div>
              </div>
            </div>
            <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
      </div>

			)
	}
}

export default Slider;