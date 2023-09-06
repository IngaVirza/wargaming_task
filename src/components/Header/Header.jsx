import React from 'react';
import '../Header/scss/Header.scss';
import logoWG from '../../assets/images/Logo.png';

function Header() {
  return (
    <div className="header">
    <img src={logoWG} alt="logo" className="logo"/>
    <div className='text_test'>
    <h1>Тестовое задание</h1>
    </div>
    </div>
  );
}

export default Header;