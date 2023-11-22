import React from 'react'
import { useState, useEffect } from 'react';
import {  GiHamburgerMenu } from "react-icons/gi";
import {
    MdOutlineDashboard,
    MdAccountCircle,
    MdAnalytics,
    MdOutlineSettings,
    MdLogout,
  } from 'react-icons/md';
import {
    BsChevronDown,
    BsChatLeftText,
    BsCalendarCheck,
    BsFiles,
    BsServer,
} from 'react-icons/bs';

import { Link, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
// import axiosClient from "../axios-client";

const Sidebar = () => {

    // const Menus = [
    //     { title: 'Dashboard', path: '/dashboard', icon: <MdOutlineDashboard />},
    //     { title: 'ขาย', src: 'Chat', icon: <BsChatLeftText />,
    //         subMenus: [
    //             {
    //                 title: 'โปรแกรม',
    //                 src: '/services/services1',
    //                 cName: 'sub-nav',
    //             },
    //             {
    //                 title: 'ส่งงาน',
    //                 src: '/services/services2'
    //             },
    //             {
    //                 title: 'ผลงาน',
    //                 src: '/services/services3',
    //             },
    //         ],
    //     },
    //     { title: 'แอดมิน', src: 'User', icon: <MdAccountCircle />,
    //         subMenus: [
    //             {
    //                 title: 'ลูกค้า',
    //                 src: '/services/services1'
    //             },
    //             {
    //                 title: 'ปิดหนี้',
    //                 src: '/services/services2'
    //             },
    //             {
    //                 title: 'โครงการและห้อง',
    //                 src: '/services/services3',
    //             },
    //             {
    //                 title: 'ส่งเข้าธนาคาร',
    //                 src: '/services/services3',
    //             },
    //             {
    //                 title: 'สัญญา',
    //                 src: '/services/services3',
    //             },
    //         ],
    //     },
    //     { title: 'ปล่อยเช่า ', src: 'Calendar', icon: <BsCalendarCheck /> },
    //     { title: 'บัญชี ', src: 'Calendar', icon: <BsFiles /> },
    //     { title: 'บุคคล ', path: '/users', icon: <MdOutlineSettings /> },
    //     {
    //       title: 'Services',
    //       src: 'Services',
    //       icon: <BsServer />,
    //       subMenus: [
    //         {
    //           title: 'Service 1',
    //           src: '/services/services1',

    //           cName: 'sub-nav',
    //         },
    //         {
    //           title: 'Service 2',
    //           src: '/services/services2',

    //           cName: 'sub-nav',
    //         },
    //         {
    //           title: 'Service 3',
    //           src: '/services/services3',
    //         },
    //       ],
    //     },
    //     { title: 'Logout', src: 'Logout', icon: <MdLogout /> },
    //   ];

    // const [open, setOpen] = useState(true);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    // const toggleSidebar = () => {
    //     setOpen(!open)
    // }

    const menus = [
        { name: 'Dashboard', link: '/dashboard', icon: MdOutlineDashboard },
        { name: 'ขาย', link: '/ขาย', icon: BsChatLeftText,
            subMenus: [
                    {
                        title: 'โปรแกรม',
                        src: '/services/services1',
                        cName: 'sub-nav',
                    },
                    {
                        title: 'ส่งงาน',
                        src: '/services/services2'
                    },
                    {
                        title: 'ผลงาน',
                        src: '/services/services3',
                    },
                ],
            },
        { name: 'แอดมิน ', link: '/แอดมิน', icon: MdAccountCircle },
        { name: 'ปล่อยเช่า ', link: 'ปล่อยเช่า', icon: BsCalendarCheck  },
        { name: 'บัญชี ', link: 'บัญชี', icon: BsFiles },
        { name: 'บุคคล ', link: '/users', icon: MdOutlineSettings },
        { name: 'Logout ', link: '/Logout', icon: MdOutlineSettings, line: true},
    ]

    const [open, setOpen] = useState(true);

    const {user, token} = useStateContext()

    if (!token) {
        return <Navigate to="/login" />
    }

    // const onLogout = (ev) => {
    //     ev.preventDefault()
    // }

    // useEffect( () => {
    //     axiosClient.get('/user')
    //     .then(({data}) => {
    //       setUser(data)
    //     })

    // }, [])

    return (
        // <aside className="h-screen flex fixed text-black dark:text-white shadow duration-500">
        //     <button
        //         className="fixed xl:hidden z-90 bottom-10 right-8 bg-teal-800 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800 duration-300"
        //         onClick={toggleSidebar}
        //     >
        //         <span className="text-white">
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 fill="currentColor"
        //                 className="w-6 m-auto"
        //                 viewBox="0 0 16 16"
        //             >
        //                 <path
        //                     fillRule="evenodd"
        //                     d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
        //                 />
        //             </svg>
        //         </span>
        //     </button>
        //     <div
        //         className={` ${
        //         open ? 'w-64 px-2' : 'w-0 '
        //         } top-[64px] xl:w-64 shadow bg-white dark:bg-neutral-800 relative duration-500`}
        //     >
        //         <ul className="">
        //             {Menus.map((Menu, index) => (
        //                 <>
        //                     <li
        //                         key={index}
        //                         className={` ${Menu.gap ? 'mt-9' : 'mt-2'} `}
        //                     >
        //                         <Link to={Menu.path} className="transition duration-500 group flex h-12 cursor-pointer items-center truncate rounded-[5px] py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#3061AF]/30 hover:text-[#3061AF] hover:outline-none focus:bg-[#3061AF]/30 focus:text-[#3061AF] focus:outline-none active:bg-[#3061AF] active:text-[#3061AF] active:outline-none data-[te-sidenav-state-active]:text-[#3061AF] data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        //                             data-te-sidenav-link-ref>
        //                             {Menu.icon ? Menu.icon : <MdOutlineDashboard />}
        //                             <span className="flex-1 ml-2">{Menu.title}</span>
        //                             {Menu.subMenus && (
        //                                 <BsChevronDown
        //                                     size ={18}
        //                                     onClick={() => setSubMenuOpen(!subMenuOpen)}
        //                                     className={`${subMenuOpen && 'transition duration-300 rotate-180'}`}
        //                                 />
        //                             )}
        //                         </Link>
        //                     </li>
        //                     {Menu.subMenus && subMenuOpen && open && (
        //                         <ul>
        //                             {Menu.subMenus.map((subMenuItem, idx) => (
        //                                 <li
        //                                     key={idx}
        //                                     className="flex bg-[#f4f4f4] dark:bg-[#303030] h-6 cursor-pointer items-center truncate  py-4 pl-[2rem] pr-2 text-[0.78rem] text-gray-700 outline-none transition duration-500 ease-linear hover:bg-[#3061AF]/30 hover:text-[#3061AF] hover:outline-none focus:bg-[#3061AF]/30 focus:text-[#3061AF] focus:outline-none active:bg-primary-400/10 active:text-[#3061AF] active:outline-none data-[te-sidenav-state-active]:text-[#3061AF] data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        //                                 >
        //                                     {subMenuItem.title}
        //                                 </li>
        //                             ))}
        //                         </ul>
        //                     )}
        //                 </>
        //             ))}
        //         </ul>
        //     </div>
        // </aside>

        <aside className="h-screen sticky top-0 flex text-black dark:text-white shadow duration-500 z-50">
                <div className={` bg-white dark:bg-neutral-800 ${ open ? "w-64 " : "w-[0px]"} duration-500 top-[64px] w-64 shadow relative `}>
                  <div className='py-3 pl-2 flex absolute -top-14 z-50'>

        {/* <aside className="h-screen flex text-black dark:text-white shadow duration-500 ">
                <div className={` bg-white dark:bg-neutral-800 ${ open ? "w-64 " : "w-[0px]"} duration-500 top-[64px] w-64 shadow relative`}>
                  <div className=' py-3 pl-2 flex absolute -top-14 z-50'> */}
                        <GiHamburgerMenu
                            size={26}
                            className='cursor-pointer '
                            onClick={() => setOpen(!open)}
                        />
                    </div>
                    <div className='mt-2 flex flex-col gap-4 relative'>
                        {menus?.map((menu, i) => (
                            <Link to={menu?.link}
                                key={i}
                                className={` ${
                                            menu?.line && open && "border-t border-black py-3 dark:border-blue-500 mx-2 overflow-hidden"
                                            } flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#3061AF]/30 hover:text-[#3061AF] hover:outline-none focus:bg-[#3061AF]/30 focus:text-[#3061AF]
                                            focus:outline-none active:bg-[#3061AF] active:text-[#3061AF] active:outline-none data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300
                                            dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10 rounded-sm`}
                            >
                                <div className={`whitespace-pre duration-500
                                        ${ !open && "opacity-0 translate-x-10 overflow-hidden"}`}>
                                    {React.createElement(menu?.icon, {size: "20"})}
                                </div>
                                <h2
                                    style={{
                                        transitionDelay: `${i + 1}00ms`
                                    }}
                                    className={`whitespace-pre duration-500
                                        ${ !open && "opacity-0 translate-x-28 overflow-hidden"}`}
                                >
                                    {menu?.name}
                                </h2>
                            </Link>

                        ))}
                    </div>
                </div>
        </aside>
    )
}

export default Sidebar
