// import React from 'react'

const SearchBar = () => {
  return (<>
    <div className='flex justify-end mt-3 space-x-1  pr-48'>
      <input type="text" placeholder='search transaction ' className=' rounded-lg  pr-9 pl-4 outline-none focus:ring-2 focus:ring-red-600 '   />
      <button className=' bg-red-100  items-center rounded-lg  pr-5 pl-3'>search</button>
    </div>
    </>
  )
}

export default SearchBar
