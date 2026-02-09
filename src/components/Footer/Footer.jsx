import React from 'react'
import './Footer.css';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../src/assets/img/main_logo.png';

const Footer = () => {

  const navigate = useNavigate();

  return (
    <div className='footer'>
      <div className='footer-content'>
        <img className='logo-img' src={logoImg}
          onClick={()=>navigate('/')}/>
        <div className='footer-terms'>
          <div>Terms & Conditions</div>
          <div>Policy</div>
          <div>Agreement</div>
        </div>
        <div className='footer-bottom'>
          <div className='footer-bottom-right'>
            <div>COMPANY | J.nail</div>
            <div>CEO | 노재희</div>
            <div>ADDRESS | 서울특별시 성동구 성수OO로 OOO</div>
            <div>BUSINESS LICENSE | 000-00-00000</div>
          </div>
          <div className='footer-bottom-left'>© 2025 J.nail</div>

        </div>
      </div>
    </div>
  )
}

export default Footer
