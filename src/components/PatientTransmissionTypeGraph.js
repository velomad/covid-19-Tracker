import React, { useState, useEffect } from "react";
import { Doughnut, Bar, Line, Pie } from "react-chartjs-2";
import trialData from "../data/patients.json";
import  'chartjs-plugin-datalabels';

const PatientTransmissionTypeGraph = (props) => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let imported = [];
    let local = [];
    let tbd = [];
    let unknown = [];

    props.chartData.map((item) => {
      if (item.typeoftransmission === "Imported") {
        imported.push(item.typeoftransmission);
      } else if (item.typeoftransmission === "Local") {
        local.push(item.typeoftransmission);
      } else if (item.typeoftransmission === "TBD") {
        tbd.push(item.typeoftransmission);
      }
       else {
        unknown.push(item.typeoftransmission);
      }
    });

    setChartData({
      labels: ["Importd","Local", "To Be Decided", "Unknown"],
      datasets: [
        {
          backgroundColor: ["#F2FB38", "#B6D0F7	", "#FF4F56	" ,"#CDD0D0"],
          hoverBackgroundColor: ["#CDD704", "#5190ED", "#FF030D", "#838B8B"],
          data: [imported.length, local.length, tbd.length , unknown.length],
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
        <Pie
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
              title: { text: "Type of Transmission", display: true },
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

export default PatientTransmissionTypeGraph;
