import { useMemo } from 'react';
import Layout from '../views/Layout';

import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import {
    Box,
    IconButton,
    Tooltip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {  useLoaderData, Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";

const Opm = () => {

    const columns = useMemo(
        () => [
            {
                accessorKey: 'loan_debt_code',
                header: 'Loan Debt Code',
                size: 150,
            },
            {
                accessorKey: 'code',
                header: 'Code',
                size: 150,
            },
            {
                accessorKey: 'name',
                header: 'Name',
                size: 150,
            },
            {
                accessorKey: 'lastname',
                header: 'Lastname',
                size: 150,
            },
            {
                accessorKey: 'data_entry_date',
                header: 'Data Entry Date',
                size: 150,
            },
            {
                accessorKey: 'loan_type',
                header: 'Loan Type',
                size: 150,
            },
            {
                accessorKey: 'financial_institution',
                header: 'Financial Institution',
                size: 250,
            },
            {
                accessorKey: 'account_number',
                header: 'Account Number',
                size: 80,
            },
            {
                accessorKey: 'approval_limit',
                header: 'Approval Limit',
                size: 100,
            },
            {
                accessorKey: 'approval_limit',
                header: 'Approval Limit',
                size: 100,
            },
            {
                accessorKey: 'approval_limit',
                header: 'Approval Limit',
                size: 100,
            },
            {
                accessorKey: 'approval_limit',
                header: 'Approval Limit',
                size: 100,
            },
            {
                accessorKey: 'approval_limit',
                header: 'Approval Limit',
                size: 100,
            },
        ],
        [],
    );

    const data = useLoaderData();
    console.log(data);
    const table = useMaterialReactTable({
        table: {},
            row: {
            width: 700,
            backgroundColor: 'grey'
        },
        columns,
        data,
        enableEditing: true,
        overflowX: 'auto',
        renderRowActions: ({ row, table }) => (
            <Box sx={{ display: 'flex', gap: '0.5rem', minWidth: 50 }}>
                {/* header: <p style={{ textAlign: 'center' }}>Actions</p>, */}
                <Tooltip title="Edit">
                    <IconButton component={Link} to={`${row.original.id}/edit`}>
                    <EditIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                    <IconButton component={Link} to={`${row.original.id}/delete`} color="error">
                    <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </Box>
        ),
    });

    return (
        <>
            <Layout>
                <Outlet />
                <div className='min-h-screen w-full justify-center items-center pr-64 text-xl font-semibold'>
                    <div className='min-h-screen justify-center pt-24'>
                            <div className='MuiTableContainer-root css-j6w5q1'>
                                <MaterialReactTable className="form flex justify-center items-center bg-white dark:bg-[#202020] shadow-md shadow-[#202020] dark:shadow-blue-500 duration-500"
                                    table={table}
                                />

                            </div>
                    </div>
                    <div className="inline-block space-y-2 border-b border-black dark:border-blue-500 pt-10">aaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                </div>
            </Layout>
        </>
    )
}

export default Opm;
