import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import router from './router'
import { ContextProvider } from "./contexts/ContextProvider";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ContextProvider>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            >
            </ToastContainer>
            <RouterProvider router={router} />
        </ContextProvider>
    </LocalizationProvider>
    // </React.StrictMode>
    ,
)
