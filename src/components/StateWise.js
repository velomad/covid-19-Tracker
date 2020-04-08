import React from "react";
import StateWiseContainer from "./StateWiseContainer";

const StateWise = (props) => {
  // console.log(props)
  return (
    <div className=" ml-4 row">
      {props.stateWise.map((state, index) => {
        return (
          <StateWiseContainer key={index} stateInfo = {state}/>
        )
      })}  
    </div>
  );
};

export default StateWise;
