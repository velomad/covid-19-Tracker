import React, { useState, useEffect } from "react";

const TimeUpdated = (props) => {

  return (
    <div className="time-updated ml-3 mt-3">
        
      <div style={{borderRadius:5, opacity:0.6}} className="text-black bg-success">
        <p style={{ fontSize: "20px", fontWeight: "bold" }}> UPDATED AT - {props.updatedAt}</p>
      </div>
    </div>
  );
};

export default TimeUpdated;
