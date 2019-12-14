import moment from 'moment'; // Example for onSort prop
import React, { Component } from 'react'; // Import React
import { render } from 'react-dom'; // Import render method
import Datatable from 'react-bs-datatable'; // Import this package
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import swal from 'sweetalert';
import axios from 'axios';
const URL = process.env.REACT_APP_LOCAL;

class Orderdatatable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myOrders: [],
      subTotal: 0,
      total: 0,
      totalProduct: 0,
    }
  }

  componentWillMount() {
    this.fetchMyOrder();
  }

  fetchMyOrder() {
    // console.log('this.props.userId',this.props.userId)
    if (this.props.userId) {
      axios.post(URL + '/api/user/myOrders', {
        userId: this.props.userId
      }).then((response) => {

        console.log('this.responsefdfddfdddddddddd', response.data.product);
        this.setState({
          myOrders: response.data.product,
        })


      })
    } else {
      swal({
        title: "OOPS",
        text: "Session expired.Please Login!",
        icon: "warning",
        dangerMode: true,
        closeOnClickOutside: false,
      }).then((d) => {
        //console.log('ddddddddddddddddddd',d)
        if (d) {
          return window.location = "/Login"
        }
      })
    }

  }


  render() {
    const header = [
      { title: 'Order-id', prop: 'orderid', sortable: true, filterable: true },
      { title: 'Email', prop: 'email', sortable: true, filterable: true },
      // { title: 'Amount', prop: 'amount', cell: (row) => row.realname.toUpperCase() },
      { title: 'Amount', prop: 'amount', filterable: true },
      { title: 'Shipping Amount', prop: 'shippingamount', filterable: true },
      { title: 'Total', prop: 'total', sortable: true, filterable: true },
      { title: 'View', prop: 'view', sortable: true, filterable: true },
    ];

    const body = [

    ];

    if (this.state.myOrders) {
      this.state.myOrders.map((e, i) => {
        var obj = {
          "orderid": e._id,
          "email": e.userId.email,
          "amount": '$' + e.price,
          "shippingamount": '$' + e.shippingCharges,
          "total": '$' + e.amount,
          "view": <a href={'/orderdetail?orderId=' + e._id}>View</a>
        }
        body.push(obj);
      })
    }



    const onSortFunction = {
      date(columnValue) {
        // Convert the string date format to UTC timestamp
        // So the table could sort it by number instead of by string
        return moment(columnValue, 'Do MMMM YYYY').valueOf();
      },
    };

    const customLabels = {
      first: '<<',
      last: '>>',
      prev: '<',
      next: '>',
      show: 'Display',
      entries: 'rows',
      noResults: 'There is no data to be displayed',
    };
    return (

      <Datatable
        tableHeader={header}
        tableBody={body}
        keyName="userTable"
        tableClass="striped hover responsive"
        rowsPerPage={5}
        rowsPerPageOption={[5, 10, 15, 20]}
        initialSort={{ prop: "email", isAscending: true }}
        onSort={onSortFunction}
        labels={customLabels}
      />

    )
  }
}


function mapStateToProps(state) {
  console.log('555555555555555555', state.inititateState.email);
  return {
    authenticateState: state.inititateState.authenticateState,
    email: state.inititateState.email,
    userId: state.inititateState.userId
  }
}

export default withRouter(connect(mapStateToProps)(Orderdatatable));

// export default Orderdatatable;