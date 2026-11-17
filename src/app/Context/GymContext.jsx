'use client'
import React, { createContext, useState } from 'react';

export const GymContext = createContext([])


const GymProvider = ({children}) => {
    const [TodaysPlan , setTodaysPlan] = useState([]);
    const [Saved , setSaved] = useState([]);
    
    const ShareData = {TodaysPlan , setTodaysPlan,Saved , setSaved};
    return (
        <GymContext.Provider value={ShareData}>
            {children}
        </GymContext.Provider>
    );
};

export default GymProvider;