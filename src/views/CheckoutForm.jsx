import React from "react";
import * as Reacta from "react";
import { useState, useEffect, useRef } from 'react'
import axios from 'axios';
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
import { DebtClosingDetails } from '../components/DebtClosingDetails';
import { PreliminaryCalculation } from '../components/PreliminaryCalculation';
import { ApplicationToJoin } from '../components/ApplicationToJoin';
import { useReactToPrint } from "react-to-print";
// import PrintIcon from '@mui/icons-material/PrintIcon';

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

    const [typePrint, setTypePrint] = useState("card");
    const [dataDataLoanDebts, setDataLoanDebts] = useState([])

    const actionSelect = async (id, name) => {
        try {
            if(id !== "" && name !== "") {
                const response = await axios.get(`http://localhost:8000/api/get_code?code=${id}`)
                if (response.status === 200) {
                    console.log('dataDataLoanDebts', response)
                    setDataLoanDebts(response.data)
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    const printRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => printRef.current
    });

    return (
        <>
            <Layout>
                <div className="flex justify-center items-center 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm pl-8 pr-8 pt-24">
                    <Card className="w-full max-w-[320rem] bg-white dark:bg-[#202020] shadow-md shadow-[#202020] dark:shadow-blue-500 duration-500">
                        <CardHeader
                            color="gray"
                            floated={false}
                            shadow={false}
                            className="m-0 grid place-items-center px-4 py-8 text-center"
                        >
                            {/* <div className="mb-4 h-20 p-6 text-black dark:text-white">
                                {type === "card" ? (
                                    <CreditCardIcon className="h-10 w-10 text-black dark:text-white" />
                                ) : (
                                    <img alt="paypal " className="w-14 text-black dark:text-white" src="https://docs.material-tailwind.com/icons/paypall.png" />
                                )}
                            </div> */}
                        <Typography variant="" color="white" className="text-xl font-semibold text-black dark:text-white">
                            ฟอร์มปริ้นเอกสารลูกค้า
                        </Typography>
                        </CardHeader>
                        <CardBody>
                            {/* justify-self-start */}
                            <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 pt-1 text-2xl'>
                                <div className="pb-1">
                                    <div className="justify-self-center text-2xl">
                                        <div className="justify-self-center boxtitle text-black dark:text-white">
                                            <p className="text-2xl">ค้นหารหัสลูกค้า</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="w-4/6">
                                            <input type="text" onChange={(event) => actionSelect(event.target.value)}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="pb-1">
                                    <div className="justify-self-center text-2xl">
                                            <div className="justify-self-center boxtitle text-black dark:text-white">
                                                <p className="text-2xl">ปริ้นเอกสาร</p>
                                            </div>
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
                                </div>
                            </div>
                            {/* <div ref={printRef}>aaaaaaaaaaaaaaaaaaaaa</div> */}
                            <ul className="pt-5 space-y-2 border-t border-black dark:border-blue-500"/>
                            {/* <ul className="m-6 space-y-2 border-t border-black dark:border-blue-500"/> */}
                            {/* <Tabs value={type} className="overflow-visible"> */}
                            <Tabs value={typePrint} className="overflow-visible">
                                <TabsHeader className="relative z-0">
                                    <Tab value="card" onClick={() => setType("card")} className="text-black dark:text-[#817d7d]">
                                        รายละเอียดการปิดภาระหนี้
                                    </Tab>
                                    <Tab value="paypal" onClick={() => setType("paypal")} className="text-black dark:text-[#817d7d]">
                                        บันทึกปิดภาระหนี้
                                    </Tab>
                                    <Tab value="test_page" onClick={() => setType("test_page")} className="text-black dark:text-[#817d7d]">
                                        Test Page 3
                                    </Tab>
                                    <Tab value="" onClick={() => setType("")} className="text-black dark:text-[#817d7d]">
                                        4
                                    </Tab>
                                    {/* <Tab value="" onClick={() => setType("")} className="text-black dark:text-[#817d7d]">
                                        5
                                    </Tab>
                                    <Tab value="" onClick={() => setType("")} className="text-black dark:text-[#817d7d]">
                                        6
                                    </Tab> */}
                                </TabsHeader>
                                <TabsBody
                                    className="!overflow-x-hidden !overflow-y-visible"
                                    animate={{
                                    initial: {
                                        x: typePrint === "card" ? 400 : -400,
                                    },
                                    mount: {
                                        x: 0,
                                    },
                                    unmount: {
                                        x: typePrint === "card" ? 400 : -400,
                                    },
                                    }}
                                >
                                    <TabPanel value="card" className="p-0">
                                        <DebtClosingDetails ref={printRef} dataDataLoanDebts={dataDataLoanDebts} />
                                    </TabPanel>
                                    <TabPanel value="paypal" className="p-0">
                                        <PreliminaryCalculation ref={printRef} dataDataLoanDebts={dataDataLoanDebts} />
                                    </TabPanel>
                                    <TabPanel value="test_page" className="p-0">
                                        <ApplicationToJoin ref={printRef} dataDataLoanDebts={dataDataLoanDebts} />
                                    </TabPanel>
                                </TabsBody>
                            </Tabs>
                        </CardBody>
                    </Card>
                </div>
            </Layout>
        </>
    );
}

export default CheckoutForm
