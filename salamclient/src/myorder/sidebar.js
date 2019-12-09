import React from 'react';
import ReactDOM from 'react-dom';
import './sidebar.css';

import axios from 'axios';
import swal from 'sweetalert';
const URL = process.env.REACT_APP_LOCAL;
class Sidebar extends React.Component{

  logout(event){
		event.preventDefault();
		axios.get(URL+'/api/user/Logout').then((response)=>{
			localStorage.clear();
			if(response.data.status){
				swal("Successful",
				`${response.data.message}`,
				).then((d)=>{
					window.location ="/";
				})
			}


		});
  }
  
	render()
	{
		return(
        <aside className="col-right sidebar col-sm-3 wow bounceInUp animated">
          <div className="block block-account">
            <div className="block-title">My Account</div>
            <div className="block-content">
              <ul>
                <li><a href="/Myprofile">My Profile </a></li>
                <li className="current"><a href="#">My Order</a></li>
                <li><a href="/Mywishlist">My Wishlist</a></li>
                <li><a href="#">Setting</a></li>
                <li><a>Sell With Us</a></li>
                <li><a>About Us</a></li>
                <li><a>Help & Support</a></li>
                <li><a>Privacy Policy</a></li>
                <li><a>Term & Condition</a></li>
                <li><a onClick={this.logout.bind(this)}>Log Out</a></li>
              </ul>
            </div>
          </div>
        </aside>


			)
	}
}

export default Sidebar;