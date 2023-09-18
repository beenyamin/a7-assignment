/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Item from '../Item/Item';
import { ToastContainer} from 'react-toastify';

const Sidebar = ({items, ReduceHour, CreditHour}) => {
    return (
        <div className=" pl-5 w-64 ml-3 h-80 bg-sky-50 mt-6 ">
        <div>
        <ToastContainer />
        </div>

        <h2 className=" pl-2 text-1xl font-bold text-red-400 py-4">Credit Hour Remaining {ReduceHour} hr</h2>
        <hr/>
        <h2 className=" pt-4 font-bold ">Course Name</h2>
       { 
        items.map((item, index) => <Item key={index} number={index} item={item}></Item>)
        }
        <hr />
        <p className=" font-bold py-4">Total Credit Hour : {CreditHour}</p>
        <hr />
        <p className='font-bold'>Total Price : 48000 USD</p>
    </div> 
    );
};

export default Sidebar;
