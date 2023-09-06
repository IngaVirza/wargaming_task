import React, {useCallback} from 'react';
import '../scss/WidgetStyle.scss';


const SearchForm = ({searchList, setSearchList}) => {
    const onChange = useCallback(event => setSearchList(event.target.value), [setSearchList]);

    return (
        <div>
        <div className='form-search-title'>Поиск</div>
            <input 
            className='input-search'
            label='Search' 
            type="search" 
            value={searchList}
            onChange={onChange} 
            autoComplete="off"/>
            </div>
    );
};

export default SearchForm;