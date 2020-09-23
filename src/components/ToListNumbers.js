import React from "react";
import { useSelector } from "react-redux";
import {
  selectPairNumbers,
  selectOddNumbers,
  selectPrimeNumbers,
  selectMultipleNumbers,
} from "../redux/numbers/numbersSlice";
import NumbersMap from "./NumbersMap";
import NumbersMapWithSelector from "./NumbersMapWithSelector";

const ToListNumbers = () => {
  const pairNumbers = useSelector(selectPairNumbers);
  const oddNumbers = useSelector(selectOddNumbers);
  const primeNumbers = useSelector(selectPrimeNumbers);
  const multipleNumbers = useSelector(selectMultipleNumbers);

  return (
    <div>
      <div className="row">
        <div className="col-10 offset-1">
          <NumbersMap title="Pair numbers:" arr={pairNumbers} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-10 offset-1">
          <NumbersMap title="Odd numbers:" arr={oddNumbers} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-10 offset-1">
          <NumbersMap title="Prime numbers:" arr={primeNumbers} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-10 offset-1">
          <NumbersMapWithSelector title="Multiple numbers of the selected number:" arr={multipleNumbers} />
        </div>
      </div>
    </div>
  );
};

export default ToListNumbers;
