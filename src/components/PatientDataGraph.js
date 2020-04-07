import React, { useState, useEffect } from "react";
import { Doughnut, Bar, Line } from "react-chartjs-2";

const PatientDataGraph = (props) => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let male = [];
    let female = [];
    let unknown = [];

    props.chartData.map((item) => {
      if (item.gender === "M") {
        male.push(item.gender);
      } else if (item.gender === "F") {
        female.push(item.gender);
      } else {
        unknown.push(item.gender);
      }
    });
    console.log(male.length);

    setChartData({
      labels: ["female", "male", "unknown"],
      datasets: [
        {
          backgroundColor: ["#EB99FF", "#B6D0F7	", "#CDD0D0"],
          hoverBackgroundColor: ["#CC00FF", "#5190ED", "#838B8B"],
          data: [female.length, male.length, unknown.length],
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="App">
      <div>
        <Doughnut
          data={chartData}
            options={{
              responsive: true,
              title: { text: "Gender Wise Confirm Cases", display: true }
          //     scales: {
          //       yAxes: [
          //         {
          //           ticks: {
          //             autoSkip: true,
          //             maxTicksLimit: 10,
          //             beginAtZero: true
          //           },
          //           gridLines: {
          //             display: false
          //           }
          //         }
          //       ],
          //       xAxes: [
          //         {
          //           gridLines: {
          //             display: false
          //           }
          //         }
          //       ]
          //     }
            }}
        />
      </div>
    </div>
  );
};

export default PatientDataGraph;
