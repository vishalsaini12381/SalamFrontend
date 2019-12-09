import React from 'react';
import ReactDOM from 'react-dom';
import './submenu.css';
class Furnitures extends React.Component{
	render()
	{
		return(
            <div className="level0-wrapper dropdown-6col">
              <div className="level0-wrapper2">
                <div className="nav-block nav-block-center">
                  <ul className="level0">
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Living Room</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Sofas</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Loveseats</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Sectional Sofas</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Sleeper Sofas</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Bedroom</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Beds</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Headboards</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Nightstands</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Dressers</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Home Office</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Desks</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Office Chairs</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Bookcases</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Office Storage</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Dining Room</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Dining Room Tables</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Dining Room Chairs</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Bar Stools</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Dining Benches</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Bathroom Furniture</span></a>                   
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Bathroom Vanities</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Bathroom Storage</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Bathroom Mirrors</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Shower Curtains</span></a> </li>
                      </ul>
                    </li>        
                  </ul>
                </div>
              </div>
            </div>


			)
	}
}

export default Furnitures;