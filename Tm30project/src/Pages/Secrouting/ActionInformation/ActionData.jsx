import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../../Components/Navbar';

function ActionData() {

    const { id } = useParams();
    const Navigate = useNavigate()
    const handleback = () => {
        Navigate(-1)
    }
    console.log(id);
    
    return (
        <div className='pl-[13rem]'>
              <Navbar/>
            <div className='pl-10'>
              
                <div className='flex items-center gap-5 text-lg border-b py-4 uppercase '>
                    <div onClick={handleback} className='bolder cursor-pointer'>{'<-'}</div>
                    <div style={{ fontFamily: 'semiBoldFont' }}>master card</div>
                </div>
                <div className='py-4 pt-4 border-b'>
                    <div style={{fontFamily:'semiBoldFont', fontSize:'14px'}}>mastercard</div>
                    <div className='text-[12px]'>View and edit BIN configuration</div>
                </div>
                <div className='border-b text-[13px] py-3'>
                    <div className='py-2'>Scheme</div>
                    <div>Name</div>
                    <div className='p-1 w-[14rem] border rounded-[8px]'><button>Mastercard</button></div>
                </div>
                <div className='p-2 border-b text-[13px]'>
                    <div className='flex justify-between items-center pb-2 pr-4'>
                        <div className='leading-6'>
                            <div style={{fontFamily:'semiBoldFont'}}>Scheme Details</div>
                            <div className='text-[12px]'>Enter the minimum, maximum and BIN numbers for this Scheme</div>
                        </div>
                        <div className='border p-2 rounded-[8px]'><button> + Add BIN</button></div>
                    </div>
                    <div className='flex gap-10 py-3'>
                        <div>
                            <div>Maximum</div>
                            <div className='border p-1 rounded-[8px] '><input type='number' placeholder='0'/></div>
                        </div>
                        <div>
                            <div>Minimum</div>
                            <div className='border p-1 rounded-[8px] '><input type='number' placeholder='100'/></div>
                        </div>
                        <div>
                            <div>BIN</div>
                            <div className='border p-1 rounded-[8px] '><input type='number' placeholder='001'/></div>
                        </div>
                    </div>

                </div>
                <div className='float-right p-2 text-[13px]'>
                    <div className='flex gap-3 pr-4'>
                    <div className='p-2  rounded-[8px] border'><button >Cancel</button></div>
                    <div className='p-2 rounded-[8px] border bg-[#AAAAAA]'><button >Create scheme</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActionData