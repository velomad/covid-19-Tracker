
export default class MyChart extends React.Component {
    state = {
      chartXValues: [],
      chartYvalues: [],
      chartData: {
        labels: this.chartXValues,
        datasets: [
          {
            label: "Cases",
            data: this.chartYvalues,
            backgroundColor: ["rgba(255, 99, 132, 0.6)"]
          }
        ]
      }
    };
  
    async componentDidMount() {
      const response = await countrytableAPI.get(
        "/total/dayone/country/india/status/confirmed"
      );
      const tp = response.data;
      // console.log(tp);
      tp.map(elem => {
        this.setState({ chartXValues: elem.Date, chartYvalues: elem.Cases });
      });
    }
  
    render() {
      return (
        <div className="chart">
          <Line
            data={this.state.chartData}
            width={20}
            height={5}
            options={{
              title: {
                display: true,
                text: "Day Wise Confirm Cases"
              },
              legend: {
                display: true,
                position: "top"
              }
            }}
          />
        </div>
      );
    }
  }
  