import React, { useState } from 'react'
import Chart from 'react-apexcharts'

function Barchart() {  
  const tabs = ['Withdrawer', 'Deposits', 'VAS Transactions'];
  const[currenttab, setCurrenttab] = useState('Withdrawer')

  return (
    <div className='bg-#ffff p-4 border border-slate-200 ml-3 '>
      <div className='flex gap-4 items-center text-color3 text-[12px] pl-6'>
       {
          tabs?.map((item) =>{
            return (
              <div>
                <button 
                onClick={()=> setCurrenttab(item)}
                  key={item.id}
                  style={{position:'relative', top:'1rem', cursor:'pointer'}}
                  // className='px-2.5 p-1 rounded-[8px]'
                  // style={{background : item === currenttab ? '#D3D5DB' : ''}}
                  className={`${(item === currenttab) ? 'bg-color1 text-sidebar px-2.5 p-1 rounded-[8px]' : ''}`}
                >
                 {item}
                </button>
                </div>
            )
          })
        }
       
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
            show: true,
            position:'top',
            offsetY: -5,
            offsetX: 500,
          },
          tooltip: {
            fixed: {
              enabled: false,
              position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
              offsetY: 30,
              offsetX: 60
            }
          } 
        }}
        />
      </header>
    </div>
  )
}

export default Barchart