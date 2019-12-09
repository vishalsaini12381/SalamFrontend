import React from 'react';
import ReactDOM from 'react-dom';
import './submenu.css';
class Kids extends React.Component{
	render()
	{
		return(
            <div className="level0-wrapper dropdown-6col">
              <div className="level0-wrapper2">
                <div className="nav-block nav-block-center">
                  <ul className="level0">
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Girls Clothing</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Dresses & Skirts</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Ethnic Wear</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>T-shirts & Tops</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Sandals</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Boys Clothing</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Polos  T-Shirts</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Ethnic Wear</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Shirts</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Jeans</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Kids Winter Wear</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Boys Winter Wear</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Girls Winter Wear</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Infants Winter Wear</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Thermals</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Baby Care</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Diapers</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Wipes</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Baby Grooming</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Baby Oral Care</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Toys</span></a>                   
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Educational Toys</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Soft Toys</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Outdoor Toys</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Board Games</span></a> </li>
                      </ul>
                    </li>        
                  </ul>
                </div>
              </div>
            </div>


			)
	}
}

export default Kids;