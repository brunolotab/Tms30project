import React from 'react'
import styled from 'styled-components'
import HSMnav from './HSMnav'
import Navbar from '../../Components/Navbar'

function Hsm() {
  return (
    <Div >
      <Navbar/>
      <div className='flex justify-between align-middle bg-white p-3 border border-l-0 border-b-slate-200 border-t-0 px-6'  >
        <div className='font-bold'>Hardware Security Module (HSM)</div>
        <div><button className='bg-color1 p-6 py-2 rounded-[10px] text-sidebar font-bold '> + Add New HSM</button></div>
      </div>
      <div className='text-[13px]'>
        <table className='leading-5 w-[100%] h-[100vh]'>
          <tr className=' bg-color1 '  style={{fontFamily:'semiBoldFont'}}>
            <th>HSM ID </th> 
            <th>HSM NAME </th> 
            <th>HSM IP ADDRESS </th>
            <th>HSM PORT NO </th>
            <th>HSM TYPE </th>
            <th>HSM DESCRIPTION </th>
          </tr>
          <tr>
            <td>James Adekola</td>
            <td>N1123SBE</td>
            <td>TMS23SBE</td>
            <td>0911</td>
            <td>CLOUD HSM</td>
            <td>UP CLOUD HSM 32113</td>

          </tr>
          <tr>
            <td>Shola Adeniyi</td>
            <td>N1123SBE</td>
            <td>TMS23SBE</td>
            <td>0914</td>
            <td>THALES HSM</td>
            <td>UP CLOUD HSM 32113</td>


          </tr>
          <tr>
            <td>Shola Adeniyi</td>
            <td>N1123SBE</td>
            <td>TMS23SBE</td>
            <td>0911</td>
            <td>CLOUD HSM</td>
            <td>UP CLOUD HSM 32113</td>


          </tr>
          <tr>
            <td>Shola Adeniyi</td>
            <td>N1123SBE</td>
            <td>TMS23SBE</td>
            <td>0914</td>
            <td>CLOUD HSM</td>
            <td>UP CLOUD HSM 32113</td>


          </tr>
          <tr>
            <td>Tayo Temitope</td>
            <td>N1123SBE</td>
            <td>TMS23SBE</td>
            <td>9861</td>
            <td>CLOUD HSM</td>
            <td>UP CLOUD HSM 32113</td>


          </tr>
          <tr>
            <td>Tayo Temitope</td>
            <td>N1123SBE</td>
            <td>TMS23SBE</td>
            <td>9832</td>
            <td>CLOUD HSM</td>
            <td>UP CLOUD HSM 32113</td>


          </tr>
          <tr>
            <td>Shola Adeniyi</td>
            <td>N1123SBE</td>
            <td>TMS23SBE</td>
            <td>8978</td>
            <td>CLOUD HSM</td>
            <td>UP CLOUD HSM 32113</td>


          </tr>
          <tr>
            <td>Shola Adeniyi</td>
            <td>N1123SBE</td>
            <td>TMS23SBE</td>
            <td>1128</td>
            <td>CLOUD HSM</td>
            <td>UP CLOUD HSM 32113</td>


          </tr>
          <tr>
            <td>Shola Adeniyi</td>
            <td>N1123SBE</td>
            <td>TMS23SBE</td>
            <td>1123</td>
            <td>CLOUD HSM</td>
            <td>UP CLOUD HSM 32113</td>


          </tr>
        </table>
        <HSMnav/>
        
      </div>

    </Div>
  )
}

export default Hsm

const Div = styled.div `
  td {
    text-align: center;
  }
  tr:nth-child(odd) {
    background-color: #fafafa;
  }
  tr th {
    width: 160rem;

  }
`