import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import swal from 'sweetalert';
import 'react-toastify/dist/ReactToastify.css';
import './description.css';
import { addToCartAction } from '../action/cart.action'
import { addToWishlistAction } from '../action/wishlist.action'

var divStyle = {
  cursor: 'pointer',
};
var divStyleDisabled = {
  cursor: 'no-drop',
}


class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetail: [],
      isCart: 0,
      isWishlist: 0,
    }
  }

  componentDidMount() {
    // this.fetchProductDetail();
    if (this.props.productData !== undefined) {
      this.setState({
        productDetail: this.props.productData.product,
        isCart: this.props.productData.isCart,
        isWishlist: this.props.productData.isWishlist,
      })
    }

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.productData !== undefined) {
      this.setState({
        productDetail: nextProps.productData.product,
        isCart: nextProps.productData.isCart,
        isWishlist: nextProps.productData.isWishlist,
      })
    }
  }

  addToCart = (productId, userId, price, discount, action) => {
    const data = {
      userId: userId,
      productId: productId,
      price: price,
      discount: discount,
      quantity: 1,
      action: action
    }
    this.props.addToCartAction(data);
  }

  addToWishlist(productId, userId) {
    const data = {
      userId: userId,
      productId: productId,
    }
    this.props.addToWishlistAction(data);
  }

  onClickDiv = (column) => {
    swal({
      title: "OOPS",
      text: "You need to login first!!!",
      icon: "warning",
      dangerMode: true,
      closeOnClickOutside: false,
    }).then((d) => {
      if (d) {
        return window.location = "/Login"
      }
    })
  }

  clubSpecification = (specification) => {
    let objectSpec = {};
    specification.map(item => {
      if (objectSpec[item.key] !== undefined) {
        objectSpec[item.key] = item.value + "-" + objectSpec[item.key];
      } else {
        objectSpec[item.key] = item.value;
      }
      return item;
    })
    return objectSpec;
  }
  renderSpecification = (specification = []) => {
    let itemOfRender = []
    if (specification.length > 0) {
      const newSpecificationObject = this.clubSpecification(specification);
      Object.keys(newSpecificationObject).forEach((key, value) => {
        itemOfRender.push(<div><span style={{ textTransform: "capitalize" }}>{key} : {newSpecificationObject[key]}</span><br></br></div>)
      })
    }
    return itemOfRender
  }
  render() {
    return (
      <div className="product-shop col-lg-7 col-sm-7 col-xs-12">
        <div className="product-heading">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="product-name">
                <h1>{this.state.productDetail['productName']}</h1>
                <p>{this.state.productDetail['brandName']}</p>
              </div>
              <div className="ratings">
                <div className="rating-box">
                  <div className="rating"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="price-block">
          <div className="price-box">
            <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> ${(this.state.productDetail['productPrice'] - (this.state.productDetail['productPrice'] * this.state.productDetail['discount'] / 100))} </span> </p>
            <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> ${this.state.productDetail['productPrice']} </span> </p>

          </div>
        </div>
        <div className="short-description overview-product">
          <h2>Quick Overview</h2>
          <p>{this.state.productDetail['aboutProduct']}</p>
          {this.renderSpecification(this.state.productDetail.specification)}
        </div>
        <br />
        <div className="short-description overview-product">
          <h6>Refund Policy</h6>
          {this.state.productDetail.isRefundable ?
            <p>Days to refund : {this.state.productDetail.returnPolicy.daysToReturn}<br />
              {this.state.productDetail.returnPolicy.conditions}
            </p> :
            <p>Not refundable</p>
          }
        </div>
        <div className="add-to-box pro-quantity">
          <div className="add-to-cart">
            <div className="pull-left">
            </div>
            <div className="email-addto-box adtocart">
              <ul className="add-to-links">
                {
                  this.props.userId ?
                    this.state.isCart ?
                      <div className="custom pull-left">
                        {
                          this.state.isCart == 1 ?
                            <button style={divStyleDisabled} className="reduced items-count" type="button"><i className="fa fa-minus">&nbsp;</i></button>
                            :
                            <button style={divStyle} onClick={() => this.addToCart(this.state.productDetail['_id'], this.props.userId, this.state.productDetail['productPrice'], this.state.productDetail['discount'], 2)} className="reduced items-count" type="button"><i className="fa fa-minus">&nbsp;</i></button>
                        }
                        <input type="text" className="input-text qty" title="Qty" value={this.state.isCart} maxlength="12" id="qty" name="qty" />
                        <button style={divStyle} onClick={() => this.addToCart(this.state.productDetail['_id'], this.props.userId, this.state.productDetail['productPrice'], this.state.productDetail['discount'], 1)} className="increase items-count" type="button"><i className="fa fa-plus">&nbsp;</i></button>
                      </div>
                      :
                      <li> <a className="link-wishlist" style={divStyle} onClick={() => this.addToCart(this.state.productDetail['_id'], this.props.userId, this.state.productDetail['productPrice'], this.state.productDetail['discount'], 1)}><span>Add to Cart</span></a></li>
                    :
                    <li> <a className="link-wishlist" style={divStyle} onClick={() => this.onClickDiv(this.state.productDetail['_id'])}><span>Add to Cart</span></a></li>
                }
                {
                  this.props.userId ?
                    this.state.isWishlist === 1 ?
                      <li>
                        <span className="separator">|</span>
                        <a className="link-compare" style={divStyle} onClick={() => this.addToWishlist(this.state.productDetail['_id'], this.props.userId)}>
                          <span>Remove From Wishlist</span>
                        </a>
                      </li> :
                      <li>
                        <span className="separator">|</span>
                        <a className="link-compare" style={divStyle} onClick={() => this.addToWishlist(this.state.productDetail['_id'], this.props.userId)}>
                          <span>Add to Wishlist</span>
                        </a>
                      </li> :
                    <li>
                      <span className="separator">|</span>
                      <a className="link-compare" style={divStyle} onClick={() => this.onClickDiv(this.state.productDetail['_id'])}>
                        <span>Add to Wishlist</span>
                      </a>
                    </li>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    authenticateState: state.inititateState.authenticateState,
    email: state.inititateState.email,
    userId: state.inititateState.userId,
    wishlist : state.wishlist
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addToCartAction,
  addToWishlistAction
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Description));