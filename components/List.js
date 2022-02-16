import { useState } from "react";

const List = ({ bankData }) => {
  const [currentRates, setCurrentRates] = useState([]);

  // for (let bank in bankData) {
  //   const rates = bankData[bank].rates;

  //   setCurrentRates(currentRates.push("hi"));
  // }
  //   setCurrentRates(currentRates => currentRates.pop());

  // console.log(currentRates);
  return <section className="w-11/12 md:w-1/2">List</section>;
};

export default List;
