import React from 'react';
import Banner from '@/assets/banner.png'
import Image from 'next/image';
import GymCard from '../Components/GymCard';

const getdata = async () => {
    try {
        const res = await fetch('https://api.abcz.workers.dev/api/fitlog');

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        return data;

    } catch (error) {
        console.log("Error fetching data:", error.message);
        return null;
    }
};

const workoutsPage = async() => {

   const gymdata = await getdata();
   console.log(gymdata);


    return (
        <div>
            <div className='flex justify-between items-center container mx-auto '>
            <div className='space-y-4'>
                <h1 className='text-green-300'>WORKOUT LIBARAY</h1>
                <p className='text-5xl font-bold'>TRAIN WITH INTENT. LOG <br></br> EVERY SET.</p>
                <p className=''>FitLog is a dark, no-nonsense gtm companion: pick a lift, lock it <br></br> into todays plan, and watch the weeks work add up.</p>
                <button className="btn btn-success">BROWSE WORKOUTS</button>
            </div>
            <div>
            <Image src={Banner} alt={""}></Image>
            </div>
        </div>
        <div className='space-y-4'>
           <div className='container mx-auto'>
            <h1 className='text-4xl font-bold'>The Library</h1>
            <p>Twelve lifts covering every major muscle group </p>
        </div>
        <div className='grid grid-cols-3 gap-3 container mx-auto my-3'>
             {
                 gymdata.map( gym =>{
                    return <GymCard key={gym.id} gymdata={gym}></GymCard>
                 })
             }
        </div>

        </div>
        
        </div>
    );
};

export default workoutsPage;