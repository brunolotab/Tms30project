import React from 'react'

function CardScheme() {
    return (
        <div>
            <div className='text-[14] mt-4 '>
            <div className='text-lg' style={{fontFamily:'semiBoldFont'}}>Notification Trigger</div>
                <div className='text-[13px] text-sidebar mt-2'>Set is trigger for each matrics</div>
                <div>
                    <div className='flex gap-6 justify-start  text-[14px] py-6'>
                        <div>icon</div>
                        <div>
                            <div>By Email</div>
                            <div>Send trigger notification via email</div>
                            <div style={{fontFamily:'semiBoldFont', marginTop:'1rem'}}>Email addresses</div>
                            <div className='p-2 border border-sidebar rounded-[8px] w-[22rem]'>
                                <div className='flex gap-2 items-center rounded-[15px] m-2 p-2 bg-[#a8c7fa] w-[13rem]'>
                                    <div>icon</div>
                                    <div>segty@gmail.com</div>
                                    <div>X</div>
                                </div>
                                <div className='flex gap-2 items-center rounded-[15px] m-2 p-2 bg-[#a8c7fa] w-[13rem]'>
                                    <div>icon</div>
                                    <div>segty@gmail.com</div>
                                    <div>X</div>
                                </div>
                            </div>
                            <div>Please enter to add more email addresses</div>
                        </div>
                        <div className='pl-8'>icon</div>
                        <div>
                            <div>By SMS</div>
                            <div>Send trigger notification via phone number</div>
                            <div style={{fontFamily:'semiBoldFont', marginTop:'1rem'}}>Phone numbers</div>
                            <div className='p-2 border border-sidebar rounded-[8px] w-[22rem]'>
                            <div className='flex gap-3 items-center rounded-[15px] p-2 m-2 bg-[#a8c7fa] w-[12rem]'>
                                <div>+234 801 345 34555</div>
                                <div>X</div>
                            </div>
                            <div className='flex gap-2 items-center rounded-[15px] p-2 m-2 bg-[#a8c7fa] w-[12rem]'>
                                <div>+234 803 545 31055</div>
                                <div>X</div>
                            </div>
                            <div className='flex gap-2 items-center rounded-[15px] p-2 m-2 bg-[#a8c7fa] w-[12rem]'>
                                <div>+234 803 125 34567</div>
                                <div>X</div>
                            </div>
                            </div>
                            <div>Please enter to add more numbers</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardScheme