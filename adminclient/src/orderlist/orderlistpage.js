import React from 'react';
import ReactDOM from 'react-dom';
import './orderlistpage.css';



import { MDBDataTable } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./datatable.css";



import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import $ from 'jquery';
import swal from 'sweetalert';
const URL = process.env.REACT_APP_LOCAL;


class Orderlistpage extends React.Component{
  constructor(props){
		super(props);
		this.state = {
        data: {},
        myOrders:[],
        rowdata: [],
        body:[],
		}
  }

  componentWillMount(){
    this.fetchMyOrder();
  }


  fetchMyOrder(){

     //console.log('{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{===>', this.props.userId)
      axios.post(URL+'/api/admin/getAllOrderAdmin',{
      }).then((response)=>{
          console.log('this.responsefdfddfdddddddddd',response.data.user);
          this.setState({
            myOrders : response.data.user,
          })
          
      })
   

   
  }

  
  
	render()
	{

    const bodyDataArr=[];
    
    this.state.myOrders.map((e,i)=>{
      var obj={
          "name":e._id,
          "position":e.userId.firstName+' '+e.userId.lastName,
          "office":'$'+e.amount,
          "age":(e.orderType==1) ? 'COD' : 'Online',
          "date":(e.status==1) ? 'Pending' : (e.status==2) ? 'Complete' : 'Cancel',
          "salary":<a href={'/orderdetail?orderId='+e._id}>View</a> 
      }
      bodyDataArr.push(obj);
    })

   const data = {
      columns: [
        {
          label: 'Order-Id',
          field: 'name',
          sort: 'asc',
          width: 150
        },
        {
          label: 'User Name',
          field: 'position',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Price',
          field: 'office',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Order Type',
          field: 'age',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Order Status',
          field: 'date',
          sort: 'asc',
          width: 150
        },
        {
          label: 'View',
          field: 'salary',
          sort: 'asc',
          width: 100
        }
      ],
      rows: bodyDataArr
    }


		return(
        <div className="my-3 my-md-5">
          <div className="container">
            <div className="page-header">
              <h4 className="page-title">Order List</h4>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/Dashboard">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Order List</li>
              </ol>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12">
              <div className="card">
                <div className="card-body">
                                  <div className="table-responsive">

                                  <MDBDataTable
				      striped
				      bordered
				      hover
				      data={data}
                    />
                    
                   </div>
                                </div>
              </div>
              </div>
            </div>
          </div>
        </div>


			)
	}
}

function mapstateToProps(state){
  return{
    authenticateState : state.inititateState.authenticateState,
    businesscategory : state.inititateState.businesscategory,
    businessId : state.inititateState.businessId
  }
}

export default withRouter(connect(mapstateToProps)(Orderlistpage));

// export default Orderlistpage;