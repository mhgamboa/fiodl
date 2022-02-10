import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Interest Rates",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = () => {
  const datasets = [
    {
      label: "Discover",
      data: [1, 2, 3, 4, 5, 6, 7],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderDash: [10, 5],
    },
    {
      label: "Dataset 2",
      data: [-1, 0.5, -3, -4, -5, -6, -7],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ];

  return { labels, datasets };
};

const LineChart = () => {
  return (
    <div className="w-1/2">
      <Line options={options} data={data()} />
      <div className="w-full flex mt-5 text-slate-400 text-sm">
        <p>*To support the site, affiliate links are used wherever possible</p>
      </div>
    </div>
  );
};

export default LineChart;
