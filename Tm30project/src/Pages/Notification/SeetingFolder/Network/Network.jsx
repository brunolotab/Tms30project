import React from 'react'

function Network() {
  return (
    <div>
      <div className='text-[14px] p-5 pl-8'>
        <div className='text-lg ' style={{fontFamily:'semiBoldFont'}}>System Resources</div>
        <div>Set a notification trigger for each metrics</div>

        <section className='my-5'>
          <div style={{fontFamily:'semiBoldFont'}}>Bank Network</div>
          <div className='text-[13px] text-color3'>send trigger notifications for memory usuage at certain threshold</div>
          <div className='flex gap-6 items-center'>
            <div>
              <div className='mt-4'>set threshold</div>
              <div className='border border-slate-200 rounded-[8px] p-2 w-[20rem]'>Less than 20% <span>..</span></div>
            </div>
            <div>
              <div className='mt-4'>Frequency</div>
              <div className='border border-slate-200 rounded-[8px] p-2 w-[20rem]'>1 hour <span>..</span></div>
            </div>
            </div>
        </section>
        <section className='my-4'>
          <div style={{fontFamily:'semiBoldFont'}}>Service Network</div>
          <div className='text-[13px] text-color3'>send trigger notifications for memory usuage at certain threshold</div>
          <div className='flex gap-6 items-center'>
            <div className='mt-4'>
              <div>set threshold</div>
              <div className='border border-slate-200 rounded-[8px] p-2 w-[20rem]'>Less than 20% <span>..</span></div>
            </div>
            <div className='mt-4'>
              <div>Frequency</div>
              <div className='border border-slate-200 rounded-[8px] p-2 w-[20rem]'>1 hour <span>..</span></div>
            </div>
          </div>
        </section>
        <div className='float-right'><button className='p-2 py-1 text-primary bg-sidebar'>Save changes</button></div>
      </div>
    </div>
  )
}

export default Network