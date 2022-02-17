import { useState, useEffect } from "react";

const List = ({ bankData }) => {
  const [currentRates, setCurrentRates] = useState([]);

  useEffect(() => {
    for (let bank in bankData) {
      const currentRate = bankData[bank].rates.at(-1).rate;
      bank = bank.charAt(0).toUpperCase() + bank.slice(1, bank.length - 1);
      setCurrentRates(currentRatesArray => [...currentRatesArray, { bank, currentRate }]);
    }
  }, []);

  // console.log(currentRates);
  return (
    <section className="currentRates flex flex-col w-11/12 md:w-1/2">
      {currentRates.map((RateData, index) => {
        return (
          <div key={index} className="w-full flex justify-between">
            <div>{RateData.bank}</div>
            <div>{RateData.currentRate}%</div>
          </div>
        );
      })}
    </section>
  );
};

export default List;
