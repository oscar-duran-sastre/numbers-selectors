import React from "react";
import "./InputForm.css";
import "./ToListNumbers.css";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { userInput, selectInput } from "../redux/numbers/numbersSlice";

const InputForm = () => {
  const dispatch = useDispatch();
  const input = useSelector(selectInput);

  return (
    <Form>
      <FormGroup>
        <Label className="numbersTitles">Select a number:</Label>
        <Input
          className="tenNumbersInput"
          value={input}
          type="select"
          name="select"
          id="exampleSelect"
          onChange={(e) => dispatch(userInput(parseInt(e.target.value)))}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </Input>
      </FormGroup>
    </Form>
  );
};

export default InputForm;
