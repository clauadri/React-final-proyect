import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Accesorios from './pages/Accesorios';
import AboutUs from './pages/AboutUs';
import Navbar from './componentes/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Footer from './componentes/Footer';
import Imagen from './componentes/Imagen';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkSession } from './redux/users/user.functions';
import RutasSegurizadas from './componentes/RutasSegurizadas';
function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token')
  const navigateTo = useNavigate()
  useEffect(()=>{
    token && dispatch(checkSession(token, navigateTo))
  }, [])
  return (
    <div className="App">
      <div>
      <img className='logo' src='https://wemotoclothing.com/media/image/dc/d9/12/wemoto_logo_400.png' alt=''></img>
      <Navbar/>
        <Routes> 
          <Route path='accesorios' element = {<Accesorios/>}/> 
          <Route path='' element = {<Home/>}/>  
          <Route path='aboutus' element = {<AboutUs/>}/> 
          <Route path='register' element ={<Register/>}/>
          <Route path='login' element = {<Login/>}/> 
        </Routes>
      <Footer text='© 2022 Wemoto Cloting'/>
      </div>
    </div>
  );
}

export default App;
