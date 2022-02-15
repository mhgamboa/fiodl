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
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  hover: {
    mode: "index",
    intersect: false,
  },
};

const parseData = bankDataSet => {
  const labels = bankDataSet.dates.map(date => {
    let d = new Date(date);
    let day = d.getDate();
    let month = d.getMonth() + 1; //Months are zero based
    let year = d.getFullYear() - 2000;
    return `${day}-${month}-${year}`;
  });

  console.log(bankDataSet);
  let datasets = [];

  for (let bank in bankDataSet) {
    if (bank === "dates") continue;
    console.log(bankDataSet[bank]);
    datasets.push({
      label: bank,
      data: bankDataSet[bank].rates,
      borderDash: bankDataSet[bank].type === "Fiat" ? [0, 0] : [10, 5],
    });
  }

  return { labels, datasets };
};

const LineChart = ({ bankData }) => {
  return (
    <div className="w-1/2">
      <Line options={options} data={parseData(bankData)} />
      <div className="w-full flex mt-5 text-slate-400 text-sm">
        <p>*To support the site, affiliate links are used wherever possible</p>
      </div>
    </div>
  );
};

export default LineChart;
