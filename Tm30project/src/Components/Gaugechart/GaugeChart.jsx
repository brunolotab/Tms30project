
import React from "react";
import GaugeChart from "react-gauge-chart";

function GaugeaChart({ score}) {
  return (
    <div style={{ color: "black" }}>
      <GaugeChart
        id="gauge-chart3"
        nrOfLevels={3}
        colors={["#6AB36C", "#FDA333", "#EB615E"]}
        style={{
          width: "100%",
          height: "100%",
          transform: "translateY(20px)",
        }}
        textColor="#000"
        percent={score / 100}
      />
    </div>
 );}
export default GaugeaChart