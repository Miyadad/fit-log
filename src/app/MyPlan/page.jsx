'use client'
import React, { useContext, useState } from 'react';
import { GymContext } from '../Context/GymContext';
import TodaysPlanCard from '../Shared/TodaysPlanCard';
import SavedCard from '../Shared/SavedCard';
import Link from 'next/link';

const MyPlan = () => {

    const { TodaysPlan, Saved } = useContext(GymContext);
    const [activeTab, setActiveTab] = useState("today");
    const [sortBy, setSortBy] = useState("duration");


    const todayExercises = TodaysPlan.length;

    const todayMinutes = TodaysPlan.reduce(
        (total, item) => total + Number(item.duration || 0), 0
    );

    const todayCalories = TodaysPlan.reduce(
        (total, item) => total + Number(item.caloriesBurned || 0), 0
    );

    const savedExercises = Saved.length;

    const savedMinutes = Saved.reduce(
        (total, item) => total + Number(item.duration || 0), 0
    );

    const savedCalories = Saved.reduce(
        (total, item) => total + Number(item.caloriesBurned || 0), 0
    );


    const sortData = (data) => {

        const sortedData = [...data];

        if (sortBy === "duration") {
            sortedData.sort((a, b) =>
                Number(b.duration || 0) - Number(a.duration || 0)
            );
        }

        else if (sortBy === "calories") {
            sortedData.sort((a, b) =>
                Number(b.caloriesBurned || 0) - Number(a.caloriesBurned || 0)
            );
        }

         else if (sortBy === "rating") {
            sortedData.sort((a, b) =>
                Number(b.rating || 0) - Number(a.rating || 0)
            );
        }

        return sortedData;
    };


    const sortedTodayPlan = sortData(TodaysPlan);
    const sortedSaved = sortData(Saved);


    return (

        <div className='container mx-auto m-3'>

            {/* Heading */}

            <div className="mb-5">
                <h1 className="text-2xl font-bold uppercase">
                    MY PLAN
                </h1>

                <p className="text-gray-400 text-xs mt-1">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>


            {/* Summary Card */}

            <div className="bg-[#15171e] border border-gray-800 rounded-xl p-5">

                <div className="grid grid-cols-3">

                    {/* Exercises */}

                    <div className="px-1">
                        <p className="text-gray-400 text-xs mb-1">
                            Exercises
                        </p>

                        <h2 className="text-3xl font-bold text-lime-400">
                            {activeTab === "today" ? todayExercises : savedExercises}
                        </h2>
                    </div>


                    {/* Minutes */}

                    <div className="px-6 border-l text-lime-400">
                        <p className="text-gray-400 text-xs mb-1">
                            Minutes
                        </p>

                        <h2 className="text-3xl font-bold">
                            {activeTab === "today" ? todayMinutes : savedMinutes}
                        </h2>
                    </div>


                    {/* Calories */}

                    <div className="px-6 border-l text-lime-400">
                        <p className="text-gray-400 text-xs mb-1">
                            Calories
                        </p>

                        <h2 className="text-3xl font-bold">
                            {activeTab === "today" ? todayCalories : savedCalories}
                        </h2>
                    </div>

                </div>
            </div>


            {/* Tabs */}

            <div className="tabs tabs-lift mt-5">

                {/* Today's Plan Tab */}

                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label={`Today's Plan (${TodaysPlan.length})`}
                    checked={activeTab === "today"}
                    onChange={() => setActiveTab("today")}
                />


                <div className="tab-content bg-base-100 border-base-300 p-6">

                    {/* Sorting */}

                    <div className="flex justify-end mb-5">

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="select select-success"
                        >
                            <option value="duration">Duration</option>
                            <option value="calories">Calories Burned</option>
                            <option value="rating">Rating</option>
                        </select>

                    </div>


                    {sortedTodayPlan.length > 0 ? (

                        sortedTodayPlan.map(data => (
                            <TodaysPlanCard
                                SharedData={data}
                                key={data.id}
                            />
                        ))

                    ) : (

                        <div className="flex min-h-[180px] w-full flex-col items-center justify-center bg-[#101114] px-4 text-center">

                            <h2 className="text-lg font-extrabold uppercase tracking-wide text-white">
                                NOTHING HERE YET
                            </h2>

                            <p className="mt-1 text-xs text-gray-400">
                                Browse the library and add a lift to get today moving.
                            </p>

                           <Link href={'/Workouts'}>
                            <button className='btn btn-success m-4'>
                                Go to WorkOuts
                            </button>
                           </Link>

                        </div>

                    )}

                </div>


                {/* Saved Tab */}

                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label={`Saved (${Saved.length})`}
                    checked={activeTab === "saved"}
                    onChange={() => setActiveTab("saved")}
                />


                <div className="tab-content bg-base-100 border-base-300 p-6">

                    {/* Sorting */}

                    <div className="flex justify-end mb-5">

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="select select-success"
                        >
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>
                        </select>

                    </div>
                    {sortedSaved.length > 0 ? (

                        sortedSaved.map(data => (
                            <SavedCard
                                SharedData={data}
                                key={data.id}
                            />
                        ))

                    ) : (

                        <div className="flex min-h-[180px] w-full flex-col items-center justify-center bg-[#101114] px-4 text-center">

                            <h2 className="text-lg font-extrabold uppercase tracking-wide text-white">
                                NOTHING HERE YET
                            </h2>

                            <p className="mt-1 text-xs text-gray-400">
                                Browse the library and add a lift to get today moving.
                            </p>

                            <button className='btn btn-success m-4'>
                                Go to WorkOuts
                            </button>

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
};

export default MyPlan;
