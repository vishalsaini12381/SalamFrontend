import React from 'react';
import './sidebar.css';
import axios from 'axios';
import swal from 'sweetalert';
import { withRouter, Link } from 'react-router-dom'
const URL = process.env.REACT_APP_LOCAL;

function Sidebar(props) {
    console.log(process.env.REACT_APP_LOCAL)
    const logout = (event) => {
        event.preventDefault();
        axios.get(URL + '/api/user/Logout')
            .then((response) => {
                localStorage.clear();
                if (response.data.status) {
                    swal("Successful",
                        `${response.data.message}`,
                    ).then((d) => {
                        window.location = "/";
                    })
                }
            });
    }

    return (
        <aside className="col-right sidebar col-sm-3 wow bounceInUp animated">
            <div className="block block-account">
                <div className="block-title">My Account</div>
                <div className="block-content">
                    <ul>
                        <li>
                            <Link to="Myprofile">My Profile </Link></li>
                        <li className="current">
                            <Link to="">My Order</Link>
                        </li>
                        <li>
                            <Link to="mywallet">My Wallet</Link>
                        </li>
                        <li>
                            <Link to="Mywishlist">My Wishlist</Link>
                        </li>
                        <li>
                            <Link to="">Setting</Link>
                        </li>
                        {/* <li><a href="javascript:;">Sell With Us</a></li> */}
                        <li>
                            <Link to="">About Us</Link>
                        </li>
                        <li>
                            <Link to="">Help & Support</Link>
                        </li>
                        {/* <li>
                            <Link to="privacy-policy">Privacy Policy</Link>
                        </li> */}
                        {/* <li>
                            <Link to="term-of-use">Term & Condition</Link>
                        </li> */}
                        <li><span onClick={logout}>Log Out</span></li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default withRouter(Sidebar);