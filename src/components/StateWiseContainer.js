import React, { useState, useEffect } from "react";
import StateChart from './StateChart';
import {
  Card,
  ListGroupItem,
  ListGroup,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import "./zoomhover.css";
import Axios from "axios";

const StateWiseContainer = (props) => {
  const [district, setdistrict] = useState({});

  useEffect(() => {
    Axios.get("https://api.covid19india.org/state_district_wise.json")
      .then((res) => setdistrict(res.data))
      .catch((err) => console.log(err));
  },[]);

  const newArr = district

  const handleStateSelection = (val) => {
  console.log(newArr.TamilNadu)
    // console.log(Object.entries(newArr))
    for(var i in newArr){
      // console.log(Object.keys(newArr[i]))
      // console.log(newArr[i])
    }
    // if(val === )
  }

  let test = props.stateInfo.lastupdatedtime;
  return (
    <div className="ml-5 mt-4 zoom">
      <OverlayTrigger
        trigger="hover"
        trigger="focus"
        key="top"
        placement="top"
        overlay={
          <Popover id={`popover-positioned-top`}>
            <Popover.Title as="h2">District Data</Popover.Title>

            <Popover.Content>
                <div className="popover-content row">
                  <p className="col-lg-6">Current Status : </p>
                  <p className="col-lg-6">Detected State : 20</p>
                  <p className="col-lg-6">Detected State : 20</p>
                  <p className="col-lg-6">Detected State : 20</p>
                </div>
            </Popover.Content>
          </Popover>
        }
      >
        <Card onClick={()=> handleStateSelection(props.stateInfo.state)} style={{ width: "18rem" }}>
          <p className="text-success" style={{ fontWeight: 500 }}>
            updated at - {test}
          </p>
          {/* <Card.Img
          variant="top"
          src="https://datavizcatalogue.com/methods/images/top_images/area_graph.png"
        /> */}
          <Card.Body>
            <Card.Title>{props.stateInfo.state}</Card.Title>
            <Card.Text><StateChart stateInfo={props.stateInfo}/></Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Confirm : {props.stateInfo.confirmed}</ListGroupItem>
            <ListGroupItem>
              Recovered : {props.stateInfo.recovered}
            </ListGroupItem>
            <ListGroupItem>Deceased : {props.stateInfo.deaths}</ListGroupItem>
          </ListGroup>
        </Card>
      </OverlayTrigger>
    </div>
  );
};

export default StateWiseContainer;
