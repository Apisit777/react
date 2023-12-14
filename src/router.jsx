import {Navigate, createBrowserRouter, redirect} from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Users from "./views/Users";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";
import Admin from "./views/Admin";
import LoanDebtModal from "./views/LoanDebtModal";
import Opm from "./views/Opm";
import UsersModal from "./views/UsersModal";
import axios_1 from "axios"
axios_1.defaults.baseURL = 'http://localhost:8000/api/';
import { toast } from 'react-toastify';
// import axios_2 from "axios"
// axios_2.defaults.baseURL = 'http://localhost:9999/api/users';
// import axiosClient from "./axios-client";

// const axiosClient = axios_1.create({
//   baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
// })
// const notify = () => {

// }

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to={"/users"} />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/admin',
                element: <Admin />,
                loader: async () => {
                    const {data} = await axios_1.get('loan_debts');
                    return data;
                },
                children: [
                    {
                        path: 'create',
                        element: <LoanDebtModal />,
                        action: async ({ request, params }) => {
                          const formData = await request.formData();
                          formData.append('parent', params.id);
                          // await axios_1.post('/foods', formData)
                          // console.log(Object.fromEntries(formData));
                          await axios_1.post('/update_loan_debts', formData)
                          toast.error('Username or Password', {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                          });
                          return redirect('/admin');
                        }
                    },
                    {
                        path: ':id/edit',
                        element: <LoanDebtModal />
                    },
                    {
                        path: ':id/delete',
                        element: <LoanDebtModal />
                    },
                ]
            },
            // {
            //     path: '/opm',
            //     element: <Opm />,
            //     loader: async () => {
            //         const {data} = await axios_2.get('');
            //         return data;
            //     },
            //     children: [
            //         {
            //             path: 'create',
            //             element: <UsersModal />
            //         },
            //         {
            //             path: ':id/edit',
            //             element: <UsersModal />
            //         },
            //         {
            //             path: ':id/delete',
            //             element: <UsersModal />
            //         },
            //     ]
            // },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]

    },
    {
        path: '*',
        element: <NotFound />
    },
])

export default router;
