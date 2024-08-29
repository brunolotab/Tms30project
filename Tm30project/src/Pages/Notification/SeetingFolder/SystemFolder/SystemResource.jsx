import React from "react";
import GaugeaChart from "../../../../Components/Gaugechart/GaugeChart";
// import GaugeChart from "react-gauge-chart";

function SystemResource() {
  return (
    <div>
      <GaugeaChart score={230}/>
      <GaugeaChart score={45}/>
      <GaugeaChart score={90}/>
    </div>
  )
}
export default SystemResource