import React, { useEffect,useState } from 'react'
import { NavbarLogout } from './NavbarLogout'
import { LeftNavbar } from './LeftNavbar'
import './dashboard.css'
import './AccountStatement.css'
import { useLocation } from 'react-router-dom';
import axios from 'axios';


export const AccountStatement = () => {
  const location = useLocation()
  const userID = location.state.userid
  const accountNo = location.state.accountno
  const [fromDate, setFromDate] = useState("1947-08-15")
  const [toDate, setToDate] = useState(date)
  const [transactions, setTransactions] = useState([])
  const [transactionCount, setTransactionCount] = useState(5)
  const [totalNoOfTransactions, setTotalNoOfTransactions] = useState(0)
  const today = new Date()
  var date ;
  if(today.getMonth() + 1 <=9)
  {
    date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-' + today.getDate();
  }
  else{
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  }
  
  useEffect(()=>{
    axios.get(`http://localhost:8081/transactions/${accountNo}/totalcount`).then(response=>{
    setTotalNoOfTransactions(response.data)
    })
    .catch(error=>{
      console.error('Error fetching data:',error)
    })
  },[])

  useEffect(()=>{
    axios.get(`http://localhost:8081/transactions/${accountNo}/between-dates?from_date=${fromDate}&to_date=${toDate}`)
    .then(response=>{
      setTransactions(response.data)
    })
    .catch(error=>{
      console.error('Error fetching data: ',error)
    })
  },[fromDate,toDate])

  useEffect(()=>{
    axios.get(`http://localhost:8081/transactions/${accountNo}?n=${transactionCount}`)
    .then(response=>{
      // console.log('hello')
      setTransactions(response.data)
      // console.log(response.data)
    })
    .catch(error=>{
      console.error('Error fetching data: ',error)
    })
  },[transactionCount])
  

  function handleFromDate(event){
    setFromDate(event.target.value)
  }

  function handleToDate(event){
    setToDate(event.target.value)
  }
  // console.log(fromDate)
  // console.log(toDate)

  function handleTransactionCount(event){
    setTransactionCount(event.target.value)
  }

  

    return(
        <div className="app">
        <header className="header"><NavbarLogout></NavbarLogout></header>
        <div className="container">
          <div className="sidebar"><LeftNavbar state={{userid:userID, accountno:accountNo}}/></div>
          <main className="content">
            <div>
            <div>
            <h3>Account Statement</h3>
            </div>
            <div>
              <div className="form-container">
                <div className='form-row'>
                  <label for="from">From:  </label>
                  <input type='date' id="from" onChange={handleFromDate}/>
                  <label for="to">To:  </label>
                  <input type='date' id="to" onChange={handleToDate}/>
                  <label htmlFor="nooftrans">Latest Transactions: </label>
                  <input type='number' id="nooftrans" onChange={handleTransactionCount}/>
                  <p>Total: {totalNoOfTransactions}</p>
                </div>
              </div>
            </div>
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
            {/* <div style={{justifyContent:'right'}}>
              <button onClick={handleTransaction}>Submit</button>
            </div> */}
            </div>
          </main>
        </div>
      </div>
    )
}