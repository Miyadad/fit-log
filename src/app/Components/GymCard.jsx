import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GymCard = ({gymdata}) => {
     const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating
  } = gymdata;

    return (
        <Link href={`../Workouts/${id}`}>
        
        <div>
            <div className="card bg-[#15171c] border border-gray-800 rounded-3xl overflow-hidden shadow-lg">

      {/* Workout Image */}
      <figure>
        <Image
          src={image}
          alt={name}
          width={550}
          height={300}
          className="w-full h-64 object-cover"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body p-6">

        {/* Muscle Groups */}
        <div className="flex gap-3">
          {muscleGroups.map((muscle, index) => (
            <span
              key={index}
              className="badge bg-lime-400 text-black border-none font-bold uppercase px-4 py-3"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h2 className="text-2xl font-bold text-white uppercase mt-2">
          {name}
        </h2>

        {/* Equipment */}
        <p className="text-gray-400">
          {equipment}
        </p>

        <div className="divider border-gray-700 my-1"></div>

        {/* Workout Information */}
        <div className="flex flex-wrap items-center gap-6 text-gray-400">

          <div className="flex items-center gap-2">
            <span>◷</span>
            <span>{duration} min</span>
          </div>

          <div className="flex items-center gap-2">
            <span>🔥</span>
            <span>{caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-2">
            <span>☆</span>
            <span>{rating}</span>
          </div>

        </div>

      </div>
    </div>
        </div>
         </Link>
    );
};

export default GymCard;