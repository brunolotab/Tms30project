import React from 'react'
import Navbar from '../../Components/Navbar'
import Rightsidebar from './Rightsidebar'
import Barchart from './Charts/Barchart'
import Donutpie from '../../SDonutpie'
import ApexChart from './Barchart'



function Dashboard() {

    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%', background: '#fefefe' }}>

                <div style={{ gridRowStart: '1', gridColumnstart: '1', gridColumnEnd: '1' }}>
                    <div><Navbar /> </div>



                    <div className='grid grid-cols-4  p-4 w-[100%] justify-items-center text-[14px] text-color4 '>
                        {/* <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'2rem',padding:'1rem',width:'75%', paddingLeft:'6rem'}} > */}
                        <div className='w-[12rem] rounded-lg bg-black '>
                            <div className='bg-white w-[12rem] rounded-t-lg p-2 px-4 border border-slate-200  leading-8 mb-2 '>
                                <div>Number of Acquires</div>
                                <div className='text-3xl font-semibold'>6</div>
                                <div>+9.15%</div>
                            </div>
                        </div>
                        <div className='w-[12rem] rounded-lg bg-color1'>
                            <div className='bg-white w-[12rem] rounded-t-lg  p-2 px-4 border border-slate-200  leading-8 mb-2 '>
                                <div>Number of Machants</div>
                                <div className='text-3xl font-semibold'>721</div>
                                <div>+11.01%</div>
                            </div>
                        </div>
                        <div className='w-[12rem] rounded-lg bg-black'>
                            <div className='bg-white w-[12rem] rounded-t-lg p-2 px-4 border border-slate-200  leading-8 mb-2 '>
                                <div>Hard POS Terminals</div>
                                <div className='text-3xl font-semibold'>239k</div>
                                <div>-1.48%</div>
                            </div>
                        </div>
                        <div className='w-[12rem] rounded-lg bg-color1'>
                            <div className='bg-white w-[12rem] rounded-t-lg p-2 px-4 border border-slate-200  leading-8 mb-2 '>
                                <div>soft POS Terminals </div>
                                <div className='text-3xl font-semibold'>1,100</div>
                                <div>-1.45%</div>
                            </div>
                        </div>
                    </div>
                    <p style={{ paddingLeft: '25px' }}>Today</p>
                    <div className='grid grid-cols-4 p-6 w-[100%] justify-items-center gap-6  text-[14px]'>

                        <div className='w-[12rem] rounded-lg bg-color1'>
                            <div className='bg-white w-[12rem] rounded-b-lg p-2 px-4 border border-slate-200  leading-8 mt-2 '>
                                <div>Total Transactions</div>
                                <div className='text-3xl font-semibold'>$721K</div>
                                <div>+9.15%</div>
                            </div>
                        </div>
                        <div className='w-[12rem] rounded-lg bg-black'>
                            <div className='bg-white w-[12rem] rounded-b-lg p-2 px-4 border border-slate-200  leading-8 mt-2 '>
                                <div>Total Deposits</div>
                                <div className='text-3xl font-semibold'>1,283</div>
                                <div>-1.48%</div>
                            </div>
                        </div>
                        <div className='w-[12rem] rounded-lg bg-color1'>
                            <div className='bg-white w-[12rem] rounded-b-lg p-2 px-4 border border-slate-200  leading-8 mt-2 '>
                                <div>Total Withdrawals</div>
                                <div className='text-3xl font-semibold'>$367K</div>
                                <div>+11.01%</div>
                            </div>
                        </div>
                        <div className='w-[12rem] rounded-lg bg-black'>
                            <div className='bg-white w-[12rem] rounded-b-lg p-2 px-4 border border-slate-200  leading-8 mt-2 '>
                                <div>Total</div>
                                <div className='text-3xl font-semibold'>$1</div>
                                <div>-1.45%</div>
                            </div>
                        </div>



                    </div>
                    {/* <div className='p-4'><ApexChart /></div> */}
                    <div className='p-4'><Barchart /></div>
                    <div className='grid grid-cols-2 w-[95%] text-[13px] h-[23rem] bg-[#ffff] mb-5 ml-7'>
                        <div className='w-[23rem] border border-slate-200   '>
                            <div className=' p-3 pb-3 border-b'>Bank Networks</div>
                            <table className=' leading-[3rem]  '>
                                <tr className='text-color3 flex justify-between w-[23rem] bg-slate-200 pr-6 p-1 '>
                                    <th>BANK</th>
                                    <th>NETWORK RATE</th>
                                </tr>
                                <tr className=' flex justify-between w-[23rem] pr-[6rem] p-2 border-b'>
                                    <td>Access Bank</td>
                                    <td>99%</td>
                                </tr>
                                <tr  className='flex justify-between w-[23rem]  pr-[6rem] p-2 border-b '>
                                    <td>Sterling Bank</td>
                                    <td>99%</td>
                                </tr>
                                <tr  className='flex justify-between w-[23rem]  pr-[6rem] p-2 border-b '>
                                    <td>GT Bank</td>
                                    <td>99%</td>
                                </tr>
                                <tr  className=' flex justify-between w-[23rem]  pr-[6rem] p-2  '>
                                    <td>First Bank</td>
                                    <td>99%</td>
                                </tr>
                            </table>
                        </div>
                        <div>
                            <Donutpie />
                        </div>
                    </div>
                    {/* <ApexChart/> */}
                </div>
                <div style={{ gridRowStart: '1', gridColumn: '2', gridColumnEnd: '2' }}><Rightsidebar /></div>

            </div>

        </>
    )
}

export default Dashboard