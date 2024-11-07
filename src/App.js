import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import ShopList from './components/ShopList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Error from './components/Error';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { Provider } from 'react-redux';
import store from './utils/store';
import ProductDetails from './components/ProductDetails';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store = {store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="shop" element={<ShopList />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="cart" element={<Cart />} />
          <Route path='/products/:id' element = {<ProductDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </Router> 
    </Provider>
  );
}

export default App;
