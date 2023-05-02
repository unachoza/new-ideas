import { useState, useContext } from "react";
import { FormContext } from "../../Context/FormContext";
import TextInput from "./Inputs/TextInput";
import DropDownInput from "./DropDownInput/DropDownInput";
import Button from "../Button/Button";
import { useForm } from "../../Hooks/useForm";
import { TRANSACTION, CATEGORIES } from "../../Constants/FormConstants";
import "./Form.css";

export default function Form() {
  const [formValues, setFormValues] = useState({ transaction: "", category: "", amount: "", date: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormValues({
      ...formValues,
      [name]: value,
    });
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
      <Button text="Submit" onClick={() => console.log("form submitted", { formValues })} />
    </>
  );
}
