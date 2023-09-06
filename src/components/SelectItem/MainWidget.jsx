import React, {useState} from 'react';
import VisibleDialog from './VisibleDialog';
import Widget from './Modal/Widget.jsx';
import Select from './Selection/Select';

function MainWidget(){
const [modalActive, setModalActive] = useState(true);

return(
<div className="mainContent"><br/><br/>
<h1>4. Виджет по выбору элементов</h1>
<div className='form-white'>
<div className='form-title'>Выбор элементов</div>
<div className='top-title-select'>На данный момен у вас выбрано:</div>
<Select />
<button onClick={() => setModalActive(false)} className='btn-change-result'>Изменить мой выбор</button>
<Widget active={modalActive} setActive={setModalActive}>
<VisibleDialog/>
</Widget>
</div>
</div>
  );
}

export default MainWidget;