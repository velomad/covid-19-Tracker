import React from "react";
import SummaryContainer from "./SummaryContainer";
import SummaryContent from "./SummaryContent";
import CountryContent from "./CountryContent";
import CountryContainer from "./CountryContainer";

const SummaryTray = props => {
  return (
    <div>
      <div className="d-flex justify-content-around">
        <CountryContainer containerName="Country">
          <CountryContent containerData={props.country} />
        </CountryContainer>
        <SummaryContainer containerName="Total Confirmed">
          <SummaryContent containerData={props.totalConfirmed} />
        </SummaryContainer>
        <SummaryContainer containerName="Total Recovered">
          <SummaryContent containerData={props.totalRecovered} />
        </SummaryContainer>
        <SummaryContainer containerName="Total Deceased">
          <SummaryContent containerData={props.totalDeaths} />
        </SummaryContainer>
      </div>
    </div>
  );
};

export default SummaryTray;
