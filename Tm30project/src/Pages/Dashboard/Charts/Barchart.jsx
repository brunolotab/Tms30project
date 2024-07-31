import React, { useState } from 'react'
import Chart from 'react-apexcharts'

function Barchart() {

  const [color, setColor]=useState('color')
  const [color2, setColor2]=useState('')
  const [color3, setColor3]=useState('')

    const handleDrawer =(color)=>{
     setColor(color);
     setColor2('');
     setColor3('')
    
    }
    const handleDeposit =(color2)=>{
      
     setColor2(color2);
     setColor3('')
     setColor('')
    }
    const handleVAS =(color3)=>{
      setColor3(color3);
      setColor2('');
      setColor('');

    }

  return (
    <div className='bg-#ffff p-4 border border-slate-200 ml-3 '>
      <div className='flex gap-4 items-center text-color3 text-[12px] pl-6 cursor-pointer'>
        <div onClick={handleDrawer}  className={`${(color)? 'bg-color1 p-1 px-2.5 rounded-[8px] text-sidebar' :'bg-#ffff '}`}>Withdrawer</div>
        <div onClick={handleDeposit} className={`${(color2)? 'bg-color1 p-1 px-2.5 rounded-[8px] text-sidebar' : 'bg-#ffff'}`}>Deposits</div>
        <div onClick={handleVAS} className={`${(color3)? 'bg-color1 p-1 px-2.5 rounded-[8px] text-sidebar' : 'bg-#ffff'}`}>VAS Transactions</div>
      </div>
      <header>
        <Chart 
        type='bar'
        width={750}
        height={330}
        series={[
          {
            name:'Failure',
            data:[100, 200,232, 422,132,321,421,109,234,631,197,664],
            // color: `${color1}`
          },
          {
            name:'Success',
            data:[150, 230,332, 259,149,451,456,532,665,677,421,675],
            // color: `${color2}`
          },
        ]}
        options={{
          colors:['#D3D5D8','#212224'],
          xaxis:{
            tickPlacement:'on',
            categories:['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sept','Oct','Nov','Dec'],
           
          },
         
          legend:{
            show:true,
            position:'top',
           
          }
        }}
        />
      </header>
    </div>
  )
}

export default Barchart