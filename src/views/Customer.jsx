import React from 'react'
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

const Customer = () => {
    return (
        <>
            <Layout>
                <Outlet />
                <div className='min-h-screen w-full justify-center items-center pl-8 pr-8 text-xl font-semibold'>
                    <div className='pb-4 pt-24'>
                        <Button component={Link} to="create" className="dark:text-white dark:bg-[#3061AF] shadow-md shadow-[#1061e3] dark:shadow-blue-500 duration-500" color="error">
                            เพิ่มข้อมูลลูกค้า
                        </Button>
                    </div>
                    <div className='min-h-screen flex justify-center items-center pt-12'>
                        <div className="form justify-center items-center bg-white dark:bg-[#202020] shadow-md shadow-[#202020] dark:shadow-blue-500 duration-500">
                            <div className="flex justify-center items-center 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm">
                                <h2 className="inline-block space-y-2 border-b border-black dark:border-blue-500">ข้อมูลลูกค้า</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Customer
