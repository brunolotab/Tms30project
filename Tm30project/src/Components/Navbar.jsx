import React from 'react'
import Bell from '../assets/Icons/Bell.jpg'
import ClockCounter from '../assets/Icons/ClockCounter.jpg'
import Sidebar from '../assets/Icons/Sidebar.jpg'
// import { ContextApi } from '../ContextApi/ContextApi'

function Navbar() {
  // const {title} = useContext(ContextApi)

  return (
    <>
        <div className='bg-white border-slate-200 border p-6  flex justify-between items-center'>
            <div className='flex justify-around w-[10rem]'>
                <div>BigFoot</div>
                <div>title</div>
            </div>
            <div className='flex gap-3 justify-evenly '>
                <div><input type='text' className='rounded-[5px] bg-color1 p-[2px] px-[3px]' /></div>
                <div><img src={ClockCounter} alt=''/></div>
                <div><img src={Bell} alt=''/></div>
                <div><img src={Sidebar} alt=''/></div>
            </div>
        </div>
    </>
  )
}

export default Navbar