import { Modal, ModalDialog, ModalClose, Typography } from "@mui/joy";
import { useNavigate, useHref, Form, useLoaderData } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Slide from '@mui/material/Slide';
import * as React from 'react';
import Divider from '@mui/joy/Divider';
import { useState, useRef } from 'react'
import { Scrollbar } from 'react-scrollbars-custom';

const SalaryCustomerModal = () => {
    const navigate = useNavigate();
    const href = useHref();
    const handleClose = () => {
        navigate(-1);
    };

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="down" ref={ref} {...props} />;
    });

    const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { firstName: "", lastName: "" }]);
    };

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
                    <Scrollbar style={{ width: "97%", height: 450 }}>
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
                                    // defaultValue={ data ? data.name : ''}
                                    name="name"
                                    className="peer h-full w-full rounded-sm border border-blue-gray-200 border-t-transparent bg-transparent px-2 py-3 font-sans text-sm sm:text-xs font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-center"
                                    // placeHolder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5
                                                before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-sm after:border-t after:border-r
                                                after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500
                                                peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500
                                ">
                                    ชื่อ
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    // defaultValue={ data ? data.lastname : ''}
                                    name="lastname"
                                    className="peer h-full w-full rounded-sm border border-blue-gray-200 border-t-transparent bg-transparent px-2 py-3 font-sans text-sm sm:text-xs font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-center"
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5
                                                before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-sm after:border-t after:border-r
                                                after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500
                                                peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500
                                ">
                                    นามสกุล
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    // defaultValue={ data ? data.note : ''}
                                    name="note"
                                    className="peer h-full w-full rounded-sm border border-blue-gray-200 border-t-transparent bg-transparent px-2 py-3 font-sans text-sm sm:text-xs font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-center"
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5
                                                before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-sm after:border-t after:border-r
                                                after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500
                                                peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500
                                ">
                                    note
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-center items-center 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm mt-5 mb-5">
                            <h2 className="inline-block space-y-2 border-b border-black dark:border-blue-500">เงินเดือนลูกค้า</h2>
                        </div>
                        {inputList.map((x, i) => {
                            return (
                                <div key={x}>
                                        {/* <div className="btn-box">
                                        {inputList.length - 1 === i &&
                                            <button onClick={handleAddClick}
                                                    className='h-10 px-5 m-2 block text-transform: capitalize content-center select-none rounded-md text-white dark:text-white bg-[#37a408] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
                                                Add
                                            </button>
                                        }
                                    </div> */}
                                    <div
                                        className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6 mt-5 mb-8 text-black">
                                        {/* {inputList.length - 1 === i &&
                                            <button onClick={handleAddClick}
                                                    className='h-10 px-5 m-2 block text-transform: capitalize content-center select-none rounded-md text-white dark:text-white bg-[#37a408] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
                                                Add
                                            </button>
                                        } */}

                                        <div className="relative h-11 w-full min-w-[200px]">
                                            <input
                                                name="firstName"
                                                // placeholder="Enter First Name"
                                                value={x.firstName}
                                                onChange={e => handleInputChange(e, i)}
                                                className="peer h-full w-full rounded-sm border border-blue-gray-200 border-t-transparent bg-transparent px-2 py-3 font-sans text-sm sm:text-xs font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-center"
                                            />
                                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5
                                                            before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-sm after:border-t after:border-r
                                                            after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500
                                                            peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500
                                            ">
                                                firstName
                                            </label>
                                        </div>

                                        <div className="relative h-11 w-full min-w-[200px]">
                                            <input
                                                name="lastName"
                                                // placeholder="Enter Last Name"
                                                value={x.lastName}
                                                onChange={e => handleInputChange(e, i)}
                                                className="peer h-full w-full rounded-sm border border-blue-gray-200 border-t-transparent bg-transparent px-2 py-3 font-sans text-sm sm:text-xs font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-center"
                                            />
                                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5
                                                    before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-sm after:border-t after:border-r
                                                    after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500
                                                    peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500
                                            ">
                                                lastName
                                            </label>
                                        </div>
                                        {/* <input
                                            className="ml10"
                                            name="lastName"
                                            placeholder="Enter Last Name"
                                            value={x.lastName}
                                            onChange={e => handleInputChange(e, i)}
                                        /> */}
                                        <div className="flex">
                                            {inputList.length !== 1 && <button
                                                // className="mr10"
                                                className='h-10 px-5 m-2 block text-transform: capitalize content-center select-none rounded-md text-white dark:text-white bg-[#ff0000] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                                                onClick={() => handleRemoveClick(i)}>Remove</button>}
                                            {inputList.length - 1 === i &&
                                                <button onClick={handleAddClick}
                                                        className='h-10 px-5 m-2 block text-transform: capitalize content-center select-none rounded-md text-white dark:text-white bg-[#37a408] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
                                                    Add
                                                </button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
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
                    </Scrollbar>
                </ModalDialog>
            </Modal>
        </div>
    );
}

export default SalaryCustomerModal
