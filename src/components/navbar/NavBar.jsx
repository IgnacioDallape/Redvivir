import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Botones from '../botones/Botones';
import './navBar.css'
import { Link } from 'react-router-dom';


const NavBar = () => {


  return (
    <div className="backgroundStyle" style={{ padding: '3rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1 className='headers__title' style={{ padding: '0.3rem', borderRadius: '0.3rem', border: '2px black solid' }}> Redvivir </h1>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1rem', alignItems: 'flex-end' }}>
        <img src="https://i.ibb.co/N1SdsHR/aaa-1-removebg-preview.png" alt="" style={{ width: '7rem' }} className='header__logoImg' />
        <h6 className='headers__title' style={{ padding: '0.3rem', borderRadius: '0.3rem', width: 'fit-content', border: '2px black solid', position: 'relative', left: '41px', display: 'flex', alignItems: 'center', height: 'fit-content' }}>Asesioria Psicológica</h6>
        <div className='redesSociales'>
          <a href="" ><img src="https://i.ibb.co/P4PK9yz/f3c542ef8298830cb6d2719818c245fe.jpg" alt="Logo-Whatsapp" className="header__redesSociales__logo" /></a>
          <a href="https://www.instagram.com/revivir.mza/?igshid=ZDdkNTZiNTM%3D" ><img src="https://i.ibb.co/ypXbDnP/2cc2400784903f4990c18642a25a93b2.jpg" alt="LogoInstagram" className="header__redesSociales__logo" /></a>
          <a href=""><img src="https://i.ibb.co/ScrT3TY/27e1e5decb8fbb6640da543f4c7dd3fa.jpg" alt="LogoYoutube" className="header__redesSociales__logo" /></a>
          <a href="https://www.facebook.com/profile.php?id=100092552824764&mibextid=ZbWKwL"><img src="https://i.ibb.co/QYBSBDM/29babec8a4502ae24cd0892f3f7145dd.jpg" alt="LogoFacebook" className="header__redesSociales__logo" /></a>
        </div>



      </div>

      <div>
        <img src="" alt="" className='header__logo' />
      </div>

      <div className='' style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '1rem' }}>
        <div>
          <Link>  <button className='headers__button' style={{ borderRadius: '0.5rem', padding: '0.5rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}> Entrevistas Personales </button></Link>
        </div>

        <div>
          <Link to={'/principal'} > <button className='headers__button' style={{ borderRadius: '0.5rem', padding: '0.5rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}> Redvivir </button> </Link>
        </div>

        <div>
          <Link to={'/secundaria'} > <button className='headers__button' style={{ borderRadius: '0.5rem', padding: '0.5rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}> Entrevistas On-Line </button> </Link>
        </div>

      </div>
    </div>
  )
}

export default NavBar