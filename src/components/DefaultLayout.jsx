import { Link, Navigate, Outlet } from "react-router-dom";
// import { useStateContext } from "../contexts/ContextProvider";

// import {  IoIosBasketball } from "react-icons/io";
// import {  GiHamburgerMenu } from "react-icons/gi";

// import {  RiDashboardFill } from "react-icons/ri";
// import {  RiAdminFill } from "react-icons/ri";
// import {  BsFillBuildingsFill } from "react-icons/bs";
// import {  MdAccountBalance } from "react-icons/md";
// import {  MdAccountBox } from "react-icons/md";
// import {  PiSignOutFill } from "react-icons/pi";
// import { useState, useEffect } from 'react';

// import Layout from '../views/Layout';

export default function DefaultLayout(props) {
    const {list, children} = props;
    // const {user, token} = useStateContext()

    // if (!token) {
    //     return <Navigate to="/login" />
    // }

    // const onLogout = (ev) => {
    //     ev.preventDefault()
    // }

    // const [darkMode, setDarkMode] = useState(false)

    // useEffect(() => {
    //     setDarkMode(localStorage.theme === 'dark' ? true : false)
    //     if (localStorage.theme === 'dark') {
    //         window.document.documentElement.classList.add('dark')
    //     } else {
    //         window.document.documentElement.classList.remove('dark')
    //     }
    // }, [])

    // const changeTheme = () => {
    //     console.log('check')
    //     setDarkMode(!darkMode)

    //     if (!darkMode) {
    //         window.document.documentElement.classList.add('dark')
    //         localStorage.setItem("theme", "dark")
    //     } else {
    //         window.document.documentElement.classList.remove('dark')
    //         localStorage.setItem("theme", "light")
    //     }
    // }

    return (

      // <div></div>
        <div>
            {/* <main className="min-h-screen flex-1 p-6 lg:px-8 pt-16 text-black dark:text-white bg-white dark:bg-[#303030]"> */}
                <div className="">
                    <div className="">
                        <Outlet />
                    </div>
                </div>
            {/* </main> */}

        </div>
        // <Layout user={user} >

        //     <main id="content" className="min-h-screen flex-1 p-6 lg:px-8 pt-16 text-black dark:text-white bg-white dark:bg-[#303030]">
        //         <div className="px-4 py-6 sm:px-0">
        //             <div className="border-4 border-dashed border-black dark:border-gray-200 rounded-lg h-full">
        //                 <Outlet />
        //             </div>
        //         </div>
        //     </main>

        // </Layout>
        // <>
        //     <div>
        //         <div className="relative min-h-screen md:flex" data-dev-hint="container">
        //             <input type="checkbox" id="menu-open" className="hidden" />
        //             <label htmlFor="menu-open" className="right-2 bottom-2 shadow-lg rounded-md p-2 bg-gray-100 text-gray-600 md:hidden" data-dev-hint="floating action button">
        //             </label>

        //             <aside id="sidebar" className="top-[56px] bg-white shadow dark:bg-neutral-800 text-gray-100 md:w-64 w-2/5 space-y-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-500 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
        //             <div className="min-h-screen py-4 px-3 text-black dark:text-white bg-white shadow dark:bg-neutral-800">
        //                 <ul className="space-y-2" data-te-sidenav-menu-ref>
        //                     <li className="relative">
        //                     <Link to="/dashboard"
        //                         className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#3061AF]/30 hover:text-[#3061AF] hover:outline-none focus:bg-[#3061AF]/30 focus:text-[#3061AF] focus:outline-none active:bg-[#3061AF] active:text-[#3061AF] active:outline-none data-[te-sidenav-state-active]:text-[#3061AF] data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        //                         data-te-sidenav-link-ref>
        //                         <span className="mr-2 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-[#3061AF] group-focus:[&>svg]:fill-[#3061AF] group-active:[&>svg]:fill-[#3061AF] group-[te-sidenav-state-active]:[&>svg]:fill-[#3061AF] motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
        //                             <RiDashboardFill
        //                                 size={20}
        //                             />
        //                         </span>
        //                         <span>Dashboard</span>
        //                     </Link>
        //                     </li>
        //                     <li className="relative">
        //                         <a
        //                             className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#3061AF]/30 hover:text-[#3061AF] hover:outline-none focus:bg-[#3061AF]/30 focus:text-[#3061AF] focus:outline-none active:bg-[#3061AF] active:text-[#3061AF] active:outline-none data-[te-sidenav-state-active]:text-[#3061AF] data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        //                             data-te-sidenav-link-ref>
        //                             <span
        //                             className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-[#3061AF] group-focus:[&>svg]:fill-[#3061AF] group-active:[&>svg]:fill-[#3061AF] group-[te-sidenav-state-active]:[&>svg]:fill-[#3061AF] motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 viewBox="0 0 448 512">
        //                                 <path
        //                                 d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
        //                             </svg>
        //                             </span>
        //                             <span>ขาย</span>
        //                             <span
        //                             className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 motion-reduce:transition-none [&>svg]:h-3 [&>svg]:w-3 [&>svg]:fill-gray-600 group-hover:[&>svg]:fill-[#3061AF] group-focus:[&>svg]:fill-[#3061AF] group-active:[&>svg]:fill-[#3061AF] group-[te-sidenav-state-active]:[&>svg]:fill-[#3061AF] dark:[&>svg]:fill-gray-300"
        //                             data-te-sidenav-rotate-icon-ref>
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 viewBox="0 0 448 512">
        //                                 <path
        //                                 d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        //                             </svg>
        //                             </span>
        //                         </a>
        //                     <ul
        //                         className="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
        //                         data-te-sidenav-collapse-ref>
        //                         <li className="relative">
        //                         <Link to="/"
        //                             className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-[#3061AF] hover:outline-none focus:bg-primary-400/10 focus:text-[#3061AF] focus:outline-none active:bg-primary-400/10 active:text-[#3061AF] active:outline-none data-[te-sidenav-state-active]:text-[#3061AF] data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        //                             data-te-sidenav-link-ref
        //                             >Request password
        //                         </Link>
        //                         </li>
        //                         <li className="relative">
        //                         <a
        //                             className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-[#3061AF] hover:outline-none focus:bg-primary-400/10 focus:text-[#3061AF] focus:outline-none active:bg-primary-400/10 active:text-[#3061AF] active:outline-none data-[te-sidenav-state-active]:text-[#3061AF] data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        //                             data-te-sidenav-link-ref
        //                             >Reset password</a
        //                         >
        //                         </li>
        //                     </ul>
        //                     </li>
        //                     <li className="relative">
        //                     <Link to="/"
        //                         className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#3061AF]/30 hover:text-[#3061AF] hover:outline-none focus:bg-[#3061AF]/30 focus:text-[#3061AF] focus:outline-none active:bg-[#3061AF] active:text-[#3061AF] active:outline-none data-[te-sidenav-state-active]:text-[#3061AF] data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        //                         data-te-sidenav-link-ref>
        //                         <span className="mr-2 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-[#3061AF] group-focus:[&>svg]:fill-[#3061AF] group-active:[&>svg]:fill-[#3061AF] group-[te-sidenav-state-active]:[&>svg]:fill-[#3061AF] motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
        //                             <RiAdminFill
        //                                 size={20}
        //                             />
        //                         </span>
        //                         <span>แอดมิน</span>
        //                         <span
        //                         className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 motion-reduce:transition-none [&>svg]:h-3 [&>svg]:w-3 [&>svg]:fill-gray-600 group-hover:[&>svg]:fill-[#3061AF] group-focus:[&>svg]:fill-[#3061AF] group-active:[&>svg]:fill-[#3061AF] group-[te-sidenav-state-active]:[&>svg]:fill-[#3061AF] dark:[&>svg]:fill-gray-300"
        //                         data-te-sidenav-rotate-icon-ref>
        //                         <svg
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             viewBox="0 0 448 512">
        //                             <path
        //                             d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        //                         </svg>
        //                         </span>
        //                     </Link>
        //                     <ul
        //                         className="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
        //                         data-te-sidenav-collapse-ref>
        //                         <li className="relative">
        //                         <a
        //                             className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-[#3061AF] hover:outline-none focus:bg-primary-400/10 focus:text-[#3061AF] focus:outline-none active:bg-primary-400/10 active:text-[#3061AF] active:outline-none data-[te-sidenav-state-active]:text-[#3061AF] data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        //                             data-te-sidenav-link-ref
        //                             >Request password</a
        //                         >
        //                         </li>
        //                         <li className="relative">
        //                         <a
        //                             className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-[#3061AF] hover:outline-none focus:bg-primary-400/10 focus:text-[#3061AF] focus:outline-none active:bg-primary-400/10 active:text-[#3061AF] active:outline-none data-[te-sidenav-state-active]:text-[#3061AF] data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        //                             data-te-sidenav-link-ref
        //                             >Reset password</a
        //                         >
        //                         </li>
        //                     </ul>
        //                     </li>
        //                     <li className="relative">
        //                     <Link to="/"
        //                         className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#3061AF]/30 hover:text-[#3061AF] hover:outline-none focus:bg-[#3061AF]/30 focus:text-[#3061AF] focus:outline-none active:bg-[#3061AF] active:text-[#3061AF] active:outline-none data-[te-sidenav-state-active]:text-[#3061AF] data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        //                         data-te-sidenav-link-ref>
        //                         <span className="mr-2 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-[#3061AF] group-focus:[&>svg]:fill-[#3061AF] group-active:[&>svg]:fill-[#3061AF] group-[te-sidenav-state-active]:[&>svg]:fill-[#3061AF] motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
        //                             <BsFillBuildingsFill
        //                                 size={20}
        //                             />
        //                         </span>
        //                         <span>ปล่อยเช่า</span>
        //                         <span
        //                         className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 motion-reduce:transition-none [&>svg]:h-3 [&>svg]:w-3 [&>svg]:fill-gray-600 group-hover:[&>svg]:fill-[#3061AF] group-focus:[&>svg]:fill-[#3061AF] group-active:[&>svg]:fill-[#3061AF] group-[te-sidenav-state-active]:[&>svg]:fill-[#3061AF] dark:[&>svg]:fill-gray-300"
        //                         data-te-sidenav-rotate-icon-ref>
        //                         <svg
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             viewBox="0 0 448 512">
        //                             <path
        //                             d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        //                         </svg>
        //                         </span>
        //                     </Link>
        //                     <ul
        //                         className="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
        //                         data-te-sidenav-collapse-ref>
        //                         <li className="relative">
        //                         <a
        //                             className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-[#3061AF] hover:outline-none focus:bg-primary-400/10 focus:text-[#3061AF] focus:outline-none active:bg-primary-400/10 active:text-[#3061AF] active:outline-none data-[te-sidenav-state-active]:text-[#3061AF] data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        //                             data-te-sidenav-link-ref
        //                             >Request password</a
        //                         >
        //                         </li>
        //                         <li className="relative">
        //                         <a
        //                             className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-[#3061AF] hover:outline-none focus:bg-primary-400/10 focus:text-[#3061AF] focus:outline-none active:bg-primary-400/10 active:text-[#3061AF] active:outline-none data-[te-sidenav-state-active]:text-[#3061AF] data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        //                             data-te-sidenav-link-ref
        //                             >Reset password</a
        //                         >
        //                         </li>
        //                     </ul>
        //                     </li>
        //                     <li className="relative">
        //                     <Link to="/"
        //                         className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#3061AF]/30 hover:text-[#3061AF] hover:outline-none focus:bg-[#3061AF]/30 focus:text-[#3061AF] focus:outline-none active:bg-[#3061AF] active:text-[#3061AF] active:outline-none data-[te-sidenav-state-active]:text-[#3061AF] data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        //                         data-te-sidenav-link-ref>
        //                         <span className="mr-2 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-[#3061AF] group-focus:[&>svg]:fill-[#3061AF] group-active:[&>svg]:fill-[#3061AF] group-[te-sidenav-state-active]:[&>svg]:fill-[#3061AF] motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
        //                             <MdAccountBalance
        //                                 size={20}
        //                             />
        //                         </span>
        //                         <span>บัญชี</span>
        //                         <span
        //                         className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 motion-reduce:transition-none [&>svg]:h-3 [&>svg]:w-3 [&>svg]:fill-gray-600 group-hover:[&>svg]:fill-[#3061AF] group-focus:[&>svg]:fill-[#3061AF] group-active:[&>svg]:fill-[#3061AF] group-[te-sidenav-state-active]:[&>svg]:fill-[#3061AF] dark:[&>svg]:fill-gray-300"
        //                         data-te-sidenav-rotate-icon-ref>
        //                         <svg
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             viewBox="0 0 448 512">
        //                             <path
        //                             d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        //                         </svg>
        //                         </span>
        //                     </Link>
        //                     <ul
        //                         className="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
        //                         data-te-sidenav-collapse-ref>
        //                         <li className="relative">
        //                         <a
        //                             className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-[#3061AF] hover:outline-none focus:bg-primary-400/10 focus:text-[#3061AF] focus:outline-none active:bg-primary-400/10 active:text-[#3061AF] active:outline-none data-[te-sidenav-state-active]:text-[#3061AF] data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        //                             data-te-sidenav-link-ref
        //                             >Request password</a
        //                         >
        //                         </li>
        //                         <li className="relative">
        //                         <a
        //                             className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-[#3061AF] hover:outline-none focus:bg-primary-400/10 focus:text-[#3061AF] focus:outline-none active:bg-primary-400/10 active:text-[#3061AF] active:outline-none data-[te-sidenav-state-active]:text-[#3061AF] data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        //                             data-te-sidenav-link-ref
        //                             >Reset password</a
        //                         >
        //                         </li>
        //                     </ul>
        //                     </li>
        //                     <li className="relative">
        //                         <Link to="/"
        //                             className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#3061AF]/30 hover:text-[#3061AF] hover:outline-none focus:bg-[#3061AF]/30 focus:text-[#3061AF] focus:outline-none active:bg-[#3061AF] active:text-[#3061AF] active:outline-none data-[te-sidenav-state-active]:text-[#3061AF] data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        //                             data-te-sidenav-link-ref>
        //                             <span className="mr-2 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-[#3061AF] group-focus:[&>svg]:fill-[#3061AF] group-active:[&>svg]:fill-[#3061AF] group-[te-sidenav-state-active]:[&>svg]:fill-[#3061AF] motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
        //                                 <MdAccountBox
        //                                     size={20}
        //                                 />
        //                             </span>
        //                             <span>บุคคล</span>
        //                             <span
        //                             className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 motion-reduce:transition-none [&>svg]:h-3 [&>svg]:w-3 [&>svg]:fill-gray-600 group-hover:[&>svg]:fill-[#3061AF] group-focus:[&>svg]:fill-[#3061AF] group-active:[&>svg]:fill-[#3061AF] group-[te-sidenav-state-active]:[&>svg]:fill-[#3061AF] dark:[&>svg]:fill-gray-300"
        //                             data-te-sidenav-rotate-icon-ref>
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 viewBox="0 0 448 512">
        //                                 <path
        //                                 d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        //                             </svg>
        //                             </span>
        //                         </Link>
        //                         <ul
        //                             className="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
        //                             data-te-sidenav-collapse-ref>
        //                             <li className="relative">
        //                             <a
        //                                 className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-[#3061AF] hover:outline-none focus:bg-primary-400/10 focus:text-[#3061AF] focus:outline-none active:bg-primary-400/10 active:text-[#3061AF] active:outline-none data-[te-sidenav-state-active]:text-[#3061AF] data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        //                                 data-te-sidenav-link-ref
        //                                 >Request password</a
        //                             >
        //                             </li>
        //                             <li className="relative">
        //                             <a
        //                                 className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-[#3061AF] hover:outline-none focus:bg-primary-400/10 focus:text-[#3061AF] focus:outline-none active:bg-primary-400/10 active:text-[#3061AF] active:outline-none data-[te-sidenav-state-active]:text-[#3061AF] data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        //                                 data-te-sidenav-link-ref
        //                                 >Reset password</a
        //                             >
        //                             </li>
        //                         </ul>
        //                     </li>
        //                 </ul>

        //                 <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
        //                     <li className="relative">
        //                     <Link to="/dashboard"
        //                         className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#3061AF]/30 hover:text-[#3061AF] hover:outline-none focus:bg-[#3061AF]/30 focus:text-[#3061AF] focus:outline-none active:bg-[#3061AF] active:text-[#3061AF] active:outline-none data-[te-sidenav-state-active]:text-[#3061AF] data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        //                         data-te-sidenav-link-ref>
        //                             <span className="mr-2">
        //                                 <PiSignOutFill
        //                                     size={20}
        //                                 />
        //                             </span>
        //                             <span>Sign Out</span>
        //                         </Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //             </aside>

        //             <main id="content" className="min-h-screen flex-1 p-6 lg:px-8 pt-16 text-black dark:text-white bg-white dark:bg-[#303030]">
        //                 <div className="px-4 py-6 sm:px-0">
        //                     <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
        //                         <Outlet />
        //                     </div>
        //                 </div>
        //             </main>
        //         </div>

        //         <div className='fixed top-0 flex items-center w-full h-16 px-4 z-10 bg-white dark:bg-neutral-800 shadow'>
        //             <div className='flex mx-2'>
        //                 <header className="bg-white shadow dark:bg-neutral-800 text-gray-100 flex justify-between md:hidden" data-dev-hint="mobile menu bar">
        //                     <label htmlFor="menu-open" id="mobile-menu-button" className="m-2 focus:outline-none hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
        //                         <svg id="menu-open-icon" className="text-black dark:text-white h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        //                         </svg>
        //                         <svg id="menu-close-icon" className="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        //                         </svg>
        //                     </label>
        //                 </header>

        //                 <div className='flex items-center dark:text-white cursor-pointer mr-2'>
        //                     {user.name}
        //                 </div>
        //             </div>
        //             <div className="flex items-center ml-auto dark:text-white">
        //                 <div className="switch mr-2" onClick={() => changeTheme()}>
        //                     <input type="checkbox" checked={localStorage.theme === "dark"} readOnly />
        //                     <span className="slider"></span>
        //                 </div>
        //                 <div className="">
        //                     <select className="bg-[#ECEDEE] dark:bg-[#202020] text-black dark:text-white" name="" id="" value={cookies.language} onChange={(event) => setLanguage(event.target.value)}>
        //                         <option className={cookies.language === "th" ? "button-select-active" : ""} value="th" selected={cookies.language === "th" ? true : false}>{Language(cookies).Thai}</option>
        //                         <option className={cookies.language === "" || cookies.language === "en" ? "button-select-active" : ""} value="en" selected={cookies.language === "" || cookies.language === "en" ? true : false}>{Language(cookies).English}</option>
        //                     </select>
        //                 </div >
        //                 <a href="#" onClick={onLogout} className="btn-logout dark:text-white">Logout</a>
        //                 <a
        //                     className="mr-4 flex items-center text-gray-500 hover:text-gray-700 focus:text-gray-700"
        //                     href="#"
        //                     id="navbarDropdownMenuLink"
        //                     role="button"
        //                     data-te-dropdown-toggle-ref
        //                     aria-expanded="false">
        //                     <span className="dark:text-gray-200 [&>svg]:w-3.5">
        //                     <svg
        //                         aria-hidden="true"
        //                         focusable="false"
        //                         data-prefix="fas"
        //                         data-icon="bell"
        //                         role="img"
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         viewBox="0 0 448 512">
        //                         <path
        //                         fill="currentColor"
        //                         d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path>
        //                     </svg>
        //                     </span>
        //                     <span
        //                     className="absolute -mt-2.5 ml-2 rounded-full bg-red-600 px-1.5 py-[1px] text-[0.6rem] text-white"
        //                     >1</span
        //                     >
        //                 </a>
        //                 <a className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none" href="#" id="navbarDropdownMenuLink" role="button" data-te-dropdown-toggle-ref="" aria-expanded="false">
        //                     <img src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-1/364773353_6319539188164004_130763680372022402_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH5JcO0-CgVkuvmb-NPnvlH6bkep7p082vpuR6nunTza5Y5P3rgrshlHFRfk3beTQilzzL9AKxrgWn7z7ct3slp&_nc_ohc=E_G0Hp1lBCEAX-U4Q6i&_nc_ht=scontent.fbkk13-2.fna&oh=00_AfBvuxfpbBX7DkuBsgpYEXEX23mv5VZUq59SuKbh8ACwSg&oe=6537C713" className="rounded-full" style={{height: "35px", width: "35px" }} alt="Avatar" loading="lazy" />
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </>
    )
}

