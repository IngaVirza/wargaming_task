import React, {useState, useCallback} from 'react';
import SearchForm from "./Selection/SearchForm.jsx";
import Filter from "./Selection/Filter.jsx"
import Elements from "./Element/Elements.jsx";
import Select from './Selection/Select.jsx';
import './scss/WidgetStyle.scss';

const VisibleDialog = () => {
    const [searchList, setSearchList] = useState('');
    const [changedArrList, setChangedArrList] = useState([]);
    const [minNumber, setMinNumber] = useState(0);
    const [result, setResult] = useState([]);


    const onSelect = useCallback((text) => {
        setChangedArrList(changedArrList.includes(text) ? changedArrList.filter(item => item !== text) 
        : [...changedArrList, text])},[changedArrList]);  

    const deleteElement = (item) => {
            const idx = result.findIndex(el => el === item);
            if(idx !== -1) {
                result.splice(idx, 1);
                setResult([]);
            }
        }
 
        
 


return(
    <div>
<div className='dialog-header'>Диалог выбора элементов</div> 
<SearchForm searchList={searchList} setSearchList={setSearchList}/>
<Filter onSelect={setMinNumber} value={minNumber}/>
<Elements onSelect={onSelect} minNumber={minNumber} searchList={searchList}
    disabled={!(changedArrList.length < 3)}/> 
    <div className='selected-end'>Выбранные элементы на данный момент:</div>
    <Select onClick={deleteElement}  changedArrList={changedArrList}/>
    <div>
        <button className='btn-save'>Сохранить</button>
        <button className='btn-cancel'>Отмена</button>
        </div>
        </div>

);
}

export default VisibleDialog