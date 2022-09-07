import HighchartsReact from 'highcharts-react-official';
import axios from "axios";
import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";

const total =
  "https://api.github.com/repos/octocat/hello-world/stats/code_frequency";

function TotalChanges(props) {
    console.log("props", props);
    const [changes, setChanges] = useState([])

    useEffect(() => {
        axios.get(total).then((response) => {
            setChanges(response);
            console.log("change", response.data);
        })
    }, [])
    var videoGraphOptions = {
      chart: {
        height: 210,
        type: "spline",
        events: {
          load() {
            setTimeout(this.reflow.bind(this), 0);
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#ff0000", "#0000ff", "#00ff00", "fffacd"],
      title: {
        text: "",
      },
      subtitle: {
        text: "",
      },
      xAxis: {
        title: {
          text: "Time",
        },
        labels: {
          enabled: false,
        },
      },
      yAxis: {
        title: {
          text: "m/s²",
        },
      },
      series: [
        {
          name: "w",
          data: [
            0.1, 0.3, 0.4, -0.1, 0, 0.1, 0.3, 0.4, -0.1, 0, 0.1, 0.3, 0.4, -0.1,
            0,
          ],
        },
        {
          name: "a",
          data: [
            0, 4, 2, -3, 0, 0, 4, 2, -3, 0, 0, 4, 2, -3, 0, 0, 4, 2, -3, 0,
          ],
        },
        {
          name: "d",
          data: [-0.1, 0.5, 1, -2, 0, -0.1, 0.5, 1, -2, 0, -0.1, 0.5, 1, -2, 0],
        },
        {
          name: "c",
          data: [-0.1, 0.5, 1, -2, 0, -0.1, 0.5, 1, -2, 0, -0.1, 0.5, 10, -2, 0],
        },
      ],
      plotOptions: {
        series: {
          allowPointSelect: true,
          point: {
            events: {
              click: function () {},
            },
          },
        },
      },
      tooltip: {
        shared: true,

        y: [
          {
            title: {
              formatter: function (val) {
                return val + " (mins)";
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return val + " per session";
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return val;
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return val;
              },
            },
          },
        ],
      },
    };
  return (
    <HighchartsReact options={videoGraphOptions} highcharts={Highcharts} />
  )
}

export default TotalChanges