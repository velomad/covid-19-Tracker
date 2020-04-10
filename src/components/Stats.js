import React, { useState, useEffect } from "react";
import Axios from "axios";
import StateVisualization from "./StateVisualization";
import StateVisualizationActive from './StateVisualizationActive';
import StateVisualizationRecovered from './StateVisualizationRecovered';
import StateVusializationDeceased from './StateVusializationDeceased';


const Stats = (props) => {
  const [timeseries, settimeseries] = useState([]);

  useEffect(() => {
    Axios.get("https://api.covid19india.org/data.json")
      .then((res) => settimeseries(res.data.cases_time_series))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="stats row d-flex justify-content-around mt-5">
      <div className="data-block mr-5 ">
        <p className="text-danger" style={{ fontWeight: 700 }}>
          CONFIRMED
        </p>
        <p
          className="text-danger"
          style={{ textAlign: "center", fontWeight: 700, fontSize: 30 }}
        >
          {props.statsData.confirmed}
        </p><div>
          <StateVisualization timeseries={timeseries} animate={true}/>
        </div>
      </div>
      <div className="data-block">
        <p className="text-info" style={{ fontWeight: 700, textAlign:"center" }}>
          ACTIVE CASES
        </p>
        <p
          className="text-info"
          style={{ textAlign: "center", fontWeight: 700, fontSize: 30 }}
        >
          {props.statsData.active}
        </p>
        <div>
          <StateVisualizationActive timeseries={timeseries} animate={true}/>
        </div>
      </div>
      <div className="data-block">
        <p className="text-success" style={{ fontWeight: 700 }}>
          RECOVERED
        </p>
        <p
          className="text-success"
          style={{ textAlign: "center", fontWeight: 700, fontSize: 30 }}
        >
          {props.statsData.recovered}
        </p>
        <div>
          <StateVisualizationRecovered timeseries={timeseries} animate={true}/>
        </div>
      </div>
      <div className="data-block">
        <p className="text-secondary" style={{ fontWeight: 700 }}>
          DECEASED
        </p>
        <p
          className="text-secondary"
          style={{ textAlign: "center", fontWeight: 700, fontSize: 30 }}
        >
          {props.statsData.deaths}
        </p><div>
          <StateVusializationDeceased timeseries={timeseries} animate={true}/>
        </div>

      </div>
    </div>
  );
};

export default Stats;
