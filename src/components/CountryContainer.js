import React from "react";

const CountryContainer = props => {
  return (
    <div className="card border-info mb-3" style={{ maxWidth: 250 }}>
      <div className="card-header">{props.containerName}</div>
      <div className="card-body">
        <h4 className="card-title">{props.children}</h4>
      </div>
    </div>
  );
};

export default CountryContainer;
