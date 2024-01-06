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
    const columns = useMemo(
        () => [
            {
                accessorKey: 'id',
                header: 'ID',
                size: 150,
            },
            {
                accessorKey: 'customer_code',
                header: 'รหัสลูกค้า',
                size: 150,
            },
            {
                accessorKey: 'sent_date_cm',
                header: 'วันที่ส่ง CM',
                size: 150,
            },
            {
                accessorKey: 'sale_code',
                header: 'รหัสเซลล์',
                size: 150,
            },
            // {
            //     accessorFn: (originalRow) => new Date(originalRow.data_entry_date),
            //     id: 'data_entry_date',
            //     header: 'Data Entry Date',
            //     filterVariant: 'date-range',
            //     Cell: ({ cell }) => cell.getValue().toLocaleDateString(),
            //     size: 150,
            // },
            {
                accessorKey: 'sale_name',
                header: 'ชื่อเซลล์',
                size: 150,
            },
            {
                accessorKey: 'team_code',
                header: 'รหัสทีม',
                size: 250,
            },
            {
                accessorKey: 'team_name',
                header: 'ชื่อทีม',
                size: 80,
            },
            {
                accessorKey: 'customer_group',
                header: 'กลุ่มลูกค้า',
                format: (value) => value.toLocaleString('en-US'),
                size: 100,
            },
            {
                accessorKey: 'customer_contact',
                header: 'ช่องทาง',
                size: 100,
            },
            {
                accessorKey: 'gender',
                header: 'เพศ',
                size: 100,
            },
            {
                accessorKey: 'prefix',
                header: 'คำนำหน้า',
                size: 100,
            },
            {
                accessorKey: 'customer_firstname',
                header: 'ชื่อลูกค้า',
                size: 100,
            },
            {
                accessorKey: 'customer_lastname',
                header: 'นามสกุลลูกค้า',
                size: 100,
            },
            {
                accessorKey: 'customer_nickname',
                header: 'ชื่อเล่นลูกค้า',
                size: 100,
            },
            {
                accessorKey: 'customer_phone_number',
                header: 'เบอร์โทรลูกค้า',
                size: 100,
            },
            {
                accessorKey: 'customer_firstname_en',
                header: 'ชื่อลูกค้า (ENG)',
                size: 100,
            },
            {
                accessorKey: 'customer_lastname_en',
                header: 'นามสกุลลูกค้า (ENG)',
                size: 100,
            },
            {
                accessorKey: 'birthday',
                header: 'วันเกิด',
                size: 100,
            },
            {
                accessorKey: 'case_age',
                header: 'อายุทำเคส',
                size: 100,
            },
            {
                accessorKey: 'current_age',
                header: 'อายุปัจจุบัน',
                size: 100,
            },
            {
                accessorKey: 'id_card',
                header: 'เลขบัตรประชาชน',
                size: 100,
            },
            {
                accessorKey: 'issue_date',
                header: 'วันที่ออกบัตร',
                size: 100,
            },
            {
                accessorKey: 'expiration_date',
                header: 'วันที่หมดอายุ',
                size: 100,
            },
            {
                accessorKey: 'housing_type',
                header: 'ประเภทที่อยู่อาศัย',
                size: 100,
            },
            {
                accessorKey: 'residence_year',
                header: 'อยู่อาศัย (ปี)',
                size: 100,
            },
            {
                accessorKey: 'current_address',
                header: 'ที่อยู่ปัจจุบัน',
                size: 100,
            },
            {
                accessorKey: 'email',
                header: 'E-Mail',
                size: 100,
            },
            {
                accessorKey: 'vital_status',
                header: 'สถานภาพ',
                size: 100,
            },
            {
                accessorKey: 'number_of_children',
                header: 'จำนวนบุตร',
                size: 100,
            },
            {
                accessorKey: 'educational',
                header: 'วุฒิการศึกษา',
                size: 100,
            },
            {
                accessorKey: 'faculty',
                header: 'คณะที่จบ',
                size: 100,
            },
            {
                accessorKey: 'branch',
                header: 'สาขา',
                size: 100,
            },
            {
                accessorKey: 'company_name',
                header: 'ชื่อบริษัทที่ทำงาน',
                size: 100,
            },
            {
                accessorKey: 'company_address',
                header: 'ที่อยู่บริษัทที่ทำงาน',
                size: 100,
            },
            {
                accessorKey: 'registered_capital',
                header: 'ทุนจดทะเบียน',
                size: 100,
            },
            {
                accessorKey: 'work_phone_number',
                header: 'เบอร์โทรที่ทำงาน',
                size: 100,
            },
            {
                accessorKey: 'number_of_employees',
                header: 'จำนวนพนักงาน',
                size: 100,
            },
            {
                accessorKey: 'salary',
                header: 'เงินเดือน',
                size: 100,
            },
            {
                accessorKey: 'bank_name',
                header: 'Payroll',
                size: 100,
            },
            {
                accessorKey: 'home_lone',
                header: 'สวัสดิการกู้ซื้อบ้าน',
                size: 100,
            },
            {
                accessorKey: 'position',
                header: 'ตำแหน่ง',
                size: 100,
            },
            {
                accessorKey: 'department',
                header: 'แผนก',
                size: 100,
            },
            {
                accessorKey: 'year_of_service',
                header: 'อายุงาน',
                size: 100,
            },
            {
                accessorKey: 'business_type',
                header: 'ประเภทธุรกิจเกี่ยวกับอะไร',
                size: 100,
            },
            {
                accessorKey: 'document_delivery',
                header: 'เอกสารจัดส่งที่ไหน',
                size: 100,
            },
            {
                accessorKey: 'original_work_name',
                header: 'ชื่อบริษัทที่ทำงานเดิม',
                size: 100,
            },
            {
                accessorKey: 'original_work_phone',
                header: 'เบอร์โทรที่ทำงานเดิม',
                size: 100,
            },
            {
                accessorKey: 'original_position',
                header: 'ตำแหน่งเดิม',
                size: 100,
            },
            {
                accessorKey: 'previous_employment_period',
                header: 'อายุงานเดิม',
                size: 100,
            },
            {
                accessorKey: 'spouse_firstname',
                header: 'ชื่อ (คู่สมรส)',
                size: 100,
            },
            {
                accessorKey: 'spouse_lastname',
                header: 'สกุล (คู่สมรส)',
                size: 100,
            },
            {
                accessorKey: 'spouse_phone_number',
                header: 'เบอร์โทร (คู่สมรส)',
                size: 100,
            },
            {
                accessorKey: 'spouse_current_address',
                header: 'ที่อยู่ปัจจุบัน (คู่สมรส)',
                size: 100,
            },
            {
                accessorKey: 'spose_work_address',
                header: 'ที่อยู่ที่ทำงาน (คู่สมรส)',
                size: 100,
            },
            {
                accessorKey: 'spose_work_phone_number',
                header: 'เบอร์โทรที่ทำงาน (คู่สมรส)',
                size: 100,
            },
            {
                accessorKey: 'spose_id_card',
                header: 'เลขบัตรประชาชน (คู่สมรส)',
                size: 100,
            },
            {
                accessorKey: 'reference_person1_firstname',
                header: 'ชื่อ (บุคคลอ้างอิง 1.)',
                size: 100,
            },
            {
                accessorKey: 'reference_person1_lastname',
                header: 'นามสกุล (บุคคลอ้างอิง 1.)',
                size: 100,
            },
            {
                accessorKey: 'reference_person1_relationship',
                header: 'ความสัมพันธ์ (บุคคลอ้างอิง 1.)',
                size: 100,
            },
            {
                accessorKey: 'reference_person1_phone_number',
                header: 'เบอร์โทร (บุคคลอ้างอิง 1.)',
                size: 100,
            },
            {
                accessorKey: 'reference_person1_address',
                header: 'ที่อยู่ (บุคคลอ้างอิง 1.)',
                size: 100,
            },
            {
                accessorKey: 'reference_person2_firstname',
                header: 'ชื่อ (บุคคลอ้างอิง 2.)',
                size: 100,
            },
            {
                accessorKey: 'reference_person2_lastname',
                header: 'นามสกุล (บุคคลอ้างอิง 2.)',
                size: 100,
            },
            {
                accessorKey: 'reference_person2_relationship',
                header: 'ความสัมพันธ์ (บุคคลอ้างอิง 2.)',
                size: 100,
            },
            {
                accessorKey: 'reference_person2_phone_number',
                header: 'เบอร์โทร (บุคคลอ้างอิง 2.)',
                size: 100,
            },
            {
                accessorKey: 'reference_person2_address',
                header: 'ที่อยู่ (บุคคลอ้างอิง 2.)',
                size: 100,
            },
            {
                accessorKey: 'special_installment_rate_month',
                header: 'อัตราการผ่อนพิเศษ/เดือน',
                size: 100,
            },
            {
                accessorKey: 'note_special_installment',
                header: 'หมายเหตุ (อัตราการผ่อนพิเศษ/เดือน)',
                size: 100,
            },
            {
                accessorKey: 'case_administrator',
                header: 'ผู้ดูแลเคส',
                size: 100,
            },
            {
                accessorKey: 'customer_grade',
                header: 'เกรดลูกค้า',
                size: 100,
            },
            {
                accessorKey: 'case_analyst',
                header: 'ผู้วิเคราะห์เคส',
                size: 100,
            },
            {
                accessorKey: 'approval_result_status',
                header: 'สถานะผลการอนุมัติ',
                size: 100,
            },
            {
                accessorKey: 'reason_reject',
                header: 'เหตุผลReject',
                size: 100,
            },
            {
                accessorKey: 'result_status_update_date',
                header: 'วันที่อัปเดตสถานะผล',
                size: 100,
            },
            {
                accessorKey: 'note_customer_case',
                header: 'หมายเหตุ (เคสลูกค้า)',
                size: 100,
            },
            {
                accessorKey: 'data_status',
                header: 'สถานข้อมูล',
                size: 100,
            },
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
                            <Button component={Link} to="create" className="dark:text-white dark:bg-[#3061AF] shadow-md shadow-[#1061e3] dark:shadow-blue-500 duration-500" color="error">
                                เพิ่มข้อมูลลูกค้า
                            </Button>
                        </div>
                        <MaterialReactTable
                            className="form flex justify-center items-center bg-white dark:bg-[#202020] shadow-md shadow-[#202020] dark:shadow-blue-500 duration-500"
                            style={{ maxWidth: '100%', width: '100%', overflowX: 'auto' }}
                            table={table}
                        />
                    {/* <div className='min-h-screen flex justify-center items-center pt-12'>
                        <div className="form justify-center items-center bg-white dark:bg-[#202020] shadow-md shadow-[#202020] dark:shadow-blue-500 duration-500">
                            <div className="flex justify-center items-center 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm">
                                <h2 className="inline-block space-y-2 border-b border-black dark:border-blue-500">ข้อมูลลูกค้า</h2>
                            </div>
                        </div>
                    </div> */}
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Customer
