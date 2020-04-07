import React, { useState, useEffect } from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import "./zoomhover.css";

const StateWiseContainer = (props) => {

  let test = props.stateInfo.lastupdatedtime;
  return (
    <div className="ml-5 mt-4 zoom">
      <Card style={{ width: "18rem" }}>
        <p className="text-success" style={{ fontWeight: 500 }}>
          updated at - {test}
        </p>
        {/* <Card.Img
          variant="top"
          src="https://datavizcatalogue.com/methods/images/top_images/area_graph.png"
        /> */}
        <Card.Body>
          <Card.Title>{props.stateInfo.state}</Card.Title>
          <Card.Text>
            testing
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Confirm : {props.stateInfo.confirmed}</ListGroupItem>
          <ListGroupItem>Recovered : {props.stateInfo.recovered}</ListGroupItem>
          <ListGroupItem>Deceased : {props.stateInfo.deaths}</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default StateWiseContainer;
