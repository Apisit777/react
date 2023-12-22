import { Modal, ModalDialog, ModalClose, Typography } from "@mui/joy";
import { useNavigate, useHref, Form, useLoaderData } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Slide from '@mui/material/Slide';
import * as React from 'react';
import Divider from '@mui/joy/Divider';
import { useState, useRef } from 'react'

const CarDebtModal = () => {
    const navigate = useNavigate();
    const href = useHref();
    const handleClose = () => {
        navigate(-1);
    };

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="down" ref={ref} {...props} />;
    });

    return (
        <div>
            <Modal
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                TransitionComponent={Transition}
                fullWidth
                maxWidth="2xl"
            >
                <ModalDialog sx={{ width: "70%" }} >
                    <ModalClose />
                    <Typography level="h5" sx={{ textTransform:"capitalize" }} className="text-black">
                        {href.split('/').reverse()[0]} User
                    </Typography>
                    <Divider />
                    <Form method="post"
                            autoComplete="off"
                    >
                        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6 mt-5 mb-8 text-black">
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    // defaultValue={ data ? data.loan_debt_code : ''}
                                    name="loan_debt_code"
                                    className="peer h-full w-full rounded-sm border border-blue-gray-200 border-t-transparent bg-transparent px-2 py-3 font-sans text-sm sm:text-xs font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-center"
                                    // placeHolder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5
                                                before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-sm after:border-t after:border-r
                                                after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500
                                                peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500
                                ">
                                    รหัสภาระหนี้สินเชื่อ
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    // defaultValue={ data ? data.code : ''}
                                    name="code"
                                    className="peer h-full w-full rounded-sm border border-blue-gray-200 border-t-transparent bg-transparent px-2 py-3 font-sans text-sm sm:text-xs font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-center"
                                    // placeHolder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5
                                                before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-sm after:border-t after:border-r
                                                after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500
                                                peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500
                                ">
                                    รหัสลูกค้า
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    // defaultValue={ data ? data.code : ''}
                                    name="code"
                                    className="peer h-full w-full rounded-sm border border-blue-gray-200 border-t-transparent bg-transparent px-2 py-3 font-sans text-sm sm:text-xs font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-center"
                                    // placeHolder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5
                                                before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-sm after:border-t after:border-r
                                                after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500
                                                peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500
                                ">
                                    รหัสลูกค้า
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    // defaultValue={ data ? data.code : ''}
                                    name="code"
                                    className="peer h-full w-full rounded-sm border border-blue-gray-200 border-t-transparent bg-transparent px-2 py-3 font-sans text-sm sm:text-xs font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-center"
                                    // placeHolder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5
                                                before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-sm after:border-t after:border-r
                                                after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500
                                                peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500
                                ">
                                    รหัสลูกค้า
                                </label>
                            </div>
                        </div>
                        <ul className="pt-1 space-y-2 border-t border-black dark:border-blue-500"/>
                        <div className="flex justify-center items-center 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm">
                                {/* <button
                                    type="submit"
                                    data-ripple-light="true"
                                    className={ data ? 'h-10 px-5 m-2 block text-transform: capitalize content-center select-none rounded-md text-white dark:text-white bg-[#3061AF] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' : 'h-10 px-5 m-2 block text-transform: capitalize content-center select-none rounded-md text-white dark:text-white bg-[#37a408] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'}
                                >
                                    { data ? 'Update' : 'Create'}
                                </button> */}
                                <button
                                    type="submit"
                                    data-ripple-light="true"
                                    className='h-10 px-5 m-2 block text-transform: capitalize content-center select-none rounded-md text-white dark:text-white bg-[#37a408] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                                >
                                    Create
                                </button>
                        </div>
                    </Form>
                </ModalDialog>
            </Modal>
        </div>
    )
}

export default CarDebtModal
