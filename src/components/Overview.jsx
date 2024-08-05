// import React from 'react'

const Overview = () => {
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
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
              <button 
                className='bg-red-500 hover:bg-yellow-600 transition duration-[0.7s] ease-in-out text-white font-bold py-2 px-4 rounded'
                onClick={() => console.log('Delete clicked')}
              >
                Delete
              </button>
            </td>
            </tr>
        </tbody>
     </table>
    </div>
    </>

  )
}

export default Overview
