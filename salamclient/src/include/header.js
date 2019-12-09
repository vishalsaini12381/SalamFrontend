import React from 'react';
import ReactDOM from 'react-dom';
import Search from './header/search.js';
import Menu from './header/menu.js';
class Header extends React.Component{
	render()
	{
		return(
      <div>
      <Search/>
      <Menu/>
      </div>
			)

	}
}

export default Header;