import React from 'react';
import ReactDOM from 'react-dom';
import './submenu.css';
class Sportsbooks extends React.Component{
	render()
	{
		return(
            <div className="level0-wrapper dropdown-6col">
              <div className="level0-wrapper2">
                <div className="nav-block nav-block-center">
                  <ul className="level0">
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Sports</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Cricket</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Badminton</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Cycling</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Football</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Gaming</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Gaming Consoles</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Gaming Accessoriies</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>PS4 Games</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Smart Glasses (VR)</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Books</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Entrance Exams</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Academics</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Literature & Fiction</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Non Fiction</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Stationery</span></a> 
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Pens</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Dairies</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Card Holders</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Desk Organiszers</span></a> </li>
                      </ul>
                    </li>
                    <li className="level3 nav-6-1 parent item"> <a href="#"><span>Exercise Fitness</span></a>                   
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Cardio Equipment</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Home Gyms</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Dumbbells</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="#"><span>Ab Exercisers</span></a> </li>
                      </ul>
                    </li>        
                  </ul>
                </div>
              </div>
            </div>


			)
	}
}

export default Sportsbooks;