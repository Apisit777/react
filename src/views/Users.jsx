import { useState, useEffect } from "react";
import { NumericFormat } from 'react-number-format';
import Layout from '../views/Layout';
import { useStateContext } from "../contexts/ContextProvider";
import axios from 'axios';

export default function Users() {

    const [dataPGusers, setDataPGusers] = useState([])

    useEffect(() => {
        async function resApi() {
            try {
                const response = await axios.get("http://localhost:8000/api/users")
                if (response.status === 200) {
                    setDataPGusers(response.data)
                }
                console.log("response", response)
            } catch (error) {
                console.log(error)
            }
        }
        resApi()
    }, [])

    const {user, token} = useStateContext()

    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [number3, setNumber3] = useState("");

    const [total, setTotal] = useState( number1 + number2 + number3);

    // const addTotal = ()=> {
    //     setTotal( number1 + number2 + number3);
    // }

    const plusNumber = (data, index)=> {
        if (index == 1) {
            setTotal( Number(data) + Number(number2) + Number(number3) );
        } else if(index == 2) {
            setTotal( Number(data) + Number(number1) + Number(number3) );
        } else if(index == 3) {
            setTotal( Number(data) + Number(number1) + Number(number2) );
        }
    }

    //  ค่างวดผ่อนต่อเดือน
    const [totalMultiplyNumber, setMultiplyNumber] = useState("");

    const resultMultiPlyNumber = (data, index)=> {
      if (index == 1 || index == 2 || index == 3) {
          setMultiplyNumber( data * 0.05 );
      }
    }

    // รายได้สุทธิ
    const [netIncome, setNetIncome] = useState("");
    const [totalNetIncome, setTotalNetIncome] = useState("");

    const resultNetIncome = (data, index)=> {
        if (index == 1) {
            setTotalNetIncome(parseInt( data * 0.7 ) / 7000 * 1000000);
        }
    }

    // ดอกเบี้ยของเดิม
    const [totalOriginalInterest, setOriginalInterest] = useState("");

    const originalInterest = (data, index)=> {
        if (index == 1) {
            setOriginalInterest( (Number(data) * 0.1834 ) / 12);
        }
    }

    // ฐานเงินเดือน
    const [baseSalary, setBaseSalary] = useState("");
    // const [totalResultBaseSalary, setTotalResultBaseSalary] = useState("");

    const resultBaseSalary = (data, index)=> {
        if (index == 1) {
            console.log("data", data);
            setBaseSalary(data);
        }
    }
    // console.log("baseSalary", baseSalary);

    return (
        <>
            <Layout>
                <div className='min-h-screen w-full justify-center items-center pl-8 pr-8 text-xl font-semibold'>
                    <div className='min-h-screen flex justify-center items-center pt-24'>
                        <div className="form justify-center items-center bg-white dark:bg-[#202020] shadow-md shadow-[#202020] dark:shadow-blue-500 duration-500">
                            <div className="flex justify-center items-center 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm">
                                <h2 className="inline-block space-y-2 border-b border-black dark:border-blue-500">ประมาณการผ่อนโปรแกรม OPM</h2>
                            </div>
                            <div className="grid grid-rows-3 grid-flow-col gap-4 mt-5 pb-5">
                                <input className="row-span-1 col-span-3 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder="สินเชื่อส่วนบุคคล(20-28%)" readOnly />
                                <input className="row-span-1 col-span-3 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder="บัตรกดเงินสด(20-28%)" readOnly />
                                <input className="row-span-1 col-span-3 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder="บัตรกด(16-20%)" readOnly />
                                <input className="row-span-1 col-span-3 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder="สินเชื่อ OD (6-10%)" readOnly />
                                <input className="row-span-1 col-span-3 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder="สินเชื่อส่วนบุคคล(4-10%)" readOnly />
                                <input className="row-span-1 col-span-3 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder="สินเชื่อส่วนบุคคล(0-3%)" readOnly />
                                <input className="row-span-3 col-span-2 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500 text-xl" placeholder="ผ่อนเดิมของลูกค้า" readOnly />
                                <input className="row-span-3 col-span-2 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500 text-xl" placeholder="OPM : 3" readOnly />
                            </div>
                            <div className="grid grid-rows-3 grid-flow-col gap-4 mt-5">
                                <label className="row-span-1 col-span-1 m-0 p-0 text-center dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">% ดอกเบี้ย ..............</label>
                                <label className="row-span-1 col-span-1 m-0 p-0 text-center dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">ภาระหนี้</label>
                                <label className="row-span-1 col-span-1 m-0 p-0 text-center dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">จำนวนเดือน</label>
                                <input className="row-span-1 col-span-6 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder="20.00%" readOnly />
                                <input value={total.toLocaleString()}  onChange={e => {
                                            originalInterest(e.target.value, 1)
                                        }}
                                        readOnly
                                        className="row-span-1 col-span-6 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder=""
                                />
                                {/* className="row-span-1 col-span-6 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder="" /> */}
                                <input className="row-span-1 col-span-6 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder="60 เดือน" readOnly />
                                <input className="row-span-1 col-span-3 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder="18.34%" readOnly />
                                <input className="row-span-1 col-span-3 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder="" />
                                <input className="row-span-1 col-span-3 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder="60 เดือน" readOnly />
                                <input className="row-span-1 col-span-3 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder="โอนดอกเบี้ยเดิม" readOnly />
                                <input className="row-span-1 col-span-3 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder="" />
                                <input className="row-span-1 col-span-3 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder="60 เดือน" readOnly />
                            </div>
                            <div className="grid grid-rows-3 grid-flow-col gap-4 mt-5">
                                <label className="row-span-1 col-span-1 m-0 p-0 text-center dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">ค่างวดผ่อนต่อเดือน</label>
                                <label className="row-span-1 col-span-1 m-0 p-0 text-center dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">ค่างวดผ่อน(ทั้งหมด)</label>
                                <label className="row-span-1 col-span-1 m-0 p-0 text-center dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">ดอกเบี้ย(ทั้งหมด)</label>
                                <input
                                       defaultValue={totalMultiplyNumber.toLocaleString()}
                                       readOnly
                                       className="row-span-1 col-span-6 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder=""
                                />
                                <input className="row-span-1 col-span-6 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder="" />
                                <input className="row-span-1 col-span-6 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder="" />
                                <input className="row-span-1 col-span-3 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder="" />
                                <input className="row-span-1 col-span-3 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder="" />
                                <input className="row-span-1 col-span-3 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder="" />
                                <input className="row-span-1 col-span-3 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder="" />
                                <input className="row-span-1 col-span-3 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder="" />
                                <input className="row-span-1 col-span-3 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" placeholder="" />
                            </div>
                            <div className="grid grid-rows-3 grid-flow-col gap-4 mt-5 pb-10">
                                <div className="col-span-2 dark:text-white rounded-sm dark:bg-[#303030]"></div>
                                <label className="row-span-3 col-span-1 m-0 p-0 dark:text-white rounded-sm text-sm dark:bg-[#303030] text-center grid content-center justify-items-stretch">ค่าพัฒนาทรัพย์</label>
                                <input className="row-span-3 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500 text-xl" placeholder="" readOnly />
                                <div className="col-span-2 dark:text-white rounded-sm dark:bg-[#303030]"></div>
                            </div>
                            <ul className="pt-4 space-y-2 border-t border-black dark:border-blue-500"/>
                            <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 mt-5 mb-5 dark:text-white">
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                    className="peer h-full w-full rounded-sm border border-blue-gray-200 border-t-transparent bg-transparent px-2 py-3 font-sans text-sm sm:text-xs font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 dark:bg-[#303030] text-center"
                                    // placeHolder=" "
                                    />
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5
                                                          before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-sm after:border-t after:border-r
                                                          after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500
                                                          peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500
                                    ">
                                        ชื่อ
                                    </label>
                                </div>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                    className="peer h-full w-full rounded-sm border border-blue-gray-200 border-t-transparent bg-transparent px-2 py-3 font-sans text-sm sm:text-xs font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 dark:bg-[#303030] text-center"
                                    // placeHolder=" "
                                    />
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5
                                                          before:w-2.5 before:rounded-tl-sm before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-sm after:border-t after:border-r
                                                          after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500
                                                          peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500
                                    ">
                                        รหัสลูกค้า
                                    </label>
                                </div>
                            </div>
                            {/* <input className="border border-red-500 focus:border-blue-500 dark:bg-[#303030] text-center"></input> */}
                            <div className="grid grid-cols-5 grid-rows-3 mt-5 gap-4">
                                <label className="m-0 p-0 dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">อายุ ..........</label>
                                <input className="col-span-1 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" />
                                {/* Hidden */}
                                <label className="col-span-2 m-0 p-0 dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">ฐานเงินเดือน</label>
                                <input value={baseSalary} onChange={e => {
                                        setBaseSalary(e.target.value)
                                        resultBaseSalary(e.target.value, 1)
                                       }}
                                       className="col-span-1 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" />

                                <label className="m-0 p-0 dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">รายได้สุทธิ</label>
                                <input value={netIncome} onChange={e => {
                                            setNetIncome(e.target.value)
                                            resultNetIncome(e.target.value, 1)
                                        }}
                                        id=""
                                        type="number"
                                        className="col-span-1 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" />
                                {/* Hidden */}
                                <label className="col-span-2 m-0 p-0 dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">Other</label>
                                <input className="col-span-1 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" />

                                <label className="m-0 p-0 dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">ภาระหนี้สินเชื้อ</label>
                                <input value={number1}  onChange={e => {
                                            setNumber1(e.target.value)
                                            plusNumber(e.target.value, 1)
                                            resultMultiPlyNumber(e.target.value, 1)
                                            originalInterest(e.target.value, 1)
                                        }}
                                        id=""
                                        type="number"
                                        className="col-span-1 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" />
                                {/* Hidden */}
                                <label className="col-span-2 m-0 p-0 dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">สัญญา</label>
                                <input className="col-span-1 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" />

                                <label className="m-0 p-0 dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">ภาระหนี้รถยนต์(ไม่รี)</label>
                                <input value={number2} onChange={e => {
                                            setNumber2(e.target.value)
                                            plusNumber(e.target.value, 2)
                                            resultMultiPlyNumber(e.target.value, 2)
                                        }}
                                        id=""
                                        type="number"
                                        className="col-span-1 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" />
                                {/* Hidden */}
                                <label className="col-span-2 m-0 p-0 dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">Dept</label>
                                <input className="col-span-1 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" />

                                <label className="m-0 p-0 dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">ภาระหนี้รถยนต์(รี)</label>
                                <input value={number3} onChange={e => {
                                        setNumber3(e.target.value)
                                        plusNumber(e.target.value, 3)
                                        resultMultiPlyNumber(e.target.value, 3)
                                       }}
                                        id=""
                                        type="number"
                                        className="col-span-1 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500"
                                />
                                {/* Hidden */}
                                <label className="col-span-2 m-0 p-0 dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">ผลตอบแทน</label>

                                {/* <input value={number3} onChange={e => {
                                        setNumber3(e.target.value)
                                        plusNumber(e.target.value, 3)
                                       }}
                                        id=""
                                        type="number"
                                        className="col-span-1 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500"
                                /> */}

                                <input value={baseSalary <= 30000 && number1 > 600000 ? '4%' : '5%'}
                                       id=""
                                       type="text"
                                       readOnly
                                       className="col-span-1 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500"
                                />

                                <label className="m-0 p-0 dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">ภาระหนี้ที่ไม่ปิด</label>
                                <input className="col-span-1 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" />
                                {/* Hidden */}
                                <label className="col-span-2 m-0 p-0 dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">ภาระหนี้เดิมคิดเป็น</label>
                                <input className="col-span-1 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" />

                                <label className="m-0 p-0 dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">เงินต้นของเดิม</label>
                                <input className="col-span-1 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" />
                                {/* Hidden */}
                                <label className="col-span-2 m-0 p-0 dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">อนุมัติปิด 20 เท่า</label>
                                <input className="col-span-1 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" />

                                <label className="m-0 p-0 dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">ดอกเบี้ยของเดิม</label>
                                <input defaultValue={totalOriginalInterest.toLocaleString()}
                                       readOnly
                                       className="col-span-1 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" />
                                {/* Hidden */}
                                <label className="col-span-2 m-0 p-0 dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">ภาระหนี้เกิน</label>
                                <input className="col-span-1 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" />

                                <label className="m-0 p-0 dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">ยอดผ่านของเดิม</label>
                                <input className="col-span-1 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" />
                                {/* Hidden */}
                                <label className="col-span-3 m-0 p-0"></label>

                                <label className="m-0 p-0 dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">ภาระหนี้รวม</label>
                                <input defaultValue={total.toLocaleString()}
                                       readOnly
                                       className="col-span-1 m-0 p-0 text-[#df3434] rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" />
                                {/* Hidden */}
                                <label className="col-span-2 m-0 p-0 dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">พรีวงเงินที่สามารถกู้ได้</label>
                                <input value={totalNetIncome.toLocaleString()}
                                    id=""
                                    type="text"
                                    readOnly
                                    className="col-span-1 m-0 p-0 text-[#df3434] rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" />
                            </div>
                            <ul className="pt-4 space-y-2 border-t border-black dark:border-blue-500 mt-5 mb-5"/>
                            <div className="grid grid-cols-5 grid-rows-3 mt-5 gap-4">
                                <label className="m-0 p-0 dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">จำนวนห้องที่กู้ได้</label>
                                <input className="col-span-1 m-0 p-0 text-[#df3434] rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" />
                                {/* Hidden */}
                                <label className="col-span-2 m-0 p-0 dark:text-white rounded-sm text-sm text-center grid content-center justify-items-stretch">จำนวนห้องที่กู้ได้</label>
                                <input className="col-span-1 m-0 p-0 dark:text-white rounded-sm dark:bg-[#303030] text-center focus:border-blue-500" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pl-6 pr-6'>
                    <div className='flex justify-center items-end mt-5 pb-5'>
                        <div className="form bg-white dark:bg-[#202020] text-black dark:text-white shadow-md shadow-[#202020] dark:shadow-red-500 duration-500">
                                {/* <div className="flex justify-center items-center title check 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm">
                                    <h2>ประมาณการผ่อนโปรแกรม OPM</h2>
                                </div>
                                <div className="title check 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm">
                                    <h2>ประมาณการ1</h2>
                                </div>
                                <div className='grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 mt-10 mb-10 border-4 border-dashed border-black dark:border-gray-200 rounded-lg h-full'>
                                    <div className="flex justify-center items-center dark:text-white">
                                        <div className="relative h-11 w-full min-w-[200px]">
                                            <input
                                                type="email"
                                                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                placeholder=" "
                                            />
                                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                Email
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center dark:text-white">
                                        <div className="relative h-11 w-full min-w-[200px]">
                                            <input
                                                type="email"
                                                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                placeholder=" "
                                            />
                                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                Email
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center dark:text-white">
                                        <div className="relative h-11 w-full min-w-[200px]">
                                            <input
                                                type="email"
                                                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                placeholder=" "
                                            />
                                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                Email
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center dark:text-white">
                                        <div className="relative h-11 w-full min-w-[200px]">
                                            <input
                                                type="email"
                                                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                placeholder=" "
                                            />
                                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                Email
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center dark:text-white">
                                        <div className="relative h-11 w-full min-w-[200px]">
                                            <input
                                                type="email"
                                                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                placeholder=" "
                                            />
                                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                Email
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center dark:text-white">
                                        <div className="relative h-11 w-full min-w-[200px]">
                                            <input
                                                type="email"
                                                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                placeholder=" "
                                            />
                                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                Email
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="container py-10 px-10 mx-0 min-w-full grid place-items-center">
                                  <button
                                      className="block w-4/6 content-center select-none rounded-lg bg-[#3061AF] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                      type="button"
                                      data-ripple-light="true"
                                  >
                                      Register
                                  </button>
                                </div>
                                <ul className="pt-4 mt-10 space-y-2 border-t border-black dark:border-red-500 mb-5"/> */}

                                {/* <div className="flex justify-center items-center title check 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm">
                                    <h2>ประมาณการผ่อนโปรแกรม OPM</h2>
                                </div> */}

                                <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 mt-10 mb-10'>
                                    {/* <div className="flex justify-center items-center dark:text-white">
                                        <div className="mb-4 md:flex md:justify-between">
                                            <div className="">
                                                <label className="block mb-2 text-sm font-bold" htmlFor="lastName">
                                                    ภาระหนี้สินเชื้อ
                                                </label>
                                                <input value={number1}  onChange={e => {
                                                        setNumber1(e.target.value)
                                                        plusNumber(e.target.value, 1)
                                                    }}
                                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="lastName"
                                                    type="number"
                                                    placeholder="ภาระหนี้สินเชื้อ"
                                                />
                                            </div>
                                            <div className="md:ml-2">
                                                <label className="block mb-2 text-sm font-bold" htmlFor="lastName">
                                                    ภาระหนี้รถยนต์(ไม่รี)
                                                </label>
                                                <input value={number2} onChange={e => {
                                                setNumber2(e.target.value)
                                                plusNumber(e.target.value, 2)
                                                }}
                                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="lastName"
                                                    type="number"
                                                    placeholder="ภาระหนี้รถยนต์(ไม่รี)"
                                                />
                                            </div>
                                            <div className="md:ml-2">
                                                <label className="block mb-2 text-sm font-bold" htmlFor="lastName">
                                                    ภาระหนี้รถยนต์(รี)
                                                </label>
                                                <input value={number3} onChange={e => {
                                                    setNumber3(e.target.value)
                                                    plusNumber(e.target.value, 3)
                                                }}
                                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="lastName"
                                                    type="number"
                                                    placeholder="ภาระหนี้รถยนต์(รี)"
                                                />
                                            </div>
                                        </div>
                                    </div> */}

                                    <ul>
                                        {dataPGusers.map((dataPGuser, i) => (
                                            <li key={i}>
                                                {"ID" + ":" + dataPGuser.id + " "}
                                                {"รหัสพนักงาน" + ":" + dataPGuser.user_code + " "}
                                                {"ชื่อพนักงาน" + ":" + dataPGuser.user_name + " "}
                                                {"Position" + ":" + dataPGuser.position + " "}
                                                {"Status" + ":" + dataPGuser.status + " "}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex justify-center items-center dark:text-[#ff0000]">
                                        <div className="mb-4 md:flex md:justify-between">
                                            <div className="">
                                                <label className="block mb-2 text-sm font-bold" htmlFor="lastName">
                                                    ภาระหนี้รวม
                                                </label>
                                                {/* <input type="text" className="place-items-center dark:text-white rounded-lg bg-[#bbb7b7] dark:bg-[#303030] text-center" defaultValue={total} allowLeadingZeros thousandSeparator="," readOnly /> */}
                                                <input type="number" className="place-items-center dark:text-white rounded-lg bg-[#ff0000] dark:bg-[#303030] text-center" defaultValue={total} readOnly />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="flex justify-center items-center dark:text-white">
                                        <div className="mb-4 md:flex md:justify-between">
                                            <div className="">
                                                <label className="block mb-2 text-sm font-bold" htmlFor="lastName">
                                                    a
                                                </label>
                                                <NumericFormat type="text" defaultValue={formattedNumber} />
                                                    <input  type="text" className="place-items-center dark:text-white rounded-lg bg-[#bbb7b7] dark:bg-[#303030] text-center" defaultValue={formattedNumber} readOnly />
                                                    <NumericFormat className="place-items-center dark:text-white rounded-lg bg-[#bbb7b7] dark:bg-[#303030]" defaultValue="280000" allowLeadingZeros thousandSeparator="," readOnly/>

                                            </div>
                                        </div>
                                    </div> */}

                                    {/* <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold" htmlFor="lastName">
                                            รายได้สุทธิ
                                        </label>
                                        <input value={netIncome} onChange={e => {
                                            setNetIncome(e.target.value)
                                            resultNetIncome(e.target.value, 1)
                                        }}
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="lastName"
                                            type="number"
                                            placeholder="รายได้สุทธิ"
                                        />
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold" htmlFor="lastName">
                                            พรีวงเงินที่สามารถกู้ได้
                                        </label>
                                        <input value={totalNetIncome.toLocaleString()}
                                            className="place-items-center dark:text-white rounded-lg bg-[#bbb7b7] dark:bg-[#303030] text-center"
                                            id="lastName"
                                            type="text"
                                            readOnly
                                        />
                                    </div> */}
                                </div>
                                <div className="container py-10 px-10 mx-0 min-w-full grid place-items-center">
                                    <button
                                        className="block w-4/6 content-center select-none rounded-lg bg-[#3061AF] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                        data-ripple-light="true"
                                    >
                                        Register
                                    </button>
                                </div>
                                <ul className="pt-4 mt-10 space-y-2 border-t border-black dark:border-red-500 mb-5"/>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
