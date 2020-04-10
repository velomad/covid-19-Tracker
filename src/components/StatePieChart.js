import React from "react";
import ReactApexChart from "react-apexcharts";

class StatePieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [],
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  componentDidMount(){
      const newarr = [100,45,78,96,1000]
      this.setState({series : newarr})
  }



  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width={380}
        />
      </div>
    );
  }
}

export default StatePieChart;
