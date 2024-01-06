import { useState, useEffect } from "react";
import {
    Chart as ChartJS,
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Layout from '../views/Layout';
import axios from 'axios';
import { Bar } from "react-chartjs-2";
import { BarChart } from '@mui/x-charts/BarChart';
// import { useRef } from "react";

ChartJS.register(
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

// const chartData = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)"
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)"
//       ],
//       borderWidth: 1
//     }
//   ]
// };

export default function Dashboard() {
    // const chartRef = useRef();

    // const [dataCustomerCode, setDataCustomerCode] = useState([]);
    const [dataCustomerCodeArray, setDataCustomerCodeArray] = useState([]);
    const [dataCustomerCodeItem, setDataCustomerCodeItem] = useState([]);
    const [dataColor, setColor] = useState([]);

    useEffect(() => {
        async function resApi() {
            try {
                const response = await axios.get("http://localhost:8000/api/customer_code")
                let dataArray = {
                    label: [],
                    data: [],
                    color: [],
                };
                if (response.status === 200) {
                    response.data.forEach(i => {
                        const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
                        dataArray.label.push(i.code)
                        dataArray.data.push(i.dataarray_code)
                        dataArray.color.push(color)
                    })
                    setDataCustomerCodeArray([...dataArray.label])
                    setDataCustomerCodeItem([...dataArray.data])
                    setColor([...dataArray.color])
                }
                // console.log("response", response.data)
            } catch (error) {
                console.log(error)
            }
        }
        resApi()
    }, [])

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'สรุปยอด Case ประจำเดือน',
                data: [3, 6, 9, 5, 12, 7, 10, 4, 3, 6, 5, 12,],
                backgroundColor: '#4942E4',
                borderWidth: 1,
            }
        ]
    }

    const ddata= {
        teamA:{
            jan:10,
            feb:10,
            mar:10,
        },
        teamB:{
            jan:10,
            feb:10,
            mar:10,
        },

    }

    const options = {

    }

    const barChartsParams = {
        xAxis: [
          {
            data: ['page A', 'page B', 'page C', 'page D', 'page E'],
            scaleType: 'band',
          },
        ],
        series: [
          { data: [2, 5, 3, 4, 1], stack: '1', label: 'Series x' },
          { data: [10, 3, 1, 2, 10], stack: '1', label: 'Series y' },
          { data: [10, 3, 1, 2, 10], stack: '1', label: 'Series z' },
        ],
        margin: { top: 10, right: 10 },
        height: 200,
        slotProps: {
          legend: {
            hidden: true,
          },
        },
      };

    return (
        <Layout>
            <div className='min-h-screen w-full justify-center items-center pl-8 pr-8 text-xl font-semibold'>
                <div className='min-h-screen flex justify-center pt-24 gap-4'>
                    <div className="form justify-center items-center bg-white dark:bg-[#ff0000] shadow-md shadow-[#202020] dark:shadow-blue-500 duration-500">
                        <div className="flex justify-center items-center">
                            <p className="inline-block space-y-2 border-b border-black dark:border-blue-500 text-md font-semibold">Dashboard</p>
                        </div>

                    </div>
                    <div className="form justify-center items-center bg-white dark:bg-[#26ff00] shadow-md shadow-[#202020] dark:shadow-blue-500 duration-500">
                        <div className="flex justify-center items-center">
                            <p className="inline-block space-y-2 border-b border-black dark:border-blue-500 text-md font-semibold">Dashboard</p>
                        </div>

                    </div>

                    <div className="form justify-center items-center bg-white dark:bg-[#f6ff00] shadow-md shadow-[#202020] dark:shadow-blue-500 duration-500">
                        <div className="flex justify-center items-center">
                            <p className="inline-block space-y-2 border-b border-black dark:border-blue-500 text-md font-semibold">Dashboard</p>
                        </div>
                    </div>
                </div>

                <div className='min-h-screen justify-center pt-12'>
                    <div className="form justify-center items-center bg-white dark:bg-[#313131] shadow-md shadow-[#202020] dark:shadow-blue-500 duration-500">
                        <div className="flex justify-center items-center">
                            <p className="inline-block space-y-2 border-b border-black dark:border-blue-500 text-md font-semibold">Dashboard</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-10">
                            <div>
                                <div className="flex justify-center items-center m-5">
                                    <p className="inline-block space-y-2 border-b border-black dark:border-blue-500 text-md font-semibold">Test 1</p>
                                </div>
                                <Doughnut
                                    height={250}
                                    width={450}
                                    data={{
                                        labels: [...dataCustomerCodeArray],
                                        datasets: [
                                            {
                                                // label: '# of Votes',
                                                data: [...dataCustomerCodeItem],

                                                backgroundColor: [...dataColor],
                                                borderWidth: 1,
                                            },
                                        ],
                                    }}
                                    options={{
                                        maintainAspectRatio: false,
                                        responsive: false,
                                        plugins: {
                                            legend: {
                                                display: true,
                                                position: 'right'
                                            }
                                        }
                                    }}
                                />
                                <ul className="m-4 space-y-2 border-t border-black dark:border-blue-500"/>
                            </div>
                            <div>
                                <div className="flex justify-center items-center m-5">
                                    <p className="inline-block space-y-2 border-b border-black dark:border-blue-500 text-md font-semibold">Test 2</p>
                                </div>
                                <Doughnut
                                    height={250}
                                    width={450}
                                    data={{
                                        labels: [...dataCustomerCodeArray],
                                        datasets: [
                                            {
                                                // label: '# of Votes',
                                                data: [...dataCustomerCodeItem],

                                                backgroundColor: [...dataColor],
                                                borderWidth: 1,
                                            },
                                        ],
                                    }}
                                    options={{
                                        maintainAspectRatio: false,
                                        responsive: false,
                                        plugins: {
                                            legend: {
                                                display: true,
                                                position: 'right'
                                            }
                                        }
                                    }}
                                />
                                <ul className="m-4 space-y-2 border-t border-black dark:border-blue-500"/>
                            </div>
                            <div>
                                <div className="flex justify-center items-center m-5">
                                    <p className="inline-block space-y-2 border-b border-black dark:border-blue-500 text-md font-semibold">Test 3</p>
                                </div>
                                <Doughnut
                                    height={250}
                                    width={450}
                                    data={{
                                        labels: [...dataCustomerCodeArray],
                                        datasets: [
                                            {
                                                // label: '# of Votes',
                                                data: [...dataCustomerCodeItem],

                                                backgroundColor: [...dataColor],
                                                borderWidth: 1,
                                            },
                                        ],
                                    }}
                                    options={{
                                        maintainAspectRatio: false,
                                        responsive: false,
                                        plugins: {
                                            legend: {
                                                display: true,
                                                position: 'right'
                                            }
                                        }
                                    }}
                                />
                                <ul className="m-4 space-y-2 border-t border-black dark:border-blue-500"/>
                            </div>
                            <div>
                                <div className="flex justify-center items-center m-5">
                                    <p className="inline-block space-y-2 border-b border-black dark:border-blue-500 text-md font-semibold">Test 4</p>
                                </div>
                                <Doughnut
                                    height={250}
                                    width={450}
                                    data={{
                                        labels: [...dataCustomerCodeArray],
                                        datasets: [
                                            {
                                                // label: '# of Votes',
                                                data: [...dataCustomerCodeItem],

                                                backgroundColor: [...dataColor],
                                                borderWidth: 1,
                                            },
                                        ],
                                    }}
                                    options={{
                                        maintainAspectRatio: false,
                                        responsive: false,
                                        plugins: {
                                            legend: {
                                                display: true,
                                                position: 'right'
                                            }
                                        }
                                    }}
                                />
                                <ul className="m-4 space-y-2 border-t border-black dark:border-blue-500"/>
                            </div>
                            <div>
                                <div className="flex justify-center items-center m-5">
                                    <p className="inline-block space-y-2 border-b border-black dark:border-blue-500 text-md font-semibold">Test 5</p>
                                </div>
                                <Bar
                                    height = {250}
                                    width = {450}
                                    data = {data}
                                    options = {options}
                                />
                                <ul className="m-4 space-y-2 border-t border-black dark:border-blue-500"/>
                            </div>
                            <div>
                                <div className="flex justify-center items-center m-5">
                                    <p className="inline-block space-y-2 border-b border-black dark:border-blue-500 text-md font-semibold">Test 6</p>
                                </div>
                                <Bar
                                    height = {250}
                                    width = {450}
                                    data = {data}
                                    options = {options}
                                />
                                <ul className="m-4 space-y-2 border-t border-black dark:border-blue-500"/>
                            </div>
                            <div>
                                <div className="flex justify-center items-center m-5">
                                    <p className="inline-block space-y-2 border-b border-black dark:border-blue-500 text-md font-semibold">Test 7</p>
                                </div>
                                <BarChart
                                    xAxis={[{ scaleType: 'band', data: ['jan', 'feb', 'mrch'] }]}
                                    series={[
                                        { data: [4, 3, 5], label: 'SALE TeamA' },
                                        { data: [1, 6, 3], label: 'SALE TeamAB' }
                                    ]}
                                    width={600}
                                    height={400}
                                />
                                <ul className="m-4 space-y-2 border-t border-black dark:border-blue-500"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}
