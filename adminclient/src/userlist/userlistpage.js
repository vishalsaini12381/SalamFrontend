import React from 'react';
import ReactDOM from 'react-dom';
import './userlistpage.css';

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


class Userlistpage extends React.Component{

  constructor(props){
		super(props);
		this.state = {
        allUsers:[],
		}
  }

  componentWillMount(){
    this.fetchAllUsers();
  }


  fetchAllUsers(){

     //console.log('{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{===>', this.props.userId)
      axios.post(URL+'/api/admin/userList',{
      }).then((response)=>{
         // console.log('this.responsefdfddfdddddddddd',response.data);
          this.setState({
            allUsers : response.data.data,
          })
          
      })
   

   
  }


	render()
	{

    const bodyDataArr=[];
    
    this.state.allUsers.map((e,i)=>{
      var obj={
          "name":e._id,
          "position":e.firstName,
          "office":e.lastName,
          "age":e.email,
          "date":e.mobile,
          "salary":e.adminStatus 
      }
      bodyDataArr.push(obj);
    })

   const data = {
      columns: [
        {
          label: 'User-Id',
          field: 'name',
          sort: 'asc',
          width: 150
        },
        {
          label: 'First Name',
          field: 'position',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Last Name',
          field: 'office',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Email',
          field: 'age',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Mobile No',
          field: 'date',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Status',
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
              <h4 className="page-title">User List</h4>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/Dashboard">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">User List</li>
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

export default withRouter(connect(mapstateToProps)(Userlistpage));

// export default Userlistpage;