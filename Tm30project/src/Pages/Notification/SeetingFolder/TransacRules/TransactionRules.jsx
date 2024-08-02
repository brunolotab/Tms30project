import React, { useState } from 'react'
import CardScheme from './Sections/CardScheme';
import Terminal from './Sections/Terminal';

function TransactionRules() {

  const sections = ['Card scheme', 'Terminals'];
  const[bordercolor, setBordercolor] = useState('Card scheme');
  return (
    <div className='pl-7 '>
      <div className='flex gap-9 text-[13px] py-2'>
        {
          sections?.map((item,id)=>{
            return (
              <div key={id}
              onClick={() => (setBordercolor(item))}
              className='py-3'
              style={{borderBottom: item === bordercolor? '1px solid#1B59F8' : ''}}
              >

                {item}
              </div>
            )
          })
        }
      </div>
      <div>
      { bordercolor === 'Card scheme' ? <div><CardScheme/></div> : <div><Terminal/></div> }
      </div>
    </div>
  )
}

export default TransactionRules