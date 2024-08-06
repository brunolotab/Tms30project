import React from 'react'

function Terminal() {
  return (
    <div>
        <div>
           <div className='py-3 text-[14px] border-b' style={{fontFamily:'semiBoldFont'}}> Daily terminal usage</div>
           <div className='mt-3'>
            <div className='text-[13px] py-2 ' style={{fontFamily:'semiBoldFont'}}>Configure daily terminal usage</div>
            <div className='text-[10px]'>Set a trigger for terminal usage</div>
           </div>
           <div  className='text-[13px] flex gap-[5%] items-center w-[80%] mt-4'>
            <div>
                <div>Failure rate</div>
                <div className='border w-[18rem] p-1'>20%</div>
            </div>
            <div>
                <div>Frequency</div>
                <div className='border w-[18rem] p-1'>1 hour</div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Terminal