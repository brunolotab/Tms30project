import React from 'react'
// import { server1 } from './ServerPanel/Server1Panel'
import { server1 } from '../ServerPanel/Server1Panel'
// import restart from '../../../assets/health/restart.png'
import restart from '../../../../assets/health/restart.png'
import left from '../../../../assets/health/Left.png'
import trash from '../../../../assets/health/Trash 2.png'


function ServerPanel2() {
  const connect = [{ name: 'FIREWALL', icon: left}, { name: ' RESTART', icon: restart  }, { name: 'DISCONNECT', icon: trash }]
  return (
    <div>
      <div className='p-6 flex justify-between items-center'>
        <div style={{ fontFamily: 'semiBoldFont' }}>
          <div className='text-lg'>TMS SERVER 2<span>..</span></div>
          <div className='text-[10px]'>45.77.10.3.173 <span className='pl-1 text-green-700'>CONNECTED</span></div>
        </div>
        <div className='flex justify-evenly w-[27rem] items-center'>
          {
            connect?.map((item, id) => {
              return (
                <div key={id} className='flex items-center gap-5'>
                  <div><img src={item.icon}/></div>
                  <div>{item.name}</div>

                </div>
              )
            })
          }
        </div>
      </div>
      <div className='grid grid-cols-2 gap-8 w-[90%] pl-[4rem] text-[13px]'>
        {
          server1?.map((item, id) => {
            return (
              <div key={id} className=' bg-[#e3e4ff] p-4 w-[22rem] flex items-center justify-between rounded-[8px]'>
                <div className='flex items-center '>
                  <div>
                    <img src={item.icon}/>
                  </div>
                  <div>
                    <div className='w-[8rem] text-[12px]'>{item.tag}</div>
                    <div>{item.used}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column'}}>
                  <div className='float-right'>{item.total}</div>
                  <div className='w-[9rem]'><img src={item.img}/></div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ServerPanel2

