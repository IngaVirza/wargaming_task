import React from 'react';
import Adaptive from '../Adaptive/Adaptive.jsx';
import Header from '../Header/Header.jsx';
import Search from '../Search/Search.jsx';
import ArticleText from '../Article/ArticleText.jsx';
import MainWidget from '../SelectItem/MainWidget.jsx';
import '../App/scss/App.scss';

function App() {
  return (
    <div className="main">
      <Header/>
      <Search/>
      <Adaptive/>   
      <ArticleText/>
      <MainWidget/>
      </div>
      
  );
}

export default App;
