'use client'
import Image from 'next/image';
import React, { useContext } from 'react';
import logo from '@/assets/logo.png'
import Link from 'next/link';
import { GymContext } from '../Context/GymContext';
import { usePathname } from 'next/navigation';

const Navber = () => {

  const paths= usePathname();

  const {Saved , setSaved}= useContext(GymContext);
  const {TodaysPlan , setTodaysPlan}= useContext(GymContext);

  const link = <>
        <Link className={paths === "/Workouts" ? 'text-blue-500' : ' '} href={'../Workouts'}> <li>Workouts</li></Link>
        <Link className={paths === "/MyPlan" ? 'text-blue-500' : ' '} href={'../MyPlan'}> <li>My Plan</li></Link>
  </>

    
return (
  <div className="sticky top-0 z-50">
    <div className="navbar bg-gray-950 text-white shadow-lg px-4 lg:px-10">

      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-gray-900 text-white rounded-xl z-50 mt-3 w-52 p-3 shadow-xl gap-2"
          >
            {link}
          </ul>
        </div>

        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image src={logo} alt="Fitlog Logo" className="w-10 h-10" />
          <a className="text-2xl font-extrabold tracking-wide">
            FIT<span className="text-lime-400">LOG</span>
          </a>
        </div>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3 [&_a]:font-medium [&_a]:text-gray-300 [&_a:hover]:text-lime-400 [&_a:hover]:bg-gray-800 rounded-xl">
          {link}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex gap-3">

        <Link
          href="/MyPlan"
          className="relative flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 text-gray-200 hover:bg-gray-800 hover:border-lime-400 transition-all"
        >
          Plan
          <span className="bg-lime-400 text-gray-950 text-xs font-bold rounded-full min-w-5 h-5 flex items-center justify-center px-1">
            {TodaysPlan.length}
          </span>
        </Link>

        <Link
          href="/MyPlan"
          className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-lime-400 text-gray-950 font-semibold hover:bg-lime-300 transition-all"
        >
          Saved
          <span className="bg-gray-950 text-lime-400 text-xs font-bold rounded-full min-w-5 h-5 flex items-center justify-center px-1">
            {Saved.length}
          </span>
        </Link>

      </div>
    </div>
  </div>
);

};

export default Navber;