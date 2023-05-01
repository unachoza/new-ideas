import { useState } from "react";
import "./DropDownInput.css";

export default function DropDownInput({ values }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => {
    setIsOpen(!isOpen);
  };
  const onOptionClicked = (value) => {
    setSelectedOption(value);
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
              {values.map((value, i) => {
                console.log({ value });
                return (
                  <li
                    key={i}
                    id={value.label}
                    value={value.value}
                    className="ListItem"
                    onClick={() => onOptionClicked(value.value)}
                  >
                    {value.value}
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
