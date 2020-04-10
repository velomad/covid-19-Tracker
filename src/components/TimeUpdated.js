import React, { useState, useEffect } from "react";

const TimeUpdated = (props) => {
  return (
    <div className="time-updated ml-3 mt-3">
      <div
        style={{
          borderRadius: 5,
          opacity: 0.6,
          padding: "5px 10px 2px 10px",
          backgroundColor: "#a6f1a6",
        }}
      >
        <p style={{ fontSize: "20px", fontWeight: "bold" }}> UPDATED ON</p>
        <p>{props.updatedAt}</p>
      </div>
    </div>
  );
};

export default TimeUpdated;
