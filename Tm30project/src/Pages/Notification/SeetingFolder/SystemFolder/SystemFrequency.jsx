import React from 'react'

function SystemFrequency() {
    return (
        <div>

            <div className='flex w-[12rem] gap-5 items-center rounded-md pt-8'>
                <div className='w-[1rem] h-[1rem] border p-4 bg-green-800 ' style={{borderRadius:'50%'}}></div>
                <div>
                    <div className='text-[12px]'>Frequency</div>
                    <div className='flex gap-5 'style={{alignItems:'center'}}>
                        <div className='border w-[10rem] p-1 text-[12px]'>1hour<div className='float-right text-[20px] '>^</div></div>
                        <div className='flex items-center mt-[-1.5rem] cursor-pointer '>
                            <div className='w-5 h-2 bg-green-800'></div>
                            <div className='h-4 w-4 rounded-full bg-green-950'></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SystemFrequency