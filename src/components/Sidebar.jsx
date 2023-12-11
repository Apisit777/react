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
import { FaUserLock } from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";
// import { useStateContext } from "../contexts/ContextProvider";
// import axiosClient from "../axios-client";

const Sidebar = () => {

    const menus = [
        { name: 'Dashboard', link: '/dashboard', icon: MdOutlineDashboard, isOpen: false },
        { name: 'ขาย', link: '', icon: BsChatLeftText , isOpen: false,
            subMenus: [
                {
                  title: 'ปิด/ภาระหนี้สินเชื่อ',
                  link: '/dashboard',
                  cName: 'sub-nav',
                },
                {
                  title: 'ส่งงาน',
                  link: '/services/services2'
                },
                {
                  title: 'ผลงาน',
                  link: '/services/services3',
                },
            ],
        },
        { name: 'แอดมิน ', link: '/admin', icon: MdAccountCircle, isOpen: false ,

        },

        { name: 'ปล่อยเช่า ', link: '', icon: BsCalendarCheck, isOpen: false,
          subMenus: [
            {
                title: 'โปรแกรม',
                link: '/services/services1',
                cName: 'sub-nav',
            },
            {
                title: 'ส่งงาน',
                link: '/services/services2'
            },
            {
                title: 'ผลงาน',
                link: '/services/services3',
            },
          ],
        },
        { name: 'บัญชี ', link: '*', icon: BsFiles, isOpen: false },
        { name: 'บุคคล ', link: '/users', icon: MdOutlineSettings, isOpen: false },
        { name: 'ผุ้ใช้งาน ', link: '/opm', icon: FaUserLock, isOpen: false },
        { name: 'Logout ', link: '/Logout', icon: MdOutlineSettings, line: true, isOpen: false },
    ]

    console.log(menus.subMenus)

    const [menuItem, setMenuItem] = useState([...menus]);

    const [open, setOpen] = useState(true);
    const [openSubmenu, setOpenSubmenu] = useState(true);
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const toggleSidebar = () => {
        setOpen(!open)
    }

    const toggleOpenSubmenu = () => {
        setOpenSubmenu(!openSubmenu)
    }

    const toggleSubMenu = (index) => {
        let a = [...menuItem]
        a.forEach((item,itemindex) => {
            if(itemindex === index){
                item.isOpen = !item.isOpen
            }else{
                item.isOpen = false
            }
        })
        setMenuItem([...a])

    }

    return (
        <aside className="h-screen sticky top-0 flex text-black dark:text-white shadow duration-500 z-50">
            <div className={` bg-white dark:bg-neutral-800 ${ open ? "w-64 " : "w-[0px]"} duration-500 top-[64px] w-64 shadow relative `}>
                <div className='py-3 pl-2 flex absolute -top-14 z-50'>
                    <GiHamburgerMenu
                        size={26}
                        className='cursor-pointer '
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <div className='mt-2 flex flex-col gap-4 relative'>
                    <ul className="">
                        {menuItem.map((menu, i) => (
                            <>
                                <li
                                    key={menu.title}
                                    className={` ${menu.gap ? 'mt-9' : 'mt-4'} `}
                                >
                                    <Link to={menu.link}
                                        key={i}
                                        className={` ${
                                            menu?.line && open && "border-t border-black py-3 dark:border-blue-500 mx-2 overflow-hidden"
                                            } flex items-center text-sm gap-2 font-medium p-2 hover:bg-[#3061AF]/30 hover:text-[#3061AF] hover:outline-none focus:bg-[#3061AF]/30 focus:text-[#3061AF]
                                            focus:outline-none active:bg-[#3061AF] active:text-[#3061AF] active:outline-none data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300
                                            dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10 rounded-sm`}
                                    >
                                        <div className={`whitespace-pre duration-500
                                                ${ !open && "opacity-0 translate-x-10 overflow-hidden"}`}>
                                            {React.createElement(menu?.icon, {size: "24"})}
                                        </div>
                                        <h2
                                            style={{
                                                transitionDelay: `${i + 1}00ms`
                                            }}
                                            className={`whitespace-pre duration-500 flex-1 ml-2
                                                ${ !open && "opacity-0 translate-x-28 overflow-hidden"}`}
                                        >
                                            {menu?.name}
                                        </h2>
                                        {menu.subMenus && (
                                            <BsChevronDown
                                                size ={20}
                                                onClick={() => {
                                                    toggleSubMenu(i)
                                                }}
                                                className={`${menu.isOpen && 'transition duration-300 rotate-180'}`}
                                            />
                                        )}
                                    </Link>
                                </li>
                                {menu.isOpen && open && (
                                    <ul>
                                        {menu.subMenus.map((subMenuItem, idx) => (
                                            <li
                                                key={idx}
                                                className="flex bg-[#f4f4f4] dark:bg-[#303030] h-6 cursor-pointer items-center truncate  py-4 pl-[2rem] pr-2 text-[0.78rem] text-gray-700 outline-none transition duration-500 ease-linear hover:bg-[#3061AF]/30 hover:text-[#3061AF] hover:outline-none focus:bg-[#3061AF]/30 focus:text-[#3061AF] focus:outline-none active:bg-primary-400/10 active:text-[#3061AF] active:outline-none data-[te-sidenav-state-active]:text-[#3061AF] data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                            >
                                              <Link to={menu.link}
                                                    key={i}
                                              >
                                                {subMenuItem.title}
                                              </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
