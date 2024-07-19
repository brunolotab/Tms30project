import React from 'react'
import styled from 'styled-components'
import Navbar from '../../Components/Navbar'

function Acquires() {
  return (
    <Div >
      <div className='w-[100%]'><Navbar/></div>
      <div className='flex justify-between align-middle bg-white p-3 border border-l-0 border-b-slate-200 border-t-0 px-6'  >
        <div className='font-bold text-xl'>Acquirers</div>
        <div><button className='bg-color1 p-6 py-2 rounded-[10px] text-sidebar font-bold text-[13px] '> + Add New Acquires</button></div>
      </div>
      <div className='text-[14px]'>
        <table className='leading-6 w-[100vw] h-[100vh] font-semibold'>
          <tr className=' bg-color2 '>
            <th>ACQUIRER NAME </th>
            <th>ACQUIRER ID </th>
            <th>TMS ID </th>
            <th>MERCHANT ID </th>
            <th>EMAIL ADDRESS </th>
            <th>CBN CODE </th>
            <th>ENABLE ALL TRANSACTION TYPES </th>
          </tr>
          <tr>
            <td>James Adekola</td>
            <td>N1123SBE</td>
            <td>TMS23SBE</td>
            <td>N1123SBE</td>
            <td>CUSTOMER@TM30.COM.NG</td>
            <td>N1123SBE</td>
            <td><button>d</button></td>

          </tr>
          <tr>
            <td>Shola Adeniyi</td>
            <td>N1123SBE</td>
            <td>TMS23SBE</td>
            <td>N1123SBE</td>
            <td>CUSTOMER@TM30.COM.NG</td>
            <td>N1123SBE</td>
            <td><button>d</button></td>

          </tr>
          <tr>
            <td>Shola Adeniyi</td>
            <td>N1123SBE</td>
            <td>TMS23SBE</td>
            <td>N1123SBE</td>
            <td>CUSTOMER@TM30.COM.NG</td>
            <td>N1123SBE</td>
            <td><button>d</button></td>

          </tr>
          <tr>
            <td>Shola Adeniyi</td>
            <td>N1123SBE</td>
            <td>TMS23SBE</td>
            <td>N1123SBE</td>
            <td>CUSTOMER@TM30.COM.NG</td>
            <td>N1123SBE</td>
            <td><button>d</button></td>

          </tr>
          <tr>
            <td>Tayo Temitope</td>
            <td>N1123SBE</td>
            <td>TMS23SBE</td>
            <td>N1123SBE</td>
            <td>CUSTOMER@TM30.COM.NG</td>
            <td>N1123SBE</td>
            <td><button>d</button></td>

          </tr>
          <tr>
            <td>Tayo Temitope</td>
            <td>N1123SBE</td>
            <td>TMS23SBE</td>
            <td>N1123SBE</td>
            <td>CUSTOMER@TM30.COM.NG</td>
            <td>N1123SBE</td>
            <td><button>d</button></td>

          </tr>
          <tr>
            <td>Shola Adeniyi</td>
            <td>N1123SBE</td>
            <td>TMS23SBE</td>
            <td>N1123SBE</td>
            <td>CUSTOMER@TM30.COM.NG</td>
            <td>N1123SBE</td>
            <td><button>d</button></td>

          </tr>
          <tr>
            <td>Shola Adeniyi</td>
            <td>N1123SBE</td>
            <td>TMS23SBE</td>
            <td>N1123SBE</td>
            <td>CUSTOMER@TM30.COM.NG</td>
            <td>N1123SBE</td>
            <td><button>d</button></td>

          </tr>
          <tr>
            <td>Shola Adeniyi</td>
            <td>N1123SBE</td>
            <td>TMS23SBE</td>
            <td>N1123SBE</td>
            <td>CUSTOMER@TM30.COM.NG</td>
            <td>N1123SBE</td>
            <td><button>d</button></td>

          </tr>
        </table>
      </div>

    </Div>
  )
}

export default Acquires

const Div = styled.div `
  td {
    text-align: center;
  }
  tr:nth-child(odd) {
    background-color: #fafafa;
    /* background-color: #d2d4da; */
  }
 
`