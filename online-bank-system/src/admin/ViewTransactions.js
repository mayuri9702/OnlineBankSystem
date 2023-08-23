import React, { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import AdminNavbar from './AdminNavbar'
import '../components/AccountStatement.css'


export const ViewTransactions = () => {
  const location = useLocation()
  const accountNo = location.state.accountno
  const [transactions, setTransactions] = useState([])

  
  useEffect(()=>{
    axios.get(`http://localhost:8081/transactions/${accountNo}`).then(response=>{
        setTransactions(response.data)
    })
    .catch(error=>{
      console.error('Error fetching data:',error)
    })
  },[])

    return(
        <div>
        <AdminNavbar></AdminNavbar>
          <center>
            <div>
            <div>
            <h3 style={{marginTop:20+'px'}}>Transactions</h3>
            </div>
            <div>
            <div>
              <table className='bordered-table'>
                <thead>
                  <tr>
                    <th>Transaction Id</th>
                    <th>To Account</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Mode</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map(transaction=>(
                    <tr>
                      <td>{transaction.transactionid}</td>
                      <td>{transaction.toaccno}</td>
                      <td>{transaction.amount}</td>
                      <td>{transaction.date}</td>
                      <td>{transaction.mode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            </div>
            </div>
          </center>
          </div>
       
    )
}