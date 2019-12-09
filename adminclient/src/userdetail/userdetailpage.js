import React from 'react';
import ReactDOM from 'react-dom';
import './userdetailpage.css';
class Userdetailpage extends React.Component{
	render()
	{
		return(
        <div className="my-3 my-md-5">
          <div className="container">
            <div className="page-header">
              <h4 className="page-title">User Detail</h4>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">User Detail</li>
              </ol>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card card-profile vendorprofile">
                  <div className="card-body text-center">
                    <img className="card-profile-img" src="./images/userpic.png" alt="img"/>
                    <h3 className="mb-3 text-white">John Smith</h3>
                    <p className="mb-4 text-white">User</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className=" " id="profile-log-switch">
                      <div className="fade show active " >
                        <div className="table-responsive border ">
                          <table className="table row table-borderless w-100 m-0 ">
                            <tbody className="col-lg-6 p-0">
                              <tr>
                                <td><strong>Full Name :</strong> John Smith</td>
                              </tr>
                              <tr>
                                <td><strong>Location :</strong> USA</td>
                              </tr>
                              <tr>
                                <td><strong>Address :</strong> 124 GHF Helton Dubai</td>
                              </tr>
                            </tbody>
                            <tbody className="col-lg-6 p-0">
                              <tr>
                                <td><strong>Gender :</strong> Male</td>
                              </tr>
                              <tr>
                                <td><strong>Email Id :</strong> smith@gmail.com</td>
                              </tr>
                              <tr>
                                <td><strong>Phone Number :</strong> +761 2554 3562 </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="row mt-5 profie-img">
                          <div className="col-md-12">
                            <div className="media-heading">
                            <h5><strong>About John Smith</strong></h5>
                          </div>
                          <p>
                             Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus</p>
                          <p >because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12">
              <div className="card">
                <div className="card-header"> 
                   <h3 className="card-title">User Order List</h3> 
                 </div>
                <div className="card-body">
                                  <div className="table-responsive">
                  <table id="example" className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th className="wd-15p">Order Id</th>
                        <th className="wd-15p">Vendor Name</th>
                        <th className="wd-20p">Date/Time</th>
                        <th className="wd-20p">Price</th>
                        <th className="wd-15p">Deliver Address</th>
                        <th className="wd-25p">Payment Status</th>
                        <th className="wd-25p">Order Status</th>
                        <th className="wd-25p">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#O1001</td>
                        <td>Jamil Khan</td>
                        <td>20-07-2019/02:30 PM</td>
                        <td>$200</td>
                        <td>MBV 1014 Dubai</td>
                        <td>Online Payment</td>
                        <td>Pending</td>
                        <td>
                          <div className="actiontrans">
                            <a href="/orderdetail">View Detail</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#O1002</td>
                        <td>Jamil Khan</td>
                        <td>20-07-2019/02:30 PM</td>
                        <td>$200</td>
                        <td>MBV 1014 Dubai</td>
                        <td>Online Payment</td>
                        <td>Complete</td>
                        <td>
                          <div className="actiontrans">
                            <a href="/orderdetail">View Detail</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#O1003</td>
                        <td>Jamil Khan</td>
                        <td>20-07-2019/02:30 PM</td>
                        <td>$200</td>
                        <td>MBV 1014 Dubai</td>
                        <td>Online Payment</td>
                        <td>Pending</td>
                        <td>
                          <div className="actiontrans">
                            <a href="/orderdetail">View Detail</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#O1004</td>
                        <td>Jamil Khan</td>
                        <td>20-07-2019/02:30 PM</td>
                        <td>$200</td>
                        <td>MBV 1014 Dubai</td>
                        <td>Online Payment</td>
                        <td>Pending</td>
                        <td>
                          <div className="actiontrans">
                            <a href="/orderdetail">View Detail</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#O1005</td>
                        <td>Jamil Khan</td>
                        <td>20-07-2019/02:30 PM</td>
                        <td>$200</td>
                        <td>MBV 1014 Dubai</td>
                        <td>Online Payment</td>
                        <td>Complete</td>
                        <td>
                          <div className="actiontrans">
                            <a href="/orderdetail">View Detail</a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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

export default Userdetailpage;