import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import data1 from "../Data/category1.json";
import data2 from "../Data/category2.json";
import data3 from "../Data/category3.json";

const LineChart = ({ category }) => {
  const [data, setData] = useState({
    labels: ["label 1", "label 2", "label 3", "label 4"],
    datasets: [
      {
        label: "Category 1",
        data: data1.data.map((x) => x[1]),
        tension: 0.5,
      },
      {
        label: "Category 2",
        data: data2.data.map((x) => x[1]),
        tension: 0.5,
      },
      {
        label: "Category 3",
        data: data3.data.map((x) => x[1]),
        tension: 0.5,
      },
    ],
  });

  useEffect(() => {
    if (category === "category1") {
      setData({
        labels: ["label 1", "label 2", "label 3", "label 4"],
        datasets: [
          {
            label: "Category 1",
            data: data1.data.map((x) => x[1]),
            tension: 0.5,
            borderColor: "rgb(227, 18, 18)",
            backgroundColor: "rgb(227, 18, 18)",
          },
        ],
      });
    } else if (category === "category2") {
      setData({
        labels: ["label 1", "label 2", "label 3", "label 4"],
        datasets: [
          {
            label: "Category 2",
            data: data2.data.map((x) => x[1]),
            tension: 0.5,
            borderColor: "rgb(6, 156, 207)",
            backgroundColor: "rgb(6, 156, 207)",
          },
        ],
      });
    } else if (category === "category3") {
      setData({
        labels: ["label 1", "label 2", "label 3", "label 4"],
        datasets: [
          {
            label: "Category 3",
            data: data3.data.map((x) => x[1]),
            tension: 0.5,
            borderColor: "rgb(43, 199, 4)",
            backgroundColor: "rgb(43, 199, 4)",
          },
        ],
      });
    } else {
      setData({
        labels: ["label 1", "label 2", "label 3", "label 4"],
        // labels: data1.data.map((x) => new Date(x[0]).toLocaleString("en-US")),
        datasets: [
          {
            label: "Category 1",
            data: data1.data.map((x) => x[1]),
            tension: 0.5,
            borderColor: "rgb(227, 18, 18)",
            backgroundColor: "rgb(227, 18, 18)",
          },
          {
            label: "Category 2",
            data: data2.data.map((x) => x[1]),
            tension: 0.5,
            borderColor: "rgb(6, 156, 207)",
            backgroundColor: "rgb(6, 156, 207)",
          },
          {
            label: "Category 3",
            data: data3.data.map((x) => x[1]),
            tension: 0.5,
            borderColor: "rgb(43, 199, 4)",
            backgroundColor: "rgb(43, 199, 4)",
          },
        ],
      });
    }
  }, [category]);
  return (
    <>
      <Line data={data} />
    </>
  );
};

export default LineChart;
