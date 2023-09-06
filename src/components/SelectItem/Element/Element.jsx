import React, {useCallback, useState} from 'react';
import '../scss/WidgetStyle.scss';

const Element = (props) => {
    const [checked, setChecked] = useState(false);

    const onChange = useCallback(()=>{props.onSelect(props.text);
        setChecked(!checked)},[props, setChecked, checked]);

    return (
        <div>
        <label className='check'>
            <input onChange={onChange} type={'checkbox'} disabled={!checked && props.disabled} checked={checked}/>
            <div className='check-input'>{props.text}</div>
        </label>
        </div>
    );
};

export default Element;