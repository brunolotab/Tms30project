import React from 'react'
import { server1 } from './ServerPanel/Server1Panel'

function TmServer1() {
  const connect = [{ name: 'FIREWALL', icon: 'a' }, { name: ' RESTART', icon: 'b' }, { name: 'DISCONNECT', icon: 'c' }]
  return (
    <div>
      <div className='p-6 flex justify-between items-center'>
        <div style={{ fontFamily: 'semiBoldFont' }}>
          <div className='text-lg'>TMS SERVER 1<span>..</span></div>
          <div className='text-[10px]'>45.77.10.3.173 <span className='pl-1 text-green-700'>CONNECTED</span></div>
        </div>
        <div className='flex justify-evenly w-[27rem] items-center'>
          {
            connect?.map((item, id) => {
              return (
                <div key={id} className='flex items-center border'>
                  <div>{item.icon}<span>{item.name}</span></div>

                </div>
              )
            })
          }
        </div>
      </div>
      <div className='grid grid-cols-2 gap-5 w-[90%] pl-[4rem]'>
        {
          server1?.map((item, id) => {
            return (
              <div key={id} className=' bg-[#e3e4ff] p-4 w-[22rem] flex gap-6 items-center justify-between rounded-[8px]'>
                <div className='flex items-center gap-4'>
                  <div>
                    {item.icon}
                  </div>
                  <div>
                    <div>{item.tag}</div>
                    <div>{item.used}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'flexend' }}>
                  <div className='float-right'>{item.total}</div>
                  <div>{item.img}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TmServer1

