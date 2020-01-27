import React from 'react';
import ReactDOM from 'react-dom';
import './brand.css';
import axios from 'axios';
const URL = process.env.REACT_APP_LOCAL;

class Brand extends React.Component {
  constructor(props) {
    super(props)
    this.state = { brandList: [] }
  }
  componentDidMount() {
    axios.get(URL + '/api/user/brands')
      .then((response) => {
        this.setState({
          brandList: response.data.doc
        })
      })
  }

  renderBrands = () => {
    return this.state.brandList.map((item, index) => {
      if (item.file !== null)
        return <div key={`brands-${index}`} className="item"><a href="#x"><img src={item.file} alt="Image" /></a></div>
      else
        return <div key={`brands-${index}`} className="brand-name-container"><span> {item.brandName}</span></div>
    })
  }
  render() {
    return (
      <div className="brand-logo ">
        <div className="container">
          <div className="slider-items-products">
            <div id="brand-logo-slider" className="product-flexslider hidden-buttons">
              <div className="brand-item" style={{ opacity: '1' }}>
                {this.renderBrands()}
                </div>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default Brand;