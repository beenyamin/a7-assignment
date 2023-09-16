import React, { useEffect, useState } from 'react';

const Main = () => {

    const [card, setCard] =useState ([]);

    useEffect ( () => {

        fetch ('Course.json')
        .then (res => res.json ())
        .then (data => setCard(data))

    } , [])

    return (

        <div>
            <div className='grid lg:grid-cols-3 gap-4 justify-items-center'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
    <figure><img src="{}" alt="Shoes" /></figure>
    <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
   </div>

            </div>
          
        </div>
    );
};

export default Main;