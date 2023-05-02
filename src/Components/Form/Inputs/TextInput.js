import { useState } from "react";
import "./TextInput.css";

export default function TextInput({ type, name, label, placeholder, setFormValues, dates }) {
  const [currentValue, setCurrentValue] = useState("");

  const handleChange = (e) => {
    console.log(e.currentTarget);
    const { value } = e.currentTarget;
    console.log(value);
    setCurrentValue(value);
  };
  return (
    <div className="text-input-container">
      <label>{label}</label>
      <input
        name={name}
        type={type}
        value={currentValue}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={setFormValues}
        min={dates && dates.min}
      />
    </div>
  );
}
