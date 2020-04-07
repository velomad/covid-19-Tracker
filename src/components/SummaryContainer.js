import React from "react";

const SummaryContainer = props => {
  return (
    <div className="card border-info mb-3" style={{ maxWidth: 250 }}>
      <div className="card-header">{props.containerName}</div>
      <div className="card-body">
        <h4 className="card-title">{props.children}</h4>
        <p className="card-text"></p>
      </div>
    </div>
  );
};

export default SummaryContainer;
