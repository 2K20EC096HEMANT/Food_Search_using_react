import React from 'react'

function Searchbar({search, setSearch, fetchFood}) {
  return (
    <div>
      <div className="input flex justify-center py-10">
        <input
          type="text"
          placeholder='Search your food'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='bg-gray-200 rounded-l-lg px-2 py-1.5 w-80 border-2 border-gray-400 outline-none' 
        />
        <button
          onClick={fetchFood}
          className='bg-[#F8EFBA] px-5 py-1.5 rounded-r-lg text-black shadow-md 
          border-b-2 border-r-2 border-t-2 border-gray-400'>
          Search
        </button>
      </div>
    </div>
  )
}

export default Searchbar