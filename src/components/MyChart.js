import React, { useState, useEffect } from "react";
import countrytableAPI from "../api/countrytableAPI";
import { Line } from "react-chartjs-2";

const MyChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let cases = [];
    let date = [];

    countrytableAPI
      .get("/total/dayone/country/india/status/confirmed")
      .then(res => {
        // console.log(res);
        for (const dataObj of res.data) {
          var test = dataObj.Date = new Date().toLocaleDateString()
          cases.push(parseInt(dataObj.Cases));
          date.push(test);
        }

          setChartData({
            labels: date,
            datasets: [
              {
                label: "CASES",
                data: cases,
                backgroundColor: ["rgba(110, 15, 192, 0.6)"],
                borderWidth: 4
              }
            ]
          });
        })
        .catch(err => {
          // console.log(err);
        });
      // console.log(empSal, empAge);
    };

    useEffect(() => {
      chart();
    }, []);
    return (
      <div className="App">
        <div>
          <Line
            data={chartData}
            options={{
              responsive: true,
              title: { text: "Date Wise Confirm Cases", display: true },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 10,
                      beginAtZero: true
                    },
                    gridLines: {
                      display: false
                    }
                  }
                ],
                xAxes: [
                  {
                    gridLines: {
                      display: false
                    }
                  }
                ]
              }
            }}
          />
        </div>
      </div>
    );
  };

export default MyChart;
