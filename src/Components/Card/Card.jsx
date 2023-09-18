/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { MdOutlineAttachMoney } from 'react-icons/Md';
import { BiBookOpen } from 'react-icons/Bi';


const Card = ({handleClick}) => {

    const [cards, setCards] = useState ([]); 

  useEffect ( () => {

        fetch ('./data.json')
        .then (res => res.json ())
        .then (data => setCards(data))

    } , [])

    return (

      
        <div className='grid ml-10  lg:grid-cols-3 gap-5  '>

        {
            cards.map ( card  =>               
            <div key={card.name} className=" -ml-2 mt-3 mb-10 card w-64 h-96 bg-[#FFF] rounded-lg shadow-2xl ">
        <figure className="">
        </figure>

        <div className=" items-center text-center">
        <img src={card.image} alt="" className="  w-56 ml-4 mt-3  h-32 " />
        <h2 className=" font-bold mt-2 "> {card.name}</h2>
        <p className=' text-base mt-2'>{card.description}</p>

        <div className=' mt-3 flex justify-around'>

            <div className='flex items-center '> 
                <div className=''><MdOutlineAttachMoney/> </div> 
            <p> <span className='font-semibold'> Price: </span>{card.price}</p>
            </div>

            <div className='flex  items-center  '>
                <div className='mr-1'>
                <BiBookOpen/>
                </div>
                <p><span className='font-semibold'> Credit: </span> {card.courseHours}hr</p>
            </div>
        </div>

        <div className="mt-4"> <button  onClick={()=> handleClick(card)}
            className="btn btn-primary pl-24 pr-24">SELECT</button>
        </div>
        </div>
        </div> )

        }


    </div>

    );
};

export default Card;