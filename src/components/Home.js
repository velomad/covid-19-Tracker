import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import TimeUpdated from "./TimeUpdated";
import Stats from "./Stats";
import Axios from "axios";
import MiniChart from "./MiniChart";
import StateWise from "./StateWise";

const Home = () => {
  const [updatedAt, setUpdatedAt] = useState("");
  const [statsData, setStatsData] = useState("");
  const [stateWise, setStateWise] = useState([]);

  useEffect(() => {
    const API_URL = "https://api.covid19india.org/data.json";
    Axios.get(API_URL)
      .then((res) => {
        setUpdatedAt(res.data.statewise[0].lastupdatedtime);
        setStatsData(res.data.statewise[0]);
        setStateWise(res.data.statewise.slice(1, -1))
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home" style={{ overflowX: "hidden" }}>
      {console.log(statsData)}
      <Banner />
      <div className="row ml-3">
        <TimeUpdated updatedAt={updatedAt} />
      </div>
      <Stats statsData={statsData} />
      {/* <MiniChart /> */}
      <StateWise stateWise = {stateWise}/>
    </div>
  );
};

export default Home;
