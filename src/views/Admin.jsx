// import Layout from '../views/Layout';
// import MUIDataTable from "mui-datatables";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const options = {
//     filterType: 'checkbox',
// }

// export default function Admin() {

//     const [loanDdebts, setLoanDebts] = useState([]);

//     const endpoint = 'http://localhost:9999/api/loan_debts';

//     const getData = () => {
//          axios.get(endpoint).then((response) => {
//             const data= response.data
//             console.log(data)
//             setLoanDebts(data)
//         })
//     }

//     useEffect( ()=> {
//         getData()
//     }, [])

//     const columns = [
//         {
//             name: "id",
//             label: "Id"
//         },
//         {
//             name: "loan_debt_code",
//             label: "Loan debt code"
//         },
//         {
//             name: "code",
//             label: "Code"
//         },
//         {
//             name: "name",
//             label: "Name"
//         },
//         {
//             name: "lastname",
//             label: "Lastname"
//         },
//         {
//             name: "data_entry_date",
//             label: "Data entry date"
//         },
//         {
//             name: "loan_type",
//             label: "Loan type"
//         },
//         {
//             name: "financial_institution",
//             label: "Financial institution"
//         },
//         {
//             name: "account_number",
//             label: "Account number"
//         }

//     ]

//     return (
//         <>
//             <Layout>
//                 <div className='min-h-screen w-full justify-center items-center pl-8 pr-8 text-xl font-semibold'>
//                     <div className='min-h-screen flex justify-center pt-24'>
//                             <MUIDataTable
//                                 title={"ภาระหนี้สินเชื่อ"}
//                                 data={loanDdebts}
//                                 columns={columns}
//                                 options={options}
//                             />
//                     </div>
//                     <div className="inline-block space-y-2 border-b border-black dark:border-blue-500 pt-10">aaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
//                 </div>
//             </Layout>
//         </>
//     )
// }

import { useMemo } from 'react';
import Layout from '../views/Layout';

import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
// import LoanDebtModal from '../views/LoanDebtModal';
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
import { TextField, Stack } from '@mui/material/';
import React, { useState } from 'react'
import { DatePicker } from '@mui/x-date-pickers';

const Example = () => {
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
                // accessorKey: 'data_entry_date',
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
    console.log(data);

    // const styles = theme => ({
    //     root: {
    //       width: '100%',
    //       marginTop: theme.spacing.unit * 3,
    //       overflowX: 'auto',
    //     },
    //     table: {
    //       minWidth: 700,
    //     },
    //   });

    const table = useMaterialReactTable({
        // root: {
        //     width: "100%",
        //     overflowX: "auto"
        //   },
        // table: {
        //     minWidth: 700
        // },
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

        // editDisplayMode: 'row',
        // onEditingRowSave: ({ table, values }) => {
        //     //validate data
        //     //save data to api
        //     table.setEditingRow(null); //exit editing mode
        // },
        // onEditingRowCancel: () => {
        //     //clear any validation errors
        // },
    });

    // const [selectedDate, setSelectedDate] = useState(null);
    // const [dataForm, setDataForm] = React.useState<{
    //     dateFrom: Date | null,
    //     dateTo: Date | null,
    //     selected: String | number
    // }>({
    //     dateFrom: new Date(),
    //     dateTo: new Date(),
    //     selected: -1
    // })

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

                             {/* <Stack sx={{ width: '200px' }}>
                                <DatePicker
                                    label="Date picker"
                                    renderInput={(params) => <TextField {...params} />}
                                    value={selectedDate}
                                    onChange={(newValue) => {
                                        setSelectedDate(newValue)
                                    }}
                                />
                            </Stack> */}
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
                        <MaterialReactTable className="form flex justify-center items-center bg-white dark:bg-[#202020] shadow-md shadow-[#202020] dark:shadow-blue-500 duration-500"
                            style={{ maxWidth: '100%', width: '100%', overflowX: 'auto' }}
                            // sx={{ minWidth: 650 }} aria-label="simple table"
                            table={table}
                        />
                    </div>
                    <div className="inline-block space-y-2 border-b border-black dark:border-blue-500 pt-10">aaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                </div>
            </Layout>
        </>
    )
};

export default Example;

// import Layout from '../views/Layout';
// import { Sheet, Table, Stack, Button, IconButton } from '@mui/joy';
// import { useLoaderData, Outlet } from 'react-router-dom';
// import {
//     createColumnHelper,
//     flexRender,
//     getCoreRowModel,
//     useReactTable,
// } from '@tanstack/react-table';
// import { Link } from "react-router-dom";

// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

// const columHelper = createColumnHelper();
// const columns = [
//         columHelper.accessor('loan_debt_code', {
//           id: 'loan_debt_code',
//           header: 'Loan Debt Code',
//           size: 150,
//         }),
//         columHelper.accessor('code', {
//             id: 'code',
//             header: 'Code',
//             size: 150,
//         }),
//         columHelper.accessor('name', {
//           id: 'name',
//           header: 'Name',
//           size: 150,
//         }),
//         columHelper.accessor('lastname', {
//           id: 'lastname',
//           header: 'Lastname',
//           size: 150,
//         }),
//         columHelper.accessor('data_entry_date', {
//           id: 'data_entry_date',
//           header: 'Data Entry Date',
//           size: 150,
//         }),
//         columHelper.accessor('loan_type', {
//           id: 'loan_type',
//           header: 'Loan Type',
//           size: 150,
//         }),
//         columHelper.accessor('action', {
//             id: 'action',
//             header: <p style={{ textAlign: 'center' }}>Actions</p>,
//             cell:({row}) => (
//                 <Stack justifyContent={'center'} direction={'row'} spacing={1}>
//                     <IconButton component={Link} to={`${row.original.id}/edit`}>
//                         <EditIcon />
//                     </IconButton>
//                     <IconButton component={Link} to={`${row.original.id}/delete`} color='danger'>
//                         <DeleteIcon />
//                     </IconButton>
//                 </Stack>
//             )
//           }),
// ]

// const Admin = () => {


//     const data = useLoaderData();
//     const table = useReactTable({
//         data,
//         columns,
//         getCoreRowModel: getCoreRowModel(),
//     });
//     console.log(data);

//     return (
//         <>
//             <Layout>
//                 <Outlet />
//                 <div className='min-h-screen w-full justify-center items-center pl-8 pr-8 text-xl font-semibold'>
//                     <div className='min-h-screen justify-center pt-24'>
//                         <div className='pb-4'>
//                             <Button component={Link} to="/admin/create">
//                                 เพิ่มภาระหนี้สินเชื่อ
//                             </Button>
//                         </div>
//                         <Sheet sx={{ borderRadius: 10 }}>
//                             <Table size="lg" className="bg-white dark:bg-[#202020]">
//                                 <thead>
//                                     {table.getHeaderGroups().map((headerGroup) => (
//                                         <tr key={headerGroup.id}>
//                                             { headerGroup.headers.map((header) =>(
//                                                 <th key={header.id}>
//                                                     {flexRender(header.column.columnDef.header,
//                                                         header.getContext()
//                                                     )}
//                                                 </th>
//                                             ))}
//                                         </tr>
//                                     ))}
//                                 </thead>
//                                 <tbody>
//                                 {table.getRowModel().rows.map((row) => (
//                                         <tr key={row.id}>
//                                             { row.getVisibleCells().map((cell) =>(
//                                                 <th key={cell.id}>
//                                                     {flexRender(cell.column.columnDef.cell,
//                                                         cell.getContext()
//                                                     )}
//                                                 </th>
//                                             ))}
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </Table>
//                         </Sheet>
//                     </div>
//                 </div>
//             </Layout>
//         </>
//     )
// }

// export default Admin

