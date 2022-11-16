import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/Signup/SignUp';
import Products from './Pages/Products/Products/Products';
import Footer from './Pages/Shared/Footer/Footer2';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product' element={<Products/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
