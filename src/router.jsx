import {Navigate, createBrowserRouter} from "react-router-dom";
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
axios_1.defaults.baseURL = 'http://localhost:9999/api/loan_debts';
// import axios_2 from "axios"
// axios_2.defaults.baseURL = 'http://localhost:9999/api/users';

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
                    const {data} = await axios_1.get('');
                    return data;
                },
                children: [
                    {
                        path: 'create',
                        element: <LoanDebtModal />
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
