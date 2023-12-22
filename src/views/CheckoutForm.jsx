import React from "react";
// import { useCountries } from "use-react-countries";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import Layout from '../views/Layout';

function formatCardNumber(value) {
  const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = val.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

function formatExpires(value) {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}

const CheckoutForm = () => {
  // const { countries } = useCountries();
  const [type, setType] = React.useState("card");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpires, setCardExpires] = React.useState("");

  return (
    <>
        <Layout>
            {/* <div className='min-h-screen w-full justify-center items-center pl-8 pr-8 text-xl font-semibold'> */}
                {/* <div className='min-h-screen flex justify-center items-center pt-24'> */}
                    {/* <div className="form justify-center items-center bg-white dark:bg-[#202020] shadow-md shadow-[#202020] dark:shadow-blue-500 duration-500"> */}
                        <div className="flex justify-center items-center 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm pl-8 pr-8 pt-24">
                            <Card className="w-full max-w-[320rem] bg-white dark:bg-[#202020] shadow-md shadow-[#202020] dark:shadow-blue-500 duration-500">
                                <CardHeader
                                    color="gray"
                                    floated={false}
                                    shadow={false}
                                    className="m-0 grid place-items-center px-4 py-8 text-center"
                                >
                                    <div className="mb-4 h-20 p-6 text-black dark:text-white">
                                    {type === "card" ? (
                                        <CreditCardIcon className="h-10 w-10 text-black dark:text-white" />
                                    ) : (
                                        <img alt="paypal " className="w-14 text-black dark:text-white" src="https://docs.material-tailwind.com/icons/paypall.png" />
                                    )}
                                    </div>
                                    <Typography variant="h5" color="white" className="text-black dark:text-white">
                                        Material Tailwind PRO
                                    </Typography>
                                </CardHeader>
                                <CardBody>
                                    <Tabs value={type} className="overflow-visible">
                                        <TabsHeader className="relative z-0">
                                            <Tab value="card" onClick={() => setType("card")} className="text-black dark:text-[#817d7d]">
                                                Pay with Card
                                            </Tab>
                                            <Tab value="paypal" onClick={() => setType("paypal")} className="text-black dark:text-[#817d7d]">
                                                Pay with PayPal
                                            </Tab>
                                        </TabsHeader>
                                        <TabsBody
                                            className="!overflow-x-hidden !overflow-y-visible"
                                            animate={{
                                            initial: {
                                                x: type === "card" ? 400 : -400,
                                            },
                                            mount: {
                                                x: 0,
                                            },
                                            unmount: {
                                                x: type === "card" ? 400 : -400,
                                            },
                                            }}
                                        >
                                            <TabPanel value="card" className="p-0">
                                                <form className="mt-12 flex justify-center items-center flex-col gap-4">
                                                    <div className="relative page text-black flex justify-center items-center">
                                                        {/* <div className="relative page text-black"> */}
                                                            <p className="absolute text-md top-4 font-semibold">รายละเอียดการปิดภาระหนี้</p>
                                                            <div className="container absolute top-10 left-0 grid grid-cols-4 gap-1">
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
                                                                    <h1 className="text-sm">C-202400001</h1>
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
                                                            <h1 className="absolute top-36 font-semibold">ยอดปิดสินเชื่อ และบัตร ฯลฯ</h1>
                                                            {/* <h2 className="flex justify-center items-center">TITLE</h2> */}
                                                            <div className="flex flex-col absolute top-40">
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
                                                            <h1 className="absolute bottom-72 font-semibold">สินเชื่อที่ไม่ปิด หรืออาจจะปิดภายหลัง</h1>
                                                            <div className="flex flex-col absolute bottom-44">
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
                                                            <h1 className="absolute bottom-40 font-semibold">สินเชื่อรถยนต์</h1>
                                                            <div className="flex flex-col absolute bottom-16">
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
                                                            <div className="container absolute bottom-4 left-0 grid grid-cols-4 gap-1">
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
                                                        {/* </div> */}
                                                    </div>
                                                </form>
                                            </TabPanel>
                                            <TabPanel value="paypal" className="p-0">
                                                <form className="mt-12 flex justify-center items-center flex-col gap-4">
                                                    <div className="relative page text-black">
                                                        {/* <div className="relative page text-black"> */}
                                                            {/* <section id="one" className="page"> */}
                                                                {/* <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" alt="" /> */}
                                                                {/* <div className="relative"> */}
                                                                    <h2 className="flex justify-center items-center absolute top-44">Test A4</h2>
                                                                    <div className="container absolute top-20 left-0 grid grid-cols-6 gap-1">
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
                                                                            <h1 className="text-xs">C-202400001</h1>
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
                                                                    </div>

                                                                    <h2 className="flex justify-center items-center">TITLE</h2>
                                                                    <h3>SUBTITLE</h3>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                                                    </p>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                                                    </p>
                                                                    {/* <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                                                    </p>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                                                    </p> */}
                                                                    {/* </section> */}
                                                                {/* </div> */}
                                                        {/* </div> */}
                                                    </div>
                                                </form>
                                            </TabPanel>
                                        </TabsBody>
                                    </Tabs>
                                </CardBody>
                            </Card>
                        </div>
                    {/* </div> */}
                {/* </div> */}
             {/* </div> */}
        </Layout>
    </>
  );
}

export default CheckoutForm
