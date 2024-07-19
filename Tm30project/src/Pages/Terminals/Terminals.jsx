import React from 'react'
import Navbar from '../../Components/Navbar'

function Terminals() {
  return (
    <div>
      <Navbar/>
       <div className='flex justify-between align-middle bg-white p-3 border border-l-0 border-b-slate-200 border-t-0 px-6'  >
        <div className='font-bold text-xl'>Merchants</div>
        <div><button className='bg-color1 p-6 py-2 rounded-[10px] text-blue-700 font-bold text-[13px] '> + Add New Merchant</button></div>
      </div>
      <div className='p-5'>
        <div className='flex gap-4'>
          <div className='p-2 border border-black rounded-[4px] w-[10rem]'> Bulk Actions</div>
          <button className='border border-blue-700 rounded-[4px] p-2 w-25 text-blue-800 bg-blue-500'> Apply</button>
        </div>
      </div>
    </div>
  )
}

export default Terminals