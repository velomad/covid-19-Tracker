import React, { useState, useEffect } from "react";
import {
  Card,
  ListGroupItem,
  ListGroup,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import "./zoomhover.css";
import Axios from "axios";
import StateFusionChart from "./StateFusionChart";

const StateWiseContainer = (props) => {
  const [district, setdistrict] = useState({});

  useEffect(() => {
    Axios.get("https://api.covid19india.org/state_district_wise.json")
      .then((res) => setdistrict(res.data))
      .catch((err) => console.log(err));
  }, []);

  const newArr = district;

  const handleStateSelection = (val) => {
    console.log(newArr.TamilNadu);
    // console.log(Object.entries(newArr))
    for (var i in newArr) {
      // console.log(Object.keys(newArr[i]))
      // console.log(newArr[i])
    }
    // if(val === )
  };

  let test = props.stateInfo.lastupdatedtime;
  return (
    <div className="mt-4 zoom">
      <OverlayTrigger
        trigger="hover"
        trigger="hover"
        key="top"
        placement="top"
        overlay={
          <Popover id={`popover-positioned-top`}>
            <Popover.Title as="h2">Deep Dive</Popover.Title>

            <Popover.Content>
        <h6 className="mb-2" style={{backgroundColor:"#ccc", padding:"2px"}}>updated at {new Date(props.stateInfo.lastupdatedtime).toLocaleTimeString() }</h6>
              <StateFusionChart stateInfo={props.stateInfo} />
            </Popover.Content>
          </Popover>
        }
      >
        <Card
          onClick={() => handleStateSelection(props.stateInfo.state)}
          style={{ width: "18rem" }}
        >
          {/* <Card.Img
          variant="top"
          src="https://datavizcatalogue.com/methods/images/top_images/area_graph.png"
        /> */}
          <Card.Body>
            <Card.Title>{props.stateInfo.state}</Card.Title>
            <Card.Text>
              {/* <StateChart stateInfo={props.stateInfo} /> */}
            </Card.Text>
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
