import React from 'react';
import icon from '../img/globe-icon.png';

export default function Header() {
  return (
    <div className='footerStyles d-flex justify-content-center bg-custom-med'>
      <img src={icon} alt="globe icon" className='p-5'></img>
    </div>
  );
}