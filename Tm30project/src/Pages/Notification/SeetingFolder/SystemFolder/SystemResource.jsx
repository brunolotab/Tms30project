import React from "react";
import styled from 'styled-components'
import GaugeaChart from "../../../../Components/Gaugechart/GaugeChart";
import SystemFrequency from "./SystemFrequency";
// import GaugeChart from "react-gauge-chart";

function SystemResource() {
  return (
    <Div>
      <div className="my-4">SYSTERM RESOURCES</div>
      <div className="mb-5">set a notification trigger for each metrics</div>

      <div className="border leading-7 p-4 mb-3">
        <div style={{ fontFamily: 'semiBoldFont' }}>Memory Usage</div>
        <div>Send trigger notification for memory usage at medium and high risk</div>
        <div className="chart">
          <div className="w-[35rem]"><GaugeaChart score={230} /></div>
          <div>
            <div><SystemFrequency /></div>
            <div className="mt-[3rem]"><SystemFrequency /></div>
          </div>
        </div>
      </div>
      <div className="border leading-7 p-4 mb-3">
        <div style={{ fontFamily: 'semiBoldFont' }}>CPU Usage </div>
        <div>Send trigger notification for memory usage at medium and high risk</div>
        <div className="chart">
          <div className="w-[35rem]"><GaugeaChart score={90} /></div>
          <div>
            <div><SystemFrequency /></div>
            <div className="mt-[3rem]"><SystemFrequency /></div>
          </div>
        </div>
      </div>
      <div className="border leading-7 p-4 mb-3">
        <div style={{ fontFamily: 'semiBoldFont' }}>Server Usage</div>
        <div>Send trigger notification for memory usage at medium and high risk</div>
        <div className="chart">
          <div className="w-[35rem]"><GaugeaChart score={45} /></div>
          <div>
            <div><SystemFrequency /></div>
            <div className="mt-[3rem]"><SystemFrequency /></div>
          </div>
        </div>
      </div>


    </Div>
  )
}
export default SystemResource

const Div = styled.div`
padding-left: 2rem;
font-size: 14px;
  .chart {
    width: 55rem;
    /* height: 30rem; */
    margin-top: 2rem;
    line-height: 1.5rem;
    display: flex;
    gap: 2rem;
    margin-left: -4rem;
  }
`