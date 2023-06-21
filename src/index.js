import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Redvivir from './components/redvivir/Redvivir';
import EntrevistasPersonalizadas from './components/entrevistasPersonalizadas/EntrevistasPersonalizadas';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import EntrevistasOnLine from './components/entrevistasOnLine/EntrevistasOnLine';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route exact path='/redvivir' element={<Redvivir/>}/>
          <Route exact path='/entrevistasPersonalizadas' element={<EntrevistasPersonalizadas/>}/>
          <Route exact path='/entrevistasOnline' element={<EntrevistasOnLine/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);


