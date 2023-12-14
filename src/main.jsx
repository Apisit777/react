import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ContextProvider } from "./contexts/ContextProvider";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ContextProvider>
            <RouterProvider router={router} />
        </ContextProvider>
    </LocalizationProvider>
    // </React.StrictMode>
    ,
)
