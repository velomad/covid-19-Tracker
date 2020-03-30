import React from 'react';

export default class SummaryTable extends React.Component {


    render(){
        return(
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
            <th scope="row">India</th>
            <td>52</td>
            <td>23</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
        );
    }
}