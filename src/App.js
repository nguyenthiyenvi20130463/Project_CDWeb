// import logo from './logo.svg';
import './App.css';
import Cart from './customer/components/Cart/Cart';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/productdetails';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        {/* <HomePage/>       */}
        {/* <Product/> */}
       {/* <ProductDetails/> */}
       <Cart/>
       {/* <Checkout/> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
