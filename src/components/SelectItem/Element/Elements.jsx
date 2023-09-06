import React, {useMemo} from 'react';
import Element from "../Element/Element.jsx";
import '../scss/WidgetStyle.scss';

const elementsArray = new Array(300).fill('').map((_, i) => `Элемент ${i + 1}`);

function Elements ({onSelect, minNumber, searchList, disabled}) {
        const elementsList = useMemo(() => elementsArray.slice(minNumber).filter((item) => 
        item.toLowerCase().includes(searchList.toLowerCase())).map((item) => 
        <Element onSelect={onSelect} text={item} key={item} disabled={disabled} />), 
    [ minNumber, onSelect, searchList, disabled]);

        return (
            <div className='form-black-bg'>
                {elementsList}
            </div>
        );
    }

    export default Elements;