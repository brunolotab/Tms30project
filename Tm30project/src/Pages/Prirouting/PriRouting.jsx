import React from 'react'
import Navbar from '../../Components/Navbar'

function PriRouting() {
  return (
    <div>
      <Navbar/>
      <div className='flex justify-between align-middle bg-white p-3 border border-l-0 border-b-slate-200 border-t-0 px-6'  >
        <div className='font-bold text-xl'>Routing Configuration</div>
        <div><button className='bg-color1 p-6 py-2 rounded-[10px] text-blue-700 font-bold text-[13px] '> + Add New Configuration</button></div>
      </div>
    </div>
  )
}

export default PriRouting