import React from "react";

export default class CountryTable extends React.Component {
  
  render() {
    return (
      <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Country</th>
            <th scope="col">Confirm Cases</th>
            <th scope="col">Recovered</th>
            <th scope="col">Deceased</th>
          </tr>
        </thead>
        <tbody>
          {this.props.filterCovidData.map((item, index) => (
            <tr key={index} onClick={this.handleCountryClick} style={{}}>
              <th className="countryName" refs="hello" scope="row">{item.Country}</th>
              <td>{item.TotalConfirmed}</td>
              <td>{item.TotalRecovered}</td>
              <td>{item.TotalDeaths}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button className="btn btn-info" onClick={this.props.showMore}>
        more
      </button> */}
      </div>
    );
  }
}
