import React, { useState } from 'react'
import Chart from 'react-apexcharts'

function Barchart() {


    const handleWithDrawer =()=>{
     
    
    }
    const handleDeposit =()=>{
      
      
    }
    const handleVAS =()=>{
     
    }

  return (
    <div className='bg-#ffff p-4 border border-slate-200 ml-3 '>
      <div className='flex gap-4 items-center text-color3 text-[12px] pl-6'>
        <div onClick={handleWithDrawer}>Withdrawer</div>
        <div  onClick={handleDeposit}>Deposits</div>
        <div onClick={handleVAS} >VAS Transactions</div>
      </div>
      <header>
        <Chart 
        type='bar'
        width={750}
        height={350}
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
          colors:['#b4a6a6','#000000'],
          xaxis:{
            tickPlacement:'on',
            categories:['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sept','Oct','Nov','Dec'],
           
          },
         
          legend:{
            show:true,
            position:'right',
           
          }
        }}
        />
      </header>
    </div>
  )
}

export default Barchart