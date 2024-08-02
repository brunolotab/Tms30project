import React, { useReducer, useState } from 'react'
import Navbar from '../../Components/Navbar'
import TransactionRules from './SeetingFolder/TransacRules/TransactionRules'
import Network from './SeetingFolder/Network/Network'
import SystemResource from './SeetingFolder/SystemFolder/SystemResource'



function Notification() {



  // const [color, setColor]=useState('')

  // const[data, setData] = useState(<TransactionRules/>);

  // const rules =(color1)=>{
  //   setData(<TransactionRules/>);
  //   setColor(color1)
  // }
  // const system =()=>{
  //   setData(<SystemResource/>)
  // }
  // const network =()=>{
  //   setData(<Network/>)

  // }

  const notifications = ['TransactionRules', 'SystemResource', 'Network'];

  const [insert, setInsert] = useState('TransactionRules');


  return (
    <div>
      <div><Navbar /></div>
      <div className='text-lg border-b p-4 pl-10'>Notification Settings</div>
      <div className='flex gap-[4rem] pl-8 items-center text-[13px] border'>
        {
          notifications?.map((item,id) => {
            return (
              <button key={id}
                onClick={() => { setInsert(item) }}
                className={` py-3 `}
                style={{ borderBottom: item === insert ? '1px solid#1B59F8' : '' }}
              >
                {item}
              </button>
            )
          })
        }
       
      </div>

      <div className='p-1'>
      {
          insert === 'TransactionRules' ? <div><TransactionRules /></div> : insert === 'SystemResource' ? <div><SystemResource /></div> : <div><Network /></div>
        }

      </div>
      

    </div>
  )
}

export default Notification