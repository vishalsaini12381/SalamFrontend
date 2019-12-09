import React from 'react';
import ReactDOM from 'react-dom';
import './mywishlistpage.css';
import Sidebar from './sidebar.js';
import Mywishlistdetail from './mywishlistdetail.js';
class Mywishlistpage extends React.Component{
	render()
	{
		return(

  <div className="main-container col2-right-layout myorder-fluid">
    <div className="container">
      <div className="row">
              <Sidebar/>
              <Mywishlistdetail/>
      </div>
    </div>
  </div>

			)
	}
}

export default Mywishlistpage;