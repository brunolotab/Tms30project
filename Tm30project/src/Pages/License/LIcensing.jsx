import React from 'react'
import { LicenceData } from './LicenseData/licensedata'
import Navbar from '../../Components/Navbar'

function LIcensing() {
  return (
    <div className=' px-3 bg-gray-50 pl-[13rem]'>
        <div>
        <div><Navbar /> </div>
        <div className='mt-3 w-[100%]  border border-slate-200'>
            <div style={{fontFamily:'semiBoldFont', fontSize:'20px',padding:'1rem', paddingLeft:'2rem', background:'#ffff'}} >Licensing</div>
            <div className=' flex flex-wrap gap-12 pl-8 bg-[#ffff] '>
            {
                LicenceData?.map((item,id)=>{
                    return (
                        <div key={id} className='w-[30rem] border border-slate-200 text-[15px] bg-[#ffff] '>
                        {/* // <div key={id} style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'5rem',padding:'1rem',width:'100%', paddingLeft:'6rem'}}> */}
                            <div className='p-2 bg-slate-300 rounded-[5px]' style={{fontFamily:'semiBoldFont'}}  >{item.header}</div>
                            <div className='p-3 leading-[2.7rem]'>
                            <div>{item.default}<span className='float-right'>{item.Num}</span></div>
                            <div>{item.period}<span className='float-right'>{item.Mth}</span></div>
                            <div>{item.price}<span className='float-right'>{item.Amt}</span></div>
                            <div>{item.trans}<span className='float-right'>{item.vol}</span></div>
                            <div>{item.term}<span className='float-right'>{item.Amt2}</span></div>
                            <div>{item.trans2}<span className='float-right'>{item.rate}</span></div>
                            <div>{item.transTime}<span className='float-right'>{item.Amt3}</span></div>
                            <div>{item.report}<span className='float-right'>{item.time}</span></div>
                            <div className=' text-[14px]'>{item.current}<span className='float-right'>{item.text}</span></div>
                            </div>
                            <div className='bg-sidebar text-[#ffff] p-3 px-6 text-center'>Update Licensing Plan</div>
                        </div>
                    )
                })
            }
            </div>
        </div>
        </div>
    </div>
  )
}

export default LIcensing