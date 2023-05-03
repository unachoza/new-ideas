import { useState } from "react";
import TextInput from "./Inputs/TextInput";
import DropDownInput from "./DropDownInput/DropDownInput";
import Button from "../Button/Button";
import { TRANSACTION, CATEGORIES } from "../../Constants/FormConstants";
import "./Form.css";

export default function Form() {
  const [formValues, setFormValues] = useState({ transaction: "", category: "", amount: "", date: "" });
  const [currentTotal, setCurrentTotal] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const addTotal = (currentTotal, newValue) => {
    currentTotal += newValue;
    setCurrentTotal(currentTotal);
    calcIncomePercent(currentTotal, newValue);
    return currentTotal;
  };
  const subtractTotal = (currentTotal, newValue) => {
    currentTotal -= newValue;
    setCurrentTotal(currentTotal);
  };

  const calcIncomePercent = (currentTotal, newValue) => {
    const newValuePercent = newValue / currentTotal;
    console.log({ newValuePercent });
  };

  const handleSubmit = ({ amount, transaction }) => {
    const numbericValue = parseInt(amount);
    if (transaction === "Income") {
      addTotal(currentTotal, numbericValue);
    } else {
      subtractTotal(currentTotal, numbericValue);
    }
  };
  return (
    <>
      <div className="form-content">
        <DropDownInput name="transaction" values={TRANSACTION} formValues={formValues} setFormValues={setFormValues} />
        <DropDownInput name="category" values={CATEGORIES} formValues={formValues} setFormValues={setFormValues} />
        <TextInput type="text" name="amount" label="amount" setFormValues={handleInputChange} />
        <TextInput
          type="date"
          name="date"
          label="date"
          setFormValues={handleInputChange}
          dates={{ min: "2023-05-01" }}
        />
      </div>
      <Button text="Create Transaction" onClick={() => handleSubmit(formValues)} />
      {currentTotal > 0 && <h1>Total: {currentTotal}</h1>}
    </>
  );
}
