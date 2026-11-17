"use client"
import React, { useContext } from 'react';
import GymProvider, { GymContext } from '../Context/GymContext';
import { toast } from 'react-toastify';

const SaveLater = ({idData}) => {

    const {Saved , setSaved}= useContext(GymContext);
    const handleSaveLater = () =>{
        //console.log(idData);
        const alreadySaved = Saved.some(item => item.id === idData.id);

if (!alreadySaved) {
    setSaved([...Saved, idData]);
    toast.success("Saved successfully!");
}
else{
     toast.warning("Already saved!");
} 
    }

    return (

        <div>

            <button className="btn bg-transparent border border-gray-700 text-white hover:bg-gray-800" onClick={()=>handleSaveLater()}>
              ♧ Save for later
            </button>
            
        </div>
    );
};

export default SaveLater;