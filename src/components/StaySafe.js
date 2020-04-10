import React, { useState, useEffect } from "react";
import Axios from "axios";

const StaySafe = () => {
  const [msgList, setMsgList] = useState([]);

  useEffect(() => {
    Axios.get("https://api.covid19india.org/website_data.json")
      .then((res) => setMsgList(res.data.factoids))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
        <ol className="container mt-4">
            {msgList.map((msg,index) => (
                <li className="mt-5 text-muted" key={index}><p>{msg.banner}</p> </li>
            ))}
        </ol>
    </div>
  );
};

export default StaySafe;
