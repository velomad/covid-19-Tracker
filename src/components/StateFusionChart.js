// Step 1 - Include react
import React from "react";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


const StateFusionChart = (props) => {

  const Confirmed = props.stateInfo.confirmed
  const recovered = props.stateInfo.recovered
  const deaths = props.stateInfo.deaths


// Preparing the chart data
const chartData = [
  {
    label: "Confirmed",
    value: Confirmed,
  },
  {
    label: "Recovered",
    value: recovered,
  },
  {
    label: "Deseased",
    value: deaths,
  },
];

// Create a JSON object to store the chart configurations
const chartConfigs = {
  type: "area2d", // The chart type
  width: "250", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      theme: "fusion", //Set the theme for your chart
    },
    // Chart Data - from step 2
    data: chartData,
  },
};

return <ReactFC {...chartConfigs} />;


};


// STEP 4 - Creating the DOM element to pass the react-fusioncharts component

export default StateFusionChart;
