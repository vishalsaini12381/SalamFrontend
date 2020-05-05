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
import PrivacyPolicy from './containers/PrivacyPolicy/index';
import ReturnPolicy from './containers/returnPolicy';
import Security from './containers/Security';
import SiteMap from './containers/SiteMap';
import TermOfUse from './containers/TermOfUse';
import Dashboard from './containers/Dashboard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Call it once in your app. At the root of your app is the best place
toast.configure()
 
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
					<Route path="/privacy-policy" component={PrivacyPolicy} />
					<Route path="/return-policy" component={ReturnPolicy} />
					<Route path="/security" component={Security} />
					<Route path="/sitemap" component={SiteMap} />
					<Route path="/term-of-use" component={TermOfUse} />
					<Route path="/dashboard" component={Dashboard}></Route>
				</Router>
			</Provider>

		);
	}
}
export default Apps;
