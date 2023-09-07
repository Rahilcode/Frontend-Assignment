// src/components/BubbleChart.js
import React, { useState, useEffect } from "react";
import { Bubble } from "react-chartjs-2";
import data1 from "../Data/category1.json";
import data2 from "../Data/category2.json";
import data3 from "../Data/category3.json";
let value1 = data1.data.map((x) => x[1]);
let value2 = data2.data.map((x) => x[1]);
let value3 = data3.data.map((x) => x[1]);
let time1 = data1.data.map((x) => x[0]);
let time2 = data2.data.map((x) => x[0]);
let time3 = data3.data.map((x) => x[0]);
let total = [...value1, ...value2, ...value3];
let totaltime = [...time1, ...time2, ...time3];

const BubbleChart = ({ category }) => {
  const [bub, setBub] = useState([]);
  const [data, setData] = useState({ datasets: [{}] });

  const median = (arr) => {
    const mid = Math.floor(arr.length / 2),
      nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };
  useEffect(() => {
    let cat1a = value1.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    let cat2a = value2.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    let cat3a = value3.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    let cat1at = time1.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    let cat2at = time2.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    let cat3at = time3.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    let cat1m = median(value1);
    let cat2m = median(value2);
    let cat3m = median(value3);
    let cat1mt = time1[value1.indexOf(cat1m)];
    let cat2mt = time2[value2.indexOf(cat2m)];
    let cat3mt = time3[value3.indexOf(cat3m)];
    console.log(time1[value1.indexOf(cat1m)], "ver");
    let tot1a = total.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    let tot1at = totaltime.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    console.log(cat1m, cat2m, cat3m, cat1mt, cat2mt, cat3mt);
    if (category === "category1") {
      setData({
        datasets: [
          {
            label: "cat1a",
            data: [{ x: cat1a, y: cat1at, r: 5 }],
            backgroundColor: "rgba(232, 101, 7, 0.6)",
          },
          {
            label: ["cat1m"],
            data: [{ x: cat1m, y: cat1mt, r: 5 }],
            backgroundColor: "rgba(201, 13, 6, 0.6)",
          },
        ],
      });
    } else if (category === "category2") {
      setData({
        datasets: [
          {
            label: ["cat2a"],
            data: [{ x: cat2a, y: cat2at, r: 5 }],
            backgroundColor: "rgba(248, 252, 3, 0.6)",
          },
          {
            label: ["cat2m"],
            data: [{ x: cat2m, y: cat2mt, r: 5 }],
            backgroundColor: "rgba(98, 252, 3, 0.6)",
          },
        ],
      });
    } else if (category === "category3") {
      setData({
        datasets: [
          {
            label: ["cat3a"],
            data: [{ x: cat3a, y: cat3at, r: 5 }],
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
          {
            label: ["cat3m"],
            data: [{ x: cat3m, y: cat3mt, r: 5 }],
            backgroundColor: "rgba(4, 141, 214, 0.6)",
          },
        ],
      });
    } else {
      setData({
        datasets: [
          {
            label: ["cat1a"],
            data: [{ x: cat1a, y: cat1at, r: 5 }],
            backgroundColor: "rgba(232, 101, 7, 0.6)",
          },
          {
            label: ["cat1m"],
            data: [{ x: cat1m, y: cat1mt, r: 5 }],
            backgroundColor: "rgba(201, 13, 6, 0.6)",
          },
          {
            label: ["cat2a"],
            data: [{ x: cat2a, y: cat2at, r: 5 }],
            backgroundColor: "rgba(248, 252, 3, 0.6)",
          },
          {
            label: ["cat2m"],
            data: [{ x: cat2m, y: cat2mt, r: 5 }],
            backgroundColor: "rgba(98, 252, 3, 0.6)",
          },
          {
            label: ["cat3a"],
            data: [{ x: cat3a, y: cat3at, r: 5 }],
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
          {
            label: ["cat3m"],
            data: [{ x: cat3m, y: cat3mt, r: 5 }],
            backgroundColor: "rgba(4, 141, 214, 0.6)",
          },
          {
            label: ["tot1a"],
            data: [{ x: tot1a, y: tot1at, r: 5 }],
            backgroundColor: "rgba(158, 4, 214, 0.6)",
          },
        ],
      });
    }
  }, [category]);
  console.log(bub);

  return (
    <div className="bubble-chart">
      <Bubble data={data} />
    </div>
  );
};

export default BubbleChart;
