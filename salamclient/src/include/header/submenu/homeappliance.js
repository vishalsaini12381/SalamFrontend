import React from 'react';
import ReactDOM from 'react-dom';
import './submenu.css';
class Homeappliance extends React.Component{
	render()
	{
		return(
            <div className="level0-wrapper dropdown-6col">
              <div className="level0-wrapper2">
                <div className="nav-block nav-block-center">
                  <ul className="level0">
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Television</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Mi</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Micromax</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Thomson</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Samsung</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Refrigerators</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Single Door</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Double Door</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Triple door</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Side by Side</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Kitchen Appliances</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Microwave Ovens</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Oven Toaster Grills (OTG)</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Juicer/Mixer/Grinder</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Electric Kettle</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Small Home Appliances</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Irons</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Water Purifiers</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Fans</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Air Coolers</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Washing Machine</span></a>                   
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>LG</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Whirlpool</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Samsung</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Hitachi</span></a> </li>
                      </ul>
                    </li>        
                  </ul>
                </div>
              </div>
            </div>


			)
	}
}

export default Homeappliance;