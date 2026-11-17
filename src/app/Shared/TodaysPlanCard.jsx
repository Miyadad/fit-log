"use client"
import React, { useContext } from 'react';
import { Clock, Flame, Star, Check, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { GymContext } from '../Context/GymContext';

const TodaysPlanCard = ({SharedData}) => {

const {TodaysPlan , setTodaysPlan}= useContext(GymContext);

 const handleCross = () => {
     const alreadySaved = TodaysPlan.filter(item => item.id !== SharedData.id);
    setTodaysPlan(alreadySaved);
};

    const { id,name, equipment, image, duration, caloriesBurned, rating } = SharedData;
    return (
        <div className='m-4'>
            <div className="flex items-center justify-between gap-4 bg-[#15181e] border border-gray-800 rounded-xl p-5">

            {/* Left Side */}
            <div className="flex items-center gap-3">

                <Image
                    src={image}
                    alt={name}
                    width={112}
                    height={64}
                    className="w-28 h-16 object-cover rounded-lg"
                />

                <div>
                    <h2 className="text-white font-bold text-sm uppercase">
                        {name}
                    </h2>

                    <p className="text-gray-400 text-xs mt-1">
                        {equipment}
                    </p>

                    <div className="flex items-center gap-3 mt-1 text-xs text-gray-300">

                        <span className="flex items-center gap-1">
                            <Clock size={12} className="text-lime-400" />
                            {duration} min
                        </span>

                        <span className="flex items-center gap-1">
                            <Flame size={12} className="text-lime-400" />
                            {caloriesBurned} kcal
                        </span>

                        <span className="flex items-center gap-1">
                            <Star size={12} className="text-lime-400" />
                            {rating}
                        </span>

                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2">

                <Link href={`/Workouts/${id}`}>
                <button className="btn btn-sm rounded-full border border-gray-700 text-gray-300 bg-transparent hover:bg-gray-700">
                    View Details
                </button>
                </Link>

                <button className="btn btn-sm rounded-full bg-lime-400 hover:bg-lime-500 text-black border-none">
                    <Check size={14} />
                    Mark as Done
                </button>

                <button className="text-gray-500 hover:text-red-500 ml-2" onClick={()=>handleCross()} >
                    <X size={16} />
                </button>

            </div>

        </div>
        </div>
    );
};

export default TodaysPlanCard;