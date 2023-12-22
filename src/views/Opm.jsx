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
    Button
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {  useLoaderData, Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";

const Opm = () => {

    const columns = useMemo(
        () => [
            {
                accessorKey: 'id',
                header: 'ลำดับ',
                size: 150,
            },
            {
                accessorKey: 'user_code',
                header: 'User Ccode',
                size: 150,
            },
            {
                accessorKey: 'user_name',
                header: 'User Name',
                size: 150,
            },
            {
                accessorKey: 'nickname',
                header: 'Nickname',
                size: 150,
            },
            {
                accessorKey: 'e_mail',
                header: 'Email',
                size: 150,
            },
            {
                accessorKey: 'phone',
                header: 'Phone',
                size: 150,
            },
            {
                accessorKey: 'position',
                header: 'Position',
                size: 150,
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
                            <Button component={Link} to="/opm/create" className="dark:text-white dark:bg-[#3061AF] shadow-md shadow-[#1061e3] dark:shadow-blue-500 duration-500" color="error">
                                เพิ่มพนักงาน
                            </Button>
                    </div>
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

// import { useMemo } from 'react';
// import Layout from '../views/Layout';

// import {
//   MaterialReactTable,
//   useMaterialReactTable,
// } from 'material-react-table';
// import {
//     Box,
//     IconButton,
//     Tooltip,
//     Button
// } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import {  useLoaderData, Outlet } from 'react-router-dom';
// import { Link } from "react-router-dom";

// const Opm = () => {

//     const columns = useMemo(
//         () => [
//             {
//                 accessorKey: 'name',
//                 header: 'Name',
//                 size: 150,
//             },
//             {
//               accessorKey: 'email',
//               header: 'Email',
//               size: 150,
//           },
//         ],
//         [],
//     );

//     const data = useLoaderData();
//     console.log(data);
//     const table = useMaterialReactTable({
//         table: {},
//             row: {
//             width: 700,
//             backgroundColor: 'grey'
//         },
//         columns,
//         data,
//         enableEditing: true,
//         overflowX: 'auto',
//         renderRowActions: ({ row, table }) => (
//             <Box sx={{ display: 'flex', gap: '0.5rem', minWidth: 50 }}>
//                 <Tooltip title="Edit">
//                     <IconButton component={Link} to={`${row.original.id}/edit`}>
//                     <EditIcon />
//                     </IconButton>
//                 </Tooltip>
//                 <Tooltip title="Delete">
//                     <IconButton component={Link} to={`${row.original.id}/delete`} color="error">
//                     <DeleteIcon />
//                     </IconButton>
//                 </Tooltip>
//             </Box>
//         ),
//     });

//     return (
//         <>
//             <Layout>
//                 <Outlet />
//                 <div className='min-h-screen w-full justify-center items-center pr-64 text-xl font-semibold'>
//                     <div className='min-h-screen justify-center pt-24'>
//                     <div className='pb-4'>
//                             <Button component={Link} to="/opm/create" className="dark:text-white dark:bg-[#3061AF] shadow-md shadow-[#1061e3] dark:shadow-blue-500 duration-500" color="error">
//                                 เพิ่มภาระหนี้สินเชื่อ
//                             </Button>
//                     </div>
//                             <div className='MuiTableContainer-root css-j6w5q1'>
//                                 <MaterialReactTable className="form flex justify-center items-center bg-white dark:bg-[#202020] shadow-md shadow-[#202020] dark:shadow-blue-500 duration-500"
//                                     table={table}
//                                 />

//                             </div>
//                     </div>
//                     <div className="inline-block space-y-2 border-b border-black dark:border-blue-500 pt-10">aaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
//                 </div>
//             </Layout>
//         </>
//     )
// }

// export default Opm;
