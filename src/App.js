import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import SignUp from './Pages/Login/Signup/SignUp';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
     <Header/>
     <Routes>
      <Route path='/signup' element={<SignUp/>} />
     </Routes>
    </div>
  );
}

export default App;
