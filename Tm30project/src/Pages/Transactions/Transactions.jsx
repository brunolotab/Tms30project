import React from 'react'
import Navbar from '../../Components/Navbar'

function Transactions() {
  return (
    <div>
      <Navbar/>
      <div className='flex justify-between align-middle bg-white p-3 border border-l-0 border-b-slate-200 border-t-0 px-6'  >
        <div className='font-bold text-xl'>Transactions</div>
        <div><button className=' p-6 py-2 rounded-[4px] border border-blue-800 text-blue-700 font-semibold text-[13px] '> Filter By</button></div>
      </div>
    </div>
  )
}

export default Transactions