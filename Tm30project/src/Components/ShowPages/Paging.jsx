import React, { useContext, useState } from 'react'
// import { DataMerchants } from './DataMachant/Datamerchants'
import styled from 'styled-components';
import { MdExpandLess, MdExpandMore} from 'react-icons/md' 
// import { PagesContext } from '../ContextApi/PageContextProvider';

function Paging({ postperpage, currentpage, data, setCurrentpage, setPostperpage }) {
    

    const totalpost = data.length;
    let pages = [];

    for (var i = 1; i < Math.ceil(totalpost / postperpage) + 1; i++) {
        pages.push(i)
    }
    console.log(pages);
    const lastpage = Math.ceil(totalpost / postperpage);

    console.log(lastpage);

    const tabs = [5, 10];
    const [toggle, setToggle] = useState(false)



    return (
        <Div>
            <div className='flex justify-around my-[1rem] w-[100%]'>
                <div className='flex' style={{ flexDirection: 'column' }} >
                    <div className='btn'>{postperpage} <button style={{ background: '#ffff', border: '1px solid gray', height:'24px', }} onClick={() => setToggle(!toggle)}> {toggle ? <MdExpandLess size={28} style={{textAlign:'center', paddingBottom:'10px',paddingLeft:'4px', fontWeight:'500'}}/> : 
                    <MdExpandMore size={28} style={{textAlign:'center', paddingBottom:'10px',paddingLeft:'4px', fontWeight:'500'}}/>}</button></div>
                    <div>
                        {toggle && (<div className='ml-4 border p-1 w-10 text-center'>{
                            tabs.map((page, i) => {
                                return (
                                    <div key={i}
                                        style={{ cursor: 'pointer', display: 'flex', gap: '9px', paddingLeft: '6px' }}
                                        className='hove'
                                    >
                                        <div onClick={() => setPostperpage(page)} style={{ borderBottom: '1px solid #dddd', width: '3rem' }} className={page === postperpage ? 'inactive' : ''}>{page}</div>
                                    </div>
                                )
                            })}
                        </div>)

                        }
                    </div>


                    {/* <div>{postperpage} <button onClick={()=> setToggle(!toggle)}>{toggle? '<' : 
                <div>
                {
                    tabs.map((page, i) => {
                        return (
                            <div key={i}
                                style={{ cursor: 'pointer', display: 'flex', gap: '9px' }}
                            >
                                <div onClick={() => setPostperpage(page)} className={page === postperpage ? 'inactive' : ''}>{page}</div>
                            </div>
                        )
                    })
                }
                </div>
                }</button></div> */}

                </div>
                <div className='text-[15px] w-[19rem] text-neutral-500'>Showing 1 to {postperpage} of 100 entries</div>
                <div className='flex gap-4 w-[20rem]'>
                    <div><button onClick={handleprev} className={currentpage === 1 ? '' : 'active'}> prev</button></div>
                    <div className='flex flex-wrap justify-center '>
                        {
                            pages?.map((item, i) => {
                                return (
                                    <button onClick={() => setCurrentpage(item)} style={{height:'28px'}} className={item === currentpage ? 'active' : ''}>{item}</button>
                                )
                            })
                        }
                    </div>
                    <div><button onClick={handlenext} className={currentpage === lastpage ? '' : 'active'}> next</button></div>
                </div>
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

export default Paging

const Div = styled.div`
   display: flex;
    align-items: center;
    justify-content: space-between;
    /* width: ; */
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
  .inactive {
    color: blue;
    /* background: #010101; */
    width: 1rem;
  }
  .inactive:hover {
    width: 1rem;
    background-color: gray;
  }
  .hove:hover {
    background-color: gray;

  }
`