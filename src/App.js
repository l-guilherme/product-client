import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom" 

import { useState } from 'react'
import { getUser } from './helpers/Utils';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateProduct from './pages/CreateProduct';
import NavBar from './components/NavBar';
import ShowProductDetails from './pages/ShowProductDetails';
 
function App() {

  const [isLogged, setIsLogged] = useState(getUser() != null ? true : false);

  function handleLogin(isAuth) {
    setIsLogged(isAuth);
  }

  return (
    <div className='App'>
      <Router>
        <NavBar onLogin={handleLogin}/>
        <Routes>
          <Route path='/' element={ isLogged ? <Home itensPerPage={5}/> : <Login onLogin={handleLogin}/>} />
          <Route path='/home' element={<Home itensPerPage={5}/>} />
          <Route path='/login' element={<Login onLogin={handleLogin}/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/createProduct' element={<CreateProduct/>} />
          <Route path='/showProductDetails/:productId' element={<ShowProductDetails/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
