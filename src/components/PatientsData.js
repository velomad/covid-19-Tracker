import React, { useState, useEffect } from "react";
import PatientsDataTable from "./PatientDataTable";
import PatientDataGraph from "./PatientDataGraph";
import PatientCurrentStatusGraph from "./PatientCurrentStatusGraph";
import PatientTransmissionTypeGraph from "./PatientTransmissionTypeGraph";
import PatientBlock from "./PatientBlock";
import Axios from "axios";
import Banner from "./Banner";


const PatientsData = () => {
  const [renderTable, setRenderTable] = useState(false);
  const [selectOption, setSelectOption] = useState("select"); //for setting state of graph
  const [patientData, setPatientData] = useState([]);
  const [popoverData, setPopoverData] = useState([]);

  useEffect(() => {
    const PATIENT_URL = "https://api.covid19india.org/raw_data.json";
    Axios.get(PATIENT_URL)
      .then((res) => {
        setPatientData(res.data.raw_data.reverse());
        setPopoverData(res.data.raw_data);
      })
      .catch((err) => console.log(err));
  }, []);

  const renderTableF = () => {
    setRenderTable(!renderTable);
    setSelectOption(!selectOption);
  };

  const handleSelectChange = (e) => {
    e.preventDefault();
    setSelectOption(e.target.value);
    setRenderTable(false);
  };

  return (
    <div>
      <Banner />
      <div className="container mt-4">
        <div className="row">
          <button
            onClick={renderTableF}
            className="btn btn-outline-primary cc_pointer"
          >
            Show Tabular Data
          </button>

          <select
            className="ml-auto btn btn-outline-primary dropdown-toggle"
            onChange={handleSelectChange}
            value={selectOption}
          >
            <option value="Select">--Select--</option>
            <option value="genderwise">Gender Wise Data</option>
            <option value="currentstatus">Current Status</option>
            <option value="transmissiontype">Type of Transmission</option>
          </select>
        </div>
        <div className="row">
          <footer className="blockquote-footer mt-2">For Old Niggas</footer>
          <footer className="blockquote-footer ml-auto mt-2">
            For Modern Niggas
          </footer>
        </div>
        <div className="data-container">
          {renderTable && <PatientsDataTable patientData={patientData} />}
          {selectOption === "genderwise" && (
            <PatientDataGraph chartData={patientData} />
          )}
          {selectOption === "currentstatus" && (
            <PatientCurrentStatusGraph chartData={patientData} />
          )}
          {selectOption === "transmissiontype" && (
            <PatientTransmissionTypeGraph chartData={patientData} />
          )}
          <PatientBlock patientData={patientData} popoverData={popoverData} />

        </div>
      </div>
    </div>
  );
};

export default PatientsData;
