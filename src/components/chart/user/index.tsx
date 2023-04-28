import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { Bar } from "react-chartjs-2";

export default function UserGraph() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const [data, setData] = React.useState({
    labels: labels,
    datasets: [
      {
        label: "Expenses by Month",
        data: [65],
        backgroundColor: ["rgb(153, 102, 255)"],
        borderColor: ["rgb(153, 102, 255)"],
        borderWidth: 1,
      },
      {
        label: "Expenses by Month",
        data: [65],
        backgroundColor: ["rgb(153, 102, 255)"],
        borderColor: ["rgb(153, 102, 255)"],
        borderWidth: 1,
      },
      {
        label: "Expenses by Month",
        data: [65],
        backgroundColor: ["rgb(153, 102, 255)"],
        borderColor: ["rgb(153, 102, 255)"],
        borderWidth: 1,
      },
    ],
  });
  return (
    <div>
      <Bar data={data} height={100} />
    </div>
  );
}
