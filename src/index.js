import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Principal from './components/principal/Principal';
import Secundaria from './components/secundaria/Secundaria';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route exact path='/principal' element={<Principal/>}/>
          <Route exact path='/secundaria' element={<Secundaria/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


