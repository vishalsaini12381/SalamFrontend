import React from 'react';
import ReactDOM from 'react-dom';
import './vendorlistpage.css';
import axios from 'axios';
import DataTable from '../DataTable'
class Vendorlistpage extends React.Component{


	render(){
		return(
        <div className="my-3 my-md-5">
          <div className="container">
            <div className="page-header">
              <h4 className="page-title">Vendor List</h4>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Vendor List</li>
              </ol>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12">
              <div className="card">
                <div className="card-body">
                <div className="table-responsive">  
                <DataTable/>     
                {/* <tr>
                        <th className="wd-15p">Vendor Id</th>
                        <th className="wd-15p">Vendor Name</th>
                        <th className="wd-15p">Store Name</th>
                        <th className="wd-15p">Email Id</th>
                        <th className="wd-20p">Mobile No</th>
                        <th className="wd-20p">Address</th>
                        <th className="wd-25p">Action</th>
                      </tr>      */}
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

export default Vendorlistpage;