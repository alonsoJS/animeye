import React from 'react';
import logoImg from '../images/logo.svg';

function Logo() {
  return (
    <div className="logo">
      <img src={logoImg} alt="AnimEye" className="logo__img"/>
      <h1 className="logo__title">AnimEye</h1>
    </div>
  )
}

export default Logo;
