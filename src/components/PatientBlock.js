import React, { useState, useEffect } from "react";
import "./patientblock.css";
import { Popover, OverlayTrigger } from "react-bootstrap";
import "./shadowhover.css";

const PatientBlock = (props) => {
  const [limit, setLimit] = useState(27);
  const [isShowMore, setIsShowMore] = useState(false);

  const handleShowMore = () => {
    setIsShowMore(true);
    setLimit(limit + 27);
  };

  return (
    <div>
      <div className="mt-5 row">
        <h4>Patient Numbers</h4>
        <p className="ml-4" style={{ fontSize: 20 }}>
          Male -
        </p>
        <div
          className="patient-block ml-2 row"
          style={{ height: 30, width: 80 }}
        ></div>
        <p className="ml-4" style={{ fontSize: 20 }}>
          Female -
        </p>
        <div
          className="patient-block ml-2 row"
          style={{ height: 30, width: 80, backgroundColor: "red" }}
        ></div>

        <div className="text-center mt-5">
          <p style={{ color: "#6b5b95" }}>
            It is important that we do not think of these as just tiny boxes,
            numbers, or just another part of statistics - among these are our
            neighbors, our teachers, our healthcare workers, our supermarket
            vendors, our friends, our co-workers, our children or our
            grandparents. Among these are our people.
          </p>
        </div>

        <div>
        </div>
      </div>

      <div className="mt-5 row">
        {props.patientData.slice(0, limit).map((item, index) =>
          item.gender === "F" ? (
            <OverlayTrigger
              trigger="hover"
              key="top"
              placement="top"
              overlay={
                <Popover id={`popover-positioned-top`}>
                  <Popover.Title as="h2">
                    Patient Number :{" "}
                    {item.patientnumber === "" ? " --- " : item.patientnumber}
                  </Popover.Title>
                  <Popover.Title as="h3">
                    Date Announced :{" "}
                    {item.dateannounced === "" ? " --- " : item.dateannounced}
                  </Popover.Title>

                  <Popover.Content>
                    <div className="popover-content">
                      <p>
                        Gender : {item.gender === "" ? " --- " : item.gender}
                      </p>
                      <p>
                        Current Status :{" "}
                        {item.currentstatus === ""
                          ? " --- "
                          : item.currentstatus}
                      </p>
                      <p>
                        Detected State :{" "}
                        {item.detectedstate === ""
                          ? " --- "
                          : item.detectedstate}
                      </p>
                      <p>
                        Detected City :{" "}
                        {item.detectedcity === "" ? " --- " : item.detectedcity}
                      </p>
                    </div>
                  </Popover.Content>
                </Popover>
              }
            >
              <div
                // onClick={() => displayShowModal(index)}
                // onClick={() => fetchPatientData(index)}
                key={index}
                style={{ backgroundColor: "red" }}
                className="patient-block mr-4 mt-4 box"
              >
                <p className="zoom" style={{ color: "white" }}>
                  {item.patientnumber ? item.patientnumber : "---"}
                </p>
              </div>
            </OverlayTrigger>
          ) : (
            <OverlayTrigger
              trigger="hover"
              key="top"
              placement="top"
              overlay={
                <Popover id={`popover-positioned-top`}>
                  <Popover.Title as="h2">
                    Patient Number :{" "}
                    {item.patientnumber === "" ? " --- " : item.patientnumber}
                  </Popover.Title>
                  <Popover.Title as="h3">
                    Date Announced :{" "}
                    {item.dateannounced === "" ? " --- " : item.dateannounced}
                  </Popover.Title>

                  <Popover.Content>
                    <div className="popover-content">
                      <p>
                        Gender : {item.gender === "" ? " --- " : item.gender}
                      </p>
                      <p>
                        Current Status :{" "}
                        {item.currentstatus === ""
                          ? " --- "
                          : item.currentstatus}
                      </p>
                      <p>
                        Detected State :{" "}
                        {item.detectedstate === ""
                          ? " --- "
                          : item.detectedstate}
                      </p>
                      <p>
                        Detected City :{" "}
                        {item.detectedcity === "" ? " --- " : item.detectedcity}
                      </p>
                    </div>
                  </Popover.Content>
                </Popover>
              }
            >
              <div
                // onClick={() => fetchPatientData(index)}
                key={index}
                className="patient-block mr-4 mt-4 box"
              >
                <p style={{ color: "white" }}>
                  {item.patientnumber ? item.patientnumber : "---"}
                </p>
              </div>
            </OverlayTrigger>
          )
        )}
      </div>
      <div className="container mt-5 " style={{ textAlign: "center" }}>
        <button onClick={handleShowMore} className="btn btn-primary">
          {isShowMore === false ? "Show More" : "Show More 27 +"}
        </button>
      </div>
    </div>
  );
};

export default PatientBlock;
