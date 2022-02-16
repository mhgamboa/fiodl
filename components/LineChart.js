import { Line } from "react-chartjs-2";
import autocolors from "chartjs-plugin-autocolors";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  autocolors
);

const options = {
  responsive: true,
  plugins: {
    autocolors,
    legend: {
      position: "bottom",
    },
    title: {
      display: false,
      text: "APR By Bank",
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

const shiftXAxis = (amountToShift, array) => {
  for (let x = 0; x < amountToShift; x++) {
    array.unshift(null);
  }
  return array;
};

const parseData = bankDataSet => {
  const labels = bankDataSet.discovers.rates.map((rateData, index) => {
    let d = new Date(rateData.createdAt);
    let day = d.getDate();
    let month = d.getMonth() + 1; //Months are zero based
    let year = d.getFullYear() - 2000;
    return `${day}-${month}-${year}`;
  });

  let datasets = [];

  for (let bank in bankDataSet) {
    let rates = bankDataSet[bank].rates.map(rateData => rateData.rate);

    let difference = labels.length - rates.length;
    if (difference > 0) {
      rates = shiftXAxis(difference, rates);
    }

    datasets.push({
      label: bank.charAt(0).toUpperCase() + bank.slice(1, bank.length - 1),
      data: rates,
      borderDash: bankDataSet[bank].type === "Fiat" ? [0, 0] : [10, 5],
    });
  }

  return { labels, datasets };
};

const LineChart = ({ bankData }) => {
  return (
    <section className="w-11/12 md:w-1/2">
      <Line options={options} data={parseData(bankData)} />
      <div className="w-full flex mt-5 text-slate-400 text-xs sm:text-sm">
        <p>*To support the site, affiliate links are used where possible</p>
      </div>
    </section>
  );
};

export default LineChart;
