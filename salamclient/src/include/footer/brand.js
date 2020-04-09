import React from 'react';
import './brand.css';
import axios from 'axios';
const URL = process.env.REACT_APP_SERVER_URL;

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
    let brandList = [];
    this.state.brandList.map((item, index) => {
      if (item.file !== null)
        brandList.push(<div key={`brands-${index}`} className="item" style={{ marginLeft: '10px', marginRight: '10px' }}><a href="#x"><img style={{ width: '100px', height: '100px' }} src={item.file} alt="brand_photo" /></a></div>)
      // else
      //   return <div key={`brands-${index}`} className="brand-name-container"><span> {item.brandName}</span></div>
    })
    return brandList;
  }
  render() {
    return (
      <div className="brand-logo ">
        <div className="container">
          <div className="slider-items-products">
            <div id="brand-logo-slider" className="product-flexslider hidden-buttons">
              <div className="brand-item"
                style={{
                  opacity: '1', 'display': 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignContent: 'space-between'
                }}>
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