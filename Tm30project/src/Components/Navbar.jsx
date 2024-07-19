import React from 'react'
// import { ContextApi } from '../ContextApi/ContextApi'

function Navbar() {
  // const {title} = useContext(ContextApi)

  return (
    <>
        <div className='bg-white border-slate-200 border p-6  flex justify-between items-center  '>
            <div className='flex justify-around w-[10rem]'>
                <div>BigFoot</div>
                <div>title</div>
            </div>
            <div className='flex  justify-around w-[20rem]'>
                <div className='w-16 bg-primary'>a</div>
                <div>b</div>
                <div>c</div>
                <div>d</div>
            </div>
        </div>
    </>
  )
}

export default Navbar