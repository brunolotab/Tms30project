import React from 'react'
// import { DataMerchants } from './DataMachant/Datamerchants'
import styled from 'styled-components';

function PagesMerchants({ postperpage, currentpage, data, setCurrentpage }) {
  const totalpost = data.length;
  let pages = [];

  for (var i = 1; i < Math.ceil(totalpost / postperpage) + 1; i++) {
    pages.push(i)
  }
  console.log(pages);
  const lastpage = Math.ceil(totalpost / postperpage);

  console.log(lastpage);

  return (
    <Div>
      <div className='text-[15px] w-[19rem] text-neutral-500'>Showing 1 to 5 of 100 entries</div>
      <div className='flex gap-4 '>
        <div><button onClick={handleprev} className={currentpage ===1 ? '' : 'active'}> prev</button></div>
        <div className='flex flex-wrap justify-center '>
          {
            pages?.map((item, i) => {
              return (
                <button onClick={() => setCurrentpage(item)} className={item === currentpage ? 'active' : ''}>{item}</button>
              )
            })
          }
        </div>
        <div><button onClick={handlenext} className={ currentpage === lastpage ? '' : 'active'}> next</button></div>
      </div>

    </Div>
  )

  function handleprev() {
    if (currentpage !== 1) {
      setCurrentpage(currentpage - 1)
    }
  }

  function handlenext() {
    if (currentpage !== lastpage) {
      setCurrentpage(currentpage + 1)
    }
  }
}

export default PagesMerchants

const Div = styled.div`
   display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.2rem;
  button {
    width: 43px;
    /* height: 25px; */
    background-color: #eeee;
    color: #bbbb;
    padding: 4px;
    border-radius: 12px;
    margin-right: 2px;
    font-size: 13px;
    
  }
  button.active {
    color: #ffff;
    background: #010101;
  }
`