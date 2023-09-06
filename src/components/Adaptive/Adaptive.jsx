import React, { Fragment, useState } from 'react';
import '../Adaptive/scss/Adaptive.scss';

function Adaptive() {

  const [selectedValue, setValue] = useState('worldOfWarplanes');
  const [openSelect, setSelectOpen] = useState(false);

  const chooseRadio = (event) => {
    setValue(event.target.id);
  };

  const chooseItem = (event) => {
    setValue(event.target.getAttribute('data-item'));
    setSelectOpen(false);
  };

  const listOfItems = []; 
  const selectOfItems = [];

  const list = {
    worldOfTanks: 'World Of Tanks',
    worldOfWarplanes: 'World Of Warplanes',
    worldOfWarships: 'World Of Warships',
  };

  Object.keys(list).forEach((el) => {
    listOfItems.push(
      <Fragment key={`${el}list`}>
        <input className="inputRadio"
          type="radio"
          name="item"
          id={el}
          value={list[el]}
          checked={selectedValue === el}
          onChange={chooseRadio.bind(this)}
        />
        <label className="radioButton" htmlFor={el}>{list[el]}</label>
      </Fragment>,
    );
    selectOfItems.push(
      <Fragment key={`${el}select`}>
        <span data-item={el} className="option">{list[el]}</span>
      </Fragment>,
    );
  });

  return (
    <main className="mainContent"><br/><br/>
    <h1>2. Адаптивный список</h1><br/>
    <div className="listWrapper">
      {listOfItems}
    </div>
    <div className="selectWrapper">
      {!openSelect && (
      <div onClick={() => setSelectOpen(!openSelect)}>
        <span className="menuHamburger">&#9776;</span>
        <button className="select"
          type="button"
        >
          {list[selectedValue]}
        </button>
      </div>
      )}
      {openSelect && (
        <div className="optionsWrapper" onClick={chooseItem.bind(this)}>
          {selectOfItems}
        </div>
      )}
    </div>
  </main>
  );
}

export default Adaptive;
