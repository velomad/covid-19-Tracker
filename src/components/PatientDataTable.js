import React, { useState } from "react";
import trialData from "../data/patients.json";

const PatientsDataTable = (props) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const [rowLimit, setRowLimit] = useState(10);
  const [sortTable, setSortTable] = useState(props.patientData);

  const handleShowMore = () => {
    setIsShowMore(true);
    setRowLimit(rowLimit + 10);
  };

  const sortDesc = () => {
    setSortTable(sortTable.sort());
    console.log(sortTable);
  };

  return (
    <div className="page">
      <div
        className="container mt-4"
        style={{ height: 600, overflowY: "auto", msOverflowStyle: "none" }}
      >
        <table className="table">
          <thead>
            <tr>
              <th onClick={sortDesc} scope="col">
                Patient Number
              </th>
              <th scope="col">Gender</th>
              <th scope="col">Age Bracket</th>
              <th scope="col">Nationality</th>
              <th scope="col">Current Status</th>
              <th scope="col">Detected State</th>
              <th scope="col">Detected City</th>
              <th scope="col">Type of Transmission</th>
            </tr>
          </thead>
          <tbody>
            {sortTable.slice(0, rowLimit).map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.patientnumber}</th>
                <td>{item.gender === "" ? "-" : item.gender}</td>
                <td>{item.agebracket === "" ? "-" : item.agebracket}</td>
                <td>
                  {item.nationality === "" ? "Unknown" : item.nationality}
                </td>
                <td>
                  {item.currentstatus === "" ? "Unknown" : item.currentstatus}
                </td>
                <td>
                  {item.detectedstate === "" ? "Unknown" : item.detectedstate}
                </td>
                <td>
                  {item.detectedcity === "" ? "Unknown" : item.detectedcity}
                </td>
                <td>
                  {item.typeoftransmission === ""
                    ? "Unknown"
                    : item.typeoftransmission}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        className="container mt-5 d-flex justify-content-around"
        style={{ textAlign: "center" }}
      >
        <button onClick={handleShowMore} className="btn btn-primary">
          {isShowMore === false ? "Show More" : "More 10 +"}
        </button>
      </div>
    </div>
  );
};

export default PatientsDataTable;
