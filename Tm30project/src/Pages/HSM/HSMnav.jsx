import React from 'react'
// import { NavLink } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function HSMnav() {

    // const Navigate = useNavigate();
    // const handle1 = ()=> {
    //     Navigate('<Hsmpg2/>')
    // }
    return (
        <Niv>
            <div className='text-neutral-500 flex justify-between items-center w-[80%] float-right mt-8'>
                <div>Showing 1 to 5 of 100 entries</div>
                <div className='flex justify-around items-center w-[20rem]'>
                    <div><button className='p-4'>previous</button></div>
                    {/* <div onClick={handle1}>2</div> */}
                    <div>2</div>
                    <NavLink to={'Hsmpg3'}><div>3</div></NavLink>
                    <NavLink to={'Hsmpg4'}><div>4</div></NavLink>
                    <NavLink to={'Hsmpg..'}><div>...</div></NavLink>
                    <NavLink to={'Hsmpg10'}><div>10</div></NavLink>
                    <NavLink to={''}><div className='p-2'><button>next</button></div></NavLink>
                </div>
            </div>
        </Niv>
    )
}

export default HSMnav

const Niv = styled.div`
    a.active {
        padding: 4px;
        background-color: blue;
        text-decoration: none;
        color: #ffff;
    }
`

