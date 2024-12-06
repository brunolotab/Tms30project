import React, { useState } from 'react'
import { ServWares } from '../ServWares/ServerWares'
// import { server1 } from './ServerPanel/Server1Panel'
import restart from '../../../assets/health/restart.png'
import left from '../../../assets/health/Left.png'
import trash from '../../../assets/health/Trash 2.png'
import ServerPanel from './Folder1TmServer1/ServerPanel'
import Application from './Folder1TmServer1/Application'
import Firewall from './Folder1TmServer1/Firewall'
import ServerLoss from './Folder1TmServer1/ServerLoss'
import ApplicationLoss from './Folder1TmServer1/ApplicationLoss'
import Services from './Folder1TmServer1/Service'
import Alright from './Folder1TmServer1/Alright'


function TmServer1() {
  // const connect = [{ name: 'FIREWALL', icon: left}, { name: ' RESTART', icon: restart  }, { name: 'DISCONNECT', icon: trash }]
  // return (
  //   <div>
  //     <ServerWares/>
  //     {/* //{ */}
  //     <ServerPanel/>
  {/* } */ }

  // const serverInformation = ['Server Panel', 'Application', 'firewall', 'server loss', 'application loss', 'services', 'alright']

  const [tab, setTab] = useState('Server Panel');

  return (
    <div>
      {/* <div className=' w-[80%]'> */}
      <div className='border flex justify-evenly p-3 py-8'>
        {
          ServWares?.map((item, id) => {
            return (
              <div key={id}
                className='uppercase rounded-[8px] p-1 cursor-pointer'
                onClick={() => (setTab(item))}
                style={{ border: item === tab ? ' 1px solid#1b59f8' : '' }}
              >
                {item}
              </div>
            )
          })
        }
      </div>
      {
        tab === 'Server Panel' ? <div><ServerPanel /></div> :
          tab === 'Application' ? <div><Application /></div> :
            tab === 'firewall' ? <div><Firewall /></div> :
            tab === 'server loss' ? <div><ServerLoss/></div> :
            tab === 'application loss' ? <div><ApplicationLoss/></div> :
            tab === 'services'? <div><Services/></div> :
              <div><Alright /></div>
      }

    </div>
  )

}

export default TmServer1

