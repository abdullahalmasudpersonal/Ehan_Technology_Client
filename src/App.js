import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/Signup/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Products from './Pages/Products/Products/Products';
import Footer from './Pages/Shared/Footer/Footer2';
import Header from './Pages/Shared/Header/Header';
import Profile from './Pages/Dashboard/Profile';
import MyOrder from './Pages/Dashboard/MyOrder';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddToCart from './Pages/AddToCart/AddToCart';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productsId' element={<ProductDetails />} />
        <Route path='/add-to-cart/:productsId' element={<AddToCart />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Profile />} />
          <Route path='my-order' element={<MyOrder />} />
          <Route path='my-order' element={<MyOrder />} />
          <Route path='add-product' element={<AddProduct />} />
        </Route>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
