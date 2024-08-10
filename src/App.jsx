import React, { useContext } from 'react';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShowProduct from './components/product/ShowProduct';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/product/ProductDetail.jsx';
import Navbar from './components/Navbar.jsx';
import SearchProduct from './components/product/SearchProduct.jsx';
import Register from './components/user/Register.jsx';
import Login from './components/user/Login.jsx';
import Profile from './components/user/Profile.jsx';
import Cart from './components/Cart.jsx'
import Address from './components/Address.jsx'
import Checkout from './components/Checkout.jsx';
import OrderConfirmation from './components/OrderConfirmation.jsx'
const App = () => {
  // const {}=useContext(AppContext);
  return (

    <Router>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<ShowProduct />} />
        <Route path='/product/search/:term' element={<SearchProduct/>} />
        <Route path='/product/:id' element={<ProductDetail/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/shipping' element={<Address/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/orderconfirmation' element={<OrderConfirmation/>} />
      </Routes>

    </Router>
  );
}

export default App;
