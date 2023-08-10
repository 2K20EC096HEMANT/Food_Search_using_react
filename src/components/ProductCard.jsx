import React from 'react'

function ProductCard({allFood,loading}) {
  return (
    <div>
      <div className='flex flex-wrap px-4 lg:px-10 '>
        {allFood.map((item, index)=>{
            const {label,cuisineType,healthLabels,image} = item.recipe
            return (
                <div className="p-2 md:w-1/4 w-full">
                    <div className="bg-[#F8EFBA] p-4 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
                        <img className='rounded-lg w-full mb-2' src={image} alt="" />
                        <h2 className='text-xl text-black font-bold'>{label.substr(0,20)}</h2>
                        <h2 className='text-lg text-black'><span className='font-bold'>Label:</span> {healthLabels[0]}</h2>
                        
                        <h2 className='text-lg text-black mb-2'><span className='font-bold'>CuisineType:</span> {cuisineType}</h2>
                        
                    <div className=" flex  space-x-2 justify-between">
                    <button className='bg-[#706fd3] px-5 py-1.5 text-white rounded-lg'>
                    Add to card
                    </button>
                    <button className='bg-[#ff4757] px-5 py-1.5 text-white rounded-lg'>
                    Buy Now
                    </button>
                </div>
            </div>
        </div>
            )
        })}
      </div>
    </div>
  )
}

export default ProductCard