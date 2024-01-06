import  {  useState, useEffect } from 'react'
import { useStateContext } from "../contexts/ContextProvider";
// import { useState, useEffect } from 'react';
import axiosClient from "../axios-client";
import {  useNavigate   } from "react-router-dom";

const Navbar = () => {
    const {user, checkToken, setUser, setToken} = useStateContext()
    const navigate = useNavigate();
    const onLogout = (ev) => {
        ev.preventDefault()
        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
                navigate("/login");
            })
    }

    useEffect( () => {
        if (!checkToken()) {
            navigate("/login");
        }
        axiosClient.get('/user')
        .then(({data}) => {
          setUser(data)
        })

    }, [])

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        setDarkMode(localStorage.theme === 'dark' ? true : false)
        if (localStorage.theme === 'dark') {
            window.document.documentElement.classList.add('dark')
        } else {
            window.document.documentElement.classList.remove('dark')
        }
    }, [])

    const changeTheme = () => {
        // console.log('check')
        setDarkMode(!darkMode)

        if (!darkMode) {
            window.document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        } else {
            window.document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }
    }

  return (
    <div className='fixed  flex items-center w-full h-16 px-4 bg-white dark:bg-neutral-800 shadow duration-500 z-30'>
        <div className='flex mx-2'>
            <header className="bg-white shadow dark:bg-neutral-800 text-gray-100 flex justify-between md:hidden" data-dev-hint="mobile menu bar">
            </header>

            {/* <div className='flex items-center dark:text-white cursor-pointer pl-5 pr-5 font-bold'>
                {user.name}
            </div> */}
        </div>

        <div className="flex items-center ml-auto dark:text-white">
            <div className="mr-2">
                {user.name}
            </div>
            <div className="switch mr-2" onClick={() => changeTheme()}>
                <input type="checkbox" checked={localStorage.theme === "dark"} readOnly />
                <span className="slider"></span>
            </div>
            <div className="">
                {/* <select className="bg-[#ECEDEE] dark:bg-[#202020] text-black dark:text-white" name="" id="" value={cookies.language} onChange={(event) => setLanguage(event.target.value)}>
                    <option className={cookies.language === "th" ? "button-select-active" : ""} value="th" selected={cookies.language === "th" ? true : false}>{Language(cookies).Thai}</option>
                    <option className={cookies.language === "" || cookies.language === "en" ? "button-select-active" : ""} value="en" selected={cookies.language === "" || cookies.language === "en" ? true : false}>{Language(cookies).English}</option>
                </select> */}
            </div >
            {/* <a href="#" onClick={onLogout} className="btn-logout dark:text-white">Logout</a> */}
            <button
                className="block w-2/4 mr-2 ml-2 content-center select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-[#202020]  dark:shadow-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
                onClick={onLogout}
            >
                Logout
            </button>
            {/* <a
                className="ml-2 mr-4 flex items-center text-gray-500 hover:text-gray-700 focus:text-gray-700"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
            >
                <span className="dark:text-gray-200 [&>svg]:w-3.5">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bell"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path>
                    </svg>
                </span>
                <span className="absolute -mt-2.5 ml-2 rounded-full bg-red-600 px-1.5 py-[1px] text-[0.6rem] text-white">
                    1
                </span>
            </a> */}
            <a className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none" href="#" id="navbarDropdownMenuLink" role="button" data-te-dropdown-toggle-ref="" aria-expanded="false">
                <img src="https://pp.userapi.com/c849232/v849232026/7cc1c/Nc1O0t3pJvA.jpg" className="rounded-full" style={{height: "40px", width: "40px" }} alt="Avatar" loading="lazy" />
            </a>
        </div>
    </div>
  )
}

export default Navbar
