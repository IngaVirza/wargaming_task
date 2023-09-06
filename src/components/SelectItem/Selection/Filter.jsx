import React, {useCallback} from 'react';
import '../scss/WidgetStyle.scss'

const Filter = ({onSelect, value}) => {
    const filterElem = useCallback((event)=> {
           onSelect(event.target.value)
    },[onSelect])

    return (
        <div>
        <div className='form-filter-title'>Фильтр</div>
        <select className='form-filter' defaultValue={value} onChange={filterElem}>
            <option value={0}>Без фильтров</option>
            <option value={10}>Номер {'>'} 10</option>
            <option value={50}>Номер {'>'}50</option>
            <option value={100}>Номер {'>'}100</option>
        </select>
        </div>
    );
};

export default Filter;

