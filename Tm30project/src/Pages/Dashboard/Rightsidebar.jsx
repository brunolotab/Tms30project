import React from 'react'
import FIcon from '../../assets/Icons/FIcon.png'
import FIcon2 from '../../assets/Icons/FIcon 2.png'
import { transactions } from './RecentTransaction/RecentTrans'

function Rightsidebar() {
    const recentTransaction = transactions;

    // if (recentTransaction.status === 'failed'){
    //     return <img src={FIcon} alt=''/>;
        
    // }else if(recentTransaction.status ==='success'){
    //     return <img src={FIcon2} alt=''/>;
    // } 
    // else {
    //  return <img src={FIcon2} alt=''/>
    // };

    return (
        <div>
            <div className='w-[18rem] p-4 text-color4 font-semibold z-[999] border border-slate-200 text-[14px] h-[100vh] '>
                <div className='font-semibold text-[16px] py-5'>Recent Transactions</div>
                {/* <div className='leading-4 pb-4'>
                    <div><img src={FIcon} alt=''/></div><div>TID 234532 Withdraw 10,00...</div>
                    <div className='pl-4 text-[10px] text-color3'>5m ago</div>
                </div>
                <div className='leading-4 pb-4'>
                    <div>MER 234532 is credited...</div>
                    <div className='pl-4 text-[10px] text-color3'>7m ago</div>
                </div>
                <div className='leading-4 pb-4'>
                    <div>TID 234532 thrift 2,000 to ...</div>
                    <div className='pl-4 text-[10px] text-color3'>5m ago</div>
                </div>
                <div className='leading-4 pb-4'>
                    <div>TID 234532 Withdraw 10,00...</div>
                    <div className='pl-4 text-[10px] text-color3'>5m ago</div>
                </div>
                <div className='leading-4 pb-4'>
                    <div>TID 234532 Withdraw 10,00...</div>
                    <div className='pl-4 text-[10px] text-color3'>5m ago</div>
                </div>
                <div className='leading-4 pb-3'>
                    <div>MER 234532 is credited...</div>
                    <div className='pl-4 text-[10px] text-color3'>7m ago</div>
                </div>
                <div className='leading-4 pb-3'>
                    <div>TID 234532 Withdraw 10,00...</div>
                    <div className='pl-4 text-[10px] text-color3'>5m ago</div>
                </div>
                <div className='leading-4 pb-4'>
                    <div>MER 234532 is credited...</div>
                    <div className='pl-4 text-[10px] text-color3'>7m ago</div>
                </div>
                <div className='leading-4 pb-4'>
                    <div>TID 234532 Withdraw 10,00...</div>
                    <div className='pl-4 text-[10px] text-color3'>5m ago</div>
                </div>
                <div className='leading-4 pb-4'>
                    <div>MER 234532 is credited...</div>
                    <div className='pl-4 text-[10px] text-color3'>7m ago</div>
                </div>
                <div className='leading-4 pb-4'>
                    <div>MER 234532 is credited...</div>
                    <div className='pl-4 text-[10px] text-color3'>7m ago</div>
                </div>
                <div className='leading-4 '>
                    <div>TID 234532 Withdraw 10,00...</div>
                    <div className='pl-4 text-[10px] text-color3'>5m ago</div>
                </div> */}
                <div>
                    {
                        recentTransaction?.map((item,id) =>(
                           
                            <div key={id} className='pb-4'>
                                <div className='flex gap-2'>  
                                    <div>                            
                                    {item.status === 'failed'
                                        ? <img src={FIcon2} alt=''/>
                                        : item.status === 'sucessful'
                                        ? <img src={FIcon} alt=''/>
                                        : 'pending'
                                    }
                                    </div>
                                    <div>{item.text}</div>
                                </div>
                                <div className='pl-6 texr-[10px] text-color3'>{item.time}</div>
                            </div>
                        ))
                    }
                </div>
               
            </div>
        </div>
    )
}

export default Rightsidebar