"use client"
import React, { useContext } from 'react';
import GymProvider, { GymContext } from '../Context/GymContext';
import { toast } from 'react-toastify';

const TodaysPlan = ({idData}) => {

    const {TodaysPlan , setTodaysPlan}= useContext(GymContext);
    const handleTodayPlan = () =>{
        //console.log(idData);
        const alreadySaved = TodaysPlan.some(item => item.id === idData.id);

if (!alreadySaved) {
    setTodaysPlan([...TodaysPlan, idData]);
    toast.success("Saved successfully!");
}
else{
    toast.warning("Already saved!");
}
    }

    return (

        <div>

            <button className="btn bg-lime-400 hover:bg-lime-500 text-black border-none" onClick={()=> handleTodayPlan()}>
              Add to todays plan
            </button>
            
        </div>
    );
};

export default TodaysPlan;