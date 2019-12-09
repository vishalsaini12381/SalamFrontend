import React from 'react';
import ReactDOM from 'react-dom';
import './orderlist.css';
import './orderdatatable.css';
import Orderdatatable from './orderdatatable.js';
class Orderlist extends React.Component{
	render()
	{
		return(
        <section className="col-main col-sm-9  wow bounceInUp animated orderist-fluid">
          <div className="category-title">
               <h1>My Order</h1>
                 <div className="breadcrumbs">
			                <div className="row">
            			        <ul>
            			          <li className="home"> <a href="#" title="Go to Home Page">Home</a><span>/</span></li>
            			          <li className=""> <a href="#" title="Go to Home Page">My Account</a><span>/</span></li>
            			          <li className="category13"> My Order</li>
            			        </ul>
			                </div>
			            </div>
                  {/* <div className="filterform">
                    <form>
                        <div className="row">
                          <div className="col-sm-3">
                            <div className="form-group">
                              <label for="from">From</label>
                              <input type="date" className="form-control" id="dateofbirth"/>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="form-group">
                              <label for="to">To</label>
                              <input type="date" className="form-control" id="dateofbirth"/>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="form-group">
                                <label for="status">Status</label>
                                      <select className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                     </select>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="form-group">
                                 <button type="button" className="btn btn-primary btn-lg btn-block submitbutto">Submit</button>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="form-group">
                                 <button type="button" className="btn btn-primary btn-lg btn-block clearbutto">Clear</button>
                            </div>
                          </div>
                        </div>
                    </form>

                  </div> */}
                  <div className="orderdatatable">
                       <Orderdatatable/>
                  </div>
                  

          </div>
        </section>


			)
	}
}

export default Orderlist;