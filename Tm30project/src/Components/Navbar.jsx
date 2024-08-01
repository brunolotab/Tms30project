import React from 'react'
import Bell from '../assets/Icons/Bell.jpg'
import ClockCounter from '../assets/Icons/ClockCounter.jpg'
import Sidebar from '../assets/Icons/Sidebar.jpg'

function Navbar() {
  
  const path = window.location.pathname;
  console.log(path)
  const paths = path.split('/')
  const name = paths[1];
  



  return (
    <>
        <div className='bg-[#FEFEFE] border-slate-200 border p-4  flex justify-between items-center'>
            <div className='flex justify-around w-[15rem]'>
                <div className='pl-1'>BigFoot</div>
                <div className='ml-5'>{name}</div>
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