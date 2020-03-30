import React from "react";
import "./countrytable.css";
import SearchBox from "./SearchBox";
import CountryTable from './CountryTable';
import SummaryTable from "./SummaryTable";

const Home = () => {
  return (
    <div className="container mt-3">
      <SummaryTable />
      <SearchBox />
      <CountryTable />
    </div>
  );
};

export default Home;
