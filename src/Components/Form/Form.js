import { useState } from "react";
import TextInput from "./Inputs/TextInput";
import DropDownInput from "./DropDownInput/DropDownInput";
import { TYPE, CATEGORIES } from "../../Constants/FormConstants";
import "./Form.css";

export default function Form() {
  const [formValues, setFormValues] = useState({ type: "", category: "", amount: "", date: "" });

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
        {/* <TextInput
          name="spending"
          label="spending"
          placeholder="enter spending here"
          setFormValues={handleInputChange}
        /> */}
        <DropDownInput values={TYPE} />
        <DropDownInput values={CATEGORIES} />
      </div>
    </>
  );
}
