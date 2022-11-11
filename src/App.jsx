import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Accesorios from './pages/Accesorios';
import AboutUs from './pages/AboutUs';
import Navbar from './componentes/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
function App() {
  return (
    <div className="App">
      <h1>Wemoto</h1>
      <div>
        <Navbar/>
        <Routes> 
          <Route path='' element = {<Home/>}> </Route> 
          <Route path='men' element = {<Men/>}> </Route> 
          <Route path='women' element = {<Women/>}> </Route> 
          <Route path='accesorios' element = {<Accesorios/>}> </Route> 
          <Route path='aboutus' element = {<AboutUs/>}> </Route>
          <Route path='register' element = {<Register/>}> </Route>
          <Route path='login' element = {<Login/>}> </Route>
        </Routes>


      </div>
    </div>
  );
}

export default App;
