import React, { useState, useEffect } from "react";
import { Doughnut, Bar, Line, Pie } from "react-chartjs-2";
import trialData from "../data/patients.json";
import  'chartjs-plugin-datalabels';

const PatientDataGraph = (props) => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let hospitalized = [];
    let deceased = [];
    let recovered = [];
    let unknown = [];

    props.chartData.map((item) => {
      if (item.currentstatus === "Hospitalized") {
        hospitalized.push(item.currentstatus);
      } else if (item.currentstatus === "Deceased") {
        deceased.push(item.currentstatus);
      } else if (item.currentstatus === "Recovered") {
        recovered.push(item.currentstatus);
      }
       else {
        unknown.push(item.currentstatus);
      }
    });

    setChartData({
      labels: ["Hospitalized","Recovered", "Deceased", "unknown"],
      datasets: [
        {
          backgroundColor: ["#F2FB38", "#B6D0F7	", "#FF4F56	" ,"#CDD0D0"],
          hoverBackgroundColor: ["#CDD704", "#5190ED", "#FF030D", "#838B8B"],
          data: [hospitalized.length, deceased.length, recovered.length , unknown.length],
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
              plugins:{
                datalabels: {
                    display: true,
                    color: 'black',
                    font:200
                 },
              },
              title: { text: "Patient Current Status", display: true },
            //   scales: {
            //     yAxes: [
            //       {
            //         ticks: {
            //           autoSkip: true,
            //           maxTicksLimit: 10,
            //           beginAtZero: true
            //         },
            //         gridLines: {
            //           display: false
            //         }
            //       }
            //     ],
            //     xAxes: [
            //       {
            //         gridLines: {
            //           display: false
            //         }
            //       }
            //     ]
            //   }
            }}
        />
      </div>
    </div>
  );
};

export default PatientDataGraph;
