import React from 'react';
import '../scss/WidgetStyle.scss';

const Widget = ({active, setActive, children}) => {

    return (
            <div className={active ? "opacity-form" : "form-grey-body" }  onClick={()=>setActive(false)}>
               {children}
             </div>
     );
}

export default Widget;