import React from 'react';
import ReactDOM from 'react-dom';
import './submenu.css';
class Women extends React.Component{
	render()
	{
		return(
            <div className="level0-wrapper dropdown-6col">
              <div className="level0-wrapper2">
                <div className="nav-block nav-block-center">
                  <ul className="level0">
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Clothing</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Casual Wear</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Formal Wear</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Ethnic Wear</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Leggings & Jeggings</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Footwear</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Sandals</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Wedges</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Shoes</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Ballerinas</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Watches</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Digital</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Chronograph</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Sports</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Casual</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Jackets</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Coats</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Formal Jackets</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Leather Jackets</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Blazers</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Beauty & Grooming</span></a>                   
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Make Up</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Skin Care</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Hair Care</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Bath & Spa</span></a> </li>
                      </ul>
                    </li>        
                  </ul>
                </div>
              </div>
            </div>


			)
	}
}

export default Women;