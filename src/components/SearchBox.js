import React from "react";
import './searchbox.css';

export default class SearchBox extends React.Component {
  render() {
    return (
      <div className="container h-100 mb-5">
        <div className="d-flex justify-content-center h-100">
          <div className="searchbar">
            <input
              className="search_input"
              type="text"
              name=""
              placeholder="Search..."
            />
            <a href="#" className="search_icon">
              <i className="fas fa-search"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
