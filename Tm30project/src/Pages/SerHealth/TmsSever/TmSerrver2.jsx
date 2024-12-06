
import React, { useState } from 'react'
import { ServWares } from '../ServWares/ServerWares'
import Application22 from './Folder2Tmserver/Application'
import ServerPanel2 from './Folder2Tmserver/ServerPanel'
import Firewall22 from './Folder2Tmserver/Firewall'
import ServerLoss22 from './Folder2Tmserver/ServerLoss'
import ApplicationLoss22 from './Folder2Tmserver/ApplicationLoss'
import Services22 from './Folder2Tmserver/Service'
import Alrightt2 from './Folder2Tmserver/Alrightt2'
// import Alright22 from './Folder2TmServer1/Alright22'

function TmServer2() {

  const [tab, setTab] = useState('Server Panel');

  return (
    <div>
      
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
        tab === 'Server Panel' ? <div><ServerPanel2 /></div> :
          tab === 'Application' ? <div><Application22 /></div> :
            tab === 'firewall' ? <div><Firewall22 /></div> :
            tab === 'server loss' ? <div><ServerLoss22/></div> :
            tab === 'application loss' ? <div><ApplicationLoss22/></div> :
            tab === 'services'? <div><Services22/></div> :
              <div><Alrightt2/></div>
      }

    </div>
  )

}

export default TmServer2
