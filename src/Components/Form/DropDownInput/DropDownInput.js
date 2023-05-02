import { useState } from "react";
import "./DropDownInput.css";

export default function DropDownInput({ name, values, formValues, setFormValues }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => {
    setIsOpen(!isOpen);
  };
  const onOptionClicked = ({ innerHTML }) => {
    setFormValues({ ...formValues, [name]: innerHTML });
    setSelectedOption(innerHTML);
    setIsOpen(false);
  };

  return (
    <>
      <div className="DropDownContainer">
        <div className="DropDownHeader" onClick={toggling}>
          {selectedOption}
        </div>

        {isOpen && (
          <div className="DropDownListContainer">
            <ul className="DropDownList">
              {values.map(({ value, label }, i) => {
                return (
                  <li
                    key={i}
                    id={label}
                    value={value}
                    className="ListItem"
                    onClick={(e) => onOptionClicked(e.currentTarget)}
                  >
                    {value}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
    // <div className="custom-select" style={{ width: "200px", height: "200px", color: "black", border: "solid" }}>
    //   <select name="Transaction" id="Transaction">
    //     <option value="income">Income</option>
    //     <option value="expense">Expense</option>
    //   </select>
    // </div>
  );
}
