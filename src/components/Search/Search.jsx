import React from 'react';
import '../Search/scss/Search.scss';
import find_ico from '../../assets/images/Find_ico.png';

function Search() {
  return (
    <main className="mainContent">
    <h1>1. Поиск</h1><br/>
    <div className="wrapperSearch">
    <img src={find_ico} alt="find_ico" className="find_ico"/>
      <input type="search" className="Input_normal"/>
      <button type="button" className="Button_normal">Найти</button>
    </div>
    <div className="wrapperSearch">
    <img src={find_ico} alt="find_ico" className="find_ico"/>
      <input type="search"  className="Input_normal" />
      <button type="button"  className="Button_normal">Go</button>
    </div>
  </main>
  );
}

export default Search;