import React from 'react';
import ReactDOM from 'react-dom';
import './submenu.css';
class Electronics extends React.Component{
	render()
	{
		return(
            <div className="level0-wrapper dropdown-6col">
              <div className="level0-wrapper2">
                <div className="nav-block nav-block-center">
                  <ul className="level0">
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Mobiles</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Mi</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Samsung</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Vivo</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Nokia</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Mobile Accessories</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Mobile Cases</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Headphones & Headsets</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Power Banks</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Screenguards</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Laptops</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Dell</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Sony</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>HP</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Lenevo</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Speakers</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Home Audio Speakers</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Home Theatres</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Soundbars</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Bluetooth Speakers</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Computer Accessories</span></a>                   
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>External Hard Disks</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Pendrives</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Laptop Bags</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Mouse</span></a> </li>
                      </ul>
                    </li>        
                  </ul>
                </div>
              </div>
            </div>


			)
	}
}

export default Electronics;