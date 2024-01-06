import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useMemo } from 'react';
import Layout from './Layout';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import {
    Box,
    IconButton,
    Tooltip,
    Button
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {  useLoaderData, Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const CarDebt = () => {

    const printRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => printRef.current
    });

    return (
        <>
            <Layout>
                <Outlet />
                <div className='min-h-screen w-full justify-center items-center pl-8 pr-8 text-xl font-semibold'>
                    <div className='pb-4 pt-24'>
                        <Button component={Link} to="create" className="dark:text-white dark:bg-[#3061AF] shadow-md shadow-[#1061e3] dark:shadow-blue-500 duration-500" color="error">
                            เพิ่มภาระหนี้รถ
                        </Button>
                    </div>

                    <div className='min-h-screen flex justify-center pt-12'>
                        <div className="form justify-center bg-white dark:bg-[#202020] shadow-md shadow-[#202020] dark:shadow-blue-500 duration-500">
                            <div className="flex justify-center items-center 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm">
                                <h2 className="inline-block space-y-2 border-b border-black dark:border-blue-500">ประมาณการผ่อนโปรแกรม OPM</h2>
                            </div>
                            <div className="">
                                <div className="w-4/6">
                                    <button
                                        onClick={handlePrint}
                                        type="submit"
                                        data-ripple-light="true"
                                        className='h-12 px-32 m-0 block text-transform: capitalize content-center select-none rounded-md text-white dark:text-white bg-[#3061AF] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                                    >
                                        Print
                                    </button>
                                </div>
                            </div>
                            <div ref={printRef} className=" text-black">
                                <section id="one" className="page">
                                    {/* <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" alt="" />
                                    <h2 className="pt-4">TITLE</h2>
                                    <h3>SUBTITLE</h3>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    <p>
                                    Lorem ipsum dolor sit amet, , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et, , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et, sed do eiusmod tempor incididunt ut
                                    </p> */}

                                    <form className="mt-6 flex justify-center items-center flex-col gap-4">
                                        <div className="relative page text-black flex justify-center items-center">
                                            <p className="absolute text-md -top-5 font-semibold">รายละเอียดการปิดภาระหนี้</p>
                                            <div className="container absolute top-1 left-0 grid grid-cols-4 gap-1">
                                                <div className="justify-self-end">
                                                    <h1 className="text-sm">ชื่อ - สกุล :</h1>
                                                </div>
                                                <div className="justify-self-start">
                                                    <h1 className="text-sm">จินตนา ใจมีสุขทุกเพลา</h1>
                                                </div>
                                                <div className="justify-self-end">
                                                    <h1 className="text-sm">ชื่อบริษัท :</h1>
                                                </div>
                                                <div className="justify-self-start">
                                                    <h1 className="text-sm">บริษัท อี๋เผิง จำกัด</h1>
                                                </div>
                                                <div className="justify-self-end">
                                                    <h1 className="text-sm">รหัสลูกค้า :</h1>
                                                </div>
                                                <div className="justify-self-start">
                                                    <h1 className="text-sm">รหัสลูกค้า</h1>
                                                </div>
                                                <div className="justify-self-end">
                                                    <h1 className="text-sm">วันเกิด :</h1>
                                                </div>
                                                <div className="justify-self-start">
                                                    <h1 className="text-sm">1 มกราคม 2540</h1>
                                                </div>
                                                <div className="justify-self-end">
                                                    <h1 className="text-sm">ประเภทธุรกิจ:</h1>
                                                </div>
                                                <div className="justify-self-start">
                                                    <h1 className="text-sm">จำหน่ายวัสดุอุปกรณ์ก่อสร้าง</h1>
                                                </div>
                                                <div className="justify-self-end">
                                                    <h1 className="text-sm">กลุ่มลูกค้า :</h1>
                                                </div>
                                                <div className="justify-self-start">
                                                    <h1 className="text-sm">OPM02</h1>
                                                </div>
                                                <div className="justify-self-end">
                                                    <h1 className="text-sm">อายุ :</h1>
                                                </div>
                                                <div className="justify-self-start">
                                                    <h1 className="text-sm">26 ปี</h1>
                                                </div>
                                                <div className="justify-self-end">
                                                    <h1 className="text-sm">ตำแหน่งงาน :</h1>
                                                </div>
                                                <div className="justify-self-start">
                                                    <h1 className="text-sm">การเงิน</h1>
                                                </div>
                                                <div className="justify-self-end">
                                                    <h1 className="text-sm">รหัสเซลล์ :</h1>
                                                </div>
                                                <div className="justify-self-start">
                                                    <h1 className="text-sm">47004</h1>
                                                </div>
                                                <div className="justify-self-end">
                                                    <h1 className="text-sm">สถานภาพ :</h1>
                                                </div>
                                                <div className="justify-self-start">
                                                    <h1 className="text-sm">โสด</h1>
                                                </div>
                                            </div>
                                            <h1 className="absolute top-24 font-semibold">ยอดปิดสินเชื่อ และบัตร ฯลฯ</h1>
                                            <div className="flex flex-col absolute top-28">
                                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                                        <div className="overflow-hidden">
                                                            <table className="min-w-full border text-xs font-light dark:border-neutral-500">
                                                                <thead className="border-b text-xs dark:border-neutral-500">
                                                                    <tr>
                                                                        <th
                                                                            scope="col"
                                                                            className="border-r px-1 py-1 dark:border-neutral-500">
                                                                            ลำดับ
                                                                        </th>
                                                                        <th scope="col"
                                                                            className="border-r px-8 py-1 dark:border-neutral-500">
                                                                            สถาบันการเงิน
                                                                        </th>
                                                                        <th scope="col"
                                                                            className="border-r px-1 py-1 dark:border-neutral-500">
                                                                            บัญชี
                                                                        </th>
                                                                        <th scope="col" className="border-r px-6 py-1 dark:border-neutral-500">
                                                                            เลขที่บัญชี
                                                                        </th>
                                                                        <th scope="col" className="border-r px-6 py-1 dark:border-neutral-500">
                                                                            วงเงินอนุมัติ
                                                                        </th>
                                                                        <th scope="col" className="border-r px-6 py-1 dark:border-neutral-500">
                                                                            ยอดปิด
                                                                        </th>
                                                                        <th scope="col" className="border-r px-8 py-1 dark:border-neutral-500">
                                                                            ค่างวดผ่อนต่อเดือน
                                                                        </th>
                                                                        <th scope="col" className="border-r px-6 py-1 dark:border-neutral-500">
                                                                            หมายเหตุ
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Markkkkkkkkkkkkkkkkkkk
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            2
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            3
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            4
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            5
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            6
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            7
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            8
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            9
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            10
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            11
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            12
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            13
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            14
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            15
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            16
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            17
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            18
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            19
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                        0000 1111 2222 3333 4444
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            20
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            0000 1111 2222 3333 4444
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            21
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            0000 1111 2222 3333
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            22
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            0000 1111 2222 3333
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            23
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            0000 1111 2222 3333
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            0000 1111
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            0000 1111
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            24
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            0000 1111 2222 3333
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            0000 1111
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            0000 1111
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            25
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            0000 1111 2222 3333
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            0000 1111
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            0000 1111
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap  px-1 py-1 font-medium dark:border-neutral-500">

                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap  px-16 py-1 dark:border-neutral-500">

                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap px-1 py-1 dark:border-neutral-500">

                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            รวมยอดปิดทั้งหมด
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            100,000
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            100,000
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            0
                                                                        </td>
                                                                        <td className="whitespace-nowrap px-6 py-1 dark:border-neutral-500">

                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h1 className="absolute bottom-96 font-semibold">สินเชื่อที่ไม่ปิด หรืออาจจะปิดภายหลัง</h1>
                                            <div className="flex flex-col absolute bottom-56">
                                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                                        <div className="overflow-hidden">
                                                            <table className="min-w-full border text-center text-xs font-light dark:border-neutral-500">
                                                                <thead className="border-b font-sm dark:border-neutral-500">
                                                                    <tr>
                                                                        <th
                                                                            scope="col"
                                                                            className="border-r px-1 py-1 dark:border-neutral-500">
                                                                            ลำดับ
                                                                        </th>
                                                                        <th scope="col"
                                                                            className="border-r px-8 py-1 dark:border-neutral-500">
                                                                            สถาบันการเงิน
                                                                        </th>
                                                                        <th scope="col"
                                                                            className="border-r px-1 py-1 dark:border-neutral-500">
                                                                            บัญชี
                                                                        </th>
                                                                        <th scope="col" className="border-r px-6 py-1 dark:border-neutral-500">
                                                                            เลขที่บัญชี
                                                                        </th>
                                                                        <th scope="col" className="border-r px-6 py-1 dark:border-neutral-500">
                                                                            วงเงินอนุมัติ
                                                                        </th>
                                                                        <th scope="col" className="border-r px-6 py-1 dark:border-neutral-500">
                                                                            ยอดเงิน
                                                                        </th>
                                                                        <th scope="col" className="border-r px-6 py-1 dark:border-neutral-500">
                                                                            ค่างวดผ่อนต่อเดือน
                                                                        </th>
                                                                        <th scope="col" className="border-r px-6 py-1 dark:border-neutral-500">
                                                                            หมายเหตู
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-8 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            Otto
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            2
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-8 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            Otto
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            3
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-8 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            Otto
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            4
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-8 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            Otto
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            5
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-8 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            Otto
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap  px-1 py-1 font-medium dark:border-neutral-500">

                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap  px-16 py-1 dark:border-neutral-500">

                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap px-1 py-1 dark:border-neutral-500">

                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            รวมยอดปิดทั้งหมด
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            100,000
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            100,000
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            0
                                                                        </td>
                                                                        <td className="whitespace-nowrap px-6 py-1 dark:border-neutral-500">

                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h1 className="absolute bottom-52 font-semibold">สินเชื่อรถยนต์</h1>
                                            <div className="flex flex-col absolute bottom-28">
                                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                                        <div className="overflow-hidden">
                                                            <table className="min-w-full border text-center text-xs font-light dark:border-neutral-500">
                                                                <thead className="border-b text-xs dark:border-neutral-500">
                                                                <tr>
                                                                        <th
                                                                            scope="col"
                                                                            className="border-r px-1 py-1 dark:border-neutral-500">
                                                                            ลำดับ
                                                                        </th>
                                                                        <th scope="col"
                                                                            className="border-r px-8 py-1 dark:border-neutral-500">
                                                                            สถาบันการเงิน
                                                                        </th>
                                                                        <th scope="col"
                                                                            className="border-r px-1 py-1 dark:border-neutral-500">
                                                                            บัญชี
                                                                        </th>
                                                                        <th scope="col" className="border-r px-6 py-1 dark:border-neutral-500">
                                                                            เลขที่บัญชี
                                                                        </th>
                                                                        <th scope="col" className="border-r px-6 py-1 dark:border-neutral-500">
                                                                            วงเงินอนุมัติ
                                                                        </th>
                                                                        <th scope="col" className="border-r px-6 py-1 dark:border-neutral-500">
                                                                            ยอดเงิน
                                                                        </th>
                                                                        <th scope="col" className="border-r px-6 py-1 dark:border-neutral-500">
                                                                            ค่างวดผ่อนต่อเดือน
                                                                        </th>
                                                                        <th scope="col" className="border-r px-6 py-1 dark:border-neutral-500">
                                                                            หมายเหตู
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            1
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-8 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            Otto
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                                            2
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-8 py-1 dark:border-neutral-500">
                                                                            Mark
                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap border-r px-1 py-1 dark:border-neutral-500">
                                                                            Otto
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            @mdo
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td
                                                                            className="whitespace-nowrap  px-1 py-1 font-medium dark:border-neutral-500">

                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap  px-16 py-1 dark:border-neutral-500">

                                                                        </td>
                                                                        <td
                                                                            className="whitespace-nowrap px-1 py-1 dark:border-neutral-500">

                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-16 py-1 dark:border-neutral-500">
                                                                            รวมยอดปิดทั้งหมด
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            100,000
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            100,000
                                                                        </td>
                                                                        <td className="whitespace-nowrap border-r px-6 py-1 dark:border-neutral-500">
                                                                            0
                                                                        </td>
                                                                        <td className="whitespace-nowrap px-6 py-1 dark:border-neutral-500">

                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="container absolute bottom-20 left-0 grid grid-cols-4 gap-1">
                                                <div className="justify-self-end">
                                                    <h1 className="text-xs">ผู้จัดทำ :</h1>
                                                </div>
                                                <div className="justify-self-start">
                                                    <h1 className="text-xs">.....................................................</h1>
                                                </div>
                                                <div className="justify-self-end">
                                                    <h1 className="text-xs">ผู้จัดทำ :</h1>
                                                </div>
                                                <div className="justify-self-start">
                                                    <h1 className="text-xs">.....................................................</h1>
                                                </div>
                                                <div className="justify-self-end">
                                                    <h1 className="text-xs">ผู้จัดทำ :</h1>
                                                </div>
                                                <div className="justify-self-start">
                                                    <h1 className="text-xs">.....................................................</h1>
                                                </div>
                                                <div className="justify-self-end">
                                                    <h1 className="text-xs">ผู้จัดทำ :</h1>
                                                </div>
                                                <div className="justify-self-start">
                                                    <h1 className="text-xs">.....................................................</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default CarDebt
