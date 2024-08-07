// import React from 'react'

// import { data } from "autoprefixer"
import { useEffect, useState } from "react"


const Overview = () => {

  const[search, setSearch] = useState('')

  const handleDelete = (id) =>{
    fetch(`https://bank-backend-livid.vercel.app/transactions/${id}`,{
      method:"DELETE",
    })
    .then(res => res.json())
    .then(()=>         setTransactions(transactions.filter(transaction=>transaction.id !== id))
  ).catch(error => {
    console.error(' Error:', error);
    
  })
  }
   
  const [transactions, setTransactions] = useState([])

  useEffect(()=>{
    fetch("https://bank-backend-livid.vercel.app/transactions")
    .then(res => res.json())
    .then((transactions) => setTransactions(transactions))
  },[transactions])

   
  return (
    <>    
    <div className='text-red-50    '>
    <div className=' flex justify-end p-4 pr-12 '>
          <input
            className=" text-yellow-950 pl-6 pr-24 rounded-2xl outline-none focus:outline-yellow-600"
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
<table className='text-center border-separate border-spacing-x-40 border-spacing-y-9   '>        
    <thead className=' text-red-600 text-2xl '>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>

        {transactions.filter((transaction)=>{
          return search.toLowerCase()==='' ? transaction : transaction.description.toLowerCase().includes(search)
        }).map((transaction)=>
          <>
            <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
                <td>
              <button 
                className='bg-red-500 hover:bg-yellow-600 transition duration-[0.7s] ease-in-out text-white font-bold py-2 px-4 rounded'
                onClick={() => handleDelete(transaction.id)}
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
