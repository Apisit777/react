import {Link} from "react-router-dom";
import { useState, useRef } from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

export default function Signup() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const [errors, setErrors] = useState(null);
    const {setUser, setToken} = useStateContext()

    const onSubmit = (ev) => {
        ev.preventDefault()
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }
        // console.log(payload);

        axiosClient.post('/signup', payload)
        .then(({data}) => {
          setUser(data.user)
          setToken(data.token)
        })
        .catch(err => {
            const response = err.response;
            if (response && response.status === 422) {
                console.log(response.data.errors);
                setErrors(response.data.errors)
            }
        })
    }

    return (
        <>
            <div>
                <div className="min-h-screen" style={{ background: "url('https://sv1.picz.in.th/images/2023/05/30/FrvzQI.png')" }}>
                    <div className="g-6 flex flex-wrap items-center justify-center lg:justify-between">
                        <div className="mb-12 grow-0 basis-auto md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 xl:ml-12">
                        </div>
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                            <form onSubmit={onSubmit} className="bg-white dark:bg-[#202020] text-black dark:text-white shadow-md shadow-[#202020] dark:shadow-blue-500 mt-32">
                                <div className="flex flex-row items-center justify-center lg:justify-start">
                                    <p className="mb-0 mr-4 text-lg">Sign in with</p>
                                    <div className="text-center border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6">
                                        <div className="text-center">
                                            <a href="#" className="inline-block px-8 py-2 text-xs font-bold leading-normal text-center align-middle transition-all ease-in bg-transparent rounded-lg shadow-md cursor-pointer select-none active:-translate-y-px hover:-translate-y-px hover:shadow-xs tracking-tight-rem">
                                                <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="social icon" className="w-3/10" style={{height: "35px", width: "35px" }} />
                                                Github
                                            </a>
                                            <a href="#" className="inline-block px-8 py-2 text-xs font-bold leading-normal text-center align-middle transition-all ease-in bg-transparent rounded-lg shadow-md cursor-pointer select-none active:-translate-y-px hover:-translate-y-px hover:shadow-xs tracking-tight-rem">
                                                <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="social icon" className="w-3/10" style={{height: "35px", width: "35px" }} />
                                                Google
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-black dark:before:border-blue-500 after:mt-0.5 after:flex-1 after:border-t after:border-black dark:after:border-blue-500">
                                    <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                                    Or
                                    </p>
                                </div>
                                { errors && <div className="alert">
                                    {Object.keys(errors).map(key => (
                                        <p key={key}>{errors[key][0]}</p>
                                    ))}
                                    </div>
                                }
                                <div className="mb-4 flex flex-col gap-6">
                                    <div className="relative h-11 w-full min-w-[200px]">
                                        <input
                                            ref={nameRef}
                                            className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=" "
                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            {/* {Language(cookies).Email} */}
                                            Full Name
                                        </label>
                                    </div>
                                    <div className="relative h-11 w-full min-w-[200px]">
                                        <input
                                            ref={emailRef}
                                            type="email"
                                            className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=" "
                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            {/* {Language(cookies).Email} */}
                                            Email
                                        </label>
                                    </div>
                                    <div className="relative h-11 w-full min-w-[200px]">
                                        <input
                                            ref={passwordRef}
                                            type="password"
                                            autoComplete="on"
                                            className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=" "
                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            {/* {Language(cookies).Password} */}
                                            Password
                                        </label>
                                    </div>
                                    <div className="relative h-11 w-full min-w-[200px]">
                                        <input
                                            ref={passwordConfirmationRef}
                                            type="password"
                                            autoComplete="on"
                                            className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=" "
                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            {/* {Language(cookies).Password} */}
                                            Confirm Password
                                        </label>
                                    </div>
                                </div>
                                <div className="inline-flex items-center">
                                    <label
                                        className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                                        htmlFor="checkbox"
                                        data-ripple-dark="true"
                                    >
                                    </label>
                                    <label className="mt-px cursor-pointer select-none font-light" htmlFor="checkbox">
                                        <p className="flex items-center font-sans text-sm font-normal leading-normal antialiased">
                                            I agree the
                                            <a className="font-medium transition-colors hover:text-blue-500" href="#" >
                                                &nbsp;Terms and Conditions
                                            </a>
                                        </p>
                                    </label>
                                </div>

                                <button
                                    className="mt-6 block w-full select-none rounded-lg bg-[#3061AF] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="submit"
                                    data-ripple-light="true"
                                >
                                    {/* {Language(cookies).Register} */}
                                    Register
                                </button>
                                <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed antialiased">
                                    Already have an account?
                                    {/* <a
                                        className="font-medium text-red-500 transition-colors hover:text-blue-700"
                                        href="#"
                                    >
                                        <Link to="/login">
                                            Sign in
                                        </Link>
                                    </a> */}
                                </p>
                                <span className="mt-4 block font-sans text-xs font-bold text-center">
                                    PG ESTATE DEVELOPMENT CO., LTD. (V1.0.0 © 2023)
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
  }
