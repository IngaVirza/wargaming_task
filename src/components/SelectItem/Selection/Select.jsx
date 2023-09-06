import React, {useMemo} from 'react';
import SelectFrame from "./SelectFrame.jsx";

const Select = ({changedArrList=[]}) => {

    const selectedElements = useMemo(() => {
        return changedArrList.map((item) => 
        <SelectFrame
        text={item} 
        key={item}
        />
        );
    }, [changedArrList]);

    return (
        <div>
            <div>{selectedElements}</div>
        </div>       
    );
};

export default Select;