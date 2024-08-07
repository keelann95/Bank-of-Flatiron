// import React from 'react'
import { useState } from "react";

const Submit = () => {

  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = (e)=> {
    e.preventDefault();

    fetch("http://localhost:3005/transactions", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      }, 
      body: JSON.stringify(formData),
    })
    .then((res) => res.json())
    .then((transaction)=> setFormData({transaction, ...formData}))
    setFormData({ date: "", description: "", category: "", amount: "" });

  }
 

  return (<>
 <div className="max-w-87  mt-10">
      <form onSubmit={handleSubmit} className="bg-yellow-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-red-500 text-sm font-bold mb-2" htmlFor="date">
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div >
          <label className="block  text-red-500 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Transaction description"
           
            required
          />
        </div>
        <div className="mb-4">
          <label className="block  text-red-500 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Transaction category"
            
            required
          />
        </div>
        <div className="mb-6">
          <label className="block  text-red-500 text-sm font-bold mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="amount"
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Transaction amount"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-yellow-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit Transaction
          </button>
        </div>
      </form>
    </div>
  </>
  )
}
export default Submit
