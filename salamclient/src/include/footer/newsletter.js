import React from 'react';
import ReactDOM from 'react-dom';
import './newsletter.css';
class Newsletter extends React.Component{
	render()
	{
		return(
    <div className="newsletter-fluid footer-top">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-9 col-md-9">
            <div className="block-subscribe">
              <div className="newsletter">
                <form>
                  <h4>Newsletter</h4>
                  <input type="text" placeholder="Enter your email address" className="input-text required-entry validate-email"  id="newsletter1" name="email"/>
                  <button className="subscribe" title="Subscribe" type="submit"><span>Subscribe</span></button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-3 col-md-3">
            <div className="social">
              <ul>
                <li className="fb"><a href="#"></a></li>
                <li className="tw"><a href="#"></a></li>
                <li className="linkedin"><a href="#"></a></li>
                <li className="youtube"><a href="#"></a></li>
                <li className="pintrest"><a href="#"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
			)

	}
}

export default Newsletter;