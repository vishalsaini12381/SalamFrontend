import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as  Router, Route} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {loadState, saveState} from './Authentication/localStorage'
import Login from './login.js';
import Forgotpassword from './forgotpassword.js';
import Dashboard from './dashboard.js';
import Userlist from './userlist.js';
import Userdetail from './userdetail.js';
import Vendorlist from './vendorlist.js';
import Vendordetail from './vendordetail.js';
// import Addnewvendor from './addnewvendor.js';
import Orderlist from './orderlist.js';
import Productlist from './productlist.js';
import Productdetail from './productdetail.js';
import Orderdetail from './orderdetail.js';
import Addnewproduct from './addnewproduct.js';
import Createbusinesscategory from './createbusinesscategory';
import Createcategory from './createcategory.js';
import Createsubcategory from './createsubcategory.js';
import CreateSpecificationpage from './createSpecification';
import reducers from './reducer/reducer';
import DataTable from './DataTable';
import CreateBrand from './createbrands.js';
import Table from './table';
import Toggle from './toggle';



const persistedStste = loadState();
const store = createStore(
  reducers,
  persistedStste,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f =>f
  )
);

store.subscribe(()=>{
  saveState(store.getState());
})

function App() {
  return (
    <Provider store = {store}>
           <Router>
                <Route exact path = "/" component = {Login} />
                <Route  path = "/Dashboard"component = {Dashboard} />
                <Route  path = "/Userlist"component = {Userlist} />
                <Route  path = "/Userdetail"component = {Userdetail} />
                <Route  path = "/Vendorlist"component = {Vendorlist} />
                <Route  path = "/Vendordetail"component = {Vendordetail} />
                {/* <Route  path = "/Addnewvendor"component = {Addnewvendor} /> */}
                <Route  path = "/Orderlist"component = {Orderlist} />
                <Route  path = "/Productlist"component = {Productlist} />
                <Route  path = "/Productdetail"component = {Productdetail} />
                <Route  path = "/Orderdetail"component = {Orderdetail} />
                <Route  path = "/Addnewproduct"component = {Addnewproduct} />
                <Route  path = "/businesscategory"component = {Createbusinesscategory} />
                <Route  path = "/category"component = {Createcategory} />
                <Route  path = "/subcategory"component = {Createsubcategory} />
                <Route  path = "/CreateSpecificationpage"component = {CreateSpecificationpage} />
                <Route  path = "/dataTable"component = {DataTable} />
                <Route  path = "/Table"component = {Table} />
                <Route  path = "/createBrand"component = {CreateBrand} />
                <Route  path = "/Toggle"component = {Toggle} />


           </Router>
       </Provider>
                
  );
}

export default App;
