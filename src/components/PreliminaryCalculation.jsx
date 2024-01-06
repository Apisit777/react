import PropTypes from 'prop-types';
import * as React from "react";

export class PreliminaryCalculationCompo extends React.PureComponent {
  constructor(props) {
      super(props);

      this.state = { checked: false };
  }

    render() {

        const { dataDataLoanDebts } = this.props

        // Print page คำนวณเบื้องต้น
        return (
            <div>
                <form className="mt-6 flex justify-center items-center flex-col gap-4">
                    <div className="relative page text-black flex justify-center items-center">
                        <div className="container absolute top-6 left-0 grid grid-cols-6 gap-1">
                            <div className="justify-self-end">
                                <h1 className="text-xs">ชื่อ - สกุล :</h1>
                            </div>
                            <div className="justify-self-start">
                                <h1 className="text-xs">จินตนา ใจมีสุขทุกเพลา</h1>
                            </div>
                            <div className="justify-self-end">
                                <h1 className="text-xs">ชื่อบริษัท :</h1>
                            </div>
                            <div className="justify-self-start">
                                <h1 className="text-xs">บริษัท อี๋เผิง จำกัด</h1>
                            </div>
                            <div className="justify-self-end">
                                <h1 className="text-xs">รหัสลูกค้า :</h1>
                            </div>
                            <div className="justify-self-start">
                                <h1 className="text-sm">{dataDataLoanDebts.code}</h1>
                            </div>
                            <div className="justify-self-end">
                                <h1 className="text-xs">วันเกิด :</h1>
                            </div>
                            <div className="justify-self-start">
                                <h1 className="text-xs">1 มกราคม 2540</h1>
                            </div>
                            <div className="justify-self-end">
                                <h1 className="text-xs">ประเภทธุรกิจ:</h1>
                            </div>
                            <div className="justify-self-start">
                                <h1 className="text-xs">จำหน่ายวัสดุอุปกรณ์ก่อสร้าง</h1>
                            </div>
                            <div className="justify-self-end">
                                <h1 className="text-xs">กลุ่มลูกค้า :</h1>
                            </div>
                            <div className="justify-self-start">
                                <h1 className="text-xs">OPM02</h1>
                            </div>
                            <div className="justify-self-end">
                                <h1 className="text-xs">อายุ :</h1>
                            </div>
                            <div className="justify-self-start">
                                <h1 className="text-xs">26 ปี</h1>
                            </div>
                            <div className="justify-self-end">
                                <h1 className="text-xs">ตำแหน่งงาน :</h1>
                            </div>
                            <div className="justify-self-start">
                                <h1 className="text-xs">การเงิน</h1>
                            </div>
                            <div className="justify-self-end">
                                <h1 className="text-xs">รหัสเซลล์ :</h1>
                            </div>
                            <div className="justify-self-start">
                                <h1 className="text-xs">47004</h1>
                            </div>
                            <div className="justify-self-end">
                                <h1 className="text-xs">สถานภาพ :</h1>
                            </div>
                            <div className="justify-self-start">
                                <h1 className="text-xs">โสด</h1>
                            </div>
                            <div className="justify-self-end">
                                <h1 className="text-xs">อายุงาน :</h1>
                            </div>
                            <div className="justify-self-start">
                                <h1 className="text-xs">12 ปี</h1>
                            </div>
                            <div className="justify-self-end">
                                <h1 className="text-xs">ชื่อเซลล์ :</h1>
                            </div>
                            <div className="justify-self-start">
                                <h1 className="text-xs">ธนานิษฐ์ (อู๊ด)</h1>
                            </div>
                            <div className="justify-self-end">
                                <h1 className="text-xs">เบอร์โทร :</h1>
                            </div>
                            <div className="justify-self-start">
                                <h1 className="text-xs">011-1111-111</h1>
                            </div>
                            <div className="justify-self-end">
                                <h1 className="text-xs">วุฒิการศึกษา :</h1>
                            </div>
                            <div className="justify-self-start">
                                <h1 className="text-xs">ป. ตรี</h1>
                            </div>
                        </div>
                        <div className="flex flex-col absolute top-32">
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

                        <div className="flex flex-col absolute top-72">
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
                                                        className="whitespace-nowrap border-r px-1 py-1 font-medium dark:border-neutral-500">
                                                        26
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
                                                        27
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
                                                        28
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
                        <div className="flex flex-col absolute bottom-20">
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
                    </div>
                </form>
            </div>
        )
    }
}


PreliminaryCalculationCompo.propTypes = {
    dataDataLoanDebts: PropTypes.object,
};

// export default PreliminaryCalculation
export const PreliminaryCalculation = React.forwardRef((props, ref) => {
    return <PreliminaryCalculationCompo ref={ref} dataDataLoanDebts={props.dataDataLoanDebts} />;
});
