/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import Card from './Card/Card';
import Sidebar from './Sidebar/Sidebar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
        const [items, setItems] = useState([]);
        const [CreditHour, setCreditHour] = useState(0);
        const [ReduceHour, setReduceHour] = useState(0)
    

        const handleClick = (card) => {


            const matchingItem = items.find(item => item.id == card.id);
    
            let hour = card.courseHours;
            if(matchingItem){ 
              return  toast ("You Already Select It !")
            }
            else{
                items.forEach(item => {
                    hour = hour + item.courseHours;
                });
                const totalReduceHour = 20 - hour;
    
                if(hour > 20){
                  return  toast  ('Your Credit is Over ')
                }
                setReduceHour(totalReduceHour);
                setCreditHour(hour);
    
                setItems([...items, card]);
            }
        };
    

    return (
        <div className='flex  ' >

            <div className='' >
          <Card
           handleClick={handleClick}

          > </Card>
            </div>

            <div className=' w-1/4'>
         <Sidebar
         items={items}
         CreditHour={CreditHour}
         ReduceHour={ReduceHour}
         ></Sidebar>
            </div>
            
        </div>
    );
};

export default Main;