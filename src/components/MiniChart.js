import React from "react";
import PieChart from "react-minimal-pie-chart";

const MiniChart = () => {
  return (
    <div className="mini-chart">
      <div>
        <PieChart
        label="test"
          data={[
            { title: "One", value: 10, color: "#E38627" },
            { title: "Two", value: 15, color: "#C13C37" },
            { title: "Three", value: 20, color: "#6A2135" },
          ]}
        />
        ;
      </div>
    </div>
  );
};

export default MiniChart;
