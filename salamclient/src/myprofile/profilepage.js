import React from 'react';
import ReactDOM from 'react-dom';
import './profilepage.css';
import Sidebar from './sidebar.js';
import Profiledetail from './profiledetail.js';
class Profilepage extends React.Component{
	render()
	{
		return(

  <div className="main-container col2-right-layout myorder-fluid">
    <div className="container">
      <div className="row">
              <Sidebar/>
              <Profiledetail/>
      </div>
    </div>
  </div>

			)
	}
}

export default Profilepage;