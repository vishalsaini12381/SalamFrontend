import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Home from './home.js';
import Productlist from './productlist.js';
import Productdetail from './productdetail.js';
import Myorders from './myorders.js';
import orderdetail from './orderdetail';
import Myprofile from './myprofile.js';
import Shoppingcart from './shoppingcart.js';
import Deliveryaddress from './deliveryaddress.js';
import Paymentprocess from './paymentprocess.js';
import Forgotpassword from './forgotpassword.js';
import Slid from './Slid';
import { loadState, saveState } from './Authentication/localStorage';
import reducers from './reducer/reducer';
import Signup from './signup';
import Login from './login';
import Sidebar from './productlist/sidebar';
import Mywishlist from './mywishlist';
import MyWallet from './MyWallet'
// import { create } from 'domain';

const persistedState = loadState();
const store = createStore(
	reducers,
	persistedState,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

store.subscribe(() => {
	saveState(store.getState());
});

class Apps extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Route exact path="/" component={Home} />
					<Route path="/Productlist" component={Productlist} />
					<Route path="/Productdetail" component={Productdetail} />
					<Route path="/Myorders" component={Myorders} />
					<Route path="/orderdetail" component={orderdetail} />
					<Route path="/Myprofile" component={Myprofile} />
					<Route path="/Shoppingcart" component={Shoppingcart} />
					<Route path="/Deliveryaddress" component={Deliveryaddress} />
					<Route path="/Paymentprocess" component={Paymentprocess} />
					<Route path="/Forgotpassword" component={Forgotpassword} />
					<Route path="/Mywishlist" component={Mywishlist} />
					<Route path="/Slid" component={Slid} />
					<Route path="/Signup" component={Signup} />
					<Route path="/Login" component={Login} />
					<Route path="/mywallet" component={MyWallet} />
					<Route path="/Sidebar" component={Sidebar} />

				</Router>
			</Provider>

		);
	}
}
export default Apps;
