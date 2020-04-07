import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./banner.css";

const Banner = () => {
  const [msgs, setMsgs] = useState([
    "Be compassionate! Help those in need like the elderly and poor. They are facing a crisis which we can't even imagine!",
    "Be considerate. While buying essentials remember that you need to share with 130 crore fellow citizens!",
    "Going out to buy essentials? Social Distancing is KEY! Maintain at least 2 metres distance between each other in the line.",
  ]);
  const [displayMsg, setDisplayMsg] = useState(
    "Don't hoard groceries and essentials. Please ensure that people who are in need don't face a shortage because of you!"
  );

  useEffect(() => {
    const API_URL = "https://api.covid19india.org/website_data.json";
    Axios.get(API_URL)
      .then((res) =>
        res.data.factoids.map((msgs) => {
        //   console.log(msgs.banner);
        })
      )
      .catch((err) => console.log(err));

    msgs.forEach((item, index) => {
      setInterval(() => {
        setDisplayMsg(item);
      }, 5000 * (index + 1));
    });
  }, []);

  return (
    <div className="banner">
      <div className="text-black" style={{ lineHeight: "110px" }}>
        <p style={{ textAlign: "center" }}>{displayMsg}</p>
      </div>
    </div>
  );
};

export default Banner;
