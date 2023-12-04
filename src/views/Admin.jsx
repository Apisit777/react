import Layout from '../views/Layout';
import MUIDataTable from "mui-datatables";
import { useState, useEffect } from "react";
import axios from "axios";

// const columns = ["Nooo", "Eooo", "Cooo", "Eppp", "Aooo", "Qooo", "Rooo", "Xooo", "Yooo", "Zooo"]
// const data = [
//     ["Joe James", "Test Corp", "Yonkers", "NY", "Test", "Test", "Test", "Test", "Test", "Test"],
//     ["John Walsh", "Test Corp", "Hartford", "CT", "Test", "Test", "Test", "Test", "Test", "Test"],
//     ["Bob Herm", "Test Corp", "Tampa", "FL", "Test", "Test", "Test", "Test", "Test", "Test"],
//     ["James Houston", "Test Corp", "Dallas", "TX", "Test", "Test", "Test", "Test", "Test", "Test"],
// ]
const options = {
    filterType: 'checkbox',
}

export default function Admin() {

    const [loanDdebts, setLoanDebts] = useState([]);

    const endpoint = 'http://localhost:9999/api/loan_debts';

    const getData = async () => {
        await axios.get(endpoint).then((response) => {
            const data= response.data
            console.log(data)
            setLoanDebts(data)
        })
    }

    useEffect( ()=> {
        getData()
    }, [])

    const columns = [
        {
            name: "id",
            label: "Id"
        },
        {
            name: "loan_debt_code",
            label: "Loan debt code"
        },
        {
            name: "code",
            label: "Code"
        },
        {
            name: "name",
            label: "Name"
        },
        {
            name: "lastname",
            label: "Lastname"
        },
        {
            name: "data_entry_date",
            label: "Data entry date"
        },
        {
            name: "loan_type",
            label: "Loan type"
        },
        {
            name: "financial_institution",
            label: "Financial institution"
        },
        {
            name: "account_number",
            label: "Account number"
        }

    ]


    return (
        <>
            <Layout>
                <div className='min-h-screen w-full justify-center items-center pl-8 pr-8 text-xl font-semibold'>
                    <div className='min-h-screen flex justify-center pt-24'>
                        <MUIDataTable
                            title={"ภาระหนี้สินเชื่อ"}
                            data={loanDdebts}
                            columns={columns}
                            options={options}
                        />
                    </div>
                </div>
            </Layout>
        </>
    )

}
