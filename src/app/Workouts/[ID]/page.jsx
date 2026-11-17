import SaveLater from '@/app/Components/SaveLater';
import TodaysPlan from '@/app/Components/TodaysPlan';
import Image from 'next/image';
import React from 'react';



const WorkOutsID = async({params}) => {
    const {ID} = await params;
    const res= await fetch(`https://api.abcz.workers.dev/api/fitlog/${ID}`);
    const data = await res.json();
    const {
    name,
    image,
    muscleGroups,
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    sets,
    reps,
    rating,
    description,
    instructions,
  } = data;


    return (
        <div>
            <div className="min-h-screen bg-[#0e1014] text-white p-6 lg:p-10">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left Side Image */}
        <div className="relative w-full h-[400px] lg:h-[540px]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>

        {/* Right Side Details */}
        <div className="space-y-6">

          {/* Workout Name */}
          <div>
            <h1 className="text-3xl font-bold uppercase">
              {name}
            </h1>

            <p className="text-gray-400 text-sm mt-2">
              {description}
            </p>
          </div>

          {/* Muscle Groups */}
          <div className="flex gap-2">
            {muscleGroups.map((muscle, index) => (
              <span
                key={index}
                className="badge bg-lime-400 text-black border-none font-semibold"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Information */}
          <div className="bg-[#171a22] border border-gray-800 rounded-xl overflow-hidden">

            {[
              ['EQUIPMENT', equipment],
              ['DIFFICULTY', difficulty],
              ['SETS', sets],
              ['REPS', reps],
              ['DURATION', `${duration} min`],
              ['CALORIES', `${caloriesBurned} kcal`],
              ['RATING', rating],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between items-center px-5 py-3 border-b border-gray-800 last:border-none"
              >
                <span className="text-gray-400 text-xs font-bold">
                  {label}
                </span>

                <span className="text-sm">
                  {value}
                </span>
              </div>
            ))}

          </div>

          {/* Instructions */}
          <div>
            <h2 className="font-bold text-lg mb-3">
              INSTRUCTIONS
            </h2>

            <ol className="list-decimal list-inside space-y-3 text-gray-300 text-sm">
              {instructions.map((instruction, index) => (
                <li key={index}>
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">

            <TodaysPlan idData={data} ></TodaysPlan>

            <SaveLater idData={data} ></SaveLater>

          </div>

        </div>
      </div>
    </div>
        </div>
    );
};

export default WorkOutsID;