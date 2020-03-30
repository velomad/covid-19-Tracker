import React from "react";
import countrytableAPI from "../api/countrytableAPI";

export default class CountryTable extends React.Component {
  state = {
    country: "",
    totalConfirmed: "",
    totalRecovered: "",
    totalDeaths: ""
  };

  componentDidMount() {
    countrytableAPI
      .get("/summary")
      .then(resp =>
        this.setState({
          country: resp.data.Countries[96].Country,
          totalConfirmed: resp.data.Countries[96].TotalConfirmed,
          totalRecovered: resp.data.Countries[96].TotalRecovered,
          totalDeaths: resp.data.Countries[96].TotalDeaths,
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
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
          <tr>
            <th scope="row">{this.state.country}</th>
            <td>{this.state.totalConfirmed}</td>
            <td>{this.state.totalRecovered}</td>
            <td>{this.state.totalDeaths}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
