import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';
import moment from 'moment'
const URL = process.env.REACT_APP_LOCAL;

class WalletTransaction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            walletBalance: 0,
            transactionArray: []
        }
    }

    componentDidMount() {
        this.fetchTransactions()
    }

    fetchTransactions = () => {
        if (this.props.userId) {
            axios.post(`${URL}/api/user/transaction`, {
                userId: this.props.userId
            }).then((response) => {
                if (Array.isArray(response.data.data)) {
                    this.setState({
                        transactionArray: response.data.data,
                        walletBalance: response.data.wallet
                    })
                }
            })
        } else {
            swal({
                title: "OOPS",
                text: "Session expired.Please Login!",
                icon: "warning",
                dangerMode: true,
                closeOnClickOutside: false,
            }).then((d) => {
                if (d) {
                    return window.location = "/Login"
                }
            })
        }

    }
    render() {
        return (
            <section className="col-main col-sm-9  wow bounceInUp animated cartdetail-fluid">
                <div class="category-title">
                    {/* <h1>My Wallet</h1><br />
                    <div class="breadcrumbs">
                        <div class="row" style={{ "padding": "0px 20px" }}>
                            <ul>
                                <li class="home"> <a href="#" title="Go to Home Page">Home</a><span>/</span></li>
                                <li class="category13"> My wallet</li>
                            </ul>
                        </div>
                    </div> */}

                    <div class="continueshopping" style={{ "padding-bottom": "10px", "margin-bottom": "10px" }} >
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="leftpart">
                                    <h3><span>Wallet Balance</span> : &nbsp; ${this.state.walletBalance}</h3>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12"><br />
                                <h4>Transaction History</h4>
                                <table class="data-table" id="my-orders-table">
                                    <thead>
                                        <tr class="first last">
                                            <th>transaction I'd</th>
                                            <th>Date</th>
                                            <th>Amount</th>
                                            <th>Order I'd</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.transactionArray.map((item, key) => {
                                                return (<tr index={key} class="first odd" style={item.receiverId !== undefined ? { background: '#80e466' } : {}}>
                                                    <td>{item.transactionId !== undefined ? item.transactionId : item._id}</td>
                                                    <td>{item.createdAt}</td>
                                                    <td>{item.amount}</td>
                                                    <td>{item.orderId}</td>
                                                </tr>)
                                            })
                                        }
                                        {/* <tr class="first odd">
                                            <td>#132456</td>
                                            <td>9/9/10</td>
                                            <td>100 $</td>
                                            <td>#12a453</td>
                                        </tr>
                                        <tr class="first odd">
                                            <td>#132456</td>
                                            <td>9/9/10</td>
                                            <td>100 $</td>
                                            <td>#12a453</td>
                                        </tr>
                                        <tr class="first odd">
                                            <td>#132456</td>
                                            <td>9/9/10</td>
                                            <td>100 $</td>
                                            <td>#12a453</td>
                                        </tr>
                                        <tr class="first odd">
                                            <td>#132456</td>
                                            <td>9/9/10</td>
                                            <td>100 $</td>
                                            <td>#12a453</td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        authenticateState: state.inititateState.authenticateState,
        email: state.inititateState.email,
        userId: state.inititateState.userId
    }
}

export default withRouter(connect(mapStateToProps)(WalletTransaction));

