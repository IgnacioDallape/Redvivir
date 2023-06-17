import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './footer.css'

const Footer = () => {
  return (
    <div className='footer' >
      
      <img src="https://i.ibb.co/N1SdsHR/aaa-1-removebg-preview.png" alt="" style={{ width: '7rem' }} className='header__logoImg' />
        <div>
          <div class="footer__hijo">contactanos!</div>
          <div class="footer__hijo">email</div>
          <div class="footer__hijo">numero de telefono</div>
          <div class="footer__hijo">direccion</div>
        </div>
        <div>
          <div className='footer__redesSociales'>
            <a href="" ><img src="https://i.ibb.co/P4PK9yz/f3c542ef8298830cb6d2719818c245fe.jpg" alt="Logo-Whatsapp" className="footer__redesSociales__logo" /></a>
            <a href="" ><img src="https://i.ibb.co/ypXbDnP/2cc2400784903f4990c18642a25a93b2.jpg" alt="LogoInstagram" className="footer__redesSociales__logo" /></a>
            <a href=""><img src="https://i.ibb.co/ScrT3TY/27e1e5decb8fbb6640da543f4c7dd3fa.jpg" alt="LogoYoutube" className="footer__redesSociales__logo" /></a>
            <a href=""><img src="https://i.ibb.co/QYBSBDM/29babec8a4502ae24cd0892f3f7145dd.jpg" alt="LogoFacebook" className="footer__redesSociales__logo" /></a>
          </div>

        
      </div>
    </div>
  )
}


export default Footer