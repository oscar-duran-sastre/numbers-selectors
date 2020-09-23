import React from "react";
import InputForm from "./InputForm";
import NumbersMap from "./NumbersMap";

const NumbersMapWithSelector = (props) => {
  return (
    <>
      <InputForm />
      <NumbersMap title={props.title} arr={props.arr} />
    </>
  );
};

export default NumbersMapWithSelector;
