// import logo from './logo.svg';
import './App.css';
import AdminRouters from './Routers/AdminRouters';
import CustomerRouters from './Routers/CustomerRouters';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/productdetails';
import HomePage from './customer/pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRouters />}></Route>
        <Route path='/admin/*' element={<AdminRouters />}></Route>
      </Routes>
    </div>
  );
}

export default App;
