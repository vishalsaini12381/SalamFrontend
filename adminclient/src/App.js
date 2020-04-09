import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { loadState, saveState } from './Authentication/localStorage'

import Login from './login.js';
// import Forgotpassword from './forgotpassword.js';
import Dashboardpage from './dashboard/dashboardpage.js';
import Userlistpage from './userlist/userlistpage.js';
// import Userdetail from './userdetail.js';
// import Vendorlist from './vendorlist.js';
// import Vendordetail from './vendordetail.js';
// import Addnewvendor from './addnewvendor.js';
// import Orderlist from './orderlist.js';
// import Productlist from './productlist.js';
// import Productdetail from './productdetail.js';
// import Orderdetail from './orderdetail.js';
// import Addnewproduct from './addnewproduct.js';
// import Createbusinesscategory from './createbusinesscategory';
// import Createcategory from './createcategory.js';
// import Createsubcategory from './createsubcategory.js';
// import CreateSpecificationpage from './createSpecification';
import reducers from './reducer/reducer';
import DataTable from './DataTable';
// import CreateBrand from './createbrands.js';
import Table from './table';
import Toggle from './toggle';
import DefaultLayout from './routes/DefaultLayout'
import Userdetailpage from './userdetail/userdetailpage';
import Vendorlistpage from './vendorlist/vendorlistpage';
import vendordetailpage from './vendordetail/vendordetailpage';
import orderlistpage from './orderlist/orderlistpage';
import Productlistpage from './productlist/productlistpage';
import productdetailpage from './productdetail/productdetailpage';
import orderdetailpage from './orderdetail/orderdetailpage';
import Addnewproductpage from './addnewproduct/addnewproductpage';
import createbusinesscategorypage from './createbusinesscategory/createbusinesscategorypage';
import createcategorypage from './createcategory/createcategorypage';
import createsubcategorypage from './createsubcategory/createsubcategorypage';
import createSpecificationpage from './specification/createSpecificationpage';
import createbrandspage from './createbrands/createbrandspage';
import RefundRequestPage from './refundRequests';
import SocketConnection from './component/chat/SocketConnection'

const persistedStste = loadState();
const store = createStore(
  reducers,
  persistedStste,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

store.subscribe(() => {
  saveState(store.getState());
})

function App() {
  return (
    <Provider store={store}>
      <SocketConnection/>
      <Router>
        <Route exact path="/" component={Login} />
        <DefaultLayout>
          <Route path="/Dashboard" component={Dashboardpage} />
          <Route path="/Userlist" component={Userlistpage} />
          <Route path="/Userdetail" component={Userdetailpage} />
          <Route path="/Vendorlist" component={Vendorlistpage} />
          <Route path="/Vendordetail" component={vendordetailpage} />
          {/* <Route  path = "/Addnewvendor"component = {Addnewvendor} /> */}
          <Route path="/Orderlist" component={orderlistpage} />
          <Route path="/refund-requests" component={RefundRequestPage}/>
          <Route path="/Productlist" component={Productlistpage} />
          <Route path="/Productdetail" component={productdetailpage} />
          <Route path="/Orderdetail" component={orderdetailpage} />
          <Route path="/Addnewproduct" component={Addnewproductpage} />
          <Route path="/businesscategory" component={createbusinesscategorypage} />
          <Route path="/category" component={createcategorypage} />
          <Route path="/subcategory" component={createsubcategorypage} />
          <Route path="/CreateSpecificationpage" component={createSpecificationpage} />

        <Route path="/createBrand" component={createbrandspage} />

        </DefaultLayout>

        <Route path="/Table" component={Table} />
        <Route path="/Toggle" component={Toggle} />
        <Route path="/dataTable" component={DataTable} />
      </Router>
    </Provider>

  );
}

export default App;
