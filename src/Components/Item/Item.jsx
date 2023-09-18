/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Item = ({item, number}) => {
    const {name} = item;
    return (
        <div className='bg-slate-100'>
            <div>
            <ul>{number + 1} {name}</ul>

        </div>
        </div>
    );
};

export default Item;




