import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Accesorios from './pages/Accesorios';
import AboutUs from './pages/AboutUs';
import Navbar from './componentes/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Footer from './componentes/Footer';
import Imagen from './componentes/Imagen';
function App() {
  return (
    <div className="App">
      <div>
      <img className='logo' src='https://wemotoclothing.com/media/image/dc/d9/12/wemoto_logo_400.png' alt=''></img>
      
      <Navbar/>
        <Routes> 
          <Route path='' element = {<Home/>}> </Route> 
          <Route path='accesorios' element = {<Accesorios/>}> </Route> 
          <Route path='aboutus' element = {<AboutUs/>}> </Route>
          <Route path='register' element = {<Register/>}> </Route>
          <Route path='login' element = {<Login/>}> </Route>
        </Routes>
      <Footer text='© 2022 Wemoto Cloting'/>
      </div>
    </div>
  );
}

export default App;
