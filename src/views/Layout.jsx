import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
// import { Link, Navigate, Outlet } from "react-router-dom";

const Layout = (props) => {
  const { children, user } = props;

  return (
    <div className='min-h-screen flex bg-white dark:bg-[#303030] text-black dark:text-white animate-fade-in-down duration-500 shadow'>
        {/* <div className="App h-full bg-[#202020]"> */}
            <Sidebar />
            <Navbar />
            {/* <div className="flex flex-col md:ml-60 sm:border-r sm:border-zinc-700 min-h-screen"></div> */}
            <div className='w-full bg-white dark:bg-[#303030] text-black dark:text-white animate-fade-in-down duration-500 shadow'>
                {children}
                {/* <Outlet /> */}
            </div>
        {/* </div> */}
    </div>
  )
}

export default Layout
