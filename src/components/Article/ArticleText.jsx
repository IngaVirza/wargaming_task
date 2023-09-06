import React from 'react';
import '../Article/scss/ArticleText.scss';

function ArticleText() {
  return (
    <div className="mainContent"><br/><br/>
    <h1>3. Статья</h1><br/>
      <div className="title_article">
        <b>Почему не рассматриваются заявки с жалобами на нарушение Правил игры?</b>
      </div>
      <div className="articleText">
        <span>После введения функционала  &laquo;Пожаловаться&raquo; не рассматриваются заявки, созданные в Центре поддержки пользователей о нарушении Правил игры по следующим пунктам:</span>
        <span className="titleLi"><br/>1. «Оскарбление и провокация»</span>
            <br/>В данный пункт входит:<br/>
            
            <span className="iconLine">&#x2022;</span>
                использование ненормативной лексики и оскарбление собеседников, применение унизительных кличек и прозвищ по рассовому, национальному, религиозному либо половому признаку, а также провоцирование собеседника к их использованию;
                <span className="iconLine">&#x2022;</span>
                  клевета, размещение заведомо ложной информации об Игре, Администрации, Модераторах или Пользователях;
                <span className="iconLine">&#x2022;</span>
                угрозы реальной расправы в отношении представителей Администрации Проекта. Все виды соглашения.
            <div><b>2.</b> «Неинформативные сообщения»</div>
            В данный пункт входит:
              <span className="titleLi">
                <li>
                <span className="iconLine">&#x2022;</span>
                размещение информации (сообщения, фразы, символов и пр.), направленной на отвлечение Пользователей от темы беседы (флуд);
                </li>
                <li>
                <span className="iconLine">&#x2022;</span>  
                все виды рекламных сообщений, в частности ссылки на интернет-ресурсы.
                </li>
              </span>
          <div><br/>
          Также не рассматриваются следующие заявки, созданные в Центре поддержки пользователей о нарушении Правил игры:
          <br/><br/><b>3.</b> «Раскрытие позиции союзников»
          <br/><b>4.</b> «Выталкивание союзника»
          <br/><b>5.</b> «Неспортивное поведение»
          <br/><b>6.</b> «Повреждение союзников»<br/>
          </div>
</div>
</div>
);
}

export default ArticleText;