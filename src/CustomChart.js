import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import data from "./data.js";

let getLineConfig = color => ({
  //fill: false,
  // isStacked: true,
  lineTension: 0.1,
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: "miter",
  pointBorderWidth: 4,
  pointHoverRadius: 5,
  pointHoverBorderWidth: 4,
  pointRadius: 4,
  pointHitRadius: 10,
  backgroundColor: `rgba(${color},0.1)`,
  borderColor: `rgba(${color},1)`,
  pointBorderColor: `rgba(${color},1)`,
  pointHoverBackgroundColor: `white`,
  pointBackgroundColor: `white`
});

const chartData = {
  labels: data.map(item => new Date(item.date)),
  datasets: [
    {
      ...getLineConfig("239, 115, 60"),
      label: "1",
      data: data.map(item => item.index_statistics[0]["Sprint 1"])
    },
    {
      ...getLineConfig("0, 200, 237"),
      label: "2",
      data: data.map(item => item.index_statistics[0]["Sprint 2"] + item.index_statistics[0]["Sprint 1"])
    },
    {
      ...getLineConfig("54, 80, 135"),
      label: "3",
      data: data.map(item => item.index_statistics[0]["Sprint 3"] + item.index_statistics[0]["Sprint 2"] + item.index_statistics[0]["Sprint 1"])
    },
    {
        ...getLineConfig("54, 80, 135"),
        label: "4",
        data: data.map(item => item.index_statistics[0]["Sprint 4"] + item.index_statistics[0]["Sprint 3"] + item.index_statistics[0]["Sprint 2"] + item.index_statistics[0]["Sprint 1"])
      },
      {
        ...getLineConfig("54, 10, 135"),
        label: "5",
        data: data.map(item => item.index_statistics[0]["Sprint 5"] + item.index_statistics[0]["Sprint 4"] + item.index_statistics[0]["Sprint 3"] + item.index_statistics[0]["Sprint 2"] + item.index_statistics[0]["Sprint 1"])
      },
      {
        ...getLineConfig("54, 80, 20"),
        label: "6",
        data: data.map(item => item.index_statistics[0]["Sprint 6"] + item.index_statistics[0]["Sprint 5"] + item.index_statistics[0]["Sprint 4"] + item.index_statistics[0]["Sprint 3"] + item.index_statistics[0]["Sprint 2"] + item.index_statistics[0]["Sprint 1"])
      },
      {
        ...getLineConfig("54, 80, 40"),
        label: "7",
        data: data.map(item => item.index_statistics[0]["Sprint 7"] + item.index_statistics[0]["Sprint 6"] + item.index_statistics[0]["Sprint 5"] + item.index_statistics[0]["Sprint 4"] + item.index_statistics[0]["Sprint 3"] + item.index_statistics[0]["Sprint 2"] + item.index_statistics[0]["Sprint 1"])
      }
      
  ]
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        },
        display: true,
        scaleLabel: {
          display: true,
          labelString: "NDVI"
        }
      }
    ],
    xAxes: [
      {
        type: "time",
        display: true
      }
    ]
  }
};

export default class CustomChart extends Component {
  render() {
    return (
      <div>
        <h2>NDVI Statistics</h2>
        <Line ref="chart" data={chartData} options={options} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
    console.log(datasets[0].data);
  }
}
