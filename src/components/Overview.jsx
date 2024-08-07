// import React from 'react'

// import { data } from "autoprefixer"
import { useEffect, useState } from "react"

const Overview = () => {
   
  const [transactions, setTransactions] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3005/transactions")
    .then(res => res.json())
    .then((transactions) => setTransactions(transactions))
  },[])

   
  return (
    <>    
    <div className='text-red-50  flex  justify-center  '>
<table className='text-center border-separate border-spacing-x-40 border-spacing-y-9 '>        
    <thead className=' text-red-600 text-2xl'>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>

        _{transactions.map((transaction)=>
          <>
            <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
                <td>
              <button 
                className='bg-red-500 hover:bg-yellow-600 transition duration-[0.7s] ease-in-out text-white font-bold py-2 px-4 rounded'
                onClick={() => console.log('Delete clicked')}
              >
                Delete
              </button>
            </td>
            </tr>
            </>
            )}
        </tbody>
     </table>
    </div>
    </>

  )
}

export default Overview
