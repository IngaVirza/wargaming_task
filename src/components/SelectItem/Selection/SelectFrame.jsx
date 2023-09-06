import React from 'react';
import '../scss/WidgetStyle.scss'

const SelectFrame = (props) => {
    return (
        <div className='result-body'>
        <div className='elements-result' onChange={()=>props.onSelect(props.text)} >
        <div className='elements-result-text'>{props.text}
        <div className='result-sep'>|</div>
        <div className='result-del'>X</div>
        </div>
        </div> 
        </div>
    );
};

export default SelectFrame;