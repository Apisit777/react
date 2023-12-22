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

const LoanDebt = () => {
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
                accessorFn: (originalRow) => new Date(originalRow.data_entry_date),
                id: 'data_entry_date',
                header: 'Data Entry Date',
                filterVariant: 'date-range',
                Cell: ({ cell }) => cell.getValue().toLocaleDateString(),
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
                format: (value) => value.toLocaleString('en-US'),
                // Cell: ({ cell }) => (
                //   cell.getValue().toLocaleString('en-US', {
                //       style: 'currency',
                //       currency: 'USD',
                //       minimumFractionDigits: 2,
                //       maximumFractionDigits: 2,
                //     })
                //   cell.getValue()?.toLocaleString?.('en-US', {
                //     style: 'currency',
                //     currency: 'USD',
                //     minimumFractionDigits: 2,
                //     maximumFractionDigits: 2,
                //   })
                // ),
                // filterVariant: 'range-slider',
                // filterFn: 'betweenInclusive',
                // muiFilterSliderProps: {
                //   marks: true,
                //   max: 200_000,
                //   min: 30_000,
                //   step: 10_000,
                //   valueLabelFormat: (value) =>
                //     value.toLocaleString('en-US', {
                //       style: 'currency',
                //       currency: 'USD',
                //     }),
                // },
                size: 100,
            },
            // {
            //     accessorKey: 'approval_limit',
            //     header: 'Approval Limit',
            //     size: 100,
            // }
        ],
        [],
    );

    const data = useLoaderData();
    // console.log(data);

    const table = useMaterialReactTable({
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
                        <div className='pb-4'>
                             <Button component={Link} to="/admin/create" className="dark:text-white dark:bg-[#3061AF] shadow-md shadow-[#1061e3] dark:shadow-blue-500 duration-500" color="error">
                                 เพิ่มภาระหนี้สินเชื่อ
                             </Button>
                        </div>
                        {/* <button
                            component={Link} to="/admin/create"
                            className="block w-1/6 content-center select-none rounded-lg bg-[#3061AF] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                            onClick={notify}
                        >
                            เพิ่มภาระหนี้สินเชื่อ
                        </button> */}
                        <MaterialReactTable
                            className="form flex justify-center items-center bg-white dark:bg-[#202020] shadow-md shadow-[#202020] dark:shadow-blue-500 duration-500"
                            style={{ maxWidth: '100%', width: '100%', overflowX: 'auto' }}
                            table={table}
                        />
                    </div>
                    <div className="inline-block space-y-2 border-b border-black dark:border-blue-500 pt-10">aaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                </div>
            </Layout>
        </>
    )
};

export default LoanDebt;
