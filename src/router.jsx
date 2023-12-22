import {Navigate, createBrowserRouter, redirect} from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Users from "./views/Users";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";
import Admin from "./views/Admin";
import CheckoutForm from "./views/CheckoutForm";
import Customer from "./views/Customer";
import CustomerModal from "./views/CustomerModal";
import SalaryCustomer from "./views/SalaryCustomer";
import SalaryCustomerModal from "./views/SalaryCustomerModal";
import LoanDebt from "./views/Admin";
import LoanDebtModal from "./views/LoanDebtModal";
import CarDebt from "./views/CarDebt";
import CarDebtModal from "./views/CarDebtModal";
import Opm from "./views/Opm";
import UsersModal from "./views/UsersModal";
import axios_1 from "axios"
axios_1.defaults.baseURL = 'http://localhost:8000/api/';
import { toast } from 'react-toastify';
import axios_2 from "axios"
axios_2.defaults.baseURL = 'http://localhost:8000/api/';

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
                children: [
                    {
                        path: '/admin/customer',
                        element: <Customer />,
                        loader: async () => {
                            const {data} = await axios_1.get('loan_debts');
                            return data;
                        },
                        children: [
                            {
                                path: 'create',
                                element: <CustomerModal />,
                                action: async ({ request, params }) => {
                                  const formData = await request.formData();
                                  formData.append('parent', params.id);
                                  await axios_1.post('/update_loan_debts', formData)
                                  return formData;
                                  // return redirect('/admin');
                                }
                            }
                        ]
                    },
                    {
                        path: '/admin/salarycustomer',
                        element: <SalaryCustomer />,
                        loader: async () => {
                            const {data} = await axios_1.get('loan_debts');
                            return data;
                        },
                        children: [
                            {
                                path: 'create',
                                element: <SalaryCustomerModal />,
                                action: async ({ request, params }) => {
                                  const formData = await request.formData();
                                  formData.append('parent', params.id);
                                  await axios_1.post('/update_loan_debts', formData)
                                  return formData;
                                  // return redirect('/admin');
                                }
                            }
                        ]
                    },
                    {
                        path: '/admin/loandebt',
                        element: <LoanDebt />,
                        loader: async () => {
                            const {data} = await axios_1.get('loan_debts');
                            return data;
                        },
                        children: [
                            {
                                path: 'create',
                                element: <LoanDebtModal />,
                                action: async ({ request, params }) => {
                                  // console.log("🚀 ~ file: router.jsx:59 ~ action: ~ params:", params)
                                  const formData = await request.formData();
                                  formData.append('parent', params.id);
                                  // await axios_1.post('/foods', formData)
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
                                  // return formData;
                                  return redirect('/admin');
                                }
                            },
                            {
                                path: ':id/edit',
                                element: <LoanDebtModal />,
                                loader: async ({ params }) => {
                                    const { data } = await axios_1.get(`/edit_loan_debts/${params.id}`);
                                    // console.log(Object.fromEntries(data));
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
                                    return data;
                                }
                            },
                            {
                                path: ':id/delete',
                                element: <LoanDebtModal />
                            },
                        ]
                    },
                    {
                        path: '/admin/cardebt',
                        element: <CarDebt />,
                        loader: async () => {
                            const {data} = await axios_1.get('loan_debts');
                            return data;
                        },
                        children: [
                            {
                                path: 'create',
                                element: <CarDebtModal />,
                                action: async ({ request, params }) => {
                                  const formData = await request.formData();
                                  formData.append('parent', params.id);
                                  await axios_1.post('/update_loan_debts', formData)
                                  return formData;
                                  // return redirect('/admin');
                                }
                            }
                        ]
                    }
                ]
            },
            {
                path: '/admin',
                element: <Admin />,
                loader: async () => {
                    // loader: async ({ params }) => {
                    const {data} = await axios_1.get('loan_debts');
                    // const { data } = await axios_1.get(`edit_loan_debts/${params.id}`);
                    return data;
                },
                children: [
                    {
                        path: 'create',
                        element: <LoanDebtModal />,
                        action: async ({ request, params }) => {
                          // console.log("🚀 ~ file: router.jsx:59 ~ action: ~ params:", params)
                          const formData = await request.formData();
                          formData.append('parent', params.id);
                          // await axios_1.post('/foods', formData)
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
                          return formData;
                          // return redirect('/admin');
                        }
                    },
                    {
                        path: ':id/edit',
                        element: <LoanDebtModal />,
                        loader: async ({ params }) => {
                            const { data } = await axios_1.get(`/edit_loan_debts/${params.id}`);
                            // console.log(Object.fromEntries(data));
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
                            return data;
                        }
                    },
                    {
                        path: ':id/delete',
                        element: <LoanDebtModal />
                    },
                ]
            },
            {
                path: '/opm',
                element: <Opm />,
                loader: async () => {
                    const {data} = await axios_2.get('users');
                    return data;
                },
                children: [
                    {
                        path: 'create',
                        element: <UsersModal />
                    },
                    {
                        path: ':id/edit',
                        element: <UsersModal />
                    },
                    {
                        path: ':id/delete',
                        element: <UsersModal />
                    },
                ]
            },
        ]
    },
    {
        path: '/sales',
        children: [
            {
                path: '/sales/aaa',
                element: <Users />
            },
            {
                path: '/sales/bbb',
                element: <Dashboard />
            }
        ]
    },
    {
      path: '/form',
      element: <CheckoutForm />
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
