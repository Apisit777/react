import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Layout from '../views/Layout';
// import { useRef } from "react";
// import { Line } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


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

    return (
      <Layout>
          <div className='pt-[70px] pl-[255px]'>
            Dashboard
            <div className="flex flex-wrap items-center justify-center mt-10">
                <Doughnut
                    data={{
                      // loan_debt_code, code
                        labels: ['Red', 'Black',],
                        datasets: [
                            {
                                label: '# of Votes',
                                data: [30, 70,],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(0, 0, 0, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(0, 0, 0, 1)',
                                ],
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
                {/* <Line
                    ref={chartRef}
                    data={chartData}
                    width={100}
                    height={200}
                    options={{ maintainAspectRatio: false }}
                /> */}
            </div>
            {/* <div data-te-animation-init="" data-te-animation-start="onHover" data-te-animation-reset="true" data-te-animation="[fade-in-down_1s_ease-in-out]" className="mt-10 m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600 items-center justify-center">
                fadeInDown
            </div> */}
        </div>
        </Layout>
    )
}
