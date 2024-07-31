import React, { useReducer, useState } from 'react'
import Navbar from '../../Components/Navbar'
import TransactionRules from './SeetingFolder/TransacRules/TransactionRules'
import Network from './SeetingFolder/Network/Network'
import SystemResource from './SeetingFolder/SystemFolder/SystemResource'






// const reducer = (state, action)=> {
//   switch(action.type){
//     case 'rules':
//       return {
//           datta: state.datta (<TransactionRules/>)
//       }
//     case 'system':
//       return {
//           datta: state.datta (<SystemResource/>)
//       }
//   }
// }

function Notification() {

  // const [state, dispatch] = useReducer(reducer, {datta: <TransactionRules/>, color1: '', color2: '', color3:''})


  const [color, setColor]=useState('')

  const[data, setData] = useState(<TransactionRules/>);

  const rules =(color1)=>{
    setData(<TransactionRules/>);
    setColor(color1)
  }
  const system =()=>{
    setData(<SystemResource/>)
  }
  const network =()=>{
    setData(<Network/>)
  }

  

  return (
    <div>
      <div><Navbar/></div>
      <div className='text-lg border-b p-6 pl-8'>Notification Settings</div>
      <div className='flex justify-around items-center text-[13px] border py-3'>
        {/* <div onClick={(()=>dispatch({type:'rules'}))}>Transaction Rules</div> */}
        <div onClick={rules} className={`${(color)? ' border-b-sidebar ' :'border-b-#ffff '}`}>Transaction Rules</div>
        {/* <div onClick={(()=>dispatch({type:'system'}))}>System Resources</div> */}
        <div onClick={system}>System Resources</div> 
         <div onClick={network}>Network</div>
      </div>
      <div className='p-8'>
        <div>
          {data}
          {/* {state.data} */}
        </div>
      </div>
      
      {/* className={`${(color)? 'bg-sidebar p-1 rounded-[4px] text-color4' :'bg-#ffff '}`} */}

    </div>
  )
}

export default Notification