import React from "react";
import "./ToListNumbers.css";
import { checkCommaOrDot } from "../auxiliary-functions/numbersChecks";

const NumbersMap = (props) => {
  return (
    <>
      <span className="numbersTitles">{props.title}</span>
      {props.arr.map((number) => (
        <span key={props.arr.indexOf(number) + props.title}>
          {" " + number + checkCommaOrDot(props.arr, number)}
        </span>
      ))}
    </>
  );
};

export default NumbersMap;
