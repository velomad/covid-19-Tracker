import React from "react";
import ReactApexChart from "react-apexcharts";

class StatePieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        props.stateInfo.confirmed,
        props.stateInfo.recovered,
        props.stateInfo.deaths,
      ],
      options: {
        chart: {
          height: 350,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: "22px",
              },
              value: {
                fontSize: "16px",
              },
              total: {
                show: true,
                label: "Total",
                formatter: function (w) {
                  if (props.stateInfo.confirmed) {
                    var confirmed = "Updated - " + new Date(props.stateInfo.lastupdatedtime).toLocaleTimeString() ;

                    return confirmed 
                  }
                },
              },
            },
          },
        },
        labels: ["Confirmed", "Recovered", "Deaths"],
      },
    };
  }

  render() {
    console.log("test");
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={320}
        />
      </div>
    );
  }
}
export default StatePieChart;
