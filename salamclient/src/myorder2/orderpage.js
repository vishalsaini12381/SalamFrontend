import React from 'react';
import ReactDOM from 'react-dom';
import './orderpage.css';
import Sidebar from './sidebar.js';
import Orderlist from './orderlist.js';
class Orderpage extends React.Component{
	render()
	{
		return(
  <div className="main-container col2-right-layout myorder-fluid">
    <div className="container">
      <div className="row">
              <Sidebar/>
              <Orderlist/>
      </div>
    </div>
  </div>


			)
	}
}

export default Orderpage;