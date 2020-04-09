import React, { Component } from 'react';
import moment from 'moment';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './modal.css'
const URL = process.env.REACT_APP_SERVER_URL;

export default class Modal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      daysToReturn: 0,
      conditions: "",
      isRefundable: false,
      orderId: '',
      customerComment: '',
      isCommentVisible: '',
      orderDetail: {}
    }
  }

  componentDidMount() {
    const orderDetail = this.props.orderDetail
    if (orderDetail.productId.returnPolicy !== undefined)
      this.setState({
        daysToReturn: orderDetail.productId.returnPolicy.daysToReturn,
        conditions: orderDetail.productId.returnPolicy.conditions,
        isRefundable: orderDetail.productId.isRefundable,
        orderDate: this.props.orderDate,
        orderId: this.props.orderId,
        orderDetail
      })
  }

  requestRefund = () => {
    if (this.state.isRefundable) {
      const aStart = moment();
      const bEnd = moment(this.state.orderDate);
      if (aStart.diff(bEnd, 'days') < this.state.daysToReturn) {
        this.sendRequestForRefund();
      } else {
        toast.error("Refund time is expired", {
          position: toast.POSITION.BOTTOM_RIGHT
        }, { autoClose: 500 });
      }
    } else {
      toast.error("This item is not refundable !", {
        position: toast.POSITION.BOTTOM_RIGHT
      }, { autoClose: 500 });
    }
  }


  handleComment = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;
    this.setState({
      [name]: value
    })
  }

  sendRequestForRefund = () => {
    let data = {
      orderId: this.state.orderId,
      subOrderId: this.state.orderDetail._id,
      customerComment: this.state.comment
    }
    axios
      .post(URL + '/api/user/return-request', data)
      .then((response) => {
        toast.success("Your request for refund is sent !", {
          position: toast.POSITION.BOTTOM_RIGHT
        }, { autoClose: 500 });
        this.props.handleClose();
      })
      .catch(error => {
        toast.error("Some error occured !", {
          position: toast.POSITION.BOTTOM_RIGHT
        }, { autoClose: 500 });
      })
  }


  render() {
    const { handleClose } = this.props
    return (
      <div class="modal fade show" style={{ opacity: 1 }}>
        <ToastContainer />
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Return/Replace Policy</h4>
          </div>
          <div class="modal-body">
            <p>Number days to return  : {this.state.daysToReturn}<br />
              {this.state.conditions}
            </p>
            <br />
            <br />
            {this.state.isRefundable ?
              <div>
                <div className="form-group">
                  <textarea name="customerComment" className="form-control"
                    onChange={this.handleComment}
                    placeholder="Enter comment" value={this.state.customerComment}></textarea>
                </div>
                <button type="button" class="btn btn-primary" onClick={() => this.requestRefund()} >Request Refund</button>
              </div> :
              <h3>Item is not refundable</h3>
            }
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" onClick={() => handleClose()} >Close</button>
          </div>
        </div>
      </div>
    );
  };
};